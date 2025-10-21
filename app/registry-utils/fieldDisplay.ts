import { FieldConfig } from '@/types/mcp-registry';

/**
 * Quote a value if it's a string or filepath type
 */
function maybeQuote(value: string, format?: string): string {
  if (format === 'string' || format === 'filepath') {
    return `"${value}"`;
  }
  return value;
}

/**
 * Generate a helpful display string for a field in read-only views.
 * Shows actual values, or helpful hints about what's expected.
 */
export function getFieldDisplayValue(field: FieldConfig): string {
  // 1. If field has a fixed value, show it clearly
  if (field.value !== undefined && field.value !== null && field.value !== '') {
    return `Fixed value: ${maybeQuote(field.value, field.format)}`;
  }

  // 2. If field has choices, show them
  if (field.choices && field.choices.length > 0) {
    if (field.default) {
      return `Default: ${maybeQuote(field.default, field.format)} (choices: ${field.choices.join(', ')})`;
    }
    return `One of: ${field.choices.join(', ')}`;
  }

  // 3. If field has a default, show it
  if (field.default !== undefined && field.default !== null && field.default !== '') {
    return `Default: ${maybeQuote(field.default, field.format)}`;
  }

  // 4. If field has a placeholder, show it as an example
  if (field.placeholder) {
    return `Example: ${field.placeholder}`;
  }

  // 5. Build a description based on format and requirement
  const parts: string[] = [];
  
  if (field.isRequired) {
    parts.push('Required');
  } else {
    parts.push('Optional');
  }

  if (field.format) {
    parts.push(field.format);
  } else {
    parts.push('string');
  }

  if (field.isSecret) {
    parts.push('(secret)');
  }

  return parts.join(' ');
}

/**
 * Get a display label for a field
 */
export function getFieldDisplayLabel(field: FieldConfig): string {
  if (field.type === 'named' && field.name) {
    return field.name;
  }
  if (field.type === 'positional' && field.valueHint) {
    return field.valueHint;
  }
  if (field.name) {
    return field.name;
  }
  return 'value';
}

