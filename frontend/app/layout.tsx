import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'E-Cookbook',
  description: 'Your intelligent cooking assistant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
} 