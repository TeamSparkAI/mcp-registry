import Link from 'next/link';
import { linterRules } from '@teamsparkai/mcp-registry-validator';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata = {
  title: 'Linter Rules | MCP Server Registry',
  description: 'Linter rules applied to MCP server registry entries (server.json)',
};

function SeverityBadge({ severity }: { severity: 'error' | 'warning' | 'info' }) {
  const styles = {
    error: 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200',
    warning: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200',
    info: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200',
  };
  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded ${styles[severity]}`}>
      {severity}
    </span>
  );
}

export default function LinterDocsPage() {
  return (
    <div>
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Registry
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/mcp_black.png"
                  alt="MCP Registry"
                  className="w-6 h-6 object-contain dark:hidden"
                />
                <img
                  src="/mcp_white.png"
                  alt="MCP Registry"
                  className="w-6 h-6 object-contain hidden dark:block"
                />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">MCP Server Registry</span>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              MCP Server Registry Linter Rules
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              These rules are applied to the server object (server.json), typically after JSON schema validation.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              They detect issues that are not possible to enforce via JSON schema alone. Documentation is generated from the linter rule metadata.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {linterRules.map((rule) => (
                <li key={rule.name} className="flex items-center gap-2">
                  <a
                    href={`#${rule.name}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-mono text-sm"
                  >
                    {rule.name}
                  </a>
                  <SeverityBadge severity={rule.severity} />
                </li>
              ))}
            </ul>
          </div>

          {linterRules.map((rule) => (
            <section
              key={rule.name}
              id={rule.name}
              className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8 mb-8 scroll-mt-24"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
                  {rule.name}
                </h2>
                <SeverityBadge severity={rule.severity} />
              </div>

              {rule.docs?.purpose && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong className="text-gray-900 dark:text-white">Purpose:</strong> {rule.docs.purpose}
                </p>
              )}

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong className="text-gray-900 dark:text-white">Message:</strong> {rule.message}
              </p>

              {rule.docs?.triggers && rule.docs.triggers.length > 0 && (
                <div className="mb-4">
                  <strong className="text-gray-900 dark:text-white block mb-2">Triggers:</strong>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {rule.docs.triggers.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}

              {rule.docs?.examples && (rule.docs.examples.bad || rule.docs.examples.good) && (
                <div className="mb-4 space-y-4">
                  <strong className="text-gray-900 dark:text-white block mb-2">Examples:</strong>
                  {rule.docs.examples.bad && (
                    <div>
                      <span className="text-red-600 dark:text-red-400 text-sm font-medium block mb-1">Bad:</span>
                      <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded border dark:border-gray-700 text-sm overflow-x-auto text-gray-900 dark:text-gray-100">
                        <code>{rule.docs.examples.bad}</code>
                      </pre>
                    </div>
                  )}
                  {rule.docs.examples.good && (
                    <div>
                      <span className="text-green-600 dark:text-green-400 text-sm font-medium block mb-1">Good:</span>
                      <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded border dark:border-gray-700 text-sm overflow-x-auto text-gray-900 dark:text-gray-100">
                        <code>{rule.docs.examples.good}</code>
                      </pre>
                    </div>
                  )}
                </div>
              )}

              {rule.docs?.guidance && rule.docs.guidance.length > 0 && (
                <div className="mb-4">
                  <strong className="text-gray-900 dark:text-white block mb-2">Guidance:</strong>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {rule.docs.guidance.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>
              )}

              {rule.docs?.scope && rule.docs.scope.length > 0 && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong className="text-gray-900 dark:text-white">Scope:</strong> {rule.docs.scope.join(', ')}
                </p>
              )}

              {rule.docs?.notes && rule.docs.notes.length > 0 && (
                <div>
                  <strong className="text-gray-900 dark:text-white block mb-2">Notes:</strong>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {rule.docs.notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
