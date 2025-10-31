import React from 'react';
import type { ValidationIssue } from '@teamsparkai/mcp-registry-validator';

interface ValidationIssuesProps {
  issues: ValidationIssue[];
  className?: string;
}

export function ValidationIssues({ issues, className = '' }: ValidationIssuesProps) {
  if (issues.length === 0) {
    return (
      <div className={`p-4 bg-green-50 border border-green-200 rounded-lg ${className}`}>
        <div className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-800 font-medium">No validation issues found</span>
        </div>
      </div>
    );
  }

  const errors = issues.filter(issue => issue.severity === 'error');
  const warnings = issues.filter(issue => issue.severity === 'warning');
  const infos = issues.filter(issue => issue.severity === 'info');

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Summary */}
      <div className="flex items-center space-x-4 text-sm">
        {errors.length > 0 && (
          <span className="flex items-center text-red-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {errors.length} error{errors.length !== 1 ? 's' : ''}
          </span>
        )}
        {warnings.length > 0 && (
          <span className="flex items-center text-yellow-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {warnings.length} warning{warnings.length !== 1 ? 's' : ''}
          </span>
        )}
        {infos.length > 0 && (
          <span className="flex items-center text-blue-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {infos.length} info{infos.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Issues by severity */}
      {errors.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-red-800">Errors</h4>
          <div className="space-y-1">
            {errors.map((issue, index) => (
              <ValidationIssueItem key={`error-${index}`} issue={issue} />
            ))}
          </div>
        </div>
      )}

      {warnings.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-yellow-800">Warnings</h4>
          <div className="space-y-1">
            {warnings.map((issue, index) => (
              <ValidationIssueItem key={`warning-${index}`} issue={issue} />
            ))}
          </div>
        </div>
      )}

      {infos.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-blue-800">Info</h4>
          <div className="space-y-1">
            {infos.map((issue, index) => (
              <ValidationIssueItem key={`info-${index}`} issue={issue} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ValidationIssueItem({ issue }: { issue: ValidationIssue }) {
  const getIcon = () => {
    switch (issue.severity) {
      case 'error':
        return (
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const getSourceBadge = () => {
    switch (issue.source) {
      case 'parse':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
            Parse
          </span>
        );
      case 'schema':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
            Schema
          </span>
        );
      case 'linter':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
            Linter
          </span>
        );
    }
  };

  const getBackgroundColor = () => {
    switch (issue.severity) {
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
    }
  };

  const getTextColor = () => {
    switch (issue.severity) {
      case 'error':
        return 'text-red-800';
      case 'warning':
        return 'text-yellow-800';
      case 'info':
        return 'text-blue-800';
    }
  };

  return (
    <div className={`p-3 border rounded-lg ${getBackgroundColor()}`}>
      <div className="flex items-start space-x-3">
        {getIcon()}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            {getSourceBadge()}
            <code className="text-xs bg-gray-100 px-1 py-0.5 rounded font-mono">
              {issue.path}
            </code>
            {issue.rule && (
              <span className="text-xs text-gray-500">
                ({issue.rule})
              </span>
            )}
          </div>
          <p className={`text-sm ${getTextColor()}`}>
            {issue.message}
          </p>
        </div>
      </div>
    </div>
  );
}


