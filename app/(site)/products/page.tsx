// app/(site)/products/page.tsx
import Image from "next/image";

const sections = [
  {
    id: "rice",
    title: "Rice & Grains",
    items: ["Basmati 1121", "Golden Sella", "Sona Masoori", "Parboiled Rice"],
    img: "/assets/rice.png",
  },
  {
    id: "spices",
    title: "Spices",
    items: ["Turmeric", "Chili", "Coriander", "Cumin", "Masala Blends", "Whole & Ground Spices"],
    img: "/assets/spices.png",
  },
  {
    id: "legumes",
    title: "Legumes & Beans",
    items: ["Toor Dal", "Chana", "Masoor", "Red & Green Lentils", "Kidney Beans", "Chickpeas"],
    img: "/assets/legumes.png",
  },
  {
    id: "essentials",
    title: "Essentials",
    items: ["Atta (Flour)", "Edible Oils", "Pickles", "Condiments"],
    img: "/assets/essentials.png",
  },
];

export default function ProductsPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid gap-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="grid gap-4 md:grid-cols-[1fr,2fr] items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{s.title}</h2>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {s.items.map((item) => (
                  <li key={item} className="rounded-lg border px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}