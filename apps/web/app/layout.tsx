import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bun Monorepo - Web App',
  description: 'Next.js 15 app with shared packages',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
