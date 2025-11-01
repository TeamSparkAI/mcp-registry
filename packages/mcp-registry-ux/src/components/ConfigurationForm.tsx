import React from 'react';
import { Package, TransportRemote, FieldConfig, ServerDetail } from '../types';
import { getFieldId } from '../utils';
import { getConfigItemType, getConfigPackage, getConfigRemote, generateConfiguredServer, areAllRequiredFieldsFilled } from '../utils/configGenerator';

interface ConfigurationFormProps {
  configuringServer: ServerDetail;
  packageConfig: Record<string, any>;
  remoteConfig: Record<string, any>;
  visibleFields: Set<string>;
  onPackageConfigChange: (config: Record<string, any>) => void;
  onRemoteConfigChange: (config: Record<string, any>) => void;
  onToggleFieldVisibility: (fieldId: string) => void;
  onClose: () => void;
  onOk?: (trimmedServer: ServerDetail, config: any) => void;
  okButtonLabel?: string;
}

const isSecretField = (field: FieldConfig) => {
  return field.isSecret === true;
};

const extractVariableNames = (template: string): string[] => {
  const matches = template.match(/\{([^}]+)\}/g);
  return matches ? matches.map(match => match.slice(1, -1)) : [];
};

export function ConfigurationForm({
  configuringServer,
  packageConfig,
  remoteConfig,
  visibleFields,
  onPackageConfigChange,
  onRemoteConfigChange,
  onToggleFieldVisibility,
  onClose,
  onOk,
  okButtonLabel = 'OK'
}: ConfigurationFormProps) {
  const itemType = getConfigItemType(configuringServer);
  if (!itemType) {
    return null;
  }
  
  const configuringPackage = getConfigPackage(configuringServer);
  const configuringRemote = getConfigRemote(configuringServer);

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
    const userHasSetValue = config.hasOwnProperty(fieldId);
    const currentValue = userHasSetValue ? config[fieldId] : (field.value || field.default || '');

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

      if (format === 'boolean') {
        const booleanOptions = [
          { value: '', label: isRequired ? 'Select value' : 'No value' },
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' }
        ];
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

      if (format === 'string' && field.choices && field.choices.length > 0) {
        const choiceOptions = [
          { value: '', label: isRequired ? 'Select value' : 'No value' },
          ...field.choices.map((choice) => ({ value: choice, label: choice }))
        ];
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
            placeholder={field.placeholder || field.valueHint || placeholder || 'Enter number'}
          />
        );
      }

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
          placeholder={field.placeholder || field.valueHint || placeholder || 'Enter value'}
        />
      );
    };

    return (
      <div className="space-y-1">
        {field.description && (
          <p className="text-xs text-gray-600">{field.description}</p>
        )}
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
      </div>
    );
  };

  const renderFieldWithVariables = (
    field: FieldConfig,
    fieldId: string,
    config: Record<string, any>,
    onConfigChange: (config: Record<string, any>) => void,
    placeholder?: string
  ) => {
    if (field.isRepeated) {
      return renderRepeatedField(field, fieldId, config, onConfigChange, placeholder);
    }
    
    const hasVariables = field.variables && Object.keys(field.variables).length > 0;
    
    if (!hasVariables) {
      return renderFieldInput(field, fieldId, config, onConfigChange, placeholder);
    }

    const template = field.value || field.default || '';
    const variableNames = extractVariableNames(template);
    
    const variableValues: Record<string, string> = {};
    variableNames.forEach(varName => {
      const varFieldId = `${fieldId}_var_${varName}`;
      variableValues[varName] = config[varFieldId] || field.variables![varName].default || '';
    });

    return (
      <div className="space-y-3">
        <div className="space-y-1">
          {field.description && (
            <p className="text-xs text-gray-600">{field.description}</p>
          )}
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
        </div>

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

  const renderRepeatedField = (
    field: FieldConfig,
    baseFieldId: string,
    config: Record<string, any>,
    onConfigChange: (config: Record<string, any>) => void,
    placeholder?: string
  ) => {
    const instances = config[`${baseFieldId}_instances`] || [0];
    
    return (
      <div className="space-y-2">
        {instances.map((instanceIndex: number, arrayIndex: number) => {
          const fieldId = `${baseFieldId}_${instanceIndex}`;
          const isFirst = arrayIndex === 0;
          
          return (
            <div key={instanceIndex} className="flex items-center space-x-2">
              <div className="flex-1">
                {renderFieldWithVariables({...field, isRepeated: false, description: arrayIndex === 0 ? field.description : undefined}, fieldId, config, onConfigChange, placeholder)}
              </div>
              {!isFirst && (
                <button
                  type="button"
                  onClick={() => {
                    const newInstances = instances.filter((i: number) => i !== instanceIndex);
                    onConfigChange({
                      ...config,
                      [`${baseFieldId}_instances`]: newInstances,
                      [fieldId]: undefined
                    });
                  }}
                  className="text-red-600 hover:text-red-800 flex items-center space-x-1 px-2 py-2 text-sm font-medium self-center"
                  title="Remove this instance"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Remove</span>
                </button>
              )}
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => {
            const newIndex = Math.max(...instances) + 1;
            onConfigChange({
              ...config,
              [`${baseFieldId}_instances`]: [...instances, newIndex]
            });
          }}
          className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add {field.name || 'argument'}</span>
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Configure {configuringPackage ? 'Package' : 'Remote'}
          </h2>
          <div className="flex gap-3">
            {onOk && (() => {
              const allFieldsFilled = areAllRequiredFieldsFilled(configuringServer, packageConfig, remoteConfig);
              return (
                <button
                  onClick={() => {
                    const config = generateConfiguredServer(configuringServer, packageConfig, remoteConfig);
                    onOk(configuringServer, config);
                  }}
                  disabled={!allFieldsFilled}
                  className={`px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                    allFieldsFilled
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {okButtonLabel}
                </button>
              );
            })()}
            <button
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
        
        {configuringPackage && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-blue-900 mb-2">Package Summary</h3>
            <div className="text-sm text-blue-800">
              <p><strong>Identifier:</strong> {configuringPackage.identifier}</p>
              <p><strong>Version:</strong> {configuringPackage.version}</p>
              <p><strong>Registry Type:</strong> {configuringPackage.registryType}</p>
              {configuringPackage.runtimeHint && <p><strong>Runtime Hint:</strong> {configuringPackage.runtimeHint}</p>}
              {(configuringPackage.transport as any)?.type && (
                <p><strong>Transport:</strong> {(configuringPackage.transport as any).type}</p>
              )}
              {(configuringPackage.transport as any)?.url && (
                <p><strong>Transport URL:</strong> <span className="font-mono break-all">{(configuringPackage.transport as any).url}</span></p>
              )}
            </div>
          </div>
        )}

        {configuringRemote && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-green-900 mb-2">Remote Summary</h3>
            <div className="text-sm text-green-800">
              <p><strong>Type:</strong> {configuringRemote.type}</p>
              {(configuringRemote as TransportRemote).url && <p><strong>URL:</strong> {(configuringRemote as TransportRemote).url}</p>}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {configuringPackage && (
            <form className="space-y-4">
              {configuringPackage.runtimeHint && (
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Runtime Hint
                  </h3>
                  <input
                    type="text"
                    value={configuringPackage.runtimeHint}
                    readOnly
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-gray-600 cursor-not-allowed"
                  />
                </div>
              )}

              {configuringPackage.runtimeArguments && configuringPackage.runtimeArguments.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Runtime Arguments
                  </h3>
                  <div className="space-y-0">
                    {configuringPackage.runtimeArguments.map((arg: any, argIndex: number) => {
                      const configArg = arg as FieldConfig;
                      const fieldId = getFieldId(configArg, 'runtimeArg', argIndex);
                      return (
                        <div key={argIndex}>
                          <div className="pb-3">
                            {renderFieldWithVariables(configArg, fieldId, packageConfig, onPackageConfigChange)}
                          </div>
                          {argIndex < (configuringPackage.runtimeArguments?.length || 0) - 1 && (
                            <hr className="border-gray-200 mb-3" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {configuringPackage.packageArguments && configuringPackage.packageArguments.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Package Arguments
                  </h3>
                  <div className="space-y-0">
                    {configuringPackage.packageArguments.map((arg: any, argIndex: number) => {
                      const configArg = arg as FieldConfig;
                      const fieldId = getFieldId(configArg, 'packageArg', argIndex);
                      return (
                        <div key={argIndex}>
                          <div className="pb-3">
                            {renderFieldWithVariables(configArg, fieldId, packageConfig, onPackageConfigChange)}
                          </div>
                          {argIndex < (configuringPackage.packageArguments?.length || 0) - 1 && (
                            <hr className="border-gray-200 mb-3" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {configuringPackage.environmentVariables && configuringPackage.environmentVariables.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Environment Variables
                  </h3>
                  <div className="space-y-0">
                    {configuringPackage.environmentVariables.map((env: any, envIndex: number) => {
                      const configEnv = env as FieldConfig;
                      const fieldId = getFieldId(configEnv, 'env', envIndex);
                      return (
                        <div key={envIndex}>
                          <div className="pb-3">
                            {renderFieldWithVariables(configEnv, fieldId, packageConfig, onPackageConfigChange)}
                          </div>
                          {envIndex < (configuringPackage.environmentVariables?.length || 0) - 1 && (
                            <hr className="border-gray-200 mb-3" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {(() => {
                const transport = configuringPackage.transport as TransportRemote;
                return transport?.headers && transport.headers.length > 0 && (
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">
                    Transport Headers
                  </h3>
                  <div className="space-y-0">
                    {transport.headers.map((header: FieldConfig, headerIndex: number) => {
                      const fieldId = getFieldId(header, 'transport_header', headerIndex);
                      return (
                        <div key={headerIndex}>
                          <div className="pb-3">
                            {renderFieldWithVariables(header, fieldId, packageConfig, onPackageConfigChange, "Enter header value")}
                          </div>
                          {headerIndex < (transport.headers?.length || 0) - 1 && (
                            <hr className="border-gray-200 mb-3" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )})()}
            </form>
          )}

          {configuringRemote && (configuringRemote as TransportRemote).headers && (configuringRemote as TransportRemote).headers!.length > 0 && (
            <form className="space-y-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Headers
              </h3>
              <div className="space-y-0">
                {(configuringRemote as TransportRemote).headers!.map((header: FieldConfig, headerIndex: number) => {
                  const fieldId = getFieldId(header, 'header', headerIndex);
                  return (
                    <div key={headerIndex}>
                      <div className="pb-3">
                        {renderFieldWithVariables(header, fieldId, remoteConfig, onRemoteConfigChange, "Enter header value")}
                      </div>
                      {headerIndex < ((configuringRemote as TransportRemote).headers?.length || 0) - 1 && (
                        <hr className="border-gray-200 mb-3" />
                      )}
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
