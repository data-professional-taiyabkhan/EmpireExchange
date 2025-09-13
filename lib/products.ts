// lib/products.ts
export type Subcat = { name: string; slug: string };
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
    heroImg: '/assets/rice.png',
    subcats: [
      { name: 'Basmati 1121', slug: 'basmati-1121' },
      { name: 'Golden Sella', slug: 'golden-sella' },
      { name: 'Sona Masoori', slug: 'sona-masoori' },
      { name: 'Parboiled Rice', slug: 'parboiled-rice' },
    ],
  },
  {
    key: 'spices',
    title: 'Spices',
    heroImg: '/assets/spices.png',
    subcats: [
      { name: 'Turmeric', slug: 'turmeric' },
      { name: 'Chili', slug: 'chili' },
      { name: 'Coriander', slug: 'coriander' },
      { name: 'Cumin', slug: 'cumin' },
      { name: 'Masala Blends', slug: 'masala-blends' },
      { name: 'Whole & Ground Spices', slug: 'whole-and-ground' },
    ],
  },
  {
    key: 'legumes',
    title: 'Legumes & Beans',
    heroImg: '/assets/legumes.png',
    subcats: [
      { name: 'Toor Dal', slug: 'toor-dal' },
      { name: 'Chana', slug: 'chana' },
      { name: 'Masoor', slug: 'masoor' },
      { name: 'Red & Green Lentils', slug: 'red-green-lentils' },
      { name: 'Kidney Beans', slug: 'kidney-beans' },
      { name: 'Chickpeas', slug: 'chickpeas' },
    ],
  },
  {
    key: 'essentials',
    title: 'Essentials',
    heroImg: '/assets/essentials.png',
    subcats: [
      { name: 'Atta (Flour)', slug: 'atta-flour' },
      { name: 'Edible Oils', slug: 'edible-oils' },
      { name: 'Pickles', slug: 'pickles' },
      { name: 'Condiments', slug: 'condiments' },
    ],
  },
];

export function getCategory(key: string) {
  return PRODUCTS.find(c => c.key === key);
}