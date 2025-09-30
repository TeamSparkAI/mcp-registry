# MCP Server Registry Linter Rules

This document describes the linter rules applied to MCP server registry entries.

These rules are applied to the server object (server.json), typically after JSON schema validation.

These linter rules detect issues that are not possble to enforce or detect via JSON schema validation.

## Table of Contents

- [require-config-for-package](#require-config-for-package)
- [prefer-config-for-remote](#prefer-config-for-remote)
- [require-arg-leading-dashes](#require-arg-leading-dashes)
- [no-template-variables-missing](#no-template-variables-missing)
- [require-valid-value-format](#require-valid-value-format)
- [no-secret-template](#no-secret-template)
- [no-unused-variables](#no-unused-variables)
- [no-value-with-irrelevant-properties](#no-value-with-irrelevant-properties)
- [no-secret-static-value](#no-secret-static-value)
- [require-valid-default-choice](#require-valid-default-choice)

## require-config-for-package

**Purpose:** Encourage packages to provide configuration options for better user experience

**Message:** Package has no configuration options

**Severity:** warning

**Triggers:**
- Package has no runtimeArguments, packageArguments, environmentVariables, or runtimeHint

**Examples:**

❌ **Bad:**
```json
{ "identifier": "my-package", "version": "1.0.0" }
```

✅ **Good:**
```json
{
  "identifier": "my-package",
  "version": "1.0.0",
  "runtimeArguments": [
    { "name": "--port", "description": "Port to run on" }
  ]
}
```

**Guidance:**
- Add runtimeArguments for command-line options
- Add packageArguments for package-specific configuration
- Add environmentVariables for environment-based settings
- Consider adding runtimeHint if the runtime differs from default

**Scope:** packages

**Notes:**
- Some packages may legitimately not need configuration, but those are rare
- Consider provide an empty configuration object (such as packageArguments) if no configuration is needed

## prefer-config-for-remote

**Purpose:** Suggest adding headers configuration for remotes that may need authentication or custom headers

**Message:** Remote has no configuration options

**Severity:** info

**Triggers:**
- Remote has no headers configuration

**Examples:**

❌ **Bad:**
```json
{ "type": "streamable-http", "url": "https://api.example.com/mcp" }
```

✅ **Good:**
```json
{
  "type": "streamable-http",
  "url": "https://api.example.com/mcp",
  "headers": [
    { "name": "Authorization", "description": "API key for authentication" }
  ]
}
```

**Guidance:**
- Add headers configuration if the remote requires authentication
- This typicslly includes headers like Authorization, or custom API keys

**Scope:** remotes

**Notes:**
- Some remotes may not need headers (public endpoints)
- Consider providing an empty headers object if no headers are needed

## require-arg-leading-dashes

**Purpose:** Ensure named arguments follow standard command-line conventions with leading dashes

**Message:** Named argument missing leading dashes

**Severity:** warning

**Triggers:**
- Named argument has a name but doesn't start with -- or -

**Examples:**

❌ **Bad:**
```json
{ "name": "port", "description": "Port number" }
```

✅ **Good:**
```json
{ "name": "--port", "description": "Port number" }
```

**Guidance:**
- Use - or -- as appropriate (e.g., -y, --port)

**Scope:** packages.runtimeArguments, packages.packageArguments

**Notes:**
- Some tools may accept argument names without leading dashes, but it's not recommended

## no-template-variables-missing

**Purpose:** Catch templates referencing variables that are not defined in field.variables

**Message:** Template string has no corresponding variables

**Severity:** error

**Triggers:**
- Field.value contains {var} but field.variables lacks that key

**Examples:**

❌ **Bad:**
```json
{ "value": "Bearer {token}" }
```

✅ **Good:**
```json
{
  "value": "Bearer {token}",
  "variables": {
    "token": { "format": "string", "isRequired": true }
  }
}
```

**Guidance:**
- Add missing variable definitions under field.variables
- Or remove unused {placeholders} from the template

**Scope:** packages.runtimeArguments, packages.packageArguments, packages.environmentVariables, remotes.headers

**Notes:**
- Variables are case-sensitive

## require-valid-value-format

**Purpose:** Validate that field values match their declared format (number, boolean, etc.)

**Message:** Value format inconsistent with field type

**Severity:** error

**Triggers:**
- Value doesn't match the expected data type

**Examples:**

❌ **Bad:**
```json
{ "value": "not-a-number", "format": "number" }
```

✅ **Good:**
```json
{ "value": "42", "format": "number" }
```

**Guidance:**
- Ensure numeric values are valid numbers (can be strings like "42")
- Use "true" or "false" for boolean values (case-insensitive)
- Remove format constraint if value type is flexible

**Scope:** packages.runtimeArguments, packages.packageArguments, packages.environmentVariables, remotes.headers

**Notes:**
- Format validation helps catch configuration errors

## no-secret-template

**Purpose:** Warn about secret fields that contain template variables

**Message:** Secret field contains template variables

**Severity:** warning

**Triggers:**
- Field is marked as isSecret and contains {variables}

**Examples:**

❌ **Bad:**
```json
{ "value": "Bearer {api_key}", "isSecret": true }
```

✅ **Good:**
```json
{
  "value": "Bearer {api_key}",
  "isSecret": false,
  "variables": { "api_key": { "isSecret": true } }
}
```

**Guidance:**
- Move secret marking to the variable level instead of the template
- Use non-secret templates with secret variables

**Scope:** packages.runtimeArguments, packages.packageArguments, packages.environmentVariables, remotes.headers

**Notes:**
- It is typicslly undesriable to hide the template value

## no-unused-variables

**Purpose:** Identify variables that are defined but never referenced in the template string

**Message:** Defined variables not used in template

**Severity:** warning

**Triggers:**
- Field.variables contains keys that don't appear in field.value

**Examples:**

❌ **Bad:**
```json
{
  "value": "Hello {name}",
  "variables": {
    "name": {},
    "unused": {}
  }
}
```

✅ **Good:**
```json
{
  "value": "Hello {name}",
  "variables": {
    "name": { "format": "string" }
  }
}
```

**Guidance:**
- Remove unused variable definitions
- Or add references to unused variables in the template

**Scope:** packages.runtimeArguments, packages.packageArguments, packages.environmentVariables, remotes.headers

**Notes:**
- Variables are case-sensitive in template matching

## no-value-with-irrelevant-properties

**Purpose:** Identify fields with static values that also have properties that only apply to user input fields

**Message:** Field with value should not have default, isRequired, or choices

**Severity:** warning

**Triggers:**
- Field has a static value but also has default, isRequired, or choices (properties that only apply to user input fields)

**Examples:**

❌ **Bad:**
```json
{
  "value": "static-value",
  "default": "other-value",
  "isRequired": true
}
```

✅ **Good:**
```json
{ "value": "static-value" }
```

**Guidance:**
- Remove default, isRequired, and choices from fields with static values
- These properties only apply to fields that users configure

**Scope:** packages.runtimeArguments, packages.packageArguments, packages.environmentVariables, remotes.headers

**Notes:**
- This sometimes happens when value is used in error, and user input is expected (sometimes when value is used instead of default)
- Clean, consistent value specifications produce predictable configuration and reduce confusion

## no-secret-static-value

**Purpose:** Warn about static values marked as secret, which  will likelt not have the desired effect

**Message:** Field with static value should not be marked as secret

**Severity:** warning

**Triggers:**
- Field has a static value and is marked as isSecret

**Examples:**

❌ **Bad:**
```json
{ "value": "public-api-key", "isSecret": true }
```

✅ **Good:**
```json
{
  "value": "Bearer {token}",
  "isSecret": false,
  "variables": { "token": { "isSecret": true } }
}
```

**Guidance:**
- Remove isSecret from static values
- Use variables with isSecret for truly sensitive values

**Scope:** packages.runtimeArguments, packages.packageArguments, packages.environmentVariables, remotes.headers

**Notes:**
- Static values will generally be displayed during configuraiton, even if marked as secret
- And if the value is hidden during configuration that will be a poor user experience

## require-valid-default-choice

**Purpose:** Ensure default values are valid options when choices are provided

**Message:** Default value must be one of the available choices

**Severity:** error

**Triggers:**
- Field has both default and choices, but default is not in the choices array

**Examples:**

❌ **Bad:**
```json
{
  "default": "invalid",
  "choices": ["option1", "option2"]
}
```

✅ **Good:**
```json
{
  "default": "option1",
  "choices": ["option1", "option2"]
}
```

**Guidance:**
- Set default to one of the valid choices
- Or remove the default if no choice should be pre-selected
- Ensure consistency between default and available options

**Scope:** packages.runtimeArguments, packages.packageArguments, packages.environmentVariables, remotes.headers

**Notes:**
- Default should always be a valid choice when choices are specified

