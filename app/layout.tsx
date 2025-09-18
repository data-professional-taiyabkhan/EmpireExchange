import './styles/globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export const metadata: Metadata = {
  title: 'Empire Exchange | Empire Exchange Ltd | Empire Exchange Limited - UK Import & Wholesale',
  description: 'Empire Exchange Limited - UK-based importer & wholesaler for authentic rice, spices, legumes, groceries & food essentials. Reliable sourcing, transparent payments, professional wholesale services.',
  keywords: [
    'Empire Exchange',
    'Empire Exchange Ltd',
    'Empire Exchange Limited',
    'UK wholesale',
    'rice importers UK',
    'spices wholesale UK',
    'legumes importers',
    'grocery wholesale',
    'food essentials UK',
    'Basmati rice UK',
    'wholesale spices',
    'professional food importers'
  ],
  authors: [{ name: 'Empire Exchange Limited' }],
  creator: 'Empire Exchange Limited',
  publisher: 'Empire Exchange Limited',
  openGraph: {
    title: 'Empire Exchange Limited | UK Import & Wholesale',
    description: 'Professional UK importer & wholesaler for authentic rice, spices, legumes & food essentials. Empire Exchange Ltd - your trusted partner for quality wholesale.',
    type: 'website',
    url: 'https://empireexchange.co.uk',
    siteName: 'Empire Exchange Limited',
    locale: 'en_GB',
    images: [
      {
        url: '/assets/empire-exchange-logo.png.png',
        width: 1200,
        height: 630,
        alt: 'Empire Exchange Limited - UK Import & Wholesale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empire Exchange Limited | UK Import & Wholesale',
    description: 'Professional UK importer & wholesaler for authentic rice, spices, legumes & food essentials.',
    images: ['/assets/empire-exchange-logo.png.png'],
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/empire-exchange-logo.png.png',
    shortcut: '/assets/empire-exchange-logo.png.png',
    apple: '/assets/empire-exchange-logo.png.png',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://empireexchange.co.uk',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Empire Exchange Limited",
    "alternateName": ["Empire Exchange", "Empire Exchange Ltd"],
    "description": "UK-based importer & wholesaler for authentic rice, spices, legumes, groceries & food essentials",
    "url": "https://empireexchange.co.uk",
    "logo": "https://empireexchange.co.uk/assets/empire-exchange-logo.png.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-7424-914353",
      "contactType": "customer service",
      "email": "info@empireexchange.co.uk",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England"
    },
    "sameAs": [
      "https://empireexchange.co.uk"
    ],
    "foundingDate": "2024",
    "numberOfEmployees": "10-50",
    "industry": "Food Import and Wholesale",
    "serviceArea": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Food Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Rice & Grains",
            "description": "Premium Basmati rice, Golden Sella, Sona Masoori, and Parboiled rice"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Spices",
            "description": "Authentic spices including Turmeric, Chili, Coriander, Cumin, and Masala blends"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Legumes & Beans",
            "description": "High-quality legumes including Toor Dal, Chana, Masoor, and various beans"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Essentials",
            "description": "Food essentials including Atta flour, edible oils, pickles, and condiments"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
