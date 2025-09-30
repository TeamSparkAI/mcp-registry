import { LinterRule } from '../types';
import { getJsonPath } from '../utils/jsonPath';

export const rule: LinterRule = {
  name: 'no-value-with-irrelevant-properties',
  message: 'Field with value should not have default, isRequired, or choices',
  check: (data: any, basePath: string) => {
    const issues: any[] = [];
    
    if (data.packages) {
      data.packages.forEach((pkg: any, pkgIndex: number) => {
        ['runtimeArguments', 'packageArguments', 'environmentVariables'].forEach(section => {
          if (pkg[section]) {
            pkg[section].forEach((field: any, fieldIndex: number) => {
              if (field.value && (field.default || field.isRequired || field.choices)) {
                const path = getJsonPath(`/packages/${pkgIndex}/${section}`, fieldIndex);
                const irrelevantProps = [];
                if (field.default) irrelevantProps.push('default');
                if (field.isRequired) irrelevantProps.push('isRequired');
                if (field.choices) irrelevantProps.push('choices');
                
                issues.push({
                  source: 'linter',
                  severity: 'warning',
                  path: path,
                  message: `Field with 'value' should not have: ${irrelevantProps.join(', ')} - these properties have no effect when value is present`,
                  rule: 'no-value-with-irrelevant-properties'
                });
              }
            });
          }
        });
      });
    }
    
    return issues;
  }
};
