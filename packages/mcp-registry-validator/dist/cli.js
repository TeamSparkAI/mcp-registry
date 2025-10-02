#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const index_1 = require("./index");
async function validateRegistry(registryPath, schemaPath) {
    console.log('🔍 Validating server registry against schema...\n');
    // Load the registry
    const registry = JSON.parse(fs_1.default.readFileSync(registryPath, 'utf8'));
    const schema = JSON.parse(fs_1.default.readFileSync(schemaPath || path_1.default.join(__dirname, 'schema', 'server.schema.json'), 'utf8'));
    const results = [];
    let validCount = 0;
    let invalidCount = 0;
    let skippedCount = 0;
    const linterRuleCounts = {};
    const schemaErrorCounts = {};
    const schemaErrorPathCounts = {};
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
        const result = await (0, index_1.validateServerJson)(JSON.stringify(server), schemaPath);
        const schemaIssues = result.issues.filter(i => i.source === 'schema');
        const linterIssues = result.issues.filter(i => i.source === 'linter');
        // Count linter rule instances
        linterIssues.forEach(issue => {
            if (issue.rule) {
                linterRuleCounts[issue.rule] = (linterRuleCounts[issue.rule] || 0) + 1;
            }
        });
        // Count schema error types and paths
        schemaIssues.forEach(issue => {
            const errorType = issue.rule?.split('/').pop() || 'unknown';
            const path = issue.path;
            const normalizedPath = path.replace(/\/\d+/g, '/*');
            const errorTypePath = `${errorType}@${normalizedPath}`;
            schemaErrorCounts[errorType] = (schemaErrorCounts[errorType] || 0) + 1;
            schemaErrorPathCounts[errorTypePath] = (schemaErrorPathCounts[errorTypePath] || 0) + 1;
        });
        // Determine schema validity based only on schema issues, not linter issues
        const schemaValid = schemaIssues.length === 0;
        results.push({
            serverId: server._meta?.['io.modelcontextprotocol.registry/official']?.serverId || 'unknown',
            name: server.name || 'unnamed',
            valid: schemaValid,
            schemaIssues,
            linterIssues
        });
        if (schemaValid) {
            validCount++;
        }
        else {
            invalidCount++;
        }
    }
    // Print servers with any issues
    const serversWithIssues = results.filter(r => r.schemaIssues.length > 0 || r.linterIssues.length > 0);
    if (serversWithIssues.length > 0) {
        console.log('\n🧭 SERVERS WITH ISSUES');
        console.log('═'.repeat(50));
        serversWithIssues.forEach(result => {
            console.log(`\n${result.name} (${result.serverId})`);
            result.schemaIssues.forEach(issue => {
                const rule = issue.rule ? ` (${issue.rule})` : '';
                console.log(`   • [SCHEMA][${issue.severity.toUpperCase()}] ${issue.path}: ${issue.message}${rule}`);
            });
            result.linterIssues.forEach(issue => {
                const rule = issue.rule ? ` (${issue.rule})` : '';
                console.log(`   • [LINTER][${issue.severity.toUpperCase()}] ${issue.path}: ${issue.message}${rule}`);
            });
        });
    }
    // Print summary
    console.log('\n📊 SCHEMA VALIDATION SUMMARY');
    console.log('═'.repeat(50));
    console.log(`✅ Valid schema: ${validCount} servers`);
    console.log(`❌ Invalid schema: ${invalidCount} servers`);
    console.log(`⏭️  Skipped (non-current schema): ${skippedCount} servers`);
    console.log(`📈 Schema success rate: ${((validCount / (validCount + invalidCount)) * 100).toFixed(1)}%`);
    // Schema error breakdown
    if (Object.keys(schemaErrorPathCounts).length > 0) {
        console.log('\n📊 SCHEMA ERROR BREAKDOWN');
        console.log('─'.repeat(50));
        const sortedErrorPaths = Object.entries(schemaErrorPathCounts)
            .sort(([, a], [, b]) => b - a);
        sortedErrorPaths.forEach(([errorTypePath, count]) => {
            console.log(`  ${errorTypePath}: ${count} instances`);
        });
    }
    // Linter summary
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
            .sort(([, a], [, b]) => b - a);
        sortedRules.forEach(([rule, count]) => {
            console.log(`  ${rule}: ${count} instances`);
        });
    }
    // Exit with error code if any servers are invalid
    if (invalidCount > 0 || serversWithLintErrors > 0) {
        console.log(`\n❌ Validation Failed: ${invalidCount} server(s) failed schema validation, ${serversWithLintErrors} server(s) failed linter (error)`);
        process.exit(1);
    }
    else {
        console.log('\n🎉 All servers are valid!');
        process.exit(0);
    }
}
async function validateSingleServer(serverPath, schemaPath) {
    console.log(`🔍 Validating server: ${serverPath}\n`);
    const serverJson = fs_1.default.readFileSync(serverPath, 'utf8');
    const result = await (0, index_1.validateServerJson)(serverJson, schemaPath);
    const schemaIssues = result.issues.filter(i => i.source === 'schema');
    const linterIssues = result.issues.filter(i => i.source === 'linter');
    const errorIssues = result.issues.filter(i => i.severity === 'error');
    if (errorIssues.length === 0) {
        console.log('✅ Server complies with schema!');
    }
    else {
        console.log('❌ Server has errors:');
        errorIssues.forEach(issue => {
            console.log(`   • [${issue.source.toUpperCase()}][${issue.severity.toUpperCase()}] ${issue.path}: ${issue.message}`);
        });
    }
    // Show all issues (including warnings and info)
    if (result.issues.length > 0) {
        console.log('\n📋 All Issues:');
        result.issues.forEach(issue => {
            const rule = issue.rule ? ` (${issue.rule})` : '';
            console.log(`   • [${issue.source.toUpperCase()}][${issue.severity.toUpperCase()}] ${issue.path}: ${issue.message}${rule}`);
        });
    }
    // Exit with error code only if there are actual errors
    if (errorIssues.length > 0) {
        process.exit(1);
    }
}
function printLinterDocs(ruleName) {
    const printRuleDocs = (rule, isLast = false) => {
        console.log(`\n🔎 ${rule.name} (${rule.severity})`);
        console.log('');
        console.log(`Message: ${rule.message}`);
        const docs = rule.docs || {};
        if (docs.purpose)
            console.log(`Purpose: ${docs.purpose}`);
        if (docs.triggers && docs.triggers.length) {
            console.log('Triggers:');
            docs.triggers.forEach((t) => console.log(`  - ${t}`));
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
            docs.guidance.forEach((g) => console.log(`  - ${g}`));
        }
        if (docs.scope && docs.scope.length) {
            console.log('Scope:');
            docs.scope.forEach((s) => console.log(`  - ${s}`));
        }
        if (docs.notes && docs.notes.length) {
            console.log('Notes:');
            docs.notes.forEach((n) => console.log(`  - ${n}`));
        }
        if (!isLast) {
            console.log('');
            console.log('─'.repeat(50));
        }
    };
    if (ruleName) {
        const rule = index_1.linterRules.find(r => r.name === ruleName);
        if (!rule) {
            console.error(`Rule not found: ${ruleName}`);
            console.log('Available rules:');
            index_1.linterRules.forEach(r => console.log(` - ${r.name}`));
            process.exit(1);
        }
        console.log('📚 LINTER RULE DOCS');
        console.log('='.repeat(50));
        printRuleDocs(rule, true);
    }
    else {
        console.log('📚 LINTER RULE DOCS (ALL)');
        console.log('='.repeat(50));
        index_1.linterRules.forEach((rule, index) => {
            const isLast = index === index_1.linterRules.length - 1;
            printRuleDocs(rule, isLast);
        });
    }
}
async function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log(`
MCP Registry Validator

Usage:
  mcp-validate validate <server.json>             Validate a single server file
  mcp-validate validate-registry <registry.json>  Validate entire registry
  mcp-validate --linter-docs [ruleName]           Show linter rule documentation [single rule only, else all rules]

Examples:
  mcp-validate validate server.json
  mcp-validate validate-registry server-registry.json
  mcp-validate --linter-docs
  mcp-validate --linter-docs prefer-dynamic-port
    `);
        process.exit(0);
    }
    const command = args[0];
    if (command === '--linter-docs') {
        const ruleName = args[1];
        printLinterDocs(ruleName);
    }
    else if (command === 'validate') {
        const serverPath = args[1];
        if (!serverPath) {
            console.error('Error: Please provide a server file path');
            process.exit(1);
        }
        await validateSingleServer(serverPath);
    }
    else if (command === 'validate-registry') {
        const registryPath = args[1];
        if (!registryPath) {
            console.error('Error: Please provide a registry file path');
            process.exit(1);
        }
        await validateRegistry(registryPath);
    }
    else {
        console.error(`Unknown command: ${command}`);
        process.exit(1);
    }
}
if (require.main === module) {
    main().catch(error => {
        console.error('💥 CLI failed:', error);
        process.exit(1);
    });
}
//# sourceMappingURL=cli.js.map