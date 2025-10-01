"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateServerJson = validateServerJson;
exports.substituteTransportUrl = substituteTransportUrl;
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const runner_1 = require("./linter/runner");
const templates_1 = require("./linter/utils/templates");
// Load schema once and cache it
let schema = null;
let validate = null;
async function loadSchema(schemaPath) {
    if (!schema) {
        const actualSchemaPath = schemaPath || path_1.default.join(__dirname, 'schema', 'server.schema.json');
        const schemaContent = fs_1.default.readFileSync(actualSchemaPath, 'utf8');
        schema = JSON.parse(schemaContent);
        // Initialize Ajv with formats and allow additional keywords
        const ajv = new ajv_1.default({
            allErrors: true,
            verbose: true,
            strict: false, // Allow additional keywords like "example"
            allowUnionTypes: true
        });
        (0, ajv_formats_1.default)(ajv);
        validate = ajv.compile(schema);
    }
    return { schema, validate };
}
async function validateServerJson(serverJson, schemaPath) {
    const issues = [];
    // Step 1: JSON Parse Validation
    let data;
    try {
        data = JSON.parse(serverJson);
    }
    catch (error) {
        return {
            valid: false,
            issues: [{
                    source: 'parse',
                    severity: 'error',
                    path: '/',
                    message: `Invalid JSON: ${error instanceof Error ? error.message : 'Unknown parse error'}`,
                    rule: 'json-parse'
                }]
        };
    }
    // Step 2: Schema Validation
    try {
        const { validate: schemaValidate } = await loadSchema(schemaPath);
        const valid = schemaValidate(data);
        if (!valid) {
            const schemaErrors = schemaValidate.errors || [];
            schemaErrors.forEach((error) => {
                issues.push({
                    source: 'schema',
                    severity: 'error',
                    path: error.instancePath || '/',
                    message: error.message || 'Schema validation error',
                    rule: error.schemaPath
                });
            });
        }
        // Step 3: Linter Rules
        const linterIssues = await (0, runner_1.lintServerData)(data);
        issues.push(...linterIssues);
        return {
            valid: valid && linterIssues.filter(issue => issue.severity === 'error').length === 0,
            issues
        };
    }
    catch (error) {
        return {
            valid: false,
            issues: [{
                    source: 'schema',
                    severity: 'error',
                    path: '/',
                    message: `Validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
                    rule: 'validation-error'
                }]
        };
    }
}
// Transport URL variable substitution for packages
function substituteTransportUrl(url, packageConfig) {
    if (!(0, templates_1.hasTemplateVariables)(url)) {
        return url;
    }
    const variables = (0, templates_1.extractVariableNames)(url);
    let substitutedUrl = url;
    variables.forEach(variable => {
        // Look for matching runtime arguments
        const runtimeArg = packageConfig.runtimeArguments?.find((arg) => arg.valueHint === variable || arg.name === variable);
        // Look for matching package arguments  
        const packageArg = packageConfig.packageArguments?.find((arg) => arg.valueHint === variable || arg.name === variable);
        // Look for matching environment variables
        const envVar = packageConfig.environmentVariables?.find((env) => env.name === variable);
        // Use the first match found
        const match = runtimeArg || packageArg || envVar;
        if (match) {
            // For now, keep the variable reference - actual substitution happens in MCP client generation
            // This function is mainly for validation purposes
            substitutedUrl = substitutedUrl.replace(`{${variable}}`, `{${variable}}`);
        }
    });
    return substitutedUrl;
}
//# sourceMappingURL=validation.js.map