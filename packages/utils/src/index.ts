/**
 * Shared utility functions for the monorepo
 * Can be used in both web and native apps
 */

/**
 * Greets a person with a friendly message
 * @param name - The name of the person to greet
 * @returns A greeting message
 */
export function greet(name: string): string {
  return `Hello, ${name}! Welcome to the Bun monorepo.`;
}

/**
 * Capitalizes the first letter of a string
 * @param str - The string to capitalize
 * @returns The capitalized string
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Formats a date to a readable string
 * @param date - The date to format
 * @returns A formatted date string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
