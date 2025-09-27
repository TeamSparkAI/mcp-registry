'use client';

import React from 'react';

interface FieldConfig {
  name?: string;
  value?: string;
  default?: string;
  isRequired?: boolean;
  isSecret?: boolean;
  description?: string;
}

interface PackageConfig {
  identifier: string;
  version: string;
  registryType: string;
  runtimeHint?: string;
  runtimeArguments?: FieldConfig[];
  packageArguments?: FieldConfig[];
  environmentVariables?: FieldConfig[];
}

interface RemoteConfig {
  type: string;
  url?: string;
  headers?: FieldConfig[];
}

interface RequiredFieldWarningProps {
  configuringPackage?: { pkg: PackageConfig; index: number } | null;
  configuringRemote?: { remote: RemoteConfig; index: number } | null;
  packageConfig: Record<string, any>;
  remoteConfig: Record<string, any>;
}

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
      hasRequiredFields = pkg.runtimeArguments.some((arg: FieldConfig) => {
        if (arg.isRequired && !arg.value) {
          const fieldId = `runtimeArg_${arg.name || arg.value}`;
          const currentValue = packageConfig[fieldId] || arg.default || '';
          return !currentValue || currentValue.trim() === '';
        }
        return false;
      });
    }
    
    // Check package arguments
    if (!hasRequiredFields && pkg.packageArguments) {
      hasRequiredFields = pkg.packageArguments.some((arg: FieldConfig) => {
        if (arg.isRequired && !arg.value) {
          const fieldId = `packageArg_${arg.name || arg.value}`;
          const currentValue = packageConfig[fieldId] || arg.default || '';
          return !currentValue || currentValue.trim() === '';
        }
        return false;
      });
    }
    
    // Check environment variables
    if (!hasRequiredFields && pkg.environmentVariables) {
      hasRequiredFields = pkg.environmentVariables.some((env: FieldConfig) => {
        if (env.isRequired && !env.value) {
          const fieldId = `env_${env.name}`;
          const currentValue = packageConfig[fieldId] || env.default || '';
          return !currentValue || currentValue.trim() === '';
        }
        return false;
      });
    }
  }

  if (configuringRemote && configuringRemote.remote) {
    const remote = configuringRemote.remote;
    
    // Check headers
    if (!hasRequiredFields && remote.headers) {
      hasRequiredFields = remote.headers.some((header: FieldConfig) => {
        if (header.isRequired && !header.value) {
          const fieldId = `header_${header.name}`;
          const currentValue = remoteConfig[fieldId] || header.default || '';
          return !currentValue || currentValue.trim() === '';
        }
        return false;
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
