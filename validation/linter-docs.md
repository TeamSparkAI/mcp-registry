# Linter Docs

[command: pnpm run registry:validate -- --linter-docs]

📚 LINTER RULE DOCS (ALL)
==================================================

🔎 require-config-for-package (warning)

Message: Package has no configuration options
Purpose: Encourage packages to provide configuration options for better user experience
Triggers:
  - Package has no runtimeArguments, packageArguments, environmentVariables, or runtimeHint
Bad example:
  { "identifier": "my-package", "version": "1.0.0" }
Good example:
  {
    "identifier": "my-package",
    "version": "1.0.0",
    "runtimeArguments": [
      { "name": "--port", "description": "Port to run on" }
    ]
  }
Guidance:
  - Add runtimeArguments for command-line options
  - Add packageArguments for package-specific configuration
  - Add environmentVariables for environment-based settings
  - Consider adding runtimeHint if the runtime differs from default
Scope:
  - packages
Notes:
  - Some packages may legitimately not need configuration, but those are rare
  - Consider provide an empty configuration object (such as packageArguments) if no configuration is needed

──────────────────────────────────────────────────

🔎 prefer-config-for-remote (info)

Message: Remote has no configuration options
Purpose: Suggest adding headers configuration for remotes that may need authentication or custom headers
Triggers:
  - Remote has no headers configuration
Bad example:
  { "type": "streamable-http", "url": "https://api.example.com/mcp" }
Good example:
  {
    "type": "streamable-http",
    "url": "https://api.example.com/mcp",
    "headers": [
      { "name": "Authorization", "description": "API key for authentication" }
    ]
  }
Guidance:
  - Add headers configuration if the remote requires authentication
  - This typicslly includes headers like Authorization, or custom API keys
Scope:
  - remotes
Notes:
  - Some remotes may not need headers (public endpoints)
  - Consider providing an empty headers object if no headers are needed

──────────────────────────────────────────────────

🔎 require-arg-leading-dashes (warning)

Message: Named argument missing leading dashes
Purpose: Ensure named arguments follow standard command-line conventions with leading dashes
Triggers:
  - Named argument has a name but doesn't start with -- or -
Bad example:
  { "name": "port", "description": "Port number" }
Good example:
  { "name": "--port", "description": "Port number" }
Guidance:
  - Use - or -- as appropriate (e.g., -y, --port)
Scope:
  - packages.runtimeArguments
  - packages.packageArguments
Notes:
  - Some tools may accept argument names without leading dashes, but it's not recommended

──────────────────────────────────────────────────

🔎 no-template-variables-missing (error)

Message: Template string has no corresponding variables
Purpose: Catch templates referencing variables that are not defined in field.variables
Triggers:
  - Field.value contains {var} but field.variables lacks that key
Bad example:
  { "value": "Bearer {token}" }
Good example:
  {
    "value": "Bearer {token}",
    "variables": {
      "token": { "format": "string", "isRequired": true }
    }
  }
Guidance:
  - Add missing variable definitions under field.variables
  - Or remove unused {placeholders} from the template
Scope:
  - packages.runtimeArguments
  - packages.packageArguments
  - packages.environmentVariables
  - remotes.headers
Notes:
  - Variables are case-sensitive

──────────────────────────────────────────────────

🔎 require-valid-value-format (error)

Message: Value format inconsistent with field type
Purpose: Validate that field values match their declared format (number, boolean, etc.)
Triggers:
  - Value doesn't match the expected data type
Bad example:
  { "value": "not-a-number", "format": "number" }
Good example:
  { "value": "42", "format": "number" }
Guidance:
  - Ensure numeric values are valid numbers (can be strings like "42")
  - Use "true" or "false" for boolean values (case-insensitive)
  - Remove format constraint if value type is flexible
Scope:
  - packages.runtimeArguments
  - packages.packageArguments
  - packages.environmentVariables
  - remotes.headers
Notes:
  - Format validation helps catch configuration errors

──────────────────────────────────────────────────

🔎 require-valid-default-format (error)

Message: Default value format inconsistent with field type
Purpose: Validate that default values match their declared format (number, boolean, etc.)
Triggers:
  - Default value doesn't match the expected data type
Bad example:
  { "default": "not-a-number", "format": "number" }
Good example:
  { "default": "42", "format": "number" }
Guidance:
  - Ensure numeric defaults are valid numbers (can be strings like "42")
  - Use "true" or "false" for boolean defaults (case-insensitive)
  - Remove format constraint if default type is flexible
Scope:
  - packages.runtimeArguments
  - packages.packageArguments
  - packages.environmentVariables
  - remotes.headers
Notes:
  - Format validation helps catch configuration errors
  - Defaults should match the same format as values

