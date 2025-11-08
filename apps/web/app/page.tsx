'use client';

import { useState } from 'react';
import { Button } from '@my-monorepo/ui';
import { greet, capitalize, formatDate } from '@my-monorepo/utils';

export default function Home() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState('');

  const handleGreet = () => {
    const message = greet('Developer');
    setGreeting(message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {capitalize('welcome to the')}
              <span className="text-blue-600"> Bun Monorepo</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Next.js 15 + Shared Packages + Tailwind CSS
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Today: {formatDate(new Date())}
            </p>
          </div>

          {/* Demo Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Shared Components Demo
            </h2>

            {/* Button Demo */}
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Cross-platform Button from @my-monorepo/ui:
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    title="Primary"
                    onPress={() => setCount(count + 1)}
                    variant="primary"
                  />
                  <Button
                    title="Secondary"
                    onPress={() => setCount(count - 1)}
                    variant="secondary"
                  />
                  <Button
                    title="Outline"
                    onPress={() => setCount(0)}
                    variant="outline"
                  />
                  <Button
                    title="Disabled"
                    onPress={() => {}}
                    disabled
                  />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                  Counter: {count}
                </p>
              </div>
            </div>

            {/* Utils Demo */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Shared utilities from @my-monorepo/utils:
                </p>
                <Button
                  title="Greet Me!"
                  onPress={handleGreet}
                  variant="primary"
                />
              </div>

              {greeting && (
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-lg text-green-900 dark:text-green-100">
                    {greeting}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-blue-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Monorepo Features
            </h3>
            <ul className="space-y-2 text-blue-50">
              <li>✓ Bun workspaces for package management</li>
              <li>✓ TypeScript project references</li>
              <li>✓ Shared UI components (web + native)</li>
              <li>✓ Shared utility functions</li>
              <li>✓ Next.js 15 with App Router</li>
              <li>✓ Tailwind CSS for styling</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
