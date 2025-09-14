import Image from 'next/image';

const cats = [
  { name: 'Rice & Grains', img: '/assets/Rice & Grains.png', href: '/products#rice' },
  { name: 'Spices', img: '/assets/spices.png', href: '/products#spices' },
  { name: 'Legumes & Beans', img: '/assets/Legumes & Beans.png', href: '/products#legumes' },
  { name: 'Essentials', img: '/assets/essentials.png', href: '/products#essentials' },
];

export default function Categories() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {cats.map((c) => (
          <a key={c.name} href={c.href} className="group block rounded-2xl overflow-hidden border bg-white hover:shadow">
            <div className="relative aspect-square">
              <Image src={c.img} alt={c.name} fill className="object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="p-4 font-medium">{c.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
