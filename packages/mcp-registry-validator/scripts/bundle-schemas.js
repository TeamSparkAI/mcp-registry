#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REGISTRY_SCHEMA_DIR = path.join(__dirname, '../../../registry/schema');
const OUTPUT_FILE = path.join(__dirname, '../src/schema/all-schemas.json');

console.log('📦 Bundling schemas...');

// Ensure output directory exists
fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });

// Read current schema
const currentSchemaPath = path.join(REGISTRY_SCHEMA_DIR, 'server.schema.json');
if (!fs.existsSync(currentSchemaPath)) {
  console.error('❌ Current schema not found at', currentSchemaPath);
  process.exit(1);
}

const currentSchema = JSON.parse(fs.readFileSync(currentSchemaPath, 'utf8'));
const currentVersion = currentSchema.$id.match(/\/schemas\/([^/]+)\//)?.[1];

if (!currentVersion) {
  console.error('❌ Could not extract version from current schema $id:', currentSchema.$id);
  process.exit(1);
}

console.log(`  Current version: ${currentVersion}`);

// Collect all schemas
const schemas = {
  [currentVersion]: currentSchema
};

// Read all versioned schema directories
const entries = fs.readdirSync(REGISTRY_SCHEMA_DIR, { withFileTypes: true });
for (const entry of entries) {
  if (!entry.isDirectory()) {
    continue;
  }
  
  const version = entry.name;
  const versionSchemaPath = path.join(REGISTRY_SCHEMA_DIR, version, 'server.schema.json');
  
  if (!fs.existsSync(versionSchemaPath)) {
    continue;
  }
  
  if (version === currentVersion) {
    console.log(`  ⏭  ${version} (already added as current)`);
    continue;
  }
  
  const schema = JSON.parse(fs.readFileSync(versionSchemaPath, 'utf8'));
  schemas[version] = schema;
  console.log(`  ✓  ${version}`);
}

// Create bundled output
const bundled = {
  current: currentVersion,
  schemas: schemas
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(bundled, null, 2));

const schemaCount = Object.keys(schemas).length;
const fileSize = (fs.statSync(OUTPUT_FILE).size / 1024).toFixed(1);
console.log(`\n✅ Bundled ${schemaCount} schema(s) into all-schemas.json (${fileSize} KB)`);

