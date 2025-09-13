import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory } from "@/lib/products";

type Props = { params: { category: string } };

export function generateStaticParams() {
  return ["rice","spices","legumes","essentials"].map(category => ({ category }));
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategory(params.category);
  if (!cat) return notFound();

  return (
    <section className="container py-10">
      <div className="grid gap-6 md:grid-cols-[1fr,2fr] items-center">
        <div className="rounded-xl overflow-hidden border">
          <Image src={cat.heroImg} alt={cat.title} width={1200} height={800} className="w-full h-auto object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{cat.title}</h1>
          <p className="text-gray-600 mt-2">Browse {cat.title} sub-categories.</p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cat.subcats.map(s => (
              <Link
                key={s.slug}
                href={`/products/${cat.key}/${s.slug}`}
                className="rounded-lg border px-4 py-3 hover:border-brand hover:text-brand"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}