──────────────────────────────────────────────────

🔎 require-valid-choices-format (error)

Message: Choice values format inconsistent with field type
Purpose: Validate that all choice values match their declared format (number, boolean, etc.)
Triggers:
  - Choice values don't match the expected data type
Bad example:
  { "choices": ["not-a-number", "42"], "format": "number" }
Good example:
  { "choices": ["1", "42", "100"], "format": "number" }
Guidance:
  - Ensure all numeric choices are valid numbers (can be strings like "42")
  - Use "true" or "false" for boolean choices (case-insensitive)
  - Remove format constraint if choice types are flexible
Scope:
  - packages.runtimeArguments
  - packages.packageArguments
  - packages.environmentVariables
  - remotes.headers
Notes:
  - Format validation helps catch configuration errors
  - All choices should match the same format as values and defaults

──────────────────────────────────────────────────

🔎 no-secret-template (warning)

Message: Secret field contains template variables
Purpose: Warn about secret fields that contain template variables
Triggers:
  - Field is marked as isSecret and contains {variables}
Bad example:
  { "value": "Bearer {api_key}", "isSecret": true }
Good example:
  {
    "value": "Bearer {api_key}",
    "isSecret": false,
    "variables": { "api_key": { "isSecret": true } }
  }
Guidance:
  - Move secret marking to the variable level instead of the template
  - Use non-secret templates with secret variables
Scope:
  - packages.runtimeArguments
  - packages.packageArguments
  - packages.environmentVariables
  - remotes.headers
Notes:
  - It is typicslly undesriable to hide the template value

──────────────────────────────────────────────────

🔎 no-unused-variables (warning)

Message: Defined variables not used in template
Purpose: Identify variables that are defined but never referenced in the template string
Triggers:
  - Field.variables contains keys that don't appear in field.value
Bad example:
  {
    "value": "Hello {name}",
    "variables": {
      "name": {},
      "unused": {}
    }
  }
Good example:
  {
    "value": "Hello {name}",
    "variables": {
      "name": { "format": "string" }
    }
  }
Guidance:
  - Remove unused variable definitions
  - Or add references to unused variables in the template
Scope:
  - packages.runtimeArguments
  - packages.packageArguments
  - packages.environmentVariables
  - remotes.headers
Notes:
  - Variables are case-sensitive in template matching

──────────────────────────────────────────────────

🔎 no-value-with-irrelevant-properties (warning)

Message: Field with value should not have default, isRequired, or choices
Purpose: Identify fields with static values that also have properties that only apply to user input fields
Triggers:
  - Field has a static value but also has default, isRequired, or choices (properties that only apply to user input fields)
Bad example:
  {
    "value": "static-value",
    "default": "other-value",
    "isRequired": true
  }
Good example:
  { "value": "static-value" }
Guidance:
  - Remove default, isRequired, and choices from fields with static values
  - These properties only apply to fields that users configure
Scope:
  - packages.runtimeArguments
  - packages.packageArguments
  - packages.environmentVariables
  - remotes.headers
Notes:
  - This sometimes happens when value is used in error, and user input is expected (sometimes when value is used instead of default)
  - Clean, consistent value specifications produce predictable configuration and reduce confusion

──────────────────────────────────────────────────

🔎 no-secret-static-value (warning)

Message: Field with static value should not be marked as secret
Purpose: Warn about static values marked as secret, which will likely not have the desired effect
Triggers:
  - Field has a static value and is marked as isSecret
Bad example:
  { "value": "public-api-key", "isSecret": true }
Good example:
  {
    "value": "Bearer {token}",
    "isSecret": false,
    "variables": { "token": { "isSecret": true } }
  }
Guidance:
  - Remove isSecret from static values
  - Use variables with isSecret for truly sensitive values
Scope:
  - packages.runtimeArguments
  - packages.packageArguments
  - packages.environmentVariables
  - remotes.headers
Notes:
  - Static values will generally be displayed during configuraiton, even if marked as secret
  - And if the value is hidden during configuration that will be a poor user experience

──────────────────────────────────────────────────

🔎 require-valid-default-choice (error)

Message: Default value must be one of the available choices
Purpose: Ensure default values are valid options when choices are provided
Triggers:
  - Field has both default and choices, but default is not in the choices array
Bad example:
  {
    "default": "invalid",
    "choices": ["option1", "option2"]
  }
Good example:
  {
    "default": "option1",
    "choices": ["option1", "option2"]
  }
Guidance:
  - Set default to one of the valid choices
  - Or remove the default if no choice should be pre-selected
  - Ensure consistency between default and available options
Scope:
  - packages.runtimeArguments
  - packages.packageArguments
  - packages.environmentVariables
  - remotes.headers
