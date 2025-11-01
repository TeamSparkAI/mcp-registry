import React from 'react';
import { ServerDetail } from '../types';
import { areAllRequiredFieldsFilled } from '../utils/configGenerator';

interface RequiredFieldWarningProps {
  configuringServer: ServerDetail;
  packageConfig: Record<string, any>;
  remoteConfig: Record<string, any>;
}

export function RequiredFieldWarning({
  configuringServer,
  packageConfig,
  remoteConfig
}: RequiredFieldWarningProps) {
  const hasRequiredFields = !areAllRequiredFieldsFilled(configuringServer, packageConfig, remoteConfig);

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



