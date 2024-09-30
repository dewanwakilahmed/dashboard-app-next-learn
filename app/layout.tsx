import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';

// Font
import { inter } from '@/app/ui/fonts';

// CSS
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard App built with App Router',
  metadataBase: new URL('https://dashboard-app-next-learn.vercel.app'),
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
