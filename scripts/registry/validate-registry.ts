#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import { validateServerJson, linterRules, type ValidationIssue } from '@teamsparkai/mcp-registry-validator';

interface ValidationResult {
  schemaVersion: string;
  serverVersion: string;
  name: string;
  valid: boolean;
  schemaIssues: ValidationIssue[];
  linterIssues: ValidationIssue[];
}

function printUsage() {
  console.log('Usage: pnpm registry:validate [options]\n');
  console.log('Options:');
  console.log('  --help, -h                    Show this help message');
  console.log('  --linter-docs [ruleName]      Show linter rule documentation');
  console.log('                                If ruleName is provided, show docs for that rule only');
  console.log('                                Otherwise, show docs for all rules');
  console.log('  --schema-version <version>     Only validate servers with the specified schema version');
  console.log('                                Example: --schema-version 2025-10-17');
  console.log('  --rule <ruleName>             Only show servers/issues with the specified rule');
  console.log('                                Can be a linter rule name (e.g., "no-leading-dashes")');
  console.log('                                or a schema rule path (partial match supported)');
  console.log('  --mode <mode>                 Filter by issue type: "schema" or "linter"');
  console.log('                                If not specified, shows both schema and linter issues');
  console.log('  --summary-only                 Show only summary sections (skip detailed server issues)');
  console.log('\nExamples:');
  console.log('  pnpm registry:validate');
  console.log('  pnpm registry:validate --mode schema');
  console.log('  pnpm registry:validate --mode linter');
  console.log('  pnpm registry:validate --schema-version 2025-10-17');
  console.log('  pnpm registry:validate --rule no-leading-dashes');
  console.log('  pnpm registry:validate --rule /properties/packages/items/properties/transport');
  console.log('  pnpm registry:validate --summary-only');
  console.log('  pnpm registry:validate --schema-version 2025-10-17 --mode schema --summary-only');
  console.log('  pnpm registry:validate --linter-docs');
  console.log('  pnpm registry:validate --linter-docs rule-name-here');
}

function parseArgs() {
  const argv = process.argv.slice(2);
  
  // Check for help first
  if (argv.includes('--help') || argv.includes('-h')) {
    printUsage();
    process.exit(0);
  }
  
  // Parse --linter-docs
  const docsFlagIndex = argv.findIndex(arg => arg === '--linter-docs' || arg.startsWith('--linter-docs='));
  let linterDocs: { enabled: boolean; ruleName?: string } = { enabled: false };
  
  if (docsFlagIndex !== -1) {
    const arg = argv[docsFlagIndex];
    let ruleName: string | undefined;
    if (arg.includes('=')) {
      ruleName = arg.split('=')[1];
    } else if (argv[docsFlagIndex + 1] && !argv[docsFlagIndex + 1].startsWith('-')) {
      ruleName = argv[docsFlagIndex + 1];
    }
    linterDocs = { enabled: true, ruleName };
  }
  
  // Parse --schema-version
  const schemaVersionIndex = argv.findIndex(arg => arg === '--schema-version' || arg.startsWith('--schema-version='));
  let schemaVersion: string | undefined;
  if (schemaVersionIndex !== -1) {
    const arg = argv[schemaVersionIndex];
    if (arg.includes('=')) {
      schemaVersion = arg.split('=')[1];
    } else if (argv[schemaVersionIndex + 1] && !argv[schemaVersionIndex + 1].startsWith('-')) {
      schemaVersion = argv[schemaVersionIndex + 1];
    }
  }
  
  // Parse --rule
  const ruleIndex = argv.findIndex(arg => arg === '--rule' || arg.startsWith('--rule='));
  let ruleFilter: string | undefined;
  if (ruleIndex !== -1) {
    const arg = argv[ruleIndex];
    if (arg.includes('=')) {
      ruleFilter = arg.split('=')[1];
    } else if (argv[ruleIndex + 1] && !argv[ruleIndex + 1].startsWith('-')) {
      ruleFilter = argv[ruleIndex + 1];
    }
  }
  
  // Parse --mode
  const modeIndex = argv.findIndex(arg => arg === '--mode' || arg.startsWith('--mode='));
  let mode: 'schema' | 'linter' | undefined;
  if (modeIndex !== -1) {
    const arg = argv[modeIndex];
    let modeValue: string | undefined;
    if (arg.includes('=')) {
      modeValue = arg.split('=')[1];
    } else if (argv[modeIndex + 1] && !argv[modeIndex + 1].startsWith('-')) {
      modeValue = argv[modeIndex + 1];
    }
    if (modeValue === 'schema' || modeValue === 'linter') {
      mode = modeValue;
    } else if (modeValue) {
      console.error(`Invalid mode: ${modeValue}. Must be "schema" or "linter".`);
      process.exit(1);
    }
  }
  
  // Parse --summary-only
  const summaryOnly = argv.includes('--summary-only');
  
  return { linterDocs, schemaVersion, ruleFilter, mode, summaryOnly };
}

