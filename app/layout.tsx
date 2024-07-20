import type { Metadata } from 'next';
import { Figtree, Inter } from 'next/font/google';
import './globals.css';

// ----------------------------------------------------------------

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${figtree.variable} antialiased`}>
        <main className="mx-auto h-full min-h-screen">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
