"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lintServerData = exports.linterRules = void 0;
const require_config_for_package_1 = require("./rules/require-config-for-package");
const prefer_config_for_remote_1 = require("./rules/prefer-config-for-remote");
const require_arg_leading_dashes_1 = require("./rules/require-arg-leading-dashes");
const no_template_variables_missing_1 = require("./rules/no-template-variables-missing");
const require_valid_value_format_1 = require("./rules/require-valid-value-format");
const require_valid_default_format_1 = require("./rules/require-valid-default-format");
const require_valid_choices_format_1 = require("./rules/require-valid-choices-format");
const no_secret_template_1 = require("./rules/no-secret-template");
const no_unused_variables_1 = require("./rules/no-unused-variables");
const no_value_with_irrelevant_properties_1 = require("./rules/no-value-with-irrelevant-properties");
const no_secret_static_value_1 = require("./rules/no-secret-static-value");
const require_valid_default_choice_1 = require("./rules/require-valid-default-choice");
const no_transport_url_variables_missing_1 = require("./rules/no-transport-url-variables-missing");
const no_remote_transport_variables_1 = require("./rules/no-remote-transport-variables");
const prefer_dynamic_port_1 = require("./rules/prefer-dynamic-port");
const no_duplicate_env_vars_1 = require("./rules/no-duplicate-env-vars");
exports.linterRules = [
    require_config_for_package_1.rule,
    prefer_config_for_remote_1.rule,
    require_arg_leading_dashes_1.rule,
    no_template_variables_missing_1.rule,
    require_valid_value_format_1.rule,
    require_valid_default_format_1.rule,
    require_valid_choices_format_1.rule,
    no_secret_template_1.rule,
    no_unused_variables_1.rule,
    no_value_with_irrelevant_properties_1.rule,
    no_secret_static_value_1.rule,
    require_valid_default_choice_1.rule,
    no_transport_url_variables_missing_1.rule,
    no_remote_transport_variables_1.rule,
    prefer_dynamic_port_1.rule,
    no_duplicate_env_vars_1.rule,
];
var runner_1 = require("./runner");
Object.defineProperty(exports, "lintServerData", { enumerable: true, get: function () { return runner_1.lintServerData; } });