function extractSchemaVersion(server: any): string {
  const schemaUrl = server.$schema;
  if (!schemaUrl) {
    return 'missing';
  }
  
  // Parse the URL to extract the version from the path
  // Format: https://static.modelcontextprotocol.io/schemas/2025-09-29/server.schema.json
  try {
    const url = new URL(schemaUrl);
    const pathParts = url.pathname.split('/');
    // Find the 'schemas' segment and get the next one (the version)
    const schemasIndex = pathParts.indexOf('schemas');
    if (schemasIndex !== -1 && pathParts[schemasIndex + 1]) {
      return pathParts[schemasIndex + 1];
    }
  } catch (e) {
    // If URL parsing fails, fall back to regex (but without requiring trailing slash)
    const versionMatch = schemaUrl.match(/\/schemas\/([^/]+)/);
    if (versionMatch) {
      return versionMatch[1];
    }
  }
  
  return 'unknown-format';
}

function printRuleDocs(rule: any, isLast: boolean = false) {
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
}

async function validateRegistry() {
  const { linterDocs, schemaVersion, ruleFilter, mode, summaryOnly } = parseArgs();
  
  // Handle --linter-docs
  if (linterDocs.enabled) {
    if (linterDocs.ruleName) {
      const rule = linterRules.find(r => r.name === linterDocs.ruleName);
      if (!rule) {
        console.error(`Rule not found: ${linterDocs.ruleName}`);
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

  // Filter by schema version if specified
  let serversToValidate = registry.servers;
  if (schemaVersion) {
    const originalCount = serversToValidate.length;
    serversToValidate = serversToValidate.filter((serverResponse: any) => {
      const version = extractSchemaVersion(serverResponse.server);
      return version === schemaVersion;
    });
    console.log(`Filtering to schema version "${schemaVersion}": ${serversToValidate.length} of ${originalCount} servers\n`);
    if (serversToValidate.length === 0) {
      console.log(`❌ No servers found with schema version "${schemaVersion}"`);
      process.exit(1);
    }
  }

  const results: ValidationResult[] = [];
  let validCount = 0;
  let invalidCount = 0;
  let lintErrorCount = 0;
  const linterRuleCounts: { [rule: string]: number } = {};
  const schemaErrorCounts: { [errorType: string]: number } = {};
  const schemaErrorPathCounts: { [errorTypePath: string]: number } = {};
  const schemaVersionCounts: { [version: string]: number } = {};

  console.log(`Validating ${serversToValidate.length} servers...\n`);

  // Validate each server
  for (const serverResponse of serversToValidate) {
    // Extract the actual ServerDetail from the wrapped ServerResponse format
    const server = serverResponse.server;
    
    // Track schema versions
    const version = extractSchemaVersion(server);
    schemaVersionCounts[version] = (schemaVersionCounts[version] || 0) + 1;
    
    // Use the validator package instead of duplicating Ajv setup
    // Validate the ServerDetail (not the wrapped ServerResponse)
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
      schemaVersion: extractSchemaVersion(server),
      serverVersion: server.version || 'unknown',
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

  // Filter by mode (schema or linter) if specified
  let modeFilteredResults = results;
  if (mode) {
    modeFilteredResults = results.map(result => {
      if (mode === 'schema') {
        // Only show schema issues, filter out linter issues
        return {
          ...result,
          linterIssues: []
        };
      } else if (mode === 'linter') {
        // Only show linter issues, filter out schema issues
        return {
          ...result,
          schemaIssues: []
        };
      }
      return result;
    }).filter((result: ValidationResult) => {
      // Only include results that have issues of the requested type
      if (mode === 'schema') {
        return result.schemaIssues.length > 0;
      } else if (mode === 'linter') {
        return result.linterIssues.length > 0;
      }
      return true;
    });
    
    if (modeFilteredResults.length > 0) {
      console.log(`\nFiltering to ${mode} issues only: ${modeFilteredResults.length} server(s) with ${mode} issues\n`);
    } else {
      console.log(`\nNo servers found with ${mode} issues\n`);
    }
  }

  // Filter by rule if specified (applies after mode filtering)
  let filteredResults = modeFilteredResults;
  if (ruleFilter) {
    filteredResults = results.map(result => {
      const filteredSchemaIssues = result.schemaIssues.filter(issue => 
        issue.rule && issue.rule.includes(ruleFilter!)
      );
      const filteredLinterIssues = result.linterIssues.filter(issue => 
        issue.rule && issue.rule.includes(ruleFilter!)
      );
      
      // Only include this result if it has matching issues
      if (filteredSchemaIssues.length > 0 || filteredLinterIssues.length > 0) {
        return {
          ...result,
          schemaIssues: filteredSchemaIssues,
          linterIssues: filteredLinterIssues
        };
      }
      return null;
    }).filter((r): r is ValidationResult => r !== null);
    
    if (filteredResults.length > 0) {
      console.log(`\nFiltering to rule "${ruleFilter}": ${filteredResults.length} server(s) with matching issues\n`);
    } else {
      console.log(`\nNo servers found with rule "${ruleFilter}"\n`);
    }
  }

  // Print servers with any issues (schema or linter) similar to UX (unless summary-only)
  if (!summaryOnly) {
    const serversWithIssues = filteredResults.filter(r => r.schemaIssues.length > 0 || r.linterIssues.length > 0);
    if (serversWithIssues.length > 0) {
      console.log('\n🧭 SERVERS WITH ISSUES');
      console.log('═'.repeat(50));
      serversWithIssues.forEach(result => {
        console.log(`\n${result.name} (schema: ${result.schemaVersion}, version: ${result.serverVersion})`);
        // Schema issues
        result.schemaIssues.forEach(issue => {
          // Calculate the same errorTypePath format used in the summary
          const errorType = issue.rule?.split('/').pop() || 'unknown';
          const path = issue.path || '/';
          const normalizedPath = path.replace(/\/\d+/g, '/*');
          const errorTypePath = `${errorType}@${normalizedPath}`;
          const rule = issue.rule ? ` (${issue.rule})` : '';
          console.log(`   • [SCHEMA][${issue.severity.toUpperCase()}] ${issue.path}: ${issue.message}${rule} [${errorTypePath}]`);
        });
        // Linter issues
        result.linterIssues.forEach(issue => {
          const rule = issue.rule ? ` (${issue.rule})` : '';
          console.log(`   • [LINTER][${issue.severity.toUpperCase()}] ${issue.path}: ${issue.message}${rule}`);
        });
      });
    }
  }

  // Recalculate counts based on filtered results if mode or rule filter is applied
  let summaryValidCount = validCount;
  let summaryInvalidCount = invalidCount;
  const resultsForCounts = ruleFilter ? filteredResults : (mode ? modeFilteredResults : results);
  if (mode || ruleFilter) {
    if (mode === 'schema') {
      // For schema mode, only count schema issues
      summaryValidCount = resultsForCounts.filter(r => r.valid && r.schemaIssues.length === 0).length;
      summaryInvalidCount = resultsForCounts.filter(r => !r.valid || r.schemaIssues.length > 0).length;
    } else if (mode === 'linter') {
      // For linter mode, only count linter issues
      summaryValidCount = resultsForCounts.filter(r => r.valid && r.linterIssues.length === 0).length;
      summaryInvalidCount = resultsForCounts.filter(r => r.linterIssues.length > 0).length;
    } else {
      // Both modes or rule filter only
      summaryValidCount = resultsForCounts.filter(r => r.valid && r.schemaIssues.length === 0 && r.linterIssues.length === 0).length;
      summaryInvalidCount = resultsForCounts.filter(r => !r.valid || r.schemaIssues.length > 0 || r.linterIssues.length > 0).length;
    }
  }

  // Print summary at the end
  console.log('\n📊 VALIDATION SUMMARY');
  console.log('═'.repeat(50));
  if (schemaVersion) {
    console.log(`(Filtered to schema version: "${schemaVersion}")`);
  }
  if (mode) {
    console.log(`(Filtered to ${mode} issues only)`);
  }
  if (ruleFilter) {
    console.log(`(Filtered to rule: "${ruleFilter}")`);
  }
  console.log(`✅ Valid: ${summaryValidCount} servers`);
  console.log(`❌ Invalid (schema or linter errors): ${summaryInvalidCount} servers`);
  const total = summaryValidCount + summaryInvalidCount;
  if (total > 0) {
    console.log(`📈 Success rate: ${((summaryValidCount / total) * 100).toFixed(1)}%`);
  }
  
  // Schema version breakdown - only show if we didn't filter by schema version
  // (if we filtered, we already know all servers are that version)
  if (!schemaVersion) {
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
  } else {
    // If we filtered by schema version, just show that we validated only that version
    console.log('\n📋 SCHEMA VERSION');
    console.log('─'.repeat(50));
    const allSchemasPath = path.join(process.cwd(), 'packages/mcp-registry-validator/dist/schema/all-schemas.json');
    const allSchemas = JSON.parse(fs.readFileSync(allSchemasPath, 'utf8'));
    const currentVersion = allSchemas.current;
    const label = schemaVersion === currentVersion ? `${schemaVersion} (current)` : schemaVersion;
    console.log(`  ${label}: ${serversToValidate.length} servers validated`);
  }
  
  // Schema error type + path breakdown - only show if not in linter-only mode
  if (mode !== 'linter' && Object.keys(schemaErrorPathCounts).length > 0) {
    console.log('\n📊 SCHEMA ERROR BREAKDOWN');
    console.log('─'.repeat(50));
    const sortedErrorPaths = Object.entries(schemaErrorPathCounts)
      .sort(([,a], [,b]) => b - a);
    sortedErrorPaths.forEach(([errorTypePath, count]) => {
      console.log(`  ${errorTypePath}: ${count} instances`);
    });
  }

  // Linter summary (by servers) - only show if not in schema-only mode
  if (mode !== 'schema') {
    const resultsForSummary = ruleFilter ? filteredResults : (mode ? modeFilteredResults : results);
    const serversWithLintErrors = resultsForSummary.filter((r: ValidationResult) => r.linterIssues.some((i: ValidationIssue) => i.severity === 'error')).length;
    const serversWithAnyLintIssues = resultsForSummary.filter((r: ValidationResult) => r.linterIssues.length > 0).length;
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
  }

  // Count servers with schema errors specifically - use filtered results if mode or rule filter is applied
  const resultsForFinalCounts = ruleFilter ? filteredResults : (mode ? modeFilteredResults : results);
  const serversWithSchemaErrors = resultsForFinalCounts.filter((r: ValidationResult) => r.schemaIssues.some((i: ValidationIssue) => i.severity === 'error')).length;
  const serversWithLintErrors = resultsForFinalCounts.filter((r: ValidationResult) => r.linterIssues.some((i: ValidationIssue) => i.severity === 'error')).length;
  
  // Exit with error code if any servers are invalid
  if (summaryInvalidCount > 0) {
    if (mode === 'schema') {
      console.log(`\n❌ Validation Failed: ${serversWithSchemaErrors} server(s) with schema errors`);
    } else if (mode === 'linter') {
      console.log(`\n❌ Validation Failed: ${serversWithLintErrors} server(s) with linter errors`);
    } else {
      console.log(`\n❌ Validation Failed: ${serversWithSchemaErrors} server(s) with schema errors, ${serversWithLintErrors} server(s) with linter errors (${summaryInvalidCount} total invalid)`);
    }
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
