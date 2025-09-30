#!/usr/bin/env tsx

import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import fs from 'fs';
import path from 'path';
import { lintServerData, ValidationIssue } from '../../app/registry/utils/validation';

interface ValidationResult {
  serverId: string;
  name: string;
  valid: boolean;
  schemaIssues: ValidationIssue[];
  linterIssues: ValidationIssue[];
}

async function validateRegistry() {
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
      : (validate.errors || []).map(err => ({
          source: 'schema',
          severity: 'error',
          path: err.instancePath || '/',
          message: err.message || 'Schema validation error',
          rule: err.schemaPath
        }));

    // Run linter once
    const linterIssues = await lintServerData(server);
    lintErrorCount += linterIssues.filter(i => i.severity === 'error').length;

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

  // Linter summary (by servers)
  const serversWithLintErrors = results.filter(r => r.linterIssues.some(i => i.severity === 'error')).length;
  const serversWithAnyLintIssues = results.filter(r => r.linterIssues.length > 0).length;
  console.log('\n🧭 LINTER SUMMARY');
  console.log('═'.repeat(50));
  console.log(`🚫 Failed linter (error): ${serversWithLintErrors} servers`);
  console.log(`⚠️  Any linter issues: ${serversWithAnyLintIssues} servers`);

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
