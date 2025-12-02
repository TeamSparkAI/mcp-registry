# Data validation results [12/01/2025]
[command: pnmp run registry:validate]

🔍 Validating server registry against schema...

Validating 2350 servers...


🧭 SERVERS WITH ISSUES
══════════════════════════════════════════════════

ai.aliengiraffe/spotdb (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

ai.alpic.test/test-mcp-server (schema: 2025-09-29, version: 0.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.exa/exa (schema: 2025-10-17, version: 3.0.7)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.exa/exa (schema: 2025-10-17, version: 3.0.9)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.exa/exa (schema: 2025-10-17, version: 3.1.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.explorium/mcp-explorium (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.explorium/mcp-explorium (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.gomarble/mcp-api (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.klavis/strata (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.mcpanalytics/analytics (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.mcpanalytics/analytics (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.mcpanalytics/analytics (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.mcpanalytics/analytics (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.4.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.4.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.5.10)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.5.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.5.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.5.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.5.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.5.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.5.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.5.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.5.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.mcpcap/mcpcap (schema: 2025-09-29, version: 0.6.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.meminal/meminal (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

ai.packmind/mcp-server (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: packmind_mcp_token (no-template-variables-missing)

ai.shawndurrani/mcp-merchant (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

ai.shawndurrani/mcp-merchant (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.shawndurrani/mcp-merchant (schema: 2025-09-29, version: 0.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.shawndurrani/mcp-registry (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.shawndurrani/mcp-registry (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.shawndurrani/mcp-registry (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.shawndurrani/mcp-registry (schema: 2025-09-29, version: 0.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.smithery/222wcnm-bilistalkermcp (schema: 2025-09-16, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Aman-Amith-Shastry-scientific_computation_mcp (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Artin0123-gemini-image-mcp-server (schema: 2025-09-16, version: 0.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Artin0123-gemini-image-mcp-server (schema: 2025-09-16, version: 1.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Artin0123-gemini-image-mcp-server (schema: 2025-09-16, version: 1.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Artin0123-gemini-image-mcp-server (schema: 2025-09-16, version: 1.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Artin0123-gemini-image-mcp-server (schema: 2025-09-16, version: 1.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Artin0123-gemini-image-mcp-server (schema: 2025-09-16, version: 1.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Artin0123-gemini-image-mcp-server (schema: 2025-09-16, version: 1.3.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Artin0123-gemini-image-mcp-server (schema: 2025-09-16, version: 1.4.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Artin0123-gemini-image-mcp-server (schema: 2025-09-16, version: 1.4.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/BadRooBot-my_test_mcp (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/BadRooBot-test_m (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/BigVik193-reddit-ads-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/BigVik193-reddit-ads-mcp-api (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/BigVik193-reddit-ads-mcp-test (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/BigVik193-reddit-user-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/BowenXU0126-aistudio_hw3 (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/ChiR24-unreal_mcp (schema: 2025-09-16, version: 0.4.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/ChiR24-unreal_mcp (schema: 2025-09-16, version: 0.4.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/ChiR24-unreal_mcp (schema: 2025-09-16, version: 0.4.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/ChiR24-unreal_mcp_server (schema: 2025-09-16, version: 0.4.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/CollectiveSpend-collectivespend-smithery-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/CryptoCultCurt-appfolio-mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Danushkumar-V-mcp-discord (schema: 2025-09-29, version: 1.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/DynamicEndpoints-autogen_mcp (schema: 2025-09-29, version: 0.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/DynamicEndpoints-m365-core-mcp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/DynamicEndpoints-m365-core-mcp (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/DynamicEndpoints-powershell-exec-mcp-server (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/FelixYifeiWang-felix-mcp-smithery (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Funding-Machine-ghl-mcp-fundingmachine (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/HARJAP-SINGH-3105-splitwise_mcp (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Hint-Services-obsidian-github-mcp (schema: 2025-09-29, version: 0.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/IlyaGusev-academia_mcp (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/IlyaGusev-academia_mcp (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/ImRonAI-mcp-server-browserbase (schema: 2025-09-29, version: 2.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/IndianAppGuy-magicslide-mcp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/IndianAppGuy-magicslide-mcp-actual-test (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/JMoak-chrono-mcp (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/JunoJunHyun-festival-finder-mcp (schema: 2025-09-16, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/JunoJunHyun-festival-finder-mcp (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Kim-soung-won-mcp-smithery-exam (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Kryptoskatt-mcp-server (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Kryptoskatt-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Leghis-smart-thinking (schema: 2025-09-29, version: 0.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/LinkupPlatform-linkup-mcp-server (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/MetehanGZL-pokemcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/MisterSandFR-supabase-mcp-selfhosted (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/MisterSandFR-supabase-mcp-selfhosted (schema: 2025-09-29, version: 1.14.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Nekzus-npm-sentinel-mcp (schema: 2025-09-29, version: 1.10.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Nekzus-npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Nekzus-npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Nekzus-npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Nekzus-npm-sentinel-mcp (schema: 2025-09-29, version: 1.9.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Nekzus-npm-sentinel-mcp (schema: 2025-09-29, version: {{VERSION}})
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Open-Scout-mcp (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/PabloLec-keyprobe-mcp (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Parc-Dev-task-breakdown-server (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/Phionx-mcp-hello-server (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/PixdataOrg-coderide (schema: 2025-09-29, version: 0.9.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/Pratiksha-Kanoja-magicslide-mcp-test (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/ProfessionalWiki-mediawiki-mcp-server (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/RectiFlex-centerassist-mcp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/RectiFlex-centerassist-mcp-cp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/RectiFlex-centerassist-mcp-cp1 (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/RectiFlex-centerassist-mcp1 (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/STUzhy-py_execute_mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/ScrapeGraphAI-scrapegraph-mcp (schema: 2025-10-17, version: 1.16.0)
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/TakoData-tako-mcp (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/a-ariff-canvas-instant-mcp (schema: 2025-09-16, version: 2.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/aamangeldi-dad-jokes-mcp (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/adamamer20-paper-search-mcp-openai (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/afgong-sqlite-mcp-server (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/aicastle-school-openai-api-agent-project (schema: 2025-09-16, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/aicastle-school-openai-api-agent-project (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/aicastle-school-openai-api-agent-project11 (schema: 2025-09-16, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/aicastle-school-openai-api-agent-project11 (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/airmang-hwpx-mcp (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/akilat-spec-leave-manager-mcp (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/alex-llm-attack-mcp-server (schema: 2025-09-29, version: 2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/alphago2580-naramarketmcp (schema: 2025-09-29, version: 1.14.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/anirbanbasu-frankfurtermcp (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/anirbanbasu-frankfurtermcp (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/anirbanbasu-pymcp (schema: 2025-09-29, version: 0.1.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/arjunkmrm-ahoy (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/arjunkmrm-ahoy2 (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/arjunkmrm-boba-tea (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-bobo (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/arjunkmrm-brave-search-mcp-server (schema: 2025-09-16, version: 2.0.25)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-clock (schema: 2025-09-29, version: 1.14.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/arjunkmrm-fetch (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-local-test2 (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-local001 (schema: 2025-09-16, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-local01 (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-local02 (schema: 2025-09-16, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-lta-mcp (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/arjunkmrm-mango-sago (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-perplexity-search (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/arjunkmrm-py-test-0 (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-py-test-2 (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-scrapermcp_el (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-sg-bus-test (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-test0 (schema: 2025-09-16, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-test01 (schema: 2025-09-16, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-test2 (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-time (schema: 2025-09-16, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-ts-test-2 (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-tutorials (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/arjunkmrm-watch2 (schema: 2025-09-29, version: 1.14.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/aryankeluskar-poke-video-mcp (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/bergeramit-bergeramit-hw3-tech (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/bergeramit-bergeramit-hw3-tech-1 (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/bhushangitfull-file-mcp-smith (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/bielacki-igdb-mcp-server (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/blacklotusdev8-test_m (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/blbl147-xhs-mcp (schema: 2025-09-29, version: 1.6.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/blockscout-mcp-server (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brandonbosco-sigao-scf-mcp (schema: 2025-09-16, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-29, version: 1.3.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-09-29, version: 2.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-09-29, version: 2.0.10)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-09-29, version: 2.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.30)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.31)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.32)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.33)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.34)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.36)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.37)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.38)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.39)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-29, version: 2.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.40)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.42)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.43)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.44)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.45)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.47)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.48)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.49)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-29, version: 2.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.50)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-16, version: 2.0.52)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/brave (schema: 2025-09-29, version: 2.0.54)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-10-17, version: 2.0.58)
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-09-29, version: 2.0.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-09-29, version: 2.0.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-09-29, version: 2.0.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/brave (schema: 2025-09-29, version: 2.0.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/browserbasehq-mcp-browserbase (schema: 2025-09-29, version: 2.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/browserbasehq-mcp-browserbase (schema: 2025-09-29, version: 2.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/callmybot-cookbook-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/callmybot-domoticz (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/callmybot-hello-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/cc25a-openai-api-agent-project123123123 (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/cindyloo-dropbox-mcp-server (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/clpi-clp-mcp (schema: 2025-09-16, version: 0.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/cpretzinger-ai-assistant-simple (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/cristianoaredes-mcp-dadosbr (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/ctaylor86-mcp-video-download-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/cuongpo-coti-mcp (schema: 2025-09-16, version: 0.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/cuongpo-coti-mcp-1 (schema: 2025-09-16, version: 0.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/data-mindset-sts-google-forms-mcp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/demomagic-duckchain-mcp (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/devbrother2024-typescript-mcp-server-boilerplate (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/docfork-mcp (schema: 2025-09-29, version: 0.6.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/docfork-mcp (schema: 2025-09-29, version: 0.7.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/dsharipova-mcp-hw (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/duvomike-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/eliu243-oura-mcp-server (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/eliu243-oura-mcp-server-2 (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/eliu243-oura-mcp-server-eliu (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/exa-labs-exa-code-mcp (schema: 2025-09-29, version: 0.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/faithk7-gmail-mcp (schema: 2025-09-29, version: 1.7.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/feeefapp-mcp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/fengyinxia-jimeng-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/fitaf-ai-fitaf-ai-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/fitaf-ai-fitaf-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/flight505-mcp_dincoder (schema: 2025-09-16, version: 0.1.13)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/flight505-mcp_dincoder (schema: 2025-09-16, version: 0.1.15)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/hithereiamaliff-mcp-datagovmy (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/hithereiamaliff-mcp-nextcloud (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/hjsh200219-pharminfo-mcp (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/hollaugo-financial-research-mcp-server (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/hustcc-mcp-mermaid (schema: 2025-09-29, version: 0.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/huuthangntk-claude-vision-mcp-server (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/infranodus-mcp-server-infranodus (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/isnow890-data4library-mcp (schema: 2025-09-29, version: 1.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/jekakos-mcp-user-data-enrichment (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/jenniferjiang0511-mit-ai-studio-hw3 (schema: 2025-09-16, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/jessicayanwang-test (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/jirispilka-actors-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/jjlabsio-korea-stock-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/jweingardt12-mlb_mcp (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kaszek-kaszek-attio-mcp (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/keithah-hostex-mcp (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/keithah-tessie-mcp (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/keremurat-json (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/keremurat-jsonmcp (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/keremurat-mcp (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kesslerio-attio-mcp-server (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/kesslerio-attio-mcp-server (schema: 2025-09-16, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kesslerio-attio-mcp-server (schema: 2025-09-16, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kesslerio-attio-mcp-server (schema: 2025-09-16, version: 1.1.1-fallback)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kesslerio-attio-mcp-server-beta (schema: 2025-09-16, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kirbah-mcp-youtube (schema: 2025-09-16, version: 0.2.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kkjdaniel-bgg-mcp (schema: 2025-09-29, version: 1.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/kodey-ai-mapwise-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/kodey-ai-salesforce-mcp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kodey-ai-salesforce-mcp-kodey (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kodey-ai-salesforce-mcp-minimal (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kodey-ai-salesforce-mcp-server (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/kwp-lab-rss-reader-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/leandrogavidia-vechain-mcp-server (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/lineex-pubmed-mcp-smithery (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/lukaskostka99-marketing-miner-mcp (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/luminati-io-brightdata-mcp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/magenie33-quality-dimension-generator (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/mayla-debug-mcp-google-calendar2 (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/mfukushim-map-traveler-mcp (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/miguelgarzons-mcp-cun (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/minionszyw-bazi (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/mjucius-cozi_mcp (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/morosss-sdfsdf (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/motorboy1-my-mcp-server (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/mrugankpednekar-bill_splitter_mcp (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/mrugankpednekar-mcp-optimizer (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/neverinfamous-memory-journal-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/nickthelegend-test-mcp (schema: 2025-09-16, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/oxylabs-oxylabs-mcp (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/pinion05-supabase-mcp-lite (schema: 2025-09-29, version: 0.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/pinion05-supabase-mcp-lite (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/pinkpixel-dev-web-scout-mcp (schema: 2025-09-29, version: 1.5.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/pinkpixel-dev-web-scout-mcp (schema: 2025-09-29, version: 1.5.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/pinkpixel-dev-web-scout-mcp (schema: 2025-09-29, version: 1.5.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/plainyogurt21-clintrials-mcp (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/plainyogurt21-sec-edgar-mcp (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/proflulab-documentassistant (schema: 2025-09-16, version: 1.14.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/pythondev-pro-egw_writings_mcp_server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/pythondev-pro-egw_writings_mcp_server (schema: 2025-09-29, version: 1.12.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/rainbowgore-stealthee-mcp-tools (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/ramadasmr-networkcalc-mcp (schema: 2025-09-29, version: 1.13.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/ref-tools-ref-tools-mcp (schema: 2025-10-17, version: 3.0.0)
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/renCosta2025-context7fork (schema: 2025-09-29, version: 1.0.13)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/rfdez-pvpc-mcp-server (schema: 2025-09-29, version: 3.2.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/sachicali-discordmcp-suite (schema: 2025-09-29, version: 1.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/saidsef-mcp-github-pr-issue-analyser (schema: 2025-09-16, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/samihalawa-whatsapp-go-mcp (schema: 2025-09-16, version: v7.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/sasabasara-where_is_my_bus_mcp (schema: 2025-09-29, version: 2.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/sebastianall1977-gmail-mcp (schema: 2025-09-29, version: 1.7.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/serkan-ozal-driflyte-mcp-server (schema: 2025-09-29, version: 0.0.18)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/serkan-ozal-driflyte-mcp-server (schema: 2025-09-29, version: 0.0.19)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/serkan-ozal-driflyte-mcp-server (schema: 2025-09-29, version: 0.0.20)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/serkan-ozal-driflyte-mcp-server (schema: 2025-09-29, version: 0.1.14)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/serkan-ozal-driflyte-mcp-server (schema: 2025-09-29, version: 0.1.15)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/shoumikdc-arxiv-mcp (schema: 2025-09-16, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/skr-cloudify-clickup-mcp-server-new (schema: 2025-09-29, version: 0.8.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/slhad-aha-mcp (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/smithery-ai-cookbook-python-quickstart (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/smithery-ai-cookbook-ts-smithery-cli (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/smithery-ai-fetch (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/smithery-ai-github (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/smithery-ai-national-weather-service (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/smithery-ai-slack (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/smithery-notion (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/smithery-toolbox (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/sunub-obsidian-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/szge-lolwiki-mcp (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/truss44-mcp-crypto-price (schema: 2025-09-16, version: 2.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/turnono-datacommons-mcp-server (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/wgong-sqlite-mcp-server (schema: 2025-09-16, version: 1.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/xinkuang-china-stock-mcp (schema: 2025-09-29, version: 1.15.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/yuhuison-mediawiki-mcp-server-auth (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/yuna0x0-anilist-mcp (schema: 2025-09-29, version: 1.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/yuna0x0-anilist-mcp (schema: 2025-09-29, version: 1.3.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/yuna0x0-anilist-mcp (schema: 2025-09-29, version: 1.3.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/yuna0x0-hackmd-mcp (schema: 2025-09-29, version: 1.4.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/yuna0x0-hackmd-mcp (schema: 2025-09-29, version: 1.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/yuna0x0-hackmd-mcp (schema: 2025-09-29, version: 1.5.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/yuna0x0-hackmd-mcp (schema: 2025-09-29, version: 1.5.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/zeta-chain-cli (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.smithery/zhaoganghao-hellomcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)

ai.smithery/zwldarren-akshare-one-mcp (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /remotes/0/headers[0]: Template contains variables without definitions: smithery_api_key (no-template-variables-missing)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

ai.tickettailor/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.toolprint/hypertool-mcp (schema: 2025-09-29, version: 0.0.42)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

ai.waystation/airtable (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/gmail (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/jira (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/mcp (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/miro (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/monday (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/office (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/postgres (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/slack (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/supabase (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/teams (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.waystation/wrike (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

ai.wild-card/deepcontext (schema: 2025-09-29, version: 0.1.15)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

ai.xpoz/social-insights (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.zine/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ai.zine/mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

app.getdialer/dialer (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

app.getdialer/dialer (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

app.linear/linear (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

app.thoughtspot/mcp-server (schema: 2025-09-29, version: 0.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

app.thoughtspot/mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

app.thoughtspot/mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

app.zenable/zenable (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

app.zenable/zenable (schema: 2025-09-29, version: 2.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

biz.icecat/mcp (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

biz.icecat/mcp (schema: 2025-10-17, version: 1.0.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

biz.icecat/mcp (schema: 2025-10-17, version: 1.0.2)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

capital.hove/read-only-local-mysql-mcp-server (schema: 2025-10-17, version: 0.0.13)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

capital.hove/read-only-local-mysql-mcp-server (schema: 2025-10-17, version: 0.0.14)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

capital.hove/read-only-local-mysql-mcp-server (schema: 2025-10-17, version: 0.0.17)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

casa.find-me.sub1/send-email-mcp (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

casa.find-me.sub1/send-email-mcp (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.martinelli/jooq-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.0.5)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.0.6)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.0.7)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.0.8)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.0.9)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.1.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.1.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.1.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.1.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.1.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.1.5)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.1.6)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.1.8)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ch.pfx/mcp-server (schema: 2025-10-17, version: 1.1.9)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

ci.git/mymlh-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

co.axiom/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

co.contraption/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

co.huggingface/hf-mcp-server (schema: 2025-10-17, version: 0.2.33)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[2]: Remote has no headers configuration (prefer-config-for-remote)

co.pipeboard/meta-ads-mcp (schema: 2025-09-29, version: 1.0.11)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

co.pipeboard/meta-ads-mcp (schema: 2025-09-29, version: 1.0.12)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

co.pipeboard/meta-ads-mcp (schema: 2025-09-29, version: 1.0.13)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

co.thisdot.docusign-navigator/mcp (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

co.thisdot.docusign-navigator/mcp (schema: 2025-10-17, version: 1.0.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

co.thisdot.docusign-navigator/mcp (schema: 2025-10-17, version: 1.2.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

co.thisdot.docusign-navigator/mcp (schema: 2025-10-17, version: 1.2.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

co.thisdot.docusign-navigator/mcp (schema: 2025-10-17, version: 1.2.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

co.thisdot.docusign-navigator/mcp (schema: 2025-10-17, version: 1.3.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.1stdibs/1stDibs (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.adspirer/ads (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.agilitycms/mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.allstacks/allstacks-mcp (schema: 2025-10-17, version: 0.1.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

com.allstacks/allstacks-mcp (schema: 2025-10-17, version: 0.1.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

com.allstacks/allstacks-mcp (schema: 2025-10-17, version: 0.1.2)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

com.allstacks/allstacks-mcp (schema: 2025-10-17, version: 0.1.3)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

com.amplitude/mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.apify/apify-mcp-server (schema: 2025-09-29, version: 0.4.10)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apify/apify-mcp-server (schema: 2025-09-29, version: 0.4.15)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apple-rag/mcp-server (schema: 2025-09-29, version: 1.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apple-rag/mcp-server (schema: 2025-09-29, version: 2.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apple-rag/mcp-server (schema: 2025-09-29, version: 2.4.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apple-rag/mcp-server (schema: 2025-09-29, version: 2.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apple-rag/mcp-server (schema: 2025-09-29, version: 2.5.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apple-rag/mcp-server (schema: 2025-09-29, version: 2.5.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apple-rag/mcp-server (schema: 2025-09-29, version: 2.6.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apple-rag/mcp-server (schema: 2025-09-29, version: 2.7.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apple-rag/mcp-server (schema: 2025-09-29, version: 2.8.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.apple-rag/mcp-server (schema: 2025-09-29, version: 2.9.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.appsflyer/mcp (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.aribadernatal/sideways (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.atlassian/atlassian-mcp-server (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.biodnd/agent-fin (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.biodnd/agent-fin (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.biodnd/agent-fin (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.biodnd/agent-ip (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.biodnd/agent-ip (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.biodnd/agent-ip (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.biodnd/agent-press (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.biodnd/agent-press (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.biodnd/agent-press (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.blockscout/mcp-server (schema: 2025-09-29, version: 0.10.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.blockscout/mcp-server (schema: 2025-09-29, version: 0.11.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.brokerchooser/broker-safety (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.bullpenstrategygroup.rotunda/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.34)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.35)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.36)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.37)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.38)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.39)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.40)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.41)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.42)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.43)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.44)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.45)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.46)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.47)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.48)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.49)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.50)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.civic/nexus (schema: 2025-10-17, version: 0.1.51)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.close/close-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.close/close-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.cloudflare.mcp/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[15]: Remote has no headers configuration (prefer-config-for-remote)

com.codescene/codescene-mcp-server (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

com.cryptorefills/mcp-server (schema: 2025-10-17, version: 1.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.devcycle/mcp (schema: 2025-09-29, version: 6.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.devcycle/mcp (schema: 2025-09-29, version: 6.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.devcycle/mcp (schema: 2025-07-09, version: 6.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-07-09. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.devcycle/mcp (schema: 2025-07-09, version: 6.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-07-09. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.devcycle/mcp (schema: 2025-10-17, version: 6.1.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.devexpress/docs (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.devopness.mcp/server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.devopness.mcp/server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.dexpaprika/dexpaprika (schema: 2025-10-17, version: 1.1.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.dillilabs.deva/dilli-email-validation-api-server (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.docfork/docfork-mcp (schema: 2025-09-29, version: 0.7.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.docfork/docfork-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.docfork/docfork-mcp (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.docfork/docfork-mcp (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.docfork/docfork-mcp (schema: 2025-10-17, version: 1.0.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.dotprompts/dotprompts (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.0.18)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.0.19)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.0.20)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.11)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.12)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.13)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.14)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.15)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.driflyte/driflyte-mcp-server (schema: 2025-09-29, version: 0.1.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.enigma/enigma-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[2]: Remote has no headers configuration (prefer-config-for-remote)

com.enigma/enigma-mcp-server (schema: 2025-09-29, version: 1.0.0-build1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[2]: Remote has no headers configuration (prefer-config-for-remote)

com.epidemicsound/mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.falkordb/QueryWeaver (schema: 2025-09-29, version: 0.0.11)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 5000, consider using {port} variable substitution (prefer-dynamic-port)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.12)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.17)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.19)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.20)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.5)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.6)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.fenetresurciel.verylongmcp/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.8)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.figma.mcp/mcp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.figma.mcp/mcp (schema: 2025-09-16, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.figma.mcp/mcp (schema: 2025-09-16, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.figma.mcp/mcp (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.files/python-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.findyourfivepm/mcp-server (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.generect/generect-mcp (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

com.generect/generect-mcp (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

com.generect/generect-mcp (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.getclockwise/clockwise-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.getunblocked/unblocked-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.gibsonai/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.gitlab/mcp (schema: 2025-09-29, version: 0.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.glean/mcp (schema: 2025-10-17, version: 0.5.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

com.hellobasestation/pdfkit (schema: 2025-10-17, version: 1.0.3)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.hellobasestation/pdfkit (schema: 2025-10-17, version: 1.0.4)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.hellobasestation/pdfkit (schema: 2025-10-17, version: 1.0.7)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.infobip/mcp (schema: 2025-10-17, version: 2.0.0)
   • [LINTER][INFO] /remotes[16]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[17]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][WARNING] /remotes/0/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/1/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/2/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/3/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/4/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/5/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/6/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/7/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/8/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/9/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/10/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/11/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/12/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/13/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/14/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/15/headers[0]: Secret field contains template variables - ensure this is intentional (no-secret-template)
   • [LINTER][WARNING] /remotes/1/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/3/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/5/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/7/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/9/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/11/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/13/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/15/headers[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /remotes/0/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/1/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/2/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/3/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/4/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/5/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/6/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/7/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/8/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/9/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/10/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/11/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/12/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/13/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/14/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)
   • [LINTER][WARNING] /remotes/15/headers[0]: Field with static value should not be marked as secret - consider using variables instead (no-secret-static-value)

com.iunera/druid-mcp-server (schema: 2025-09-29, version: 1.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.iunera/druid-mcp-server (schema: 2025-09-29, version: 1.2.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.iunera/druid-mcp-server (schema: 2025-09-29, version: 1.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.iunera/druid-mcp-server (schema: 2025-09-29, version: 1.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.iunera/druid-mcp-server (schema: 2025-09-29, version: 1.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.iunera/druid-mcp-server (schema: 2025-09-29, version: 1.5.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.ivisa.www/mcp (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.ivisa.www/mcp (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[2]: Remote has no headers configuration (prefer-config-for-remote)

com.jepto/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.joelverhagen.mcp/Knapcode.SampleMcpServer (schema: 2025-09-29, version: 0.7.0-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.jotform/mcp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.jumpcloud/jumpcloud-genai (schema: 2025-07-09, version: 0.0.38)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-07-09. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.keboola/mcp (schema: 2025-09-29, version: 1.25.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.keboola/mcp (schema: 2025-09-29, version: 1.26.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.keboola/mcp (schema: 2025-10-17, version: 1.28.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.keboola/mcp (schema: 2025-10-17, version: 1.32.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.keboola/mcp (schema: 2025-10-17, version: 1.32.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.letta/memory-mcp (schema: 2025-09-29, version: 2.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.make/mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mcpbundles/agent-interviews (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

com.mcpbundles/hub (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

com.medusajs/medusa-mcp (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mermaidchart/mermaid-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.microsoft/microsoft-learn-mcp (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/gcal (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/gcal (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/gcal (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/gcal (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/gcal (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/gmail (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/gmail (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/gmail (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/gmail (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/gmail (schema: 2025-09-29, version: 1.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/outlook-calendar (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/outlook-email (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mintmcp/outlook-email (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.mux/mcp (schema: 2025-09-29, version: 12.8.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.newrelic/mcp-server (schema: 2025-10-17, version: 0.1.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

com.notion/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.notion/mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.onkernel/kernel-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.opsmill/infrahub-mcp (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.paypal.mcp/mcp (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

com.pearl.mcp/pearl-api-mcp-server (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

com.peek/mcp (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.pga/pga-golf (schema: 2025-09-29, version: 0.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.pga/pga-golf (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.predictleads/mcp (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

com.proxylink-mcp/mcp-server (schema: 2025-09-29, version: 2.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.pulsemcp.servers/pulse-fetch (schema: 2025-09-29, version: 0.2.14)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.redpanda/docs-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.redpanda/docs-mcp (schema: 2025-10-17, version: 2025.11.13+pr147-5d1f8b0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.redpanda/docs-mcp (schema: 2025-10-17, version: 2025.11.26+pr150-394827a)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.remote-mcp/registry-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.ritzademo/acme-todo (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.smartbear/smartbear-mcp (schema: 2025-09-29, version: 0.6.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.smartbear/smartbear-mcp (schema: 2025-09-29, version: 0.7.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.smartbear/smartbear-mcp (schema: 2025-09-29, version: 0.8.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.smartling/smartling-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.sonatype/dependency-management-mcp-server (schema: 2025-10-17, version: 1.0.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.sonatype/dependency-management-mcp-server (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.stackoverflow.mcp/mcp (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.statsig/statsig-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

com.stripe/mcp (schema: 2025-10-17, version: 0.2.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.supabase/mcp (schema: 2025-09-29, version: 0.5.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.supabase/mcp (schema: 2025-09-29, version: 0.5.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.supabase/mcp (schema: 2025-09-29, version: 0.5.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.supabase/mcp (schema: 2025-10-17, version: 0.5.9)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.tableall/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.teamwork/mcp (schema: 2025-09-29, version: 1.2.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.teamwork/mcp (schema: 2025-09-29, version: 1.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.teamwork/mcp (schema: 2025-09-29, version: 1.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.teamwork/mcp (schema: 2025-09-29, version: 1.5.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.teamwork/mcp (schema: 2025-09-29, version: 1.5.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.teamwork/mcp (schema: 2025-09-29, version: 1.5.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.teamwork/mcp (schema: 2025-09-29, version: 1.5.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.teamwork/mcp (schema: 2025-09-29, version: 1.5.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.teamwork/mcp (schema: 2025-09-29, version: 1.6.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

com.textarttools/textarttools-mcp (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.textarttools/textarttools-mcp (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.timeslope/timeslope-mcp (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

com.unifiedoffer/mcp-server (schema: 2025-09-29, version: 2.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

com.unifiedoffer/mcp-server (schema: 2025-09-29, version: 2.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

com.unifiedoffer/mcp-server (schema: 2025-09-29, version: 2.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

com.usesideways/sideways (schema: 2025-10-17, version: 1.0.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.usesideways/sideways (schema: 2025-10-17, version: 1.0.2)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.usesideways/sideways (schema: 2025-10-17, version: 1.0.3)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.usesideways/sideways (schema: 2025-10-17, version: 1.0.4)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.usesideways/sideways (schema: 2025-10-17, version: 1.0.5)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.usesideways/sideways (schema: 2025-10-17, version: 1.0.6)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.vaadin/docs-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.vaadin/docs-mcp (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.vercel/vercel-mcp (schema: 2025-09-29, version: 0.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.vercel/vercel-mcp (schema: 2025-09-29, version: 0.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.wallet-connectors/wallet-verifier-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.wallet-connectors/wallet-verifier-mcp (schema: 2025-10-17, version: 1.1.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.webflow/mcp (schema: 2025-10-17, version: 2.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.webforj/mcp (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.windowsforum/mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

com.wix/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

com.xcodebuildmcp/XcodeBuildMCP (schema: 2025-09-29, version: 1.12.10)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /packages/0/environmentVariables[0]/choices[2]: Choice value "1" is not a valid boolean (should be "true" or "false") (require-valid-choices-format)
   • [LINTER][ERROR] /packages/0/environmentVariables[0]/choices[3]: Choice value "0" is not a valid boolean (should be "true" or "false") (require-valid-choices-format)

com.xcodebuildmcp/XcodeBuildMCP (schema: 2025-09-29, version: 1.14.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][ERROR] /packages/0/environmentVariables[0]/choices[2]: Choice value "1" is not a valid boolean (should be "true" or "false") (require-valid-choices-format)
   • [LINTER][ERROR] /packages/0/environmentVariables[0]/choices[3]: Choice value "0" is not a valid boolean (should be "true" or "false") (require-valid-choices-format)

com.zomato/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.anotherai/anotherai (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.augments/mcp (schema: 2025-09-29, version: 2.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.composio.rube/rube (schema: 2025-09-29, version: 0.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.continue/docs (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.lingo/main (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.looptool/looptool (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

dev.ohmyposh/validator (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.ohmyposh/validator (schema: 2025-10-17, version: 27.5.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.openfeature/mcp (schema: 2025-10-17, version: 0.0.16)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

dev.openfeature/mcp (schema: 2025-10-17, version: 0.0.17)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

dev.promplate/hmr (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.promplate/hmr (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.promplate/hmr (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.rostro/rostro (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.2.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.3.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.4.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.5.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.5.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.5.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.6.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.6.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.6.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.7.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.storage/mcp (schema: 2025-10-17, version: 1.7.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.svelte/mcp (schema: 2025-10-17, version: 0.1.10)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.svelte/mcp (schema: 2025-10-17, version: 0.1.11)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.svelte/mcp (schema: 2025-09-29, version: 0.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.svelte/mcp (schema: 2025-09-29, version: 0.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.svelte/mcp (schema: 2025-10-17, version: 0.1.8)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

dev.svelte/mcp (schema: 2025-10-17, version: 0.1.9)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

directory.brick/mcp (schema: 2025-10-17, version: 2025.10.23.1321)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

directory.brick/mcp (schema: 2025-10-17, version: 2025.11.11.1009)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

directory.brick/mcp (schema: 2025-10-17, version: 2025.11.17.0704)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

directory.brick/mcp (schema: 2025-10-17, version: 2025.11.17.0708)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

finance.double.agent4/knowledge-base (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

finance.double.agent4/knowledge-base (schema: 2025-10-17, version: 1.0.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

garden.stanislav.svelte-llm/svelte-llm-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

goog.workspace-developer/developer-tools (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

host.justcall.mcp/justcall-mcp-server (schema: 2025-09-29, version: 0.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

host.justcall.mcp/justcall-mcp-server (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

host.justcall.mcp/justcall-mcp-server (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

host.justcall.mcp/justcall-mcp-server (schema: 2025-10-17, version: 1.2.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

icu.steeped.registry/nodejsmcp (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

icu.steeped.registry/nodejsmcp (schema: 2025-10-17, version: 1.0.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 3000, consider using {port} variable substitution (prefer-dynamic-port)

info.mosaique/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.balldontlie/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.balldontlie/mcp (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.catchmetrics.mcp/rum-analytics (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.coupler/remote-mcp-server (schema: 2025-09-29, version: 0.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.cycloid.mcp/server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.cycloid.mcp/server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.foqal/Foqal (schema: 2025-09-29, version: 2.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /remotes/0/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "streamable-http" (#/properties/type/enum) [enum@/remotes/*/type]
   • [SCHEMA][ERROR] /remotes/0/url: Must match format "uri" (#/properties/url/format) [format@/remotes/*/url]
   • [SCHEMA][ERROR] /remotes/0: Must match a schema in anyOf (#/allOf/1/properties/remotes/items/anyOf) [anyOf@/remotes/*]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.foqal/Foqal (schema: 2025-09-29, version: 2.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /remotes/0/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "streamable-http" (#/properties/type/enum) [enum@/remotes/*/type]
   • [SCHEMA][ERROR] /remotes/0/url: Must match format "uri" (#/properties/url/format) [format@/remotes/*/url]
   • [SCHEMA][ERROR] /remotes/0: Must match a schema in anyOf (#/allOf/1/properties/remotes/items/anyOf) [anyOf@/remotes/*]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.fusionauth/mcp-docs (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.4R9UN/mcp-kql-server (schema: 2025-10-17, version: 2.0.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.4R9UN/mcp-kql-server (schema: 2025-10-17, version: 2.0.9)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.8beeeaaat/touchdesigner-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.8beeeaaat/touchdesigner-mcp-server (schema: 2025-10-17, version: 1.2.0)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Abraxas1010/agent-payment-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/3: Must have required property 'version' (#/required) [required@/packages/*]

io.github.AlvaroRamirezCastillo/greeting-mcp-server (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.AlvaroRamirezCastillo/greeting-mcp-server (schema: 2025-10-17, version: 1.0.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Antonytm/mcp-all (schema: 2025-09-29, version: 0.1.14)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3001, consider using {port} variable substitution (prefer-dynamic-port)

io.github.Antonytm/mcp-all (schema: 2025-09-29, version: 0.1.15)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3001, consider using {port} variable substitution (prefer-dynamic-port)

io.github.Antonytm/mcp-all (schema: 2025-09-29, version: 0.1.16)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3001, consider using {port} variable substitution (prefer-dynamic-port)

io.github.Antonytm/mcp-all (schema: 2025-09-29, version: 0.1.17)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3001, consider using {port} variable substitution (prefer-dynamic-port)

io.github.Antonytm/mcp-all (schema: 2025-09-29, version: 0.1.19)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3001, consider using {port} variable substitution (prefer-dynamic-port)

io.github.Antonytm/mcp-all (schema: 2025-09-29, version: 0.1.20)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3001, consider using {port} variable substitution (prefer-dynamic-port)

io.github.Antonytm/mcp-sitecore-server (schema: 2025-09-29, version: 1.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Antonytm/mcp-sitecore-server (schema: 2025-09-29, version: 1.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.10.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.11.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.12.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.2.7)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.2.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.3.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.3.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.4.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.5.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.7.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.8.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Asthanaji05/pokeapi-mcp-server (schema: 2025-10-17, version: 1.9.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.AungMyoKyaw/betterprompt-mcp (schema: 2025-09-29, version: 0.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.BenAHammond/code-auditor-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.BenAHammond/code-auditor-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.BenAHammond/code-auditor-mcp (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.BenAHammond/code-auditor-mcp (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.BenAHammond/code-auditor-mcp (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.BenAHammond/code-auditor-mcp (schema: 2025-09-29, version: 1.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.BenAHammond/code-auditor-mcp (schema: 2025-09-16, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.BenAHammond/code-auditor-mcp (schema: 2025-09-16, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.BenAHammond/code-auditor-mcp (schema: 2025-10-17, version: 2.0.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChengJiale150/jupyter-mcp-server (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChiR24/unreal-engine-mcp (schema: 2025-09-29, version: 0.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ChiR24/unreal-engine-mcp (schema: 2025-09-29, version: 0.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ChiR24/unreal-engine-mcp (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ChiR24/unreal-engine-mcp (schema: 2025-09-29, version: 0.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ChiR24/unreal-engine-mcp (schema: 2025-09-29, version: 0.4.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ChiR24/unreal-engine-mcp (schema: 2025-09-16, version: 0.4.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ChiR24/unreal-engine-mcp (schema: 2025-09-16, version: 0.4.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Chris85appding/unified-offer-protocol (schema: 2025-09-29, version: 2.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Chris85appding/unified-offer-protocol (schema: 2025-09-29, version: 2.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Chris85appding/unified-offer-protocol (schema: 2025-09-29, version: 2.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-10-17, version: 0.10.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-10-17, version: 0.10.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-10-17, version: 0.10.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.2.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.2.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.5.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.6.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.7.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.7.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.8.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-09-29, version: 0.8.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ChromeDevTools/chrome-devtools-mcp (schema: 2025-10-17, version: 0.9.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.CodeAlive-AI/codealive-mcp (schema: 2025-09-29, version: 0.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.CodeCraftersLLC/local-voice-mcp (schema: 2025-09-29, version: 0.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.CodeLogicIncEngineering/codelogic-mcp-server (schema: 2025-09-29, version: 1.0.11)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.CursorTouch/Windows-MCP (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.DeanWard/HAL (schema: 2025-09-29, version: 1.0.14)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Decodo/mcp-web-scraper (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Defozo/ddc-ci-control-bridge (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Defozo/ddc-ci-control-bridge (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Defozo/ddc-ci-control-bridge (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Defozo/ddc-ci-control-bridge (schema: 2025-09-29, version: 1.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.DigitalDefiance/ts-mcp-debugger (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.DollhouseMCP/mcp-server (schema: 2025-10-17, version: 1.9.20)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.DollhouseMCP/mcp-server (schema: 2025-10-17, version: 1.9.23)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.DollhouseMCP/mcp-server (schema: 2025-10-17, version: 1.9.25)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Flightradar24/fr24api-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.GLips/Figma-Context-MCP (schema: 2025-09-29, version: 0.6.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.GabrielaHdzMicrosoft/mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.GitHub30/note-mcp-server (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.GitHub30/qiita-mcp-server (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.GitHub30/zenn-mcp-server (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.GoneTone/mcp-server-taiwan-weather (schema: 2025-09-29, version: 0.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.GoogleCloudPlatform/gemini-cloud-assist-mcp (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.HzaCode/onecite (schema: 2025-09-29, version: 0.0.11)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.IPv6/mcp-transcribe (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.Inflectra/mcp-server-spira (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Intina47/context-sync (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.IvanMurzak/Unity-MCP (schema: 2025-09-29, version: 0.17.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.IvanMurzak/Unity-MCP (schema: 2025-09-29, version: 0.17.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.IvanRublev/keyphrases-mcp (schema: 2025-09-29, version: 0.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.JustasMonkev/mcp-accessibility-scanner (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.JustinBeckwith/linkinator-mcp (schema: 2025-10-17, version: 0.2.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.JustinBeckwith/linkinator-mcp (schema: 2025-10-17, version: 0.2.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.KSAklfszf921/riksdag-regering-mcp (schema: 2025-10-17, version: 2.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.KSAklfszf921/skolverket-mcp (schema: 2025-10-17, version: 2.1.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.KSAklfszf921/skolverket-mcp (schema: 2025-10-17, version: 2.1.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.KSAklfszf921/skolverket-mcp (schema: 2025-10-17, version: 2.1.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Kastalien-Research/thoughtbox (schema: 2025-10-17, version: 1.0.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.KylinMountain/web-fetch-mcp (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Libres-coder/parseflow (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Libres-coder/parseflow (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.LinuxSuRen/atest-mcp-server (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Lungshot/ninjaone (schema: 2025-09-29, version: 1.2.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.Lyellr88/marm-mcp-server (schema: 2025-09-29, version: 2.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Lyellr88/marm-mcp-server (schema: 2025-09-29, version: 2.2.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Lyellr88/marm-mcp-server (schema: 2025-09-29, version: 2.2.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Lyellr88/marm-mcp-server (schema: 2025-09-29, version: 2.2.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Lyellr88/marm-mcp-server (schema: 2025-09-29, version: 2.2.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.MR901/mcp-plots (schema: 2025-09-29, version: 0.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.MR901/mcp-plots (schema: 2025-09-29, version: 0.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.MR901/plots-mcp (schema: 2025-09-29, version: 0.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.MasonChow/source-map-parser-mcp (schema: 2025-09-29, version: 1.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.MatanYemini/bitbucket-mcp (schema: 2025-10-17, version: 5.0.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.MauroDruwel/smartschool-mcp (schema: 2025-09-29, version: 0.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.MauroDruwel/smartschool-mcp (schema: 2025-09-29, version: 0.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.MusaddiqueHussainLabs/mhlabs_mcp_tools (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.MusaddiqueHussainLabs/mhlabs_mcp_tools (schema: 2025-10-17, version: 2.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.MusaddiqueHussainLabs/mhlabs_mcp_tools (schema: 2025-10-17, version: 3.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.NeerajG03/vector-memory (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.NeerajG03/vector-memory (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.NeerajG03/vector-memory (schema: 2025-09-29, version: 0.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.NeerajG03/vector-memory (schema: 2025-09-29, version: 0.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.NeerajG03/vector-memory (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.NeerajG03/vector-memory (schema: 2025-09-29, version: 0.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.NeerajG03/vector-memory (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.NeerajG03/vector-memory (schema: 2025-10-17, version: 0.4.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.11.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.8.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Nekzus/npm-sentinel-mcp (schema: 2025-09-29, version: 1.9.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.NitishGourishetty/contextual-mcp-server (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ONLYOFFICE/docspace (schema: 2025-10-17, version: 3.1.0)
   • [LINTER][ERROR] /packages/1/environmentVariables[2]: Default value "all" is not one of the available choices: [files, folders, rooms, people] (require-valid-default-choice)
   • [LINTER][ERROR] /packages/2/environmentVariables[2]: Default value "all" is not one of the available choices: [files, folders, rooms, people] (require-valid-default-choice)
   • [LINTER][ERROR] /packages/3/environmentVariables[2]: Default value "all" is not one of the available choices: [files, folders, rooms, people] (require-valid-default-choice)
   • [LINTER][ERROR] /packages/4/environmentVariables[2]: Default value "all" is not one of the available choices: [files, folders, rooms, people] (require-valid-default-choice)
   • [LINTER][ERROR] /packages/5/environmentVariables[2]: Default value "all" is not one of the available choices: [files, folders, rooms, people] (require-valid-default-choice)
   • [LINTER][ERROR] /packages/6/environmentVariables[2]: Default value "all" is not one of the available choices: [files, folders, rooms, people] (require-valid-default-choice)
   • [LINTER][ERROR] /remotes/0/headers[1]: Default value "all" is not one of the available choices: [files, folders, rooms, people] (require-valid-default-choice)
   • [LINTER][ERROR] /remotes/1/headers[1]: Default value "all" is not one of the available choices: [files, folders, rooms, people] (require-valid-default-choice)

io.github.OpenCageData/opencage-geocoding-mcp (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.OtherVibes/mcp-as-a-judge (schema: missing, version: 0.3.12)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.OtherVibes/mcp-as-a-judge (schema: missing, version: 0.3.13)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.OtherVibes/mcp-as-a-judge (schema: missing, version: 0.3.14)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.OtherVibes/mcp-as-a-judge (schema: 2025-09-29, version: 0.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.OtherVibes/mcp-as-a-judge (schema: missing, version: 0.3.20)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.OtherVibes/mcp-as-a-judge (schema: 2025-09-29, version: 0.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.PV-Bhat/vibe-check-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.PagerDuty/pagerduty-mcp (schema: 2025-09-29, version: 0.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.Pranavj17/mcp-server-graylog (schema: 2025-10-17, version: 1.0.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.Pranavj17/mcp-server-graylog (schema: 2025-10-17, version: 1.0.2)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.PrefectHQ/prefect-mcp-server (schema: 2025-10-17, version: 0.0.1-beta.7)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.PrefectHQ/prefect-mcp-server (schema: 2025-10-17, version: 0.0.1-beta.9)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ProfessionalWiki/mediawiki-mcp-server (schema: 2025-10-17, version: 0.2.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.PromptExecution/just-mcp (schema: 2025-10-17, version: 0.1.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.PyJudge/pdf4vllm (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.PyJudge/pdf4vllm (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Raistlin82/btp-sap-odata-to-mcp-server-optimized (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.SELISEdigitalplatforms/l0-py-blocks-mcp (schema: 2025-10-17, version: 0.1.0-beta.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.SELISEdigitalplatforms/l0-py-blocks-mcp (schema: 2025-10-17, version: 0.1.0-beta.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.SELISEdigitalplatforms/l0-py-blocks-mcp (schema: 2025-10-17, version: 1.0.0-beta.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.Saidiibrahim/search-papers (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.SamYuan1990/i18n-agent-action (schema: 2025-09-29, version: mcp)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8080, consider using {port} variable substitution (prefer-dynamic-port)

io.github.Selenium39/mcp-server-tempmail (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ShaftHQ/shaft-mcp (schema: 2025-10-17, version: 9.4.20251116)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ShingWong/node-server-orchestrator (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.SigNoz/signoz-mcp-server (schema: 2025-10-17, version: 0.0.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.SigNoz/signoz-mcp-server (schema: 2025-10-17, version: 0.0.4)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Skills03/scrimba-teaching (schema: missing, version: 1.0.1)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.Skills03/scrimba-teaching (schema: missing, version: 1.1.0)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.Skills03/scrimba-teaching (schema: missing, version: 1.2.0)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.Skills03/scrimba-teaching (schema: 2025-09-29, version: 2.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.SnowLeopard-AI/bigquery-mcp (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Snowflake-Labs/mcp (schema: 2025-09-29, version: 1.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.SonarSource/sonarqube-mcp-server (schema: 2025-09-29, version: 0.0.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.SonarSource/sonarqube-mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.Speeron-Polska/speeron-next (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.Synclub-tech/synclub-dxt (schema: 2025-09-29, version: 0.6.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.TharanaBope/sql-server-mcp (schema: 2025-10-17, version: 1.0.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.TharanaBope/sql-server-mcp-macos (schema: 2025-10-17, version: 1.0.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.TonySimonovsky/claude-code-conversation-search-mcp (schema: 2025-09-29, version: 1.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.TranThienTrong/asset-auto-generator (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.TranThienTrong/asset-auto-picker (schema: 2025-10-17, version: 1.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.VectifyAI/pageindex-mcp (schema: 2025-09-29, version: 1.6.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.VictoriaMetrics-Community/mcp-victorialogs (schema: 2025-09-29, version: 1.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.VictoriaMetrics-Community/mcp-victoriametrics (schema: 2025-09-29, version: 1.13.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.VictoriaMetrics-Community/mcp-victoriametrics (schema: 2025-09-29, version: 1.14.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.VictoriaMetrics-Community/mcp-victoriatraces (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.VictoriaMetrics-Community/mcp-victoriatraces (schema: 2025-09-29, version: 1.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.Wolfe-Jam/WJTTC (schema: 2025-10-17, version: 1.1.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Wolfe-Jam/claude-faf-mcp (schema: 2025-09-29, version: 2.6.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Wolfe-Jam/claude-faf-mcp (schema: 2025-10-17, version: 2.6.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Wolfe-Jam/claude-faf-mcp (schema: 2025-10-17, version: 3.1.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Wolfe-Jam/faf-mcp (schema: 2025-10-17, version: 1.1.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.Wolfe-Jam/grok-faf-mcp (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.YinTokey/mcp_hackernews (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.YinTokey/mcp_hackernews (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.YinTokey/mcp_hackernews (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.10)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.11)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.12)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.13)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.2)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.7)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-aktools (schema: 2025-10-17, version: 0.1.9)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-notify (schema: 2025-10-17, version: 0.1.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-notify (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-notify (schema: 2025-10-17, version: 0.1.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-notify (schema: 2025-10-17, version: 0.1.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-notify (schema: 2025-10-17, version: 0.1.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-notify (schema: 2025-10-17, version: 0.1.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-notify (schema: 2025-10-17, version: 0.1.7)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aahl/mcp-okx (schema: 2025-10-17, version: 0.1.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.abelljs/abell (schema: 2025-09-29, version: 0.0.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.abhijitjavelin/javelin-guardrails-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.abhishekbhakat/airflow-mcp-server (schema: 2025-09-29, version: 0.9.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.agentailor/slimcontext-mcp-server (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.agentailor/slimcontext-mcp-server (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aikts/yandex-tracker-mcp (schema: 2025-09-29, version: 0.4.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aikts/yandex-tracker-mcp (schema: 2025-09-16, version: 0.4.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aikts/yandex-tracker-mcp (schema: 2025-10-17, version: 0.4.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.aimoda/rigol-dho824-mcp (schema: 2025-10-17, version: 0.1.0-1.main.9ad1203)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.alex-feel/mcp-context-server (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.alex-feel/mcp-context-server (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.alex-feel/mcp-context-server (schema: 2025-09-29, version: 0.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.alex-feel/mcp-context-server (schema: 2025-09-29, version: 0.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.alex-feel/mcp-context-server (schema: 2025-09-29, version: 0.4.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.alondmnt/joplin-mcp (schema: 2025-09-29, version: 0.4.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.andrasfe/vulnicheck (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 3000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.antuelle78/weather-mcp (schema: missing, version: 1.0.0)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.antvis/mcp-server-chart (schema: 2025-09-29, version: 0.9.0-beta.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.antvis/mcp-server-chart (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.anyproto/anytype-mcp (schema: 2025-09-29, version: 1.0.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.appium/appium-mcp (schema: 2025-10-17, version: 1.1.16)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.appium/appium-mcp (schema: 2025-10-17, version: 1.1.17)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.appium/appium-mcp (schema: 2025-10-17, version: 1.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.appwrite/mcp-for-api (schema: 2025-09-29, version: 0.2.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.appwrite/mcp-for-api (schema: 2025-09-16, version: 0.2.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.arielbk/anki-mcp (schema: 2025-09-29, version: 0.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ariroffe72/zmanim-mcp-server (schema: 2025-10-17, version: 0.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.askman-dev/agent-never-give-up (schema: 2025-10-17, version: 0.1.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.augee99/mcp-weather (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.augmnt/augments-mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.augmnt/augments-mcp-server (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ax-platform/ax-platform (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.b1ff/atlassian-dc-mcp-bitbucket (schema: 2025-09-29, version: 0.9.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-bitbucket (schema: 2025-09-29, version: 0.9.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-bitbucket (schema: 2025-09-29, version: 0.9.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-bitbucket (schema: 2025-09-29, version: 0.9.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-confluence (schema: 2025-09-29, version: 0.9.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-confluence (schema: 2025-09-29, version: 0.9.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-confluence (schema: 2025-09-29, version: 0.9.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-confluence (schema: 2025-09-29, version: 0.9.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-jira (schema: 2025-09-29, version: 0.9.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-jira (schema: 2025-09-29, version: 0.9.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-jira (schema: 2025-09-29, version: 0.9.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.b1ff/atlassian-dc-mcp-jira (schema: 2025-09-29, version: 0.9.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.bajoski34/mcp-flutterwave (schema: 2025-09-29, version: 1.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.bellvijay/weather (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.benhuang21828/pdfkit (schema: 2025-10-17, version: 1.0.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.benhuang21828/pdfkit (schema: 2025-10-17, version: 1.0.2)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.bharath-krishna/mcp-test (schema: 2025-10-17, version: 0.1.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.bitrix24/bitrix-mcp-rest (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.brain-bbqs/neuro (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.brain-bbqs/neuro-mcp (schema: 2025-10-17, version: 1.1.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.10)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.24)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.30)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.31)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.32)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.33)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.34)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.35)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.36)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.37)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.38)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.39)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.40)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.41)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.42)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.43)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.44)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.45)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.46)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.47)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.48)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.49)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.50)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.51)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.52)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.53)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.54)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.brave/brave-search-mcp-server (schema: 2025-09-29, version: 2.0.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.browserbase/mcp-server-browserbase (schema: 2025-09-29, version: 2.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.buildkite/buildkite-mcp-server (schema: 2025-09-29, version: 0.7.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.burningion/video-editing-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.burningion/video-editing-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.byrness/weather (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.byrness/weather (schema: 2025-10-17, version: 1.0.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.byrness/weather (schema: 2025-10-17, version: 1.0.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.byrness/weather (schema: 2025-10-17, version: 1.0.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.byrness/weather (schema: 2025-10-17, version: 1.0.7)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.byrness/weather (schema: 2025-10-17, version: 1.0.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.bytedance/mcp-server-browser (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [SCHEMA][ERROR] /packages/1/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [SCHEMA][ERROR] /packages/1/transport/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "stdio" (#/definitions/StdioTransport/properties/type/enum) [enum@/packages/*/transport/type]
   • [SCHEMA][ERROR] /packages/1/transport/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "streamable-http" (#/properties/type/enum) [enum@/packages/*/transport/type]
   • [SCHEMA][ERROR] /packages/1/transport/url: Must match format "uri" (#/properties/url/format) [format@/packages/*/transport/url]
   • [SCHEMA][ERROR] /packages/1/transport: Must match a schema in anyOf (#/properties/transport/anyOf) [anyOf@/packages/*/transport]
   • [SCHEMA][ERROR] /packages/2/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Named argument "browser" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/0/packageArguments[1]: Named argument "cdp-endpoint" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/0/packageArguments[2]: Named argument "ws-endpoint" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/0/packageArguments[3]: Named argument "executable-path" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/0/packageArguments[4]: Named argument "output-dir" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/0/packageArguments[5]: Named argument "proxy-bypass" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/0/packageArguments[6]: Named argument "proxy-server" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/0/packageArguments[7]: Named argument "vision" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[0]: Named argument "port" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[1]: Named argument "browser" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[2]: Named argument "cdp-endpoint" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[3]: Named argument "ws-endpoint" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[4]: Named argument "executable-path" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[5]: Named argument "output-dir" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[6]: Named argument "proxy-bypass" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[7]: Named argument "proxy-server" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[8]: Named argument "vision" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[0]: Named argument "port" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[1]: Named argument "browser" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[2]: Named argument "cdp-endpoint" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[3]: Named argument "ws-endpoint" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[4]: Named argument "executable-path" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[5]: Named argument "output-dir" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[6]: Named argument "proxy-bypass" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[7]: Named argument "proxy-server" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[8]: Named argument "vision" should start with "--" or "-" (require-args-leading-dashes)

io.github.bytedance/mcp-server-commands (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [SCHEMA][ERROR] /packages/1/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [SCHEMA][ERROR] /packages/1/transport/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "stdio" (#/definitions/StdioTransport/properties/type/enum) [enum@/packages/*/transport/type]
   • [SCHEMA][ERROR] /packages/1/transport/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "streamable-http" (#/properties/type/enum) [enum@/packages/*/transport/type]
   • [SCHEMA][ERROR] /packages/1/transport/url: Must match format "uri" (#/properties/url/format) [format@/packages/*/transport/url]
   • [SCHEMA][ERROR] /packages/1/transport: Must match a schema in anyOf (#/properties/transport/anyOf) [anyOf@/packages/*/transport]
   • [SCHEMA][ERROR] /packages/2/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Named argument "cwd" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[0]: Named argument "cwd" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[1]: Named argument "port" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/runtimeArguments[0]: Named argument "cwd" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[0]: Named argument "port" should start with "--" or "-" (require-args-leading-dashes)

io.github.bytedance/mcp-server-filesystem (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [SCHEMA][ERROR] /packages/1/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [SCHEMA][ERROR] /packages/1/transport/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "stdio" (#/definitions/StdioTransport/properties/type/enum) [enum@/packages/*/transport/type]
   • [SCHEMA][ERROR] /packages/1/transport/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "streamable-http" (#/properties/type/enum) [enum@/packages/*/transport/type]
   • [SCHEMA][ERROR] /packages/1/transport/url: Must match format "uri" (#/properties/url/format) [format@/packages/*/transport/url]
   • [SCHEMA][ERROR] /packages/1/transport: Must match a schema in anyOf (#/properties/transport/anyOf) [anyOf@/packages/*/transport]
   • [SCHEMA][ERROR] /packages/2/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Named argument "allowed-directories" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[0]: Named argument "allowed-directories" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[1]: Named argument "port" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[0]: Named argument "allowed-directories" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[1]: Named argument "port" should start with "--" or "-" (require-args-leading-dashes)

io.github.bytedance/mcp-server-search (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [SCHEMA][ERROR] /packages/1/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [SCHEMA][ERROR] /packages/1/transport/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "stdio" (#/definitions/StdioTransport/properties/type/enum) [enum@/packages/*/transport/type]
   • [SCHEMA][ERROR] /packages/1/transport/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "streamable-http" (#/properties/type/enum) [enum@/packages/*/transport/type]
   • [SCHEMA][ERROR] /packages/1/transport/url: Must match format "uri" (#/properties/url/format) [format@/packages/*/transport/url]
   • [SCHEMA][ERROR] /packages/1/transport: Must match a schema in anyOf (#/properties/transport/anyOf) [anyOf@/packages/*/transport]
   • [SCHEMA][ERROR] /packages/2/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Named argument "engine" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/0/packageArguments[1]: Named argument "api-key" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/0/packageArguments[2]: Named argument "base-url" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[0]: Named argument "engine" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[1]: Named argument "api-key" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[2]: Named argument "base-url" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/1/packageArguments[3]: Named argument "port" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[0]: Named argument "engine" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[1]: Named argument "api-key" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[2]: Named argument "base-url" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[3]: Named argument "port" should start with "--" or "-" (require-args-leading-dashes)

io.github.cameroncooke/XcodeBuildMCP (schema: 2025-09-29, version: 1.12.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cameroncooke/XcodeBuildMCP (schema: 2025-09-29, version: 1.12.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.carlisia/mcp-factcheck (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.chris-schra/mcp-funnel (schema: 2025-09-29, version: 0.0.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.chris-schra/mcp-funnel (schema: 2025-09-29, version: 0.0.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.clappia-dev/clappia-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.clappia-dev/clappia-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.cloudquery/mcp (schema: 2025-09-29, version: 1.6.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/3: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/4: Must have required property 'version' (#/required) [required@/packages/*]

io.github.cloudquery/mcp (schema: 2025-09-29, version: 1.6.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/3: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/4: Must have required property 'version' (#/required) [required@/packages/*]

io.github.cloudquery/mcp (schema: 2025-09-29, version: 1.6.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/3: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/4: Must have required property 'version' (#/required) [required@/packages/*]

io.github.cmd8/excalidraw-mcp (schema: 2025-10-17, version: 1.1.1)
   • [SCHEMA][ERROR] /packages/0/packageArguments/0/type: Must be equal to one of the allowed values. Got: "", expected one of: "positional" (#/allOf/1/properties/type/enum) [enum@/packages/*/packageArguments/*/type]
   • [SCHEMA][ERROR] /packages/0/packageArguments/0/type: Must be equal to one of the allowed values. Got: "", expected one of: "named" (#/allOf/1/properties/type/enum) [enum@/packages/*/packageArguments/*/type]
   • [SCHEMA][ERROR] /packages/0/packageArguments/0: Must match a schema in anyOf (#/anyOf) [anyOf@/packages/*/packageArguments/*]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Named argument "diagram" should start with "--" or "-" (require-args-leading-dashes)

io.github.cmd8/excalidraw-mcp (schema: 2025-10-17, version: 1.2.0)
   • [SCHEMA][ERROR] /packages/0/packageArguments/0/type: Must be equal to one of the allowed values. Got: "", expected one of: "positional" (#/allOf/1/properties/type/enum) [enum@/packages/*/packageArguments/*/type]
   • [SCHEMA][ERROR] /packages/0/packageArguments/0/type: Must be equal to one of the allowed values. Got: "", expected one of: "named" (#/allOf/1/properties/type/enum) [enum@/packages/*/packageArguments/*/type]
   • [SCHEMA][ERROR] /packages/0/packageArguments/0: Must match a schema in anyOf (#/anyOf) [anyOf@/packages/*/packageArguments/*]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Named argument "diagram" should start with "--" or "-" (require-args-leading-dashes)

io.github.cmpxchg16/mcp-ethical-hacking (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cmpxchg16/mcp-ethical-hacking (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cmpxchg16/mcp-ethical-hacking (schema: 2025-09-29, version: 1.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cmpxchg16/mcp-ethical-hacking (schema: 2025-09-29, version: 1.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cmpxchg16/mcp-ethical-hacking (schema: 2025-09-29, version: 1.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.colabfit/colabfit-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.compl-i-agent/csf (schema: 2025-09-29, version: 2.4.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.compl-i-agent/csf (schema: 2025-09-29, version: 2.4.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.containers/kubernetes-mcp-server (schema: 2025-09-29, version: 0.0.50)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.containers/kubernetes-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.copyleftdev/fabric-atelier (schema: 2025-09-16, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.copyleftdev/fabric-atelier (schema: 2025-09-16, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.copyleftdev/fabric-atelier (schema: 2025-09-16, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cornelcroi/bookmark-lens (schema: 2025-10-17, version: 0.0.7)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cornelcroi/context-lens (schema: 2025-10-17, version: 0.1.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cornelcroi/context-lens (schema: 2025-10-17, version: 0.1.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cornelcroi/context-lens (schema: 2025-10-17, version: 0.1.7)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cornelcroi/context-lens (schema: 2025-10-17, version: 0.1.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.cr7258/elasticsearch-mcp-server (schema: 2025-09-29, version: 2.0.12)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.cr7258/elasticsearch-mcp-server (schema: 2025-09-29, version: 2.0.14)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.cr7258/elasticsearch-mcp-server (schema: 2025-09-29, version: 2.0.15)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.croit/mcp-croit-ceph (schema: 2025-09-29, version: 0.2.16)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.cyanheads/clinicaltrialsgov-mcp-server (schema: 2025-09-29, version: 1.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/clinicaltrialsgov-mcp-server (schema: 2025-09-29, version: 1.2.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/clinicaltrialsgov-mcp-server (schema: 2025-09-29, version: 1.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/clinicaltrialsgov-mcp-server (schema: 2025-09-29, version: 1.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/clinicaltrialsgov-mcp-server (schema: 2025-09-29, version: 1.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/clinicaltrialsgov-mcp-server (schema: 2025-09-29, version: 1.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.3.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.3.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.4.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.4.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.4.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.4.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.4.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.5.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.5.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-09-29, version: 2.5.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-10-17, version: 2.5.5)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-10-17, version: 2.5.6)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-10-17, version: 2.5.7)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/git-mcp-server (schema: 2025-10-17, version: 2.5.8)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3015, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.1.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.1.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.1.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.2.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.2.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.2.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.2.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.2.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.2.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.3.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.3.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.3.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.3.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.3.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.3.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.4.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.4.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.4.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.4.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-09-29, version: 2.4.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-10-17, version: 2.5.3)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-10-17, version: 2.5.4)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-10-17, version: 2.5.6)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/mcp-ts-template (schema: 2025-10-17, version: 2.5.7)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/protein-mcp-server (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/pubmed-mcp-server (schema: 2025-09-29, version: 1.4.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3017, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/pubmed-mcp-server (schema: 2025-09-29, version: 1.4.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3017, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/survey-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/survey-mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/survey-mcp-server (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/survey-mcp-server (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/survey-mcp-server (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/survey-mcp-server (schema: 2025-09-29, version: 1.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.cyanheads/survey-mcp-server (schema: 2025-09-29, version: 1.0.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3010, consider using {port} variable substitution (prefer-dynamic-port)

io.github.davidalbertonogueira/redshift-mcp-server (schema: 2025-10-17, version: 1.0.5)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dba-i/mssql-dba (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.delorenj/mcp-server-trello (schema: 2025-09-29, version: 1.5.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.delorenj/mcp-server-trello (schema: 2025-09-29, version: 1.5.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 0.1.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 0.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 0.4.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 1.1.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 1.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 1.2.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 1.3.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dgahagan/weather-mcp (schema: 2025-10-17, version: 1.6.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dinesh-nalla-se/chrome-devtools-mcp (schema: 2025-10-17, version: 0.10.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dockersamples/mcp-docker-release-information (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dockersamples/mcp-docker-release-information (schema: 2025-09-29, version: 0.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.domdomegg/airtable-mcp-server (schema: 2025-09-29, version: 1.7.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.domdomegg/airtable-mcp-server (schema: 2025-09-29, version: 1.7.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.domdomegg/airtable-mcp-server (schema: 2025-10-17, version: 1.9.4)
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.domdomegg/airtable-mcp-server (schema: 2025-10-17, version: 1.9.5)
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.domdomegg/time-mcp-nuget (schema: 2025-09-29, version: 1.0.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.domdomegg/time-mcp-nuget (schema: 2025-10-17, version: 1.1.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.domdomegg/time-mcp-pypi (schema: 2025-09-29, version: 1.0.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.domdomegg/time-mcp-pypi (schema: 2025-10-17, version: 1.1.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.dubuqingfeng/gitlab-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.dubuqingfeng/gitlab-mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.dynatrace-oss/Dynatrace-mcp (schema: 2025-09-29, version: 0.6.0-rc.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.dynatrace-oss/Dynatrace-mcp (schema: 2025-09-29, version: 0.6.0-rc.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.dynatrace-oss/Dynatrace-mcp (schema: 2025-09-29, version: 0.9.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.dynatrace-oss/Dynatrace-mcp (schema: 2025-09-29, version: 0.9.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.dynatrace-oss/Dynatrace-mcp (schema: 2025-09-29, version: 0.9.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.easytocloud/mac-letterhead (schema: 2025-09-29, version: 0.13.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0/packageArguments/0/type: Must be equal to one of the allowed values. Got: "", expected one of: "positional" (#/allOf/1/properties/type/enum) [enum@/packages/*/packageArguments/*/type]
   • [SCHEMA][ERROR] /packages/0/packageArguments/0: Must have required property 'name' (#/allOf/1/required) [required@/packages/*/packageArguments/*]
   • [SCHEMA][ERROR] /packages/0/packageArguments/0/type: Must be equal to one of the allowed values. Got: "", expected one of: "named" (#/allOf/1/properties/type/enum) [enum@/packages/*/packageArguments/*/type]
   • [SCHEMA][ERROR] /packages/0/packageArguments/0: Must match a schema in anyOf (#/anyOf) [anyOf@/packages/*/packageArguments/*]

io.github.eat-pray-ai/yutu (schema: 2025-10-17, version: v0.10.4-dev)
   • [LINTER][WARNING] /packages/0/runtimeArguments[2]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8216, consider using {port} variable substitution (prefer-dynamic-port)

io.github.eat-pray-ai/yutu (schema: 2025-10-17, version: v0.10.4-dev1)
   • [LINTER][WARNING] /packages/0/runtimeArguments[2]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8216, consider using {port} variable substitution (prefer-dynamic-port)

io.github.eat-pray-ai/yutu (schema: 2025-10-17, version: v0.10.4-dev2)
   • [LINTER][WARNING] /packages/0/runtimeArguments[2]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8216, consider using {port} variable substitution (prefer-dynamic-port)

io.github.edrich13/mcp-jira-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.eghuzefa/engineer-your-data (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.eghuzefa/engineer-your-data (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.eghuzefa/engineer-your-data (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.eghuzefa/engineer-your-data (schema: 2025-09-29, version: 0.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.elpadev/sample-mcp-server-python-package (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.0.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.0.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.0.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.esrisaudiarabia/arcgis-mcp-server (schema: 2025-09-29, version: 1.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.estruyf/vscode-demo-time (schema: 2025-09-29, version: 0.0.55)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.fengcl/mcp-sse-demo-02 (schema: 2025-09-16, version: 0.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.fkom13/gencodedoc (schema: 2025-10-17, version: 2.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.fkom13/gencodedoc (schema: 2025-10-17, version: 2.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.fkom13/mcp-sftp-orchestrator (schema: 2025-10-17, version: 8.0.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.flarco/sling-cli (schema: 2025-09-29, version: 1.4.24)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.fliptheweb/yazio-mcp (schema: 2025-09-29, version: 0.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.fliptheweb/yazio-mcp (schema: 2025-09-29, version: 0.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.florentine-ai/mcp (schema: 2025-09-29, version: 0.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.florentine-ai/mcp (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.florentine-ai/mcp (schema: 2025-09-29, version: 0.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.formulahendry/code-runner (schema: 2025-09-29, version: 0.1.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.formulahendry/code-runner (schema: 2025-09-29, version: 0.1.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.formulahendry/mcp-server-mcp-registry (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.formulahendry/spec-driven-development (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.francisco-perez-sorrosal/cv (schema: 2025-09-29, version: 0.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.francisco-perez-sorrosal/cv (schema: 2025-09-29, version: 0.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.gander-tools/osm-tagging-schema-mcp (schema: 2025-10-17, version: 3.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.gattjoe/ACMS (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8765, consider using {port} variable substitution (prefer-dynamic-port)

io.github.gattjoe/ACMS (schema: 2025-10-17, version: 0.0.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8765, consider using {port} variable substitution (prefer-dynamic-port)

io.github.gattjoe/ACMS (schema: 2025-10-17, version: 0.0.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8765, consider using {port} variable substitution (prefer-dynamic-port)

io.github.gattjoe/ACMS (schema: 2025-10-17, version: 0.0.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8765, consider using {port} variable substitution (prefer-dynamic-port)

io.github.gattjoe/ACMS (schema: 2025-10-17, version: 0.0.7)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8765, consider using {port} variable substitution (prefer-dynamic-port)

io.github.gattjoe/ACMS (schema: 2025-10-17, version: 0.0.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8765, consider using {port} variable substitution (prefer-dynamic-port)

io.github.gauravfs-14/lit-mcp (schema: 2025-09-29, version: 0.1.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.gauravfs-14/lit-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ggozad/haiku-rag (schema: 2025-09-29, version: 0.11.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ggozad/haiku-rag (schema: 2025-09-29, version: 0.12.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ghostsecurity/ghost-mcp-server (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ghostsecurity/ghost-mcp-server (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.github/github-mcp-server (schema: 2025-09-29, version: 0.16.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.github/github-mcp-server (schema: 2025-09-29, version: 0.17.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.github/github-mcp-server (schema: 2025-09-29, version: 0.17.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.github/github-mcp-server (schema: 2025-09-29, version: 0.18.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.github/github-mcp-server (schema: 2025-10-17, version: 0.20.0)
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[1]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[3]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[4]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.github/github-mcp-server (schema: 2025-10-17, version: 0.20.1)
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[1]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[3]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[4]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.github/github-mcp-server (schema: 2025-10-17, version: 0.20.2)
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[1]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[3]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[4]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.github/github-mcp-server (schema: 2025-10-17, version: 0.21.0)
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[1]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[3]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[4]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.gjeltep/app-store-connect-mcp (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.gjeltep/app-store-connect-mcp (schema: 2025-09-16, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.goldbergyoni/test-coverage-mcp (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.goldbergyoni/test-coverage-mcp (schema: 2025-10-17, version: 1.1.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.goodfel10w/welcome-text-generator-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.goreleaser/mcp (schema: 2025-10-17, version: 0.1.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.goreleaser/mcp (schema: 2025-10-17, version: 0.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.goreleaser/mcp (schema: 2025-10-17, version: 0.2.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.goreleaser/mcp (schema: 2025-10-17, version: 0.2.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.goreleaser/mcp (schema: 2025-10-17, version: 0.3.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.gradion-ai/ipybox (schema: 2025-09-29, version: 0.6.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.gradion-ai/ipybox (schema: 2025-09-29, version: 0.6.3-p1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.gradion-ai/ipybox (schema: 2025-09-29, version: 0.6.3-p2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.gradion-ai/ipybox (schema: 2025-09-29, version: 0.6.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.gradion-ai/ipybox (schema: 2025-09-29, version: 0.6.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.gradion-ai/ipybox (schema: 2025-10-17, version: 0.6.7)
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.gradion-ai/ipybox (schema: 2025-09-29, version: auto)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/packageArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.grafana/mcp-grafana (schema: 2025-09-29, version: v0.7.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.grafana/mcp-grafana (schema: 2025-09-29, version: v0.7.7-rc.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.grupo-avispa/dsr_mcp_server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.grupo-avispa/dsr_mcp_server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.guanqun-yang/mcp-server-r-counter (schema: 2025-09-29, version: 0.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.habedi/omni-lpr (schema: 2025-09-29, version: 0.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.habedi/omni-lpr (schema: 2025-10-17, version: 0.3.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.hellocoop/admin-mcp (schema: 2025-09-29, version: 1.5.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.henilcalagiya/google-sheets-mcp (schema: 2025-09-29, version: 0.1.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.henilcalagiya/mcp-apple-notes (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.himorishige/hatago-mcp-hub (schema: 2025-09-29, version: 0.0.12)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.himorishige/hatago-mcp-hub (schema: 2025-09-29, version: 0.0.13)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.himorishige/hatago-mcp-hub (schema: 2025-09-29, version: 0.0.14)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.himorishige/hatago-mcp-hub (schema: 2025-09-29, version: 0.0.15)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.himorishige/hatago-mcp-hub (schema: 2025-09-29, version: 0.0.16)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 3.4.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 3.5.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 3.5.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 3.6.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 3.6.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 3.6.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 3.7.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.1.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.10.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.11.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.11.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.3.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.4.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.5.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.6.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.7.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.7.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.7.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.7.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.7.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.7.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.7.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.7.7)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.8.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.8.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.8.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.8.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.8.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.8.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.homeassistant-ai/ha-mcp (schema: 2025-10-17, version: 4.9.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.humanjesse/textarttools-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.hummingbot/mcp (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.huoshuiai42/huoshui-fetch (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.huoshuiai42/huoshui-file-converter (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.huoshuiai42/huoshui-file-search (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.huoshuiai42/huoshui-pdf-converter (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.huoshuiai42/huoshui-pdf-translator (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.idjohnson/vikunjamcp (schema: 2025-09-29, version: 1.0.26)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.iggredible/vim-mcp (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.imbenrabi/financial-modeling-prep-mcp-server (schema: 2025-09-29, version: 2.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.imbenrabi/financial-modeling-prep-mcp-server (schema: 2025-09-29, version: 2.5.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.indragiek/uniprof (schema: 2025-09-29, version: 0.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.indragiek/uniprof (schema: 2025-09-29, version: 0.3.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.isakskogstad/kolada-mcp (schema: 2025-10-17, version: 2.2.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

io.github.isakskogstad/oecd-mcp (schema: 2025-10-17, version: 3.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

io.github.isakskogstad/scb-mcp (schema: 2025-10-17, version: 2.5.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.isamu/mulmocast-vision (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.iworkist/btcmcp (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jamesmontemagno/monkeymcp (schema: 2025-09-29, version: 2.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jcucci/dotnet-sherlock-mcp (schema: 2025-09-29, version: 2.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jfrog/jfrog-mcp-server (schema: 2025-10-17, version: 0.1.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.jfrog/jfrog-mcp-server (schema: 2025-10-17, version: 0.1.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.jgador/websharp (schema: 2025-09-29, version: v0.99.0-rc2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8081, consider using {port} variable substitution (prefer-dynamic-port)

io.github.jjlabsio/korea-stock-mcp (schema: 2025-09-29, version: 1.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.jkakar/cookwith-mcp (schema: missing, version: 1.0.0)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.jkakar/cookwith-mcp (schema: missing, version: 1.0.1)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.jkakar/cookwith-mcp (schema: missing, version: 1.0.2)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.jkakar/recipe-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkakar/recipe-mcp (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkakar/recipe-mcp (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkakar/recipe-mcp (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkawamoto/mcp-bear (schema: 2025-09-29, version: 0.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.jkawamoto/mcp-florence2 (schema: 2025-09-29, version: 0.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkawamoto/mcp-florence2 (schema: 2025-09-29, version: 0.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkawamoto/mcp-florence2 (schema: 2025-10-17, version: 0.3.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkawamoto/mcp-youtube-transcript (schema: 2025-09-29, version: 0.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkawamoto/mcp-youtube-transcript (schema: 2025-09-29, version: 0.5.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkawamoto/mcp-youtube-transcript (schema: 2025-09-29, version: 0.5.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkawamoto/mcp-youtube-transcript (schema: 2025-09-29, version: 0.5.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkawamoto/mcp-youtube-transcript (schema: 2025-09-29, version: 0.5.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkawamoto/mcp-youtube-transcript (schema: 2025-09-29, version: 0.5.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jkawamoto/mcp-youtube-transcript (schema: 2025-10-17, version: 0.5.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.joelverhagen/Knapcode.SampleMcpServer (schema: 2025-09-29, version: 0.7.0-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.jonathanhefner/hello-mcp-registry (schema: 2025-10-17, version: 0.1.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.josefdc/uniprot-mcp (schema: 2025-10-17, version: 0.1.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.joshmsimpson/exiftool (schema: 2025-09-16, version: 0.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.joshmsimpson/exiftool (schema: 2025-09-16, version: 0.1.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jztan/redmine-mcp-server (schema: 2025-09-29, version: 0.4.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.jztan/redmine-mcp-server (schema: 2025-09-29, version: 0.4.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0/environmentVariables/5/format: Must be equal to one of the allowed values. Got: "integer", expected one of: "string", "number", "boolean", "filepath" (#/definitions/Input/properties/format/enum) [enum@/packages/*/environmentVariables/*/format]
   • [SCHEMA][ERROR] /packages/0/environmentVariables/7/format: Must be equal to one of the allowed values. Got: "integer", expected one of: "string", "number", "boolean", "filepath" (#/definitions/Input/properties/format/enum) [enum@/packages/*/environmentVariables/*/format]
   • [SCHEMA][ERROR] /packages/0/environmentVariables/10/format: Must be equal to one of the allowed values. Got: "integer", expected one of: "string", "number", "boolean", "filepath" (#/definitions/Input/properties/format/enum) [enum@/packages/*/environmentVariables/*/format]
   • [SCHEMA][ERROR] /packages/0/environmentVariables/11/format: Must be equal to one of the allowed values. Got: "integer", expected one of: "string", "number", "boolean", "filepath" (#/definitions/Input/properties/format/enum) [enum@/packages/*/environmentVariables/*/format]

io.github.karanb192/reddit-buddy-mcp (schema: 2025-09-29, version: 1.0.6-test.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.karanb192/reddit-buddy-mcp (schema: 2025-09-29, version: 1.0.6-test.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.karanb192/reddit-mcp-buddy (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.karanb192/reddit-mcp-buddy (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.karanb192/reddit-mcp-buddy (schema: 2025-09-29, version: 1.1.10)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.karanb192/reddit-mcp-buddy (schema: 2025-09-29, version: 1.1.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.karanb192/reddit-mcp-buddy (schema: 2025-09-29, version: 1.1.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.kayembahamid/cybersim-pro (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.kemalersin/fonparam-mcp (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.kesslerio/attio-mcp-server (schema: 2025-09-29, version: 1.1.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.kevincogan/demo-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.kevincogan/demo-mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.kevincogan/demo-mcp-server (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.kevincogan/demo-mcp-server (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.kevincogan/demo-mcp-server (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.kevinkells/datagraph (schema: 2025-10-17, version: 1.1.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.kevint-cerebras/cerebras-code-mcp (schema: 2025-09-29, version: 1.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.khaoss85/orchestro (schema: 2025-09-29, version: 2.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.king-of-the-grackles/reddit-research-mcp (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.kirbah/mcp-youtube (schema: 2025-09-29, version: 0.2.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.kkjdaniel/bgg-mcp (schema: 2025-09-29, version: 1.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.kkjdaniel/bgg-mcp (schema: 2025-09-29, version: 1.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.kmalakoff/mcp-pdf (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.kmalakoff/mcp-pdf (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.kmalakoff/mcp-pdf (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.koki-develop/esa-mcp-server (schema: 2025-09-29, version: 0.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.kontent-ai/mcp-server (schema: 2025-10-17, version: 0.21.10)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3001, consider using {port} variable substitution (prefer-dynamic-port)

io.github.kontent-ai/mcp-server (schema: 2025-10-17, version: 0.21.11)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3001, consider using {port} variable substitution (prefer-dynamic-port)

io.github.kontent-ai/mcp-server (schema: 2025-10-17, version: 0.21.9)
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 3001, consider using {port} variable substitution (prefer-dynamic-port)

io.github.lapfelix/xcodemcp (schema: 2025-09-29, version: 2.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.lapfelix/xcodemcp (schema: 2025-09-29, version: 2.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.lemonadolabs/lemonado-mcp-server (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.leshchenko1979/fast-mcp-telegram (schema: 2025-09-29, version: 0.4.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.leshchenko1979/fast-mcp-telegram (schema: 2025-09-29, version: 0.4.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.leshchenko1979/fast-mcp-telegram (schema: 2025-09-29, version: 0.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.linxule/lotus-wisdom (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.linxule/lotus-wisdom (schema: 2025-10-17, version: 0.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.linxule/lotus-wisdom (schema: 2025-10-17, version: 0.2.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.localstack/localstack-mcp-server (schema: 2025-09-29, version: 0.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.luongnv89/mitre-mcp (schema: 2025-10-17, version: 0.3.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.luw2007/skim-mcp-server (schema: 2025-10-17, version: 1.0.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.macuse-app/macuse (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.mapbox/mcp-server (schema: 2025-09-16, version: 0.5.4-dev-5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.mapbox/mcp-server (schema: 2025-09-16, version: 0.5.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.marianfoo/mcp-sap-docs (schema: 2025-09-29, version: 0.3.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.marlenezw/publish-mcp-server (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.marlenezw/publish-mcp-server (schema: 2025-09-29, version: 0.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.marshally/mcp-refactoring (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.martymarkenson/postgres-connector (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.martymarkenson/postgres-connector (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.martymarkenson/postgres-connector (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.mazemax/mindvalley-products-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.mcp-fortress/mcp-fortress (schema: 2025-10-17, version: 0.3.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.mcp-fortress/mcp-fortress (schema: 2025-10-17, version: 0.3.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.mcp-fortress/mcp-fortress (schema: 2025-10-17, version: 0.3.6)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.mcp-z/mcp-pdf (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.mcp-z/mcp-pdf (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.mcp-z/mcp-pdf (schema: 2025-09-29, version: 1.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.mcpcentral-io/mcp-time (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.meloncafe/chromadb-remote-mcp (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][ERROR] /packages/0/runtimeArguments[1]: Template contains variables without definitions: MCP_AUTH_TOKEN (no-template-variables-missing)

io.github.meloncafe/chromadb-remote-mcp (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][ERROR] /packages/0/runtimeArguments[1]: Template contains variables without definitions: MCP_AUTH_TOKEN (no-template-variables-missing)

io.github.mfukushim/map-traveler-mcp (schema: 2025-09-29, version: 0.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.mgaruccio/openapi-navigator (schema: 2025-10-17, version: 0.5.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.mia-platform/console-mcp-server (schema: 2025-10-17, version: 1.2.2)
   • [LINTER][ERROR] /packages/0/runtimeArguments[3]: Template contains variables without definitions: mia-platform-client-id (no-template-variables-missing)
   • [LINTER][ERROR] /packages/0/runtimeArguments[4]: Template contains variables without definitions: mia-platform-client-secret (no-template-variables-missing)
   • [LINTER][WARNING] /packages/0/runtimeArguments[3]: Defined variables not used in template: token (no-unused-variables)
   • [LINTER][WARNING] /packages/0/runtimeArguments[4]: Defined variables not used in template: token (no-unused-variables)
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[1]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[3]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[4]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[5]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[6]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[7]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[8]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/runtimeArguments[9]: Field with 'value' should not have: isRequired - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.mickymultani/crypto-bytes (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.microsoft/EnterpriseMCP (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.mobile-next/mobile-mcp (schema: 2025-09-29, version: 0.0.26)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.mobile-next/mobile-mcp (schema: 2025-09-29, version: 0.0.31)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.moonolgerd/game-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.morinokami/astro-mcp (schema: 2025-09-29, version: 0.4.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 4321, consider using {port} variable substitution (prefer-dynamic-port)

io.github.motherduckdb/mcp-server-motherduck (schema: 2025-09-29, version: 0.6.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.motherduckdb/mcp-server-motherduck (schema: 2025-09-29, version: 0.7.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.motherduckdb/mcp-server-motherduck (schema: 2025-09-29, version: 0.7.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.motherduckdb/mcp-server-motherduck (schema: 2025-09-29, version: 0.7.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.msenol/gorev (schema: 2025-09-29, version: 0.16.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.n0zer0d4y/athena-protocol (schema: 2025-10-17, version: 0.1.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.n0zer0d4y/mercury-spec-ops (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.n0zer0d4y/vulcan-file-ops (schema: 2025-10-17, version: 1.1.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.nailuoGG/anki-mcp-server (schema: 2025-09-29, version: 0.1.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.nathishdev-netizen/dida-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.nathishdev-netizen/dida-mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.nathishdev-netizen/dida-mcp-server (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.nerfels/mind-map (schema: 2025-09-29, version: 1.12.13)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.nesquikm/rubber-duck (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.netdata/mcp-server (schema: 2025-09-29, version: 2.7.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.netdata/mcp-server (schema: 2025-09-29, version: 2.7.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.netdata/mcp-server (schema: 2025-09-29, version: 2.7.1-1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.neverinfamous/memory-journal-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.neverinfamous/memory-journal-mcp (schema: 2025-09-29, version: 1.1.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.neverinfamous/postgres-mcp-server (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.neverinfamous/sqlite-mcp-server (schema: 2025-09-29, version: 2.6.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.neverinfamous/sqlite-mcp-server (schema: 2025-09-29, version: 2.6.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.nickzren/opentargets (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.nickzren/opentargets (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.nigue3025/tw-cwa-weather-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.niradler/dependency-mcp (schema: 2025-10-17, version: 0.0.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.njlnaet/coderswap-mcp-server (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.noahgift/depyler-mcp (schema: 2025-09-29, version: 3.4.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.noahgift/pmcp (schema: 2025-09-29, version: 1.6.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.noahgift/ruchy-mcp (schema: 2025-09-29, version: 3.67.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.nowledge-co/server.json (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.nrwl/nx-console (schema: 2025-09-29, version: 0.6.12)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.oguzc/playwright-wizard-mcp (schema: 2025-09-29, version: 0.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.oguzc/playwright-wizard-mcp (schema: 2025-09-29, version: 0.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.oguzc/playwright-wizard-mcp (schema: 2025-09-29, version: 0.1.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.olostep/olostep-mcp-server (schema: 2025-09-29, version: 1.0.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ooples/mcp-console-automation (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ooples/mcp-console-automation (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.opencontext-team/mcp-server (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.overstarry/qweather-mcp (schema: 2025-09-29, version: 1.0.12)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.p1va/symbols (schema: 2025-09-29, version: 0.0.11)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.p1va/symbols (schema: 2025-09-29, version: 0.0.12)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.p1va/symbols (schema: 2025-09-29, version: 0.0.13)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.p1va/symbols (schema: 2025-09-29, version: 0.0.14)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.p1va/symbols (schema: 2025-10-17, version: 0.0.17)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.p1va/symbols (schema: 2025-10-17, version: 0.0.18)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.p1va/symbols (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.pab1it0/prometheus-mcp-server (schema: 2025-09-29, version: 1.2.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.pab1it0/prometheus-mcp-server (schema: 2025-09-29, version: 1.3.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.pab1it0/prometheus-mcp-server (schema: 2025-09-29, version: 1.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.pab1it0/prometheus-mcp-server (schema: 2025-09-29, version: 1.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.paiml/pforge (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.paiml/pmat-agent (schema: 2025-09-29, version: 2.121.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.paiml/pmcp (schema: 2025-09-29, version: 1.6.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.paiml/rash (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.pedro-rivas/android-puppeteer-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.perplexityai/mcp-server (schema: 2025-10-17, version: 0.3.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.perplexityai/mcp-server (schema: 2025-10-17, version: 0.3.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.perplexityai/mcp-server (schema: 2025-10-17, version: 0.4.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.perplexityai/mcp-server (schema: 2025-10-17, version: 0.4.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.perplexityai/mcp-server (schema: 2025-10-17, version: 0.5.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.perplexityai/mcp-server (schema: 2025-10-17, version: 0.5.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.pkolawa/krs-poland-mcp-server (schema: 2025-09-29, version: 1.0.17)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.pkolawa/mcp-krs-poland (schema: 2025-09-29, version: 1.0.11)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.portel-dev/ncp (schema: 2025-09-16, version: 1.4.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.portel-dev/ncp (schema: 2025-09-16, version: 1.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.portel-dev/ncp (schema: 2025-09-16, version: 1.5.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.portel-dev/ncp (schema: 2025-09-16, version: 1.5.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.portel-dev/ncp (schema: 2025-09-16, version: 1.5.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.pree-dew/mcp-bookmark (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.pree-dew/mcp-bookmark (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.pree-dew/mcp-bookmark (schema: 2025-09-29, version: 0.1.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.pree-dew/mcp-bookmark (schema: 2025-09-29, version: 0.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.priyankark/lighthouse-mcp (schema: 2025-09-29, version: 0.1.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.priyankark/lighthouse-mcp (schema: 2025-09-29, version: 0.1.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.programinglive/dev-workflow-mcp-server (schema: 2025-10-17, version: 1.4.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.promplate/hmr (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.propstreet/agenthub (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 3333, consider using {port} variable substitution (prefer-dynamic-port)

io.github.propstreet/agenthub (schema: 2025-10-17, version: 1.1.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 3333, consider using {port} variable substitution (prefer-dynamic-port)

io.github.pshivapr/selenium-mcp (schema: 2025-09-29, version: 0.3.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.pshivapr/selenium-mcp (schema: 2025-09-29, version: 0.3.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.pshivapr/selenium-mcp (schema: 2025-09-29, version: 0.4.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.pshivapr/selenium-mcp (schema: 2025-09-29, version: 0.4.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.pshivapr/selenium-mcp (schema: 2025-09-29, version: 0.4.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.pshivapr/selenium-mcp (schema: 2025-09-29, version: 0.4.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ptyagiegnyte/egnyte-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ptyagiegnyte/egnyte-remote (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.ptyagiegnyte/egnyte-remote (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.ptyagiegnyte/egnyte-remote (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.pubnub/mcp-server (schema: 2025-09-29, version: 1.0.104)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.pubnub/mcp-server (schema: 2025-09-29, version: 1.0.106)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.pubnub/mcp-server (schema: 2025-10-17, version: 1.0.121)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.pubnub/mcp-server (schema: 2025-10-17, version: 1.0.122)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.pubnub/mcp-server (schema: 2025-10-17, version: 1.0.123)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.pubnub/mcp-server (schema: 2025-10-17, version: 1.0.124)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.pzep1/mcp-meet (schema: 2025-09-29, version: 0.3.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.r-huijts/strava-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.railwayapp/mcp-server (schema: 2025-09-29, version: 0.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rbonestell/ap-mcp-server (schema: 2025-09-29, version: 1.2.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.redis/mcp-redis (schema: 2025-10-17, version: 0.3.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.redis/mcp-redis (schema: 2025-10-17, version: 0.4.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.redis/mcp-redis (schema: 2025-10-17, version: 0.4.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ref-tools/ref-tools-mcp (schema: 2025-09-29, version: 3.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.respawn-app/tool-filter-mcp (schema: 2025-10-17, version: 0.4.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.respawn-app/tool-filter-mcp (schema: 2025-10-17, version: 0.4.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rfdez/pvpc-mcp-server (schema: 2025-09-29, version: 3.2.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 8080, consider using {port} variable substitution (prefer-dynamic-port)

io.github.rfdez/pvpc-mcp-server (schema: 2025-09-29, version: 3.2.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/1/transport/url: Transport URL contains hard-coded port 8080, consider using {port} variable substitution (prefer-dynamic-port)

io.github.rghsoftware/linux-filesystem (schema: 2025-10-17, version: 1.2.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rkdpa/local-skills-mcp (schema: 2025-10-17, version: 0.2.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rnaga/wp-mcp (schema: 2025-10-17, version: 1.0.3)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.robotmcp/ros-mcp-server (schema: 2025-09-29, version: 2.1.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.robotmcp/ros-mcp-server (schema: 2025-09-29, version: 2.1.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.robotmcp/ros-mcp-server (schema: 2025-10-17, version: 2.1.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.robotmcp/ros-mcp-server (schema: 2025-10-17, version: 2.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.robotmcp/ros-mcp-server (schema: 2025-10-17, version: 2.2.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.roddutra/agent-mcp-gateway (schema: 2025-10-17, version: 0.2.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.0.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.0.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.0.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.0.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-10-17, version: 1.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-10-17, version: 1.3.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-10-17, version: 1.3.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-10-17, version: 1.3.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-10-17, version: 1.3.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-10-17, version: 1.3.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-10-17, version: 1.3.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.rogiervdbrnk/mcp-real-estate-server (schema: 2025-10-17, version: 1.3.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ruvnet/claude-flow (schema: missing, version: 2.0.0-alpha.104)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.ruvnet/claude-flow (schema: missing, version: 2.0.0-alpha.105)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.ruvnet/claude-flow (schema: 2025-09-29, version: 2.0.0-alpha.106)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ruvnet/claude-flow (schema: 2025-09-29, version: 2.0.0-alpha.107)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ruvnet/flow-nexus (schema: 2025-09-29, version: 0.1.121)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ruvnet/ruv-swarm (schema: missing, version: 1.0.18)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.ruvnet/ruv-swarm (schema: missing, version: 1.0.19)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.ryaker/appstore-connect-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.ryanbaumann/platform-ai (schema: 2025-09-29, version: 0.2.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.sachin-shetty/egnyte-ai-samples (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.saucelabs-sample-test-frameworks/sauce-api-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.savhascelik/meta-api-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.savhascelik/meta-api-mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.sbroenne/mcp-server-excel (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.sbroenne/mcp-server-excel (schema: 2025-10-17, version: 1.4.27)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.sbroenne/mcp-server-excel (schema: 2025-10-17, version: 1.4.28)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.schemacrawler/schemacrawler-ai (schema: 2025-09-29, version: v16.28.1-2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.schemacrawler/schemacrawler-ai (schema: 2025-09-29, version: v16.28.2-1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.schemacrawler/schemacrawler-ai (schema: 2025-09-29, version: v16.28.3-1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.schemacrawler/schemacrawler-ai (schema: 2025-09-29, version: v16.29.1-1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.sellisd/mcp-units (schema: 2025-09-29, version: 0.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.semilattice-research/mcp (schema: 2025-10-17, version: 0.1.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.shalevshalit/image-recognition-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.shalevshalit/image-recongnition-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.sharksalesinfo-blip/portfolio (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.github.shinpr/mcp-image (schema: 2025-09-29, version: 0.2.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.spences10/mcp-omnisearch (schema: 2025-09-29, version: 0.0.15)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.spences10/mcp-sqlite-tools (schema: 2025-09-29, version: 0.0.11)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.spences10/mcp-turso-cloud (schema: 2025-09-29, version: 0.0.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.srikrishna235/scrimba-teaching-mcp (schema: 2025-09-29, version: 3.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.srikrishna235/scrimba-teaching-mcp (schema: 2025-09-29, version: 3.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.srikrishna235/scrimba-teaching-mcp (schema: 2025-09-29, version: 3.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.srikrishna235/scrimba-teaching-mcp (schema: 2025-09-29, version: 3.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.stefanoamorelli/fred-mcp-server (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.stefanoamorelli/sec-edgar-mcp (schema: 2025-09-29, version: 1.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.stefanstranger/avm-mcp-server (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.stefanstranger/avm-mcp-server (schema: 2025-10-17, version: 0.1.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.stefanstranger/avm-mcp-server (schema: 2025-10-17, version: 0.1.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.stefanstranger/avm-mcp-server (schema: 2025-10-17, version: 0.1.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.stepbot/stockfish-mcp (schema: 2025-10-17, version: v0.1.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.stepbot/stockfish-mcp (schema: 2025-10-17, version: v0.2.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.stepbot/stockfish-mcp (schema: 2025-10-17, version: v0.2.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.stepbot/stockfish-mcp (schema: 2025-10-17, version: v1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.stepbot/stockfish-mcp (schema: 2025-10-17, version: v1.0.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.sunshad0w/html2md (schema: 2025-10-17, version: 0.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.sunshad0w/html2md (schema: 2025-10-17, version: 0.3.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.surendranb/google-analytics-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.svnscha/mcp-windbg (schema: 2025-09-29, version: 0.10.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.svnscha/mcp-windbg (schema: 2025-09-29, version: 0.2.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.svnscha/mcp-windbg (schema: 2025-09-29, version: 0.2.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.taurgis/sfcc-dev-mcp (schema: 2025-09-29, version: 1.0.14)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.tcehjaava/tmdb-mcp-server (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.team-earth/datagraph (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.team-earth/datagraph (schema: 2025-10-17, version: 1.0.1)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.team-earth/datagraph (schema: 2025-10-17, version: 1.1.6)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.team-earth/datagraph (schema: 2025-10-17, version: 1.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.team-earth/datagraph (schema: 2025-10-17, version: 1.2.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.team-earth/datagraph (schema: 2025-10-17, version: 1.2.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.team-telnyx/telnyx (schema: 2025-09-29, version: 3.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.tech-sushant/calculator-mcp (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.tech-sushant/calculator-mcp (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.tedfytw1209/mcp-server-EVEfleet (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.tedfytw1209/mcp-server-EVEfleet (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.tedfytw1209/mcp-server-EVEfleet (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.thechandanbhagat/cv-forge (schema: 2025-10-17, version: 1.0.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.therealtimex/browser-use (schema: 2025-09-29, version: 0.7.10)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.therealtimex/browser-use (schema: 2025-09-29, version: 0.7.10.dev1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.therealtimex/browser-use (schema: 2025-09-29, version: 0.7.10.dev5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.therealtimex/charts-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.therealtimex/charts-mcp (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.therealtimex/charts-mcp (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.therealtimex/charts-mcp (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.therealtimex/charts-mcp (schema: 2025-09-16, version: 2.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.therealtimex/charts-mcp (schema: 2025-09-16, version: 2.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.therealtimex/charts-mcp (schema: 2025-09-16, version: 2.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.therealtimex/charts-mcp (schema: 2025-09-16, version: 2.0.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.therealtimex/un-datacommons-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.18-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.19-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.26-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.27-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.28-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.30-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.41-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.45-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.46-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.47-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.48-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.49-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.53-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.56-beta-g9538a23d37)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.timheuer/sampledotnetmcpserver (schema: 2025-09-29, version: 0.1.57-beta)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.tjhop/prometheus-mcp-server (schema: 2025-09-29, version: 0.7.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.tjhop/prometheus-mcp-server (schema: 2025-09-29, version: 0.8.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.tjhop/prometheus-mcp-server (schema: 2025-09-29, version: v0.7.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.toby/mirror-mcp (schema: 2025-09-29, version: 0.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.toby/mirror-mcp (schema: missing, version: 0.0.4)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

io.github.toby/mirror-mcp (schema: 2025-09-29, version: 0.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: default - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.toby/mirror-mcp (schema: 2025-09-29, version: 0.0.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: default - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.toby/mirror-mcp (schema: 2025-09-29, version: 0.0.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: default - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.toby/mirror-mcp (schema: 2025-09-29, version: 0.0.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages/0/runtimeArguments[0]: Field with 'value' should not have: default - these properties have no effect when value is present (no-value-with-irrelevant-properties)

io.github.trondhindenes/code-index-mcp (schema: 2025-10-17, version: 1.0.10)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[3]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.trondhindenes/code-index-mcp (schema: 2025-10-17, version: 1.0.11)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[3]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.trondhindenes/code-index-mcp (schema: 2025-10-17, version: 1.0.12)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[3]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.trondhindenes/code-index-mcp (schema: 2025-10-17, version: 1.0.13)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[3]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.trondhindenes/code-index-mcp (schema: 2025-10-17, version: 1.0.16)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[3]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.trondhindenes/code-index-mcp (schema: 2025-10-17, version: 1.0.9)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[2]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[3]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.tschoonj/repology-mcp-server (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages[1]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.tuananh/hyper-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.tuannvm/mcp-trino (schema: 2025-09-29, version: 2.2.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.ubaumann/mkdocs-mcp (schema: 2025-09-29, version: 0.1.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.vardior9/apiiro (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.github.variflight/variflight-mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.variflight/variflight-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.variflight/variflight-mcp (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.vemonet/openroute-mcp (schema: 2025-09-29, version: 0.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.vercel/next-devtools-mcp (schema: 2025-10-17, version: 0.2.1)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vercel/next-devtools-mcp (schema: 2025-10-17, version: 0.2.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vercel/next-devtools-mcp (schema: 2025-10-17, version: 0.2.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vercel/next-devtools-mcp (schema: 2025-10-17, version: 0.3.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vercel/next-devtools-mcp (schema: 2025-10-17, version: 0.3.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-29, version: 0.100.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-29, version: 0.101.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-16, version: 0.103.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-16, version: 0.104.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-16, version: 0.105.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-16, version: 0.106.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-16, version: 0.107.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-16, version: 0.108.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-16, version: 0.109.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-16, version: 0.110.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-16, version: 0.111.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-16, version: 0.112.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vfarcic/dot-ai (schema: 2025-09-29, version: 0.90.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.vishalsachdev/canvas-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vishalsachdev/canvas-mcp (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.vulnersCom/vulners-mcp (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.w31r4/codex-mcp-go (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.w31r4/codex-mcp-go (schema: 2025-10-17, version: 0.0.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.w31r4/codex-mcp-go (schema: 2025-10-17, version: 0.0.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wei/hn-mcp-server (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wei/hn-mcp-server (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wei/mcp-registry-mcp-server (schema: 2025-09-29, version: 1.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.winedarksea/AutoTS (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wonderwhy-er/desktop-commander (schema: 2025-09-29, version: 0.2.14)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wonderwhy-er/desktop-commander (schema: 2025-09-29, version: 0.2.15)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wonderwhy-er/desktop-commander (schema: 2025-09-29, version: 0.2.16)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wonderwhy-er/desktop-commander (schema: 2025-09-16, version: 0.2.17)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wonderwhy-er/desktop-commander (schema: 2025-10-17, version: 0.2.19)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wonderwhy-er/desktop-commander (schema: 2025-10-17, version: 0.2.21)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wonderwhy-er/desktop-commander (schema: 2025-10-17, version: 0.2.22)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wonderwhy-er/desktop-commander (schema: 2025-10-17, version: 0.2.23)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wrenchpilot/it-tools-mcp (schema: 2025-10-17, version: 5.2.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wtfregia/mtg-mcp (schema: 2025-10-17, version: 0.1.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wtfregia/mtg-mcp (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.wtfregia/mtg-mcp (schema: 2025-10-17, version: 0.1.3)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.xkelxmc/uranium-mcp (schema: 2025-09-29, version: 1.0.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xkelxmc/uranium-mcp (schema: 2025-09-29, version: 1.0.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xorrkaz/cml-mcp (schema: 2025-09-29, version: 0.10.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xorrkaz/cml-mcp (schema: 2025-09-29, version: 0.11.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xorrkaz/cml-mcp (schema: 2025-09-29, version: 0.11.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xorrkaz/cml-mcp (schema: 2025-09-29, version: 0.11.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xorrkaz/cml-mcp (schema: 2025-09-29, version: 0.8.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xorrkaz/cml-mcp (schema: 2025-09-29, version: 0.8.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xorrkaz/cml-mcp (schema: 2025-09-29, version: 0.9.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xorrkaz/cml-mcp (schema: 2025-09-29, version: 0.9.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xorrkaz/cml-mcp (schema: 2025-09-29, version: 0.9.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xorrkaz/cml-mcp (schema: 2025-09-29, version: 0.9.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.xplusplusai/fo-semantic-mcp (schema: 2025-10-17, version: 2.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.xplusplusai/fo-semantic-mcp (schema: 2025-10-17, version: 2.0.3)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.xplusplusai/fo-semantic-mcp (schema: 2025-10-17, version: 2.0.7)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.xplusplusai/fo-semantic-mcp (schema: 2025-10-17, version: 2.0.8)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.xplusplusai/fo-semantic-mcp (schema: 2025-10-17, version: 2.1.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.yarnabrina/mcp-learning (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.yarnabrina/mcp-learning (schema: 2025-10-17, version: 0.2.0)
   • [LINTER][ERROR] /packages/0/runtimeArguments[2]: Template contains variables without definitions: log_level (no-template-variables-missing)
   • [LINTER][WARNING] /packages/0/runtimeArguments[2]: Field with 'value' should not have: default, choices - these properties have no effect when value is present (no-value-with-irrelevant-properties)
   • [LINTER][WARNING] /packages/0/transport/url: Transport URL contains hard-coded port 8000, consider using {port} variable substitution (prefer-dynamic-port)

io.github.ycjcl868/mcp-server-fear-greed (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.ycjcl868/mcp-server-fear-greed (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [SCHEMA][ERROR] /packages/1/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [SCHEMA][ERROR] /packages/1/transport/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "stdio" (#/definitions/StdioTransport/properties/type/enum) [enum@/packages/*/transport/type]
   • [SCHEMA][ERROR] /packages/1/transport/type: Must be equal to one of the allowed values. Got: "sse", expected one of: "streamable-http" (#/properties/type/enum) [enum@/packages/*/transport/type]
   • [SCHEMA][ERROR] /packages/1/transport/url: Must match format "uri" (#/properties/url/format) [format@/packages/*/transport/url]
   • [SCHEMA][ERROR] /packages/1/transport: Must match a schema in anyOf (#/properties/transport/anyOf) [anyOf@/packages/*/transport]
   • [SCHEMA][ERROR] /packages/2/version: Must NOT be valid (#/properties/version/not) [not@/packages/*/version]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)
   • [LINTER][WARNING] /packages/1/packageArguments[0]: Named argument "port" should start with "--" or "-" (require-args-leading-dashes)
   • [LINTER][WARNING] /packages/2/packageArguments[0]: Named argument "port" should start with "--" or "-" (require-args-leading-dashes)

io.github.yifancong/rsdoctor (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.yokingma/time-mcp (schema: 2025-09-29, version: 1.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.yuna0x0/anilist-mcp (schema: 2025-09-29, version: 1.3.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]

io.github.yuna0x0/anilist-mcp (schema: 2025-09-29, version: 1.3.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]

io.github.yuna0x0/anilist-mcp (schema: 2025-09-29, version: 1.3.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]

io.github.yuna0x0/anilist-mcp (schema: 2025-09-29, version: 1.3.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]

io.github.yuna0x0/anilist-mcp (schema: 2025-09-29, version: 1.3.7)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]

io.github.yuna0x0/hackmd-mcp (schema: 2025-09-29, version: 1.4.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]

io.github.yuna0x0/hackmd-mcp (schema: 2025-09-29, version: 1.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]

io.github.yuna0x0/hackmd-mcp (schema: 2025-09-29, version: 1.5.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]

io.github.yuna0x0/hackmd-mcp (schema: 2025-09-29, version: 1.5.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]

io.github.yuna0x0/hackmd-mcp (schema: 2025-09-29, version: 1.5.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/1: Must have required property 'version' (#/required) [required@/packages/*]
   • [SCHEMA][ERROR] /packages/2: Must have required property 'version' (#/required) [required@/packages/*]

io.github.zeiq-co/thoth-mcp (schema: 2025-09-29, version: 1.0.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zeiq-co/thoth-mcp (schema: 2025-09-29, version: 1.0.2)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zenml-io/mcp-zenml (schema: 2025-09-29, version: 1.0.3)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.zenml-io/mcp-zenml (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /packages/0: Must have required property 'version' (#/required) [required@/packages/*]

io.github.zhongweili/nanobanana-mcp-server (schema: 2025-10-17, version: 0.2.0)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zhongweili/nanobanana-mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.github.zloeber/terraform-ingest (schema: 2025-10-17, version: 0.1.15)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zloeber/terraform-ingest (schema: 2025-10-17, version: 0.1.16)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zloeber/terraform-ingest (schema: 2025-10-17, version: 0.1.17)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zloeber/terraform-ingest (schema: 2025-10-17, version: 0.1.18)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zloeber/terraform-ingest (schema: 2025-10-17, version: 0.1.19)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zloeber/terraform-ingest (schema: 2025-10-17, version: 0.1.20)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zloeber/terraform-ingest (schema: 2025-10-17, version: 0.1.21)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zwldarren/akshare-one-mcp (schema: 2025-09-29, version: 0.3.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zzstoatzz/tangled-mcp (schema: 2025-09-29, version: 0.0.10)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zzstoatzz/tangled-mcp (schema: 2025-10-17, version: 0.0.14)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zzstoatzz/tangled-mcp (schema: 2025-09-29, version: 0.0.5)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zzstoatzz/tangled-mcp (schema: 2025-09-29, version: 0.0.6)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zzstoatzz/tangled-mcp (schema: 2025-09-29, version: 0.0.8)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.github.zzstoatzz/tangled-mcp (schema: 2025-09-29, version: 0.0.9)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.globalping/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

io.ignission/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.ignission/mcp (schema: 2025-10-17, version: 2.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.minnas/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.minnas/mcp (schema: 2025-09-29, version: 1.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.opsera/opsera (schema: 2025-09-29, version: 0.5.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.prisma/mcp (schema: 2025-09-16, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-16. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.scorecard/mcp (schema: 2025-09-29, version: 2.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.slingdata/sling-cli (schema: 2025-09-29, version: 1.4.23)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.slingdata/sling-cli (schema: 2025-09-29, version: 1.4.24)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.slingdata/sling-cli (schema: 2025-09-29, version: 1.4.25)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

io.snapcall/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.snyk/mcp (schema: 2025-09-29, version: 1.1299.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]

io.testiny/testiny-mcp (schema: 2025-10-17, version: 0.1.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

io.trunk/mcp-server (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.wordlift/mcp-server (schema: 2025-09-29, version: 1.0.4)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.wordlift/mcp-server (schema: 2025-10-17, version: 1.0.6)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

io.wordlift/mcp-server (schema: 2025-10-17, version: 1.0.7)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.alpic-poc-frontend-c68d130f/alpic-poc-frontend (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.email-mcp-c880a7f7/email-mcp (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.email-mcp-c880a7f7/email-mcp (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.email-mcp-c880a7f7/email-mcp (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-6283dc54/mcp-server (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-6283dc54/mcp-server (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-a2d17427/mcp-server (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template--1488dac2/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template--1488dac2/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template--1488dac2/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template--1488dac2/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template--1488dac2/mcp-server-template-nodejs (schema: 2025-10-17, version: 0.0.5)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template-5eacc5c3/mcp-server-template (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template-5eacc5c3/mcp-server-template (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template-5eacc5c3/mcp-server-template (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template-7b99436a/mcp-server-template (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template-8068f74b/mcp-server-template (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template-90a89880/mcp-server-template (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-server-template-99cbcf02/mcp-server-template (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-template-e37c5898/mcp-template (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-template-e37c5898/mcp-template (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-template-e37c5898/mcp-template (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.mcp-template-e37c5898/mcp-template (schema: 2025-10-17, version: 0.0.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.node-email-mcp-25ea0992/node-email-mcp (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.node-email-mcp-731b03b7/node-email-mcp (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.node-email-mcp-a629b9bc/node-email-mcp (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.personal-chef-chatgp-c951fcb6/personal-chef-chatgpt-app (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.property-search-mcp-ce598409/property-search-mcp (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.property-search-mcp-ce598409/property-search-mcp (schema: 2025-10-17, version: 0.0.10)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.property-search-mcp-ce598409/property-search-mcp (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.property-search-mcp-ce598409/property-search-mcp (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.property-search-mcp-ce598409/property-search-mcp (schema: 2025-10-17, version: 0.0.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.property-search-mcp-ce598409/property-search-mcp (schema: 2025-10-17, version: 0.0.5)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.property-search-mcp-ce598409/property-search-mcp (schema: 2025-10-17, version: 0.0.6)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.property-search-mcp-ce598409/property-search-mcp (schema: 2025-10-17, version: 0.0.7)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.property-search-mcp-ce598409/property-search-mcp (schema: 2025-10-17, version: 0.0.8)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.property-search-mcp-ce598409/property-search-mcp (schema: 2025-10-17, version: 0.0.9)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.send-email-mcp-04d3fdca/send-email-mcp (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.server-template-3b6131fe/server-template (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.system-prompts-of-ai-987eba72/my-mcp-server (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.template-0f352e26/template (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging.template-nodejs-d3cd3099/template-nodejs (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.10)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.11)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.12)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.13)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.14)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.15)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.16)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.17)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.18)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.19)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.20)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.21)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.22)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.23)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.24)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.25)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.26)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.27)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.28)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.29)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.30)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.31)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.32)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.33)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.34)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.5)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.6)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.7)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.8)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/alpic-poc-frontend-9eb5bfc8 (schema: 2025-10-17, version: 0.0.9)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.10)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.11)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.12)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.13)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.14)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.16)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.17)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.18)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.19)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.21)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.23)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.24)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.25)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.26)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.27)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.28)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.29)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.30)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.32)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.5)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.6)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.7)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.8)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.0.9)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/email-server (schema: 2025-10-17, version: 0.1.14)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/mcp-server-template--43874b8f (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/mcp-server-template--43874b8f (schema: 2025-10-17, version: 0.0.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/mcp-server-template--43874b8f (schema: 2025-10-17, version: 0.0.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/mcp-server-template--43874b8f (schema: 2025-10-17, version: 0.0.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/mcp-server-template--43874b8f (schema: 2025-10-17, version: 0.0.5)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/mcp-server-template--43874b8f (schema: 2025-10-17, version: 0.0.6)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/mcp-server-template--43874b8f (schema: 2025-10-17, version: 0.0.7)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/mcp-server-template--43874b8f (schema: 2025-10-17, version: 0.0.8)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/mcp-server-template--de51cc9a (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/node-email-mcp-59eeb419 (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/node-email-mcp-59eeb419 (schema: 2025-10-17, version: 0.0.30)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/node-email-mcp-59eeb419 (schema: 2025-10-17, version: 0.0.33)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/node-email-mcp-59eeb419 (schema: 2025-10-17, version: 0.0.53)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/node-email-mcp-59eeb419 (schema: 2025-10-17, version: 0.0.54)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/node-email-mcp-59eeb419 (schema: 2025-10-17, version: 0.0.55)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/node-email-mcp-59eeb419 (schema: 2025-10-17, version: 0.0.56)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/node-email-mcp-ea33e576 (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.1.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.1.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.1.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.1.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.1.5)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.1.6)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.2.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.3.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.3.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.3.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.3.3)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/send-email-mcp-01f22b8f (schema: 2025-10-17, version: 0.3.4)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

live.alpic.staging/test-server (schema: 2025-10-17, version: 0.0.1)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

md.install/try (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

md.install/try (schema: 2025-09-29, version: 0.1.1)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

moda.ai/remote-camera (schema: 2025-10-17, version: 1.0.0)
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

net.gepuro.mcp-company-lens-v1/company-lens-mcp-registry (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

net.nymbo/tools (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

net.singular/mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

net.todoist/mcp (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

org.aquaview/aquaview-mcp (schema: 2025-10-17, version: 0.1.2)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

org.aquaview/aquaview-mcp (schema: 2025-10-17, version: 0.2.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)
   • [LINTER][INFO] /remotes[1]: Remote has no headers configuration (prefer-config-for-remote)

org.io-aerospace/mcp-server (schema: 2025-10-17, version: 1.0.0)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

run.syncline/mcp-server (schema: 2025-10-17, version: 1.0.2)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

run.syncline/mcp-server (schema: 2025-10-17, version: 1.0.4)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

run.syncline/mcp-server (schema: 2025-10-17, version: 1.0.5)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

run.syncline/mcp-server (schema: 2025-10-17, version: 1.0.6)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

run.syncline/mcp-server (schema: 2025-10-17, version: 1.0.7)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

run.syncline/mcp-server (schema: 2025-10-17, version: 1.0.8)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

run.syncline/mcp-server (schema: 2025-10-17, version: 1.0.9)
   • [LINTER][WARNING] /packages[0]: Package has no configuration - consider adding runtimeArguments, packageArguments, or environmentVariables (require-config-for-package)

so.jinko/jinko-mcp (schema: 2025-09-29, version: 0.0.27)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

technology.draup/api-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [SCHEMA][ERROR] /repository: Must have required property 'url' (#/definitions/Repository/required) [required@/repository]
   • [SCHEMA][ERROR] /repository: Must have required property 'source' (#/definitions/Repository/required) [required@/repository]

trade.neglect/mcp-server (schema: 2025-09-29, version: 1.0.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

travel.kismet/mcp-server (schema: missing, version: 0.0.0)
   • [SCHEMA][ERROR] /: Missing required $schema field (schema-missing) [schema-missing@/]

uno.platform/uno (schema: 2025-10-17, version: 1.2.13)
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

xyz.dreamtap/mcp (schema: 2025-09-29, version: 0.1.0)
   • [SCHEMA][WARNING] /$schema: Using non-current schema version: 2025-09-29. Current version is: 2025-10-17. Consider upgrading to the latest schema version. (schema-version-outdated) [schema-version-outdated@/$schema]
   • [LINTER][INFO] /remotes[0]: Remote has no headers configuration (prefer-config-for-remote)

📊 VALIDATION SUMMARY
══════════════════════════════════════════════════
✅ Valid: 1699 servers
❌ Invalid (schema or linter errors): 651 servers
📈 Success rate: 72.3%

📋 SCHEMA VERSIONS
──────────────────────────────────────────────────
  2025-10-17 (current): 1113 servers
  2025-09-29: 1059 servers
  2025-09-16: 158 servers
  2025-07-09: 3 servers
  missing: 17 servers

📊 SCHEMA ERROR BREAKDOWN
──────────────────────────────────────────────────
  required@/repository: 512 instances
  required@/packages/*: 148 instances
  schema-missing@/: 17 instances
  not@/packages/*/version: 15 instances
  enum@/packages/*/transport/type: 10 instances
  enum@/packages/*/packageArguments/*/type: 6 instances
  format@/packages/*/transport/url: 5 instances
  anyOf@/packages/*/transport: 5 instances
  enum@/packages/*/environmentVariables/*/format: 4 instances
  anyOf@/packages/*/packageArguments/*: 3 instances
  enum@/remotes/*/type: 2 instances
  format@/remotes/*/url: 2 instances
  anyOf@/remotes/*: 2 instances
  required@/packages/*/packageArguments/*: 1 instances

🧭 LINTER SUMMARY
══════════════════════════════════════════════════
🚫 Failed linter (error): 291 servers
⚠️  Any linter issues: 1454 servers

📊 LINTER RULE BREAKDOWN
──────────────────────────────────────────────────
  require-config-for-package: 688 instances
  prefer-config-for-remote: 581 instances
  no-template-variables-missing: 289 instances
  no-value-with-irrelevant-properties: 189 instances
  no-secret-template: 151 instances
  no-secret-static-value: 151 instances
  prefer-dynamic-port: 99 instances
  require-args-leading-dashes: 51 instances
  require-valid-default-choice: 8 instances
  require-valid-choices-format: 4 instances
  no-unused-variables: 2 instances

❌ Validation Failed: 398 server(s) with schema errors, 291 server(s) with linter errors (651 total invalid)