Notes:
  - Default should always be a valid choice when choices are specified

──────────────────────────────────────────────────

🔎 no-transport-url-variables-missing (error)

Message: Package transport URL contains variables without matching configuration
Purpose: Ensure transport URL variables in packages are defined in package configuration
Triggers:
  - Package transport URL contains {variable} but no matching runtime argument, package argument, or environment variable
Bad example:
  {
    "packages": [{
      "identifier": "my-server",
      "transport": {
        "type": "sse",
        "url": "http://localhost:{port}/sse"
      },
      "runtimeArguments": [{
        "name": "--host",
        "valueHint": "host"
      }]
    }]
  }
Good example:
  {
    "packages": [{
      "identifier": "my-server", 
      "transport": {
        "type": "sse",
        "url": "http://localhost:{port}/sse"
      },
      "runtimeArguments": [{
        "name": "--port",
        "valueHint": "port"
      }]
    }]
  }
Guidance:
  - Add runtime arguments with matching valueHint or name
  - Add package arguments with matching valueHint or name
  - Add environment variables with matching name
  - Or remove variables from the transport URL
Scope:
  - packages.transport.url
Notes:
  - Variables in transport URLs must be resolvable to package configuration
  - Check valueHint, name fields in runtimeArguments, packageArguments, and environmentVariables

──────────────────────────────────────────────────

🔎 no-remote-transport-variables (error)

Message: Remote transport URL cannot contain variable references
Purpose: Prevent variable references in remote transport URLs since there is no configuration context to resolve them
Triggers:
  - Remote transport URL contains {variable} references
Bad example:
  {
    "remotes": [{
      "type": "sse",
      "url": "http://localhost:{port}/sse"
    }]
  }
Good example:
  {
    "remotes": [{
      "type": "sse", 
      "url": "http://localhost:8080/sse"
    }]
  }
Guidance:
  - Use static URLs for remote transports
  - Remove variable references from remote transport URLs
  - Use package transports if variable substitution is needed
Scope:
  - remotes.transport.url
Notes:
  - Remote transports have no configuration context to resolve variables
  - Only package transports can use variable substitution

──────────────────────────────────────────────────

🔎 prefer-dynamic-port (warning)

Message: Package transport URL contains hard-coded port number, prefer dynamic port via variable substitution
Purpose: Encourage use of dynamic port variables instead of hard-coded port numbers for better flexibility
Triggers:
  - Package transport URL contains hard-coded port numbers (e.g., :8080, :3000, :9000)
Bad example:
  {
    "packages": [{
      "identifier": "my-server",
      "transport": {
        "type": "sse",
        "url": "http://localhost:8080/sse"
      }
    }]
  }
Good example:
  {
    "packages": [{
      "identifier": "my-server",
      "transport": {
        "type": "sse",
        "url": "http://localhost:{port}/sse"
      },
      "runtimeArguments": [{
        "name": "--port",
        "valueHint": "port",
        "description": "Port number for the server"
      }]
    }]
  }
Guidance:
  - Replace hard-coded port numbers with {port} variable substitution
  - Add runtime argument or package argument with matching valueHint or name
Scope:
  - packages.transport.url
Notes:
  - Hard-coded ports make packages less flexible for different environments
  - Dynamic ports allow users to configure ports based on their setup

──────────────────────────────────────────────────

🔎 no-duplicate-env-vars (error)

Message: Duplicate environment variable names found - the second definition will override the first
Purpose: Prevent duplicate environment variable names within the same package, as later definitions override earlier ones
Triggers:
  - Multiple environment variables with the same name in the same package
Bad example:
  {
    "packages": [{
      "identifier": "my-package",
      "environmentVariables": [
        {
          "name": "API_KEY",
          "description": "Primary API key",
          "format": "string",
          "isSecret": true
        },
        {
          "name": "API_KEY",
          "description": "Secondary API key",
          "format": "string",
          "isSecret": true
        }
      ]
    }]
  }
Good example:
  {
    "packages": [{
      "identifier": "my-package",
      "environmentVariables": [
        {
          "name": "API_KEY",
          "description": "Primary API key",
          "format": "string",
          "isSecret": true
        },
        {
          "name": "SECONDARY_API_KEY",
          "description": "Secondary API key",
          "format": "string",
          "isSecret": true
        }
      ]
    }]
  }
Guidance:
  - Use unique names for each environment variable
  - If you need multiple similar variables, use descriptive names like API_KEY and SECONDARY_API_KEY
Scope:
  - packages.environmentVariables
Notes:
  - Environment variables are processed in order, with later definitions overriding earlier ones
  - This can lead to unexpected behavior where users think they are setting one variable but actually setting another