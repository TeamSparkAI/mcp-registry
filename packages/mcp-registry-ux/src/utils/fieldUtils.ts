import { FieldConfig } from '../types';

/**
 * Generate a unique field ID for configuration storage.
 * Must use stable identifiers (name, valueHint) not values.
 */
export function getFieldId(field: FieldConfig, prefix: string, fallbackIndex?: number): string {
  // For KeyValueInput (env vars, headers): use name
  if (field.name && field.type !== 'positional') {
    return `${prefix}_${field.name}`;
  }
  
  // For PositionalArgument: use valueHint (the identifier, NOT the value)
  if (field.type === 'positional') {
    return `${prefix}_${field.valueHint || `positional_${fallbackIndex || 0}`}`;
  }
  
  // For NamedArgument: use name
  if (field.type === 'named' && field.name) {
    return `${prefix}_${field.name}`;
  }
  
  // Fallback: use index
  return `${prefix}_${fallbackIndex || 0}`;
}



