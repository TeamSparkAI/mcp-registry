#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import { validateServerJson, linterRules, type ValidationIssue } from 'mcp-registry-validator';

interface ValidationResult {
  serverId: string;
  name: string;
  valid: boolean;
  schemaIssues: ValidationIssue[];
  linterIssues: ValidationIssue[];
}

async function validateRegistry() {
  // CLI: --linter-docs [ruleName]
  const argv = process.argv.slice(2);
  const docsFlagIndex = argv.findIndex(arg => arg === '--linter-docs' || arg.startsWith('--linter-docs='));
  if (docsFlagIndex !== -1) {
    let ruleName: string | undefined;
    const arg = argv[docsFlagIndex];
    if (arg.includes('=')) {
      ruleName = arg.split('=')[1];
    } else if (argv[docsFlagIndex + 1] && !argv[docsFlagIndex + 1].startsWith('-')) {
      ruleName = argv[docsFlagIndex + 1];
    }

    const printRuleDocs = (rule: any, isLast: boolean = false) => {
      console.log(`\n🔎 ${rule.name} (${rule.severity})`);
      console.log('');
      console.log(`Message: ${rule.message}`);
      const docs = rule.docs || {};
      if (docs.purpose) console.log(`Purpose: ${docs.purpose}`);
      if (docs.triggers && docs.triggers.length) {
        console.log('Triggers:');
        docs.triggers.forEach((t: string) => console.log(`  - ${t}`));
      }
      if (docs.examples && (docs.examples.bad || docs.examples.good)) {
        if (docs.examples.bad) {
          console.log('Bad example:');
          console.log('  ' + docs.examples.bad.split('\n').join('\n  '));
        }
        if (docs.examples.good) {
          console.log('Good example:');
          console.log('  ' + docs.examples.good.split('\n').join('\n  '));
        }
      }
      if (docs.guidance && docs.guidance.length) {
        console.log('Guidance:');
        docs.guidance.forEach((g: string) => console.log(`  - ${g}`));
      }
      if (docs.scope && docs.scope.length) {
        console.log('Scope:');
        docs.scope.forEach((s: string) => console.log(`  - ${s}`));
      }
      if (docs.notes && docs.notes.length) {
        console.log('Notes:');
        docs.notes.forEach((n: string) => console.log(`  - ${n}`));
      }
      if (!isLast) {
        console.log('');
        console.log('─'.repeat(50));
      }
    };

    if (ruleName) {
      const rule = linterRules.find(r => r.name === ruleName);
      if (!rule) {
        console.error(`Rule not found: ${ruleName}`);
        console.log('Available rules:');
        linterRules.forEach(r => console.log(` - ${r.name}`));
        process.exit(1);
      }
      console.log('📚 LINTER RULE DOCS');
      console.log('='.repeat(50));
      printRuleDocs(rule, true);
    } else {
      console.log('📚 LINTER RULE DOCS (ALL)');
      console.log('='.repeat(50));
      linterRules.forEach((rule, index) => {
        const isLast = index === linterRules.length - 1;
        printRuleDocs(rule, isLast);
      });
    }
    process.exit(0);
  }

  console.log('🔍 Validating server registry against schema...\n');

  // Load the registry
  const registryPath = path.join(process.cwd(), 'public', 'server-registry.json');
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

  const results: ValidationResult[] = [];
  let validCount = 0;
  let invalidCount = 0;
  let lintErrorCount = 0;
  const linterRuleCounts: { [rule: string]: number } = {};
  const schemaErrorCounts: { [errorType: string]: number } = {};
  const schemaErrorPathCounts: { [errorTypePath: string]: number } = {};
  const schemaVersionCounts: { [version: string]: number } = {};

  console.log(`Validating ${registry.servers.length} servers...\n`);

  // Validate each server
  for (const server of registry.servers) {
    // Track schema versions
    const schemaUrl = server.$schema;
    if (schemaUrl) {
      const versionMatch = schemaUrl.match(/\/schemas\/([^/]+)\//);
      const version = versionMatch ? versionMatch[1] : 'unknown-format';
      schemaVersionCounts[version] = (schemaVersionCounts[version] || 0) + 1;
    } else {
      schemaVersionCounts['missing'] = (schemaVersionCounts['missing'] || 0) + 1;
    }
    
    // Use the validator package instead of duplicating Ajv setup
    const result = await validateServerJson(JSON.stringify(server));
    
    const schemaIssues = result.issues.filter(i => i.source === 'schema');
    const linterIssues = result.issues.filter(i => i.source === 'linter');
    const valid = result.valid;
    
    // Categorize schema ERRORS by type and path (exclude warnings)
    schemaIssues.filter(i => i.severity === 'error').forEach(issue => {
      const errorType = issue.rule?.split('/').pop() || 'unknown';
      const path = issue.path || '/';
      // Replace array indices with * to group similar issues
      const normalizedPath = path.replace(/\/\d+/g, '/*');
      const errorTypePath = `${errorType}@${normalizedPath}`;
      
      schemaErrorCounts[errorType] = (schemaErrorCounts[errorType] || 0) + 1;
      schemaErrorPathCounts[errorTypePath] = (schemaErrorPathCounts[errorTypePath] || 0) + 1;
    });
    
    // Count linter rule instances
    lintErrorCount += linterIssues.filter(i => i.severity === 'error').length;
    linterIssues.forEach(issue => {
      if (issue.rule) {
        linterRuleCounts[issue.rule] = (linterRuleCounts[issue.rule] || 0) + 1;
      }
    });

    results.push({
      serverId: server._meta?.['io.modelcontextprotocol.registry/official']?.serverId || 'unknown',
      name: server.name || 'unnamed',
      valid,
      schemaIssues,
      linterIssues
    });

    if (valid) {
      validCount++;
    } else {
      invalidCount++;
    }
  }

  // Print servers with any issues (schema or linter) similar to UX
  const serversWithIssues = results.filter(r => r.schemaIssues.length > 0 || r.linterIssues.length > 0);
  if (serversWithIssues.length > 0) {
    console.log('\n🧭 SERVERS WITH ISSUES');
    console.log('═'.repeat(50));
    serversWithIssues.forEach(result => {
      console.log(`\n${result.name} (${result.serverId})`);
      // Schema issues
      result.schemaIssues.forEach(issue => {
        const rule = issue.rule ? ` (${issue.rule})` : '';
        console.log(`   • [SCHEMA][${issue.severity.toUpperCase()}] ${issue.path}: ${issue.message}${rule}`);
      });
      // Linter issues
      result.linterIssues.forEach(issue => {
        const rule = issue.rule ? ` (${issue.rule})` : '';
        console.log(`   • [LINTER][${issue.severity.toUpperCase()}] ${issue.path}: ${issue.message}${rule}`);
      });
    });
  }

  // Print summary at the end
  console.log('\n📊 VALIDATION SUMMARY');
  console.log('═'.repeat(50));
  console.log(`✅ Valid: ${validCount} servers`);
  console.log(`❌ Invalid (schema or linter errors): ${invalidCount} servers`);
  console.log(`📈 Success rate: ${((validCount / (validCount + invalidCount)) * 100).toFixed(1)}%`);
  
  // Schema version breakdown
  console.log('\n📋 SCHEMA VERSIONS');
  console.log('─'.repeat(50));
  
  // Get current version from validator
  const allSchemasPath = path.join(process.cwd(), 'packages/mcp-registry-validator/dist/schema/all-schemas.json');
  const allSchemas = JSON.parse(fs.readFileSync(allSchemasPath, 'utf8'));
  const currentVersion = allSchemas.current;
  
  // Add current version to counts if not present
  if (!/missing|unknown-format/.test(currentVersion) && !(currentVersion in schemaVersionCounts)) {
    schemaVersionCounts[currentVersion] = 0;
  }
  
  // Separate date-based versions from other types
  const dateVersions = Object.entries(schemaVersionCounts)
    .filter(([v]) => /^\d{4}-\d{2}-\d{2}$/.test(v))
    .sort(([a], [b]) => b.localeCompare(a)); // Most recent first
  
  const otherVersions = Object.entries(schemaVersionCounts)
    .filter(([v]) => !/^\d{4}-\d{2}-\d{2}$/.test(v))
    .sort(([,a], [,b]) => b - a); // By count
  
  // Print date versions first
  dateVersions.forEach(([version, count]) => {
    const label = version === currentVersion ? `${version} (current)` : version;
    console.log(`  ${label}: ${count} servers`);
  });
  
  // Print other versions
  otherVersions.forEach(([version, count]) => {
    console.log(`  ${version}: ${count} servers`);
  });
  
  // Schema error type + path breakdown
  if (Object.keys(schemaErrorPathCounts).length > 0) {
    console.log('\n📊 SCHEMA ERROR BREAKDOWN');
    console.log('─'.repeat(50));
    const sortedErrorPaths = Object.entries(schemaErrorPathCounts)
      .sort(([,a], [,b]) => b - a);
    sortedErrorPaths.forEach(([errorTypePath, count]) => {
      console.log(`  ${errorTypePath}: ${count} instances`);
    });
  }

  // Linter summary (by servers)
  const serversWithLintErrors = results.filter(r => r.linterIssues.some(i => i.severity === 'error')).length;
  const serversWithAnyLintIssues = results.filter(r => r.linterIssues.length > 0).length;
  console.log('\n🧭 LINTER SUMMARY');
  console.log('═'.repeat(50));
  console.log(`🚫 Failed linter (error): ${serversWithLintErrors} servers`);
  console.log(`⚠️  Any linter issues: ${serversWithAnyLintIssues} servers`);
  
  // Linter rule breakdown
  if (Object.keys(linterRuleCounts).length > 0) {
    console.log('\n📊 LINTER RULE BREAKDOWN');
    console.log('─'.repeat(50));
    const sortedRules = Object.entries(linterRuleCounts)
      .sort(([,a], [,b]) => b - a);
    sortedRules.forEach(([rule, count]) => {
      console.log(`  ${rule}: ${count} instances`);
    });
  }

  // Count servers with schema errors specifically
  const serversWithSchemaErrors = results.filter(r => r.schemaIssues.some(i => i.severity === 'error')).length;
  
  // Exit with error code if any servers are invalid
  if (invalidCount > 0) {
    console.log(`\n❌ Validation Failed: ${serversWithSchemaErrors} server(s) with schema errors, ${serversWithLintErrors} server(s) with linter errors (${invalidCount} total invalid)`);
    process.exit(1);
  } else {
    console.log('\n🎉 All servers are valid!');
    process.exit(0);
  }
}

// Run the validation
validateRegistry().catch(error => {
  console.error('💥 Validation script failed:', error);
  process.exit(1);
});
