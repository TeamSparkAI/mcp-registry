'use client';

import React from 'react';

interface FieldConfig {
  name?: string;
  value?: string;
  default?: string;
  isRequired?: boolean;
  isSecret?: boolean;
  description?: string;
  format?: 'string' | 'number' | 'boolean' | 'filepath';
  choices?: string[];
  variables?: Record<string, FieldConfig>;
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

interface ConfigurationFormProps {
  configuringPackage?: { pkg: PackageConfig; index: number } | null;
  configuringRemote?: { remote: RemoteConfig; index: number } | null;
  packageConfig: Record<string, any>;
  remoteConfig: Record<string, any>;
  visibleFields: Set<string>;
  onPackageConfigChange: (config: Record<string, any>) => void;
  onRemoteConfigChange: (config: Record<string, any>) => void;
  onToggleFieldVisibility: (fieldId: string) => void;
  onClose: () => void;
}

const isSecretField = (field: FieldConfig) => {
  return field.isSecret === true;
};

// Helper function to extract variable names from a template string
const extractVariableNames = (template: string): string[] => {
  const matches = template.match(/\{([^}]+)\}/g);
  return matches ? matches.map(match => match.slice(1, -1)) : [];
};

// Helper function to substitute variables in a template string
const substituteVariables = (
  template: string, 
  variables: Record<string, any>
): string => {
  return template.replace(/\{([^}]+)\}/g, (match, varName) => {
    return variables[varName] || match;
  });
};

