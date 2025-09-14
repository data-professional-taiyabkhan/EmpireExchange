// lib/products.ts
export type Subcat = { name: string; slug: string; image: string };
export type Category = {
  key: 'rice' | 'spices' | 'legumes' | 'essentials';
  title: string;
  heroImg: string;
  subcats: Subcat[];
};

export const PRODUCTS: Category[] = [
  {
    key: 'rice',
    title: 'Rice & Grains',
    heroImg: '/assets/Rice & Grains.png',
    subcats: [
      { name: 'Basmati 1121', slug: 'basmati-1121', image: '/assets/Basmati_1121.png' },
      { name: 'Golden Sella', slug: 'golden-sella', image: '/assets/Golden_Sella.png' },
      { name: 'Sona Masoori', slug: 'sona-masoori', image: '/assets/Sona_Masoori.png' },
      { name: 'Parboiled Rice', slug: 'parboiled-rice', image: '/assets/Parboiled_Rice.png' },
    ],
  },
  {
    key: 'spices',
    title: 'Spices',
    heroImg: '/assets/spices.png',
    subcats: [
      { name: 'Turmeric', slug: 'turmeric', image: '/assets/Turmeric.png' },
      { name: 'Chili', slug: 'chili', image: '/assets/Chili.png' },
      { name: 'Coriander', slug: 'coriander', image: '/assets/Coriander.png' },
      { name: 'Cumin', slug: 'cumin', image: '/assets/Cumin.png' },
      { name: 'Masala Blends', slug: 'masala-blends', image: '/assets/Masala_Blends.png' },
      { name: 'Whole & Ground Spices', slug: 'whole-and-ground', image: '/assets/Whole_and_Ground_Spices.png' },
    ],
  },
  {
    key: 'legumes',
    title: 'Legumes & Beans',
    heroImg: '/assets/Legumes & Beans.png',
    subcats: [
      { name: 'Toor Dal', slug: 'toor-dal', image: '/assets/Legumes & Beans.png' },
      { name: 'Chana', slug: 'chana', image: '/assets/Legumes & Beans.png' },
      { name: 'Masoor', slug: 'masoor', image: '/assets/Legumes & Beans.png' },
      { name: 'Red & Green Lentils', slug: 'red-green-lentils', image: '/assets/Legumes & Beans.png' },
      { name: 'Kidney Beans', slug: 'kidney-beans', image: '/assets/Legumes & Beans.png' },
      { name: 'Chickpeas', slug: 'chickpeas', image: '/assets/Legumes & Beans.png' },
    ],
  },
  {
    key: 'essentials',
    title: 'Essentials',
    heroImg: '/assets/essentials.png',
    subcats: [
      { name: 'Atta (Flour)', slug: 'atta-flour', image: '/assets/Atta (Flour).png' },
      { name: 'Edible Oils', slug: 'edible-oils', image: '/assets/essentials.png' },
      { name: 'Pickles', slug: 'pickles', image: '/assets/essentials.png' },
      { name: 'Condiments', slug: 'condiments', image: '/assets/Condiments.png' },
    ],
  },
];

export function getCategory(key: string) {
  return PRODUCTS.find(c => c.key === key);
}