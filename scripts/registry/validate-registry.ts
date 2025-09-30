#!/usr/bin/env tsx

import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import fs from 'fs';
import path from 'path';

interface ValidationResult {
  serverId: string;
  name: string;
  valid: boolean;
  errors: string[];
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

  console.log(`Validating ${registry.servers.length} servers...\n`);

  // Validate each server
  for (const server of registry.servers) {
    // Check if server has matching $schema field
    const expectedSchemaId = schema.$id;
    const serverSchema = server.$schema;
    
    if (serverSchema !== expectedSchemaId) {
      const versionId = server._meta?.['io.modelcontextprotocol.registry/official']?.versionId || 'unknown';
      console.log(`⏭️  Skipping ${server.name} (versionId: ${versionId}) - schema mismatch: ${serverSchema}`);
      skippedCount++;
      continue;
    }
    const valid = validate(server);
    const errors = valid ? [] : (validate.errors || []).map(err => 
      `${err.instancePath || 'root'}: ${err.message}`
    );

    results.push({
      serverId: server._meta?.['io.modelcontextprotocol.registry/official']?.serverId || 'unknown',
      name: server.name || 'unnamed',
      valid,
      errors
    });

    if (valid) {
      validCount++;
    } else {
      invalidCount++;
    }
  }

  // Print summary
  console.log('📊 VALIDATION SUMMARY');
  console.log('═'.repeat(50));
  console.log(`✅ Valid servers: ${validCount}`);
  console.log(`❌ Invalid servers: ${invalidCount}`);
  console.log(`⏭️  Skipped servers: ${skippedCount}`);
  console.log(`📈 Success rate: ${((validCount / (validCount + invalidCount)) * 100).toFixed(1)}%\n`);

  // Print detailed results for invalid servers
  if (invalidCount > 0) {
    console.log('❌ INVALID SERVERS');
    console.log('═'.repeat(50));
    
    results
      .filter(r => !r.valid)
      .forEach(result => {
        console.log(`\n🔴 ${result.name} (${result.serverId})`);
        result.errors.forEach(error => {
          console.log(`   • ${error}`);
        });
      });
  }

  // Print some valid servers for reference
  if (validCount > 0) {
    console.log('\n✅ SAMPLE VALID SERVERS');
    console.log('═'.repeat(50));
    
    results
      .filter(r => r.valid)
      .slice(0, 5)
      .forEach(result => {
        console.log(`   • ${result.name} (${result.serverId})`);
      });
    
    if (validCount > 5) {
      console.log(`   ... and ${validCount - 5} more`);
    }
  }

  // Exit with error code if any servers are invalid
  if (invalidCount > 0) {
    console.log(`\n❌ Validation failed: ${invalidCount} servers have errors`);
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
