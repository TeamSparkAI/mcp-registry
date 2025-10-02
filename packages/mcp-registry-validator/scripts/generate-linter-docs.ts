#!/usr/bin/env tsx

import { linterRules } from '../dist/linter';
import { writeFileSync } from 'fs';
import { join } from 'path';

function generateMarkdown(): string {
  let markdown = '# MCP Server Registry Linter Rules\n\n';
  markdown += 'This document describes the linter rules applied to MCP server registry entries.\n\n';
  markdown += 'These rules are applied to the server object (server.json), typically after JSON schema validation.\n\n';
  markdown += 'These linter rules detect issues that are not possble to enforce or detect via JSON schema validation.\n\n';

  // Table of Contents
  markdown += '## Table of Contents\n\n';
  for (const rule of linterRules) {
    markdown += `- [${rule.name}](#${rule.name.toLowerCase().replace(/[^a-z0-9-]/g, '-')})\n`;
  }
  markdown += '\n';

  for (const rule of linterRules) {
    markdown += `## ${rule.name}\n\n`;
    
    // Purpose
    if (rule.docs?.purpose) {
      markdown += `**Purpose:** ${rule.docs.purpose}\n\n`;
    }

    // Message and Severity
    markdown += `**Message:** ${rule.message}\n\n`;
    markdown += `**Severity:** ${rule.severity}\n\n`;

    // Triggers
    if (rule.docs?.triggers && rule.docs.triggers.length > 0) {
      markdown += `**Triggers:**\n`;
      rule.docs.triggers.forEach(trigger => {
        markdown += `- ${trigger}\n`;
      });
      markdown += '\n';
    }

    // Examples
    if (rule.docs?.examples) {
      markdown += `**Examples:**\n\n`;
      
      if (rule.docs.examples.bad) {
        markdown += `❌ **Bad:**\n`;
        markdown += '```json\n';
        markdown += rule.docs.examples.bad;
        markdown += '\n```\n\n';
      }
      
      if (rule.docs.examples.good) {
        markdown += `✅ **Good:**\n`;
        markdown += '```json\n';
        markdown += rule.docs.examples.good;
        markdown += '\n```\n\n';
      }
    }

    // Guidance
    if (rule.docs?.guidance && rule.docs.guidance.length > 0) {
      markdown += `**Guidance:**\n`;
      rule.docs.guidance.forEach(guidance => {
        markdown += `- ${guidance}\n`;
      });
      markdown += '\n';
    }

    // Scope
    if (rule.docs?.scope && rule.docs.scope.length > 0) {
      markdown += `**Scope:** ${rule.docs.scope.join(', ')}\n\n`;
    }

    // Notes
    if (rule.docs?.notes && rule.docs.notes.length > 0) {
      markdown += `**Notes:**\n`;
      rule.docs.notes.forEach(note => {
        markdown += `- ${note}\n`;
      });
      markdown += '\n';
    }

  }

  return markdown;
}

function main() {
  try {
    const markdown = generateMarkdown();
    
    // Write to validator package directory
    const packagePath = join(process.cwd(), 'linter.md');
    writeFileSync(packagePath, markdown, 'utf8');
    console.log(`✅ Generated linter documentation: ${packagePath}`);
    
    // Also write to project root (for ToolCatalog project)
    const rootPath = join(process.cwd(), '..', '..', 'linter.md');
    writeFileSync(rootPath, markdown, 'utf8');
    console.log(`✅ Copied to project root: ${rootPath}`);
    
    console.log(`📄 Generated ${linterRules.length} rule descriptions`);
  } catch (error) {
    console.error('❌ Error generating linter documentation:', error);
    process.exit(1);
  }
}

main();
