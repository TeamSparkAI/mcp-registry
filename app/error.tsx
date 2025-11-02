'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-red-600 dark:text-red-400 text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Something went wrong</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{error.message || 'An unexpected error occurred'}</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

