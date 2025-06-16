import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MIRAL - Vêtements de cyclisme premium',
  description: 'Ride the Silence. Découvrez notre collection de vêtements de cyclisme haut de gamme conçue pour les passionnés de performance et d\'esthétique.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="/miral-enhancements.css" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
        <script src="/miral-enhancements.js" defer></script>
      </body>
    </html>
  );
}