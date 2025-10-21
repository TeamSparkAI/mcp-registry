'use client';

import React from 'react';
import { Package, TransportRemote, FieldConfig } from '@/types/mcp-registry';
import { getFieldId } from '@/app/registry-utils/fieldUtils';

interface RequiredFieldWarningProps {
  configuringPackage?: { pkg: Package; index: number } | null;
  configuringRemote?: { remote: TransportRemote; index: number } | null;
  packageConfig: Record<string, any>;
  remoteConfig: Record<string, any>;
}

// Helper function to check if a field with variables has required variables that are missing
const checkRequiredVariables = (
  field: FieldConfig,
  config: Record<string, any>,
  fieldId: string
): boolean => {
  if (!field.variables || Object.keys(field.variables).length === 0) {
    return false;
  }

  const template = field.value || field.default || '';
  const variableNames = template.match(/\{([^}]+)\}/g)?.map(match => match.slice(1, -1)) || [];
  
  return variableNames.some(varName => {
    const varField = field.variables![varName];
    if (varField.isRequired) {
      const varFieldId = `${fieldId}_var_${varName}`;
      const userHasSetValue = config.hasOwnProperty(varFieldId);
      const currentValue = userHasSetValue ? config[varFieldId] : (varField.default || '');
      return !currentValue || currentValue.trim() === '';
    }
    return false;
  });
};

export default function RequiredFieldWarning({
  configuringPackage,
  configuringRemote,
  packageConfig,
  remoteConfig
}: RequiredFieldWarningProps) {
  let hasRequiredFields = false;

  if (configuringPackage && configuringPackage.pkg) {
    const pkg = configuringPackage.pkg;
    
    // Check runtime arguments
    if (pkg.runtimeArguments) {
      hasRequiredFields = pkg.runtimeArguments.some((arg, argIndex) => {
        const configArg = arg as FieldConfig;
        const fieldId = getFieldId(configArg, 'runtimeArg', argIndex);
        
        // Check if the main field is required and missing
        if (configArg.isRequired && !configArg.value) {
          const userHasSetValue = packageConfig.hasOwnProperty(fieldId);
          const currentValue = userHasSetValue ? packageConfig[fieldId] : (configArg.default || '');
          if (!currentValue || currentValue.trim() === '') {
            return true;
          }
        }
        
        // Check if any variables are required and missing
        return checkRequiredVariables(configArg, packageConfig, fieldId);
      });
    }
    
    // Check package arguments
    if (!hasRequiredFields && pkg.packageArguments) {
      hasRequiredFields = pkg.packageArguments.some((arg, argIndex) => {
        const configArg = arg as FieldConfig;
        const fieldId = getFieldId(configArg, 'packageArg', argIndex);
        
        // Check if the main field is required and missing
        if (configArg.isRequired && !configArg.value) {
          const userHasSetValue = packageConfig.hasOwnProperty(fieldId);
          const currentValue = userHasSetValue ? packageConfig[fieldId] : (configArg.default || '');
          if (!currentValue || currentValue.trim() === '') {
            return true;
          }
        }
        
        // Check if any variables are required and missing
        return checkRequiredVariables(configArg, packageConfig, fieldId);
      });
    }
    
    // Check environment variables
    if (!hasRequiredFields && pkg.environmentVariables) {
      hasRequiredFields = pkg.environmentVariables.some((env, envIndex) => {
        const configEnv = env as FieldConfig;
        const fieldId = getFieldId(configEnv, 'env', envIndex);
        
        // Check if the main field is required and missing
        if (configEnv.isRequired && !configEnv.value) {
          const userHasSetValue = packageConfig.hasOwnProperty(fieldId);
          const currentValue = userHasSetValue ? packageConfig[fieldId] : (configEnv.default || '');
          if (!currentValue || currentValue.trim() === '') {
            return true;
          }
        }
        
        // Check if any variables are required and missing
        return checkRequiredVariables(configEnv, packageConfig, fieldId);
      });
    }
    
    // Check transport headers
    const transport = pkg.transport as TransportRemote;
    if (!hasRequiredFields && transport?.headers) {
      hasRequiredFields = transport.headers.some((header: FieldConfig, headerIndex: number) => {
        const fieldId = getFieldId(header, 'transport_header', headerIndex);
        
        // Check if the main field is required and missing
        if (header.isRequired && !header.value) {
          const userHasSetValue = packageConfig.hasOwnProperty(fieldId);
          const currentValue = userHasSetValue ? packageConfig[fieldId] : (header.default || '');
          if (!currentValue || currentValue.trim() === '') {
            return true;
          }
        }
        
        // Check if any variables are required and missing
        return checkRequiredVariables(header, packageConfig, fieldId);
      });
    }
  }

  if (configuringRemote && configuringRemote.remote) {
    const remote = configuringRemote.remote;
    
    // Check headers
    if (!hasRequiredFields && remote.headers) {
      hasRequiredFields = remote.headers.some((header: FieldConfig, headerIndex: number) => {
        const fieldId = getFieldId(header, 'header', headerIndex);
        
        // Check if the main field is required and missing
        if (header.isRequired && !header.value) {
          const userHasSetValue = remoteConfig.hasOwnProperty(fieldId);
          const currentValue = userHasSetValue ? remoteConfig[fieldId] : (header.default || '');
          if (!currentValue || currentValue.trim() === '') {
            return true;
          }
        }
        
        // Check if any variables are required and missing
        return checkRequiredVariables(header, remoteConfig, fieldId);
      });
    }
  }

  if (hasRequiredFields) {
    return (
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-sm text-yellow-800">
            Some required fields are not provided. Please fill in all fields marked with * to generate a complete configuration.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
