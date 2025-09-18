import Hero from '@/components/Hero';
import FeatureCards from '@/components/FeatureCards';
import Categories from '@/components/Categories';
import CTABand from '@/components/CTABand';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Empire Exchange | Empire Exchange Ltd | Empire Exchange Limited - Leading UK Food Importers & Wholesalers',
  description: 'Empire Exchange Limited is the UK\'s premier importer and wholesaler of authentic rice, spices, legumes, and food essentials. Professional wholesale services with reliable sourcing and transparent payments.',
  keywords: [
    'Empire Exchange',
    'Empire Exchange Ltd', 
    'Empire Exchange Limited',
    'UK food importers',
    'wholesale rice UK',
    'spices importers UK',
    'legumes wholesale',
    'grocery importers',
    'Basmati rice wholesale',
    'authentic spices UK',
    'food essentials importers',
    'professional wholesale'
  ],
  openGraph: {
    title: 'Empire Exchange Limited - Leading UK Food Importers & Wholesalers',
    description: 'Professional UK importer & wholesaler for authentic rice, spices, legumes & food essentials. Empire Exchange Ltd - your trusted partner for quality wholesale.',
    type: 'website',
    url: 'https://empireexchange.co.uk',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <Categories />
      <CTABand />
    </>
  );
}
