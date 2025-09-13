import Image from "next/image";
import Link from "next/link";

const sections = [
  { id: 'rice', title: 'Rice & Grains', img: '/assets/rice.png', items: ['Basmati 1121','Golden Sella','Sona Masoori','Parboiled Rice'] },
  { id: 'spices', title: 'Spices', img: '/assets/spices.png', items: ['Turmeric','Chili','Coriander','Cumin','Masala Blends','Whole & Ground Spices'] },
  { id: 'legumes', title: 'Legumes & Beans', img: '/assets/legumes.png', items: ['Toor Dal','Chana','Masoor','Red & Green Lentils','Kidney Beans','Chickpeas'] },
  { id: 'essentials', title: 'Essentials', img: '/assets/essentials.png', items: ['Atta (Flour)','Edible Oils','Pickles','Condiments'] },
];

export default function ProductsPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid gap-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="grid gap-4 md:grid-cols-[1fr,2fr] items-center">
            <div className="rounded-xl overflow-hidden border">
              <Link href={`/products/${s.id}`}>
                <Image src={s.img} alt={s.title} width={1200} height={800} className="w-full h-auto object-cover" />
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                <Link href={`/products/${s.id}`} className="hover:text-brand">{s.title}</Link>
              </h2>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {s.items.map((item) => (
                  <li key={item} className="rounded-lg border px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}