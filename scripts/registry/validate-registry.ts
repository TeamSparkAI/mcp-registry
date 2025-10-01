#!/usr/bin/env tsx

import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import fs from 'fs';
import path from 'path';
import { lintServerData, ValidationIssue, linterRules } from '@toolcatalog/mcp-registry-validator';

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

  // Load the schema
  const schemaPath = path.join(process.cwd(), 'public', 'server.schema.json');
  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

  // Load the registry
  const registryPath = path.join(process.cwd(), 'public', 'server-registry.json');
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

  // Initialize Ajv with formats and allow additional keywords
  const ajv = new Ajv({ 
    allErrors: true, 
    verbose: true,
    strict: false, // Allow additional keywords like "example"
    allowUnionTypes: true
  });
  addFormats(ajv);

  // Compile the schema
  const validate = ajv.compile(schema);

  const results: ValidationResult[] = [];
  let validCount = 0;
  let invalidCount = 0;
  let skippedCount = 0;
  let lintErrorCount = 0;
  const linterRuleCounts: { [rule: string]: number } = {};
  const schemaErrorCounts: { [errorType: string]: number } = {};
  const schemaErrorPathCounts: { [errorTypePath: string]: number } = {};

  console.log(`Validating ${registry.servers.length} servers...\n`);

  // Validate each server
  for (const server of registry.servers) {
    // Check if server has matching $schema field
    const expectedSchemaId = schema.$id;
    const serverSchema = server.$schema;
    
    if (serverSchema !== expectedSchemaId) {
      skippedCount++;
      continue;
    }
    const valid = validate(server);
    const schemaIssues: ValidationIssue[] = valid
      ? []
      : (validate.errors || []).map(err => {
          // Categorize schema errors by type and path (normalize array indices)
          const errorType = err.keyword || 'unknown';
          const path = err.instancePath || '/';
          // Replace array indices with * to group similar issues
          const normalizedPath = path.replace(/\/\d+/g, '/*');
          const errorTypePath = `${errorType}@${normalizedPath}`;
          
          schemaErrorCounts[errorType] = (schemaErrorCounts[errorType] || 0) + 1;
          schemaErrorPathCounts[errorTypePath] = (schemaErrorPathCounts[errorTypePath] || 0) + 1;
          
          return {
            source: 'schema',
            severity: 'error',
            path: path,
            message: err.message || 'Schema validation error',
            rule: err.schemaPath
          };
        });

    // Run linter once
    const linterIssues = await lintServerData(server);
    lintErrorCount += linterIssues.filter(i => i.severity === 'error').length;
    
    // Count linter rule instances
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
  console.log('\n📊 SCHEMA VALIDATION SUMMARY');
  console.log('═'.repeat(50));
  console.log(`✅ Valid schema: ${validCount} servers`);
  console.log(`❌ Invalid schema: ${invalidCount} servers`);
  console.log(`⏭️  Skipped (non-current schema): ${skippedCount} servers`);
  console.log(`📈 Schema success rate: ${((validCount / (validCount + invalidCount)) * 100).toFixed(1)}%`);
  
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

  // Exit with error code if any servers are invalid
  if (invalidCount > 0 || lintErrorCount > 0) {
    console.log(`\n❌ Validation Failed: ${invalidCount} server(s) failed schema validation, ${serversWithLintErrors} server(s) failed linter (error)`);
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
