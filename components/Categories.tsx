import Image from 'next/image';

const cats = [
  { name: 'Rice &amp; Grains', img: 'https://images.unsplash.com/photo-1586201375754-1421e0aa2fda?q=80&w=1200&auto=format&fit=crop', href: '/products#rice' },
  { name: 'Spices', img: 'https://images.unsplash.com/photo-1505575972945-280b9f1b81f4?q=80&w=1200&auto=format&fit=crop', href: '/products#spices' },
  { name: 'Legumes &amp; Beans', img: 'https://images.unsplash.com/photo-1615485737651-cb4b76f1cd86?q=80&w=1200&auto=format&fit=crop', href: '/products#legumes' },
  { name: 'Essentials', img: 'https://images.unsplash.com/photo-1604908813570-9c566a45c03a?q=80&w=1200&auto=format&fit=crop', href: '/products#essentials' },
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
