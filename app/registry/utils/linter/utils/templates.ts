// Helper function to check if a string contains template variables
export function hasTemplateVariables(template: string): boolean {
  return /\{[^}]+\}/.test(template);
}

// Helper function to extract variable names from template
export function extractVariableNames(template: string): string[] {
  const matches = template.match(/\{([^}]+)\}/g);
  return matches ? matches.map(match => match.slice(1, -1)) : [];
}
