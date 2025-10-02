import { rule as requireConfigForPackage } from './rules/require-config-for-package';
import { rule as preferConfigForRemote } from './rules/prefer-config-for-remote';
import { rule as requireLeadingDashes } from './rules/require-arg-leading-dashes';
import { rule as noTemplateVariablesMissing } from './rules/no-template-variables-missing';
import { rule as requireValidValueFormat } from './rules/require-valid-value-format';
import { rule as requireValidDefaultFormat } from './rules/require-valid-default-format';
import { rule as requireValidChoicesFormat } from './rules/require-valid-choices-format';
import { rule as noSecretTemplate } from './rules/no-secret-template';
import { rule as noUnusedVariables } from './rules/no-unused-variables';
import { rule as noValueWithIrrelevantProperties } from './rules/no-value-with-irrelevant-properties';
import { rule as noSecretStaticValue } from './rules/no-secret-static-value';
import { rule as requireValidDefaultChoice } from './rules/require-valid-default-choice';
import { rule as noTransportUrlVariablesMissing } from './rules/no-transport-url-variables-missing';
import { rule as noRemoteTransportVariables } from './rules/no-remote-transport-variables';
import { rule as preferDynamicPort } from './rules/prefer-dynamic-port';
import { rule as noDuplicateEnvVars } from './rules/no-duplicate-env-vars';

export const linterRules = [
  requireConfigForPackage,
  preferConfigForRemote,
  requireLeadingDashes,
  noTemplateVariablesMissing,
  requireValidValueFormat,
  requireValidDefaultFormat,
  requireValidChoicesFormat,
  noSecretTemplate,
  noUnusedVariables,
  noValueWithIrrelevantProperties,
  noSecretStaticValue,
  requireValidDefaultChoice,
  noTransportUrlVariablesMissing,
  noRemoteTransportVariables,
  preferDynamicPort,
  noDuplicateEnvVars,
];

export { lintServerData } from './runner';