export default function ConfigurationForm({
  configuringPackage,
  configuringRemote,
  packageConfig,
  remoteConfig,
  visibleFields,
  onPackageConfigChange,
  onRemoteConfigChange,
  onToggleFieldVisibility,
  onClose
}: ConfigurationFormProps) {
  if (!configuringPackage && !configuringRemote) {
    return null;
  }

  const renderFieldInput = (
    field: FieldConfig,
    fieldId: string,
    config: Record<string, any>,
    onConfigChange: (config: Record<string, any>) => void,
    placeholder?: string,
    labelOverride?: string
  ) => {
    const isSecret = isSecretField(field);
    const isVisible = visibleFields.has(fieldId);
    const hasValue = field.value !== undefined && field.value !== null && field.value !== '';
    const isReadOnly = hasValue;
    const isRequired = field.isRequired && !hasValue;
    const format = field.format || 'string';
    // Only use default if user hasn't explicitly set a value (including empty)
    const userHasSetValue = config.hasOwnProperty(fieldId);
    const currentValue = userHasSetValue ? config[fieldId] : (field.value || field.default || '');

    // Determine input type and render appropriate control
    const renderInput = () => {
      if (isReadOnly) {
        return (
          <input
            type="text"
            value={currentValue}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-gray-600 cursor-not-allowed"
          />
        );
      }

      // Boolean field - dropdown with true/false
      if (format === 'boolean') {
        const booleanOptions = [
          { value: '', label: isRequired ? 'Select value' : 'No value' },
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' }
        ];

        // Determine default selection
        const defaultValue = field.default || (isRequired ? '' : '');

        return (
          <select
            value={config[fieldId] !== undefined ? config[fieldId] : defaultValue}
            onChange={(e) => {
              onConfigChange({
                ...config,
                [fieldId]: e.target.value
              });
            }}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {booleanOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      }

      // String field with choices - dropdown
      if (format === 'string' && field.choices && field.choices.length > 0) {
        const choiceOptions = [
          { value: '', label: isRequired ? 'Select value' : 'No value' },
          ...field.choices.map((choice) => ({ value: choice, label: choice }))
        ];

        // Determine default selection
        const defaultValue = field.default || (isRequired ? '' : '');

        return (
          <select
            value={config[fieldId] !== undefined ? config[fieldId] : defaultValue}
            onChange={(e) => {
              onConfigChange({
                ...config,
                [fieldId]: e.target.value
              });
            }}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {choiceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      }

      // Number field
      if (format === 'number') {
        const showEyeIcon = isSecret && !isReadOnly;
        return (
          <input
            type="number"
            value={currentValue}
            onChange={(e) => {
              onConfigChange({
                ...config,
                [fieldId]: e.target.value
              });
            }}
            className={`w-full border border-gray-300 rounded-lg px-3 py-2 ${showEyeIcon ? 'pr-10' : 'pr-3'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isSecret && !isVisible ? 'masked-input' : ''
            }`}
            placeholder={placeholder || field.default || 'Enter number'}
          />
        );
      }

      // Default: string/text field
      const showEyeIcon = isSecret && !isReadOnly && !(format === 'string' && field.choices && field.choices.length > 0);
      return (
        <input
          type="text"
          value={currentValue}
          onChange={(e) => {
            onConfigChange({
              ...config,
              [fieldId]: e.target.value
            });
          }}
          className={`w-full border border-gray-300 rounded-lg px-3 py-2 ${showEyeIcon ? 'pr-10' : 'pr-3'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isSecret && !isVisible ? 'masked-input' : ''
          }`}
          placeholder={placeholder || field.default || 'Enter value'}
        />
      );
    };

    return (
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <span className={`text-sm font-mono px-2 py-1 rounded min-w-0 flex-shrink-0 ${
            isRequired ? 'bg-red-100 text-red-800' : 'bg-gray-100'
          }`}>
            {labelOverride || field.name || 'arg'}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </span>
          <div className="flex-1 relative">
            {renderInput()}
            {isSecret && !isReadOnly && format !== 'boolean' && !(format === 'string' && field.choices && field.choices.length > 0) && (
              <button
                type="button"
                onClick={() => onToggleFieldVisibility(fieldId)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {isVisible ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
        {field.description && (
          <p className="text-xs text-gray-600 ml-2">{field.description}</p>
        )}
      </div>
    );
  };

  // Function to render fields with variable substitution
  const renderFieldWithVariables = (
    field: FieldConfig,
    fieldId: string,
    config: Record<string, any>,
    onConfigChange: (config: Record<string, any>) => void,
    placeholder?: string
  ) => {
    const hasVariables = field.variables && Object.keys(field.variables).length > 0;
    
    if (!hasVariables) {
      // No variables, render as normal field
      return renderFieldInput(field, fieldId, config, onConfigChange, placeholder);
    }

    // Has variables - render parent field + variable inputs
    const template = field.value || field.default || '';
    const variableNames = extractVariableNames(template);
    
    // Get current variable values
    const variableValues: Record<string, string> = {};
    variableNames.forEach(varName => {
      const varFieldId = `${fieldId}_var_${varName}`;
      variableValues[varName] = config[varFieldId] || field.variables![varName].default || '';
    });

    return (
      <div className="space-y-3">
        {/* Parent field showing template */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-mono px-2 py-1 rounded min-w-0 flex-shrink-0 ${
              field.isRequired ? 'bg-red-100 text-red-800' : 'bg-gray-100'
            }`}>
              {field.name || 'arg'}
              {field.isRequired && <span className="text-red-500 ml-1">*</span>}
            </span>
            <div className="flex-1 relative">
              <input
                type="text"
                value={template}
                readOnly
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-gray-600 cursor-not-allowed"
                placeholder="Template with variables"
              />
            </div>
          </div>
          {field.description && (
            <p className="text-xs text-gray-600 ml-2">{field.description}</p>
          )}
        </div>

        {/* Variable inputs */}
        <div className="ml-4 space-y-2 border-l-2 border-gray-200 pl-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Variables
          </div>
          {variableNames.map(varName => {
            const varField = field.variables![varName];
            const varFieldId = `${fieldId}_var_${varName}`;
            return (
              <div key={varName}>
                {renderFieldInput(varField, varFieldId, config, onConfigChange, `Enter ${varName}`, varName)}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Configuration Header */}
      <div className="bg-white rounded-lg border p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Configure {configuringPackage ? 'Package' : 'Remote'}
          </h2>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            Cancel
          </button>
        </div>
        
        {/* Summary */}
        {configuringPackage && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-blue-900 mb-2">Package Summary</h3>
            <div className="text-sm text-blue-800">
              <p><strong>Identifier:</strong> {configuringPackage.pkg.identifier}</p>
              <p><strong>Version:</strong> v{configuringPackage.pkg.version}</p>
              <p><strong>Registry Type:</strong> {configuringPackage.pkg.registryType}</p>
              {configuringPackage.pkg.runtimeHint && <p><strong>Runtime Hint:</strong> {configuringPackage.pkg.runtimeHint}</p>}
            </div>
          </div>
        )}

        {configuringRemote && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-green-900 mb-2">Remote Summary</h3>
            <div className="text-sm text-green-800">
              <p><strong>Type:</strong> {configuringRemote.remote.type}</p>
              {configuringRemote.remote.url && <p><strong>URL:</strong> {configuringRemote.remote.url}</p>}
            </div>
          </div>
        )}

        {/* Configuration Form */}
        <div className="space-y-4">
          {configuringPackage && (
            <form className="space-y-4">
            <>
              {configuringPackage.pkg.runtimeHint && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Runtime Hint
                  </label>
                  <input
                    type="text"
                    value={configuringPackage.pkg.runtimeHint}
                    readOnly
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-gray-600 cursor-not-allowed"
                  />
                </div>
              )}

              {configuringPackage.pkg.runtimeArguments && configuringPackage.pkg.runtimeArguments.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Runtime Arguments
                  </label>
                  <div className="space-y-2">
                    {configuringPackage.pkg.runtimeArguments.map((arg, argIndex) => {
                      const fieldId = `runtimeArg_${arg.name || arg.value}`;
                      return (
                        <div key={argIndex}>
                          {renderFieldWithVariables(arg, fieldId, packageConfig, onPackageConfigChange)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {configuringPackage.pkg.packageArguments && configuringPackage.pkg.packageArguments.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Package Arguments
                  </label>
                  <div className="space-y-2">
                    {configuringPackage.pkg.packageArguments.map((arg, argIndex) => {
                      const fieldId = `packageArg_${arg.name || arg.value}`;
                      return (
                        <div key={argIndex}>
                          {renderFieldWithVariables(arg, fieldId, packageConfig, onPackageConfigChange)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {configuringPackage.pkg.environmentVariables && configuringPackage.pkg.environmentVariables.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Environment Variables
                  </label>
                  <div className="space-y-2">
                    {configuringPackage.pkg.environmentVariables.map((env, envIndex) => {
                      const fieldId = `env_${env.name}`;
                      return (
                        <div key={envIndex}>
                          {renderFieldWithVariables(env, fieldId, packageConfig, onPackageConfigChange)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
            </form>
          )}

          {configuringRemote && configuringRemote.remote.headers && configuringRemote.remote.headers.length > 0 && (
            <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Headers
              </label>
              <div className="space-y-2">
                {configuringRemote.remote.headers.map((header, headerIndex) => {
                  const fieldId = `header_${header.name}`;
                  return (
                    <div key={headerIndex}>
                      {renderFieldWithVariables(header, fieldId, remoteConfig, onRemoteConfigChange, "Enter header value")}
                    </div>
                  );
                })}
              </div>
            </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
