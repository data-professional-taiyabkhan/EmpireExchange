import './styles/globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export const metadata: Metadata = {
  title: 'Empire Exchange | Import & Wholesale – Rice, Spices, Groceries',
  description: 'UK-based importer & wholesaler for authentic food essentials: rice, spices, legumes, oils & more. Reliable sourcing, transparent payments, UK warehouse.',
  openGraph: {
    title: 'Empire Exchange | Import & Wholesale',
    description: 'Authentic rice, spices & groceries – imported with care, delivered with trust.',
    type: 'website',
    url: 'https://example.com',
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <TopBar />
        <Header />
        <main>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
