import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory } from "@/lib/products";

type Props = { params: { category: string; subcategory: string } };

export function generateStaticParams() {
  const keys = ["rice","spices","legumes","essentials"] as const;
  const all: { category: string; subcategory: string }[] = [];
  for (const k of keys) {
    const c = getCategory(k);
    if (!c) continue;
    for (const s of c.subcats) all.push({ category: k, subcategory: s.slug });
  }
  return all;
}

export default function SubcategoryPage({ params }: Props) {
  const cat = getCategory(params.category);
  if (!cat) return notFound();
  const sub = cat.subcats.find(s => s.slug === params.subcategory);
  if (!sub) return notFound();

  return (
    <section className="container py-10 max-w-3xl">
      <nav className="text-sm text-gray-600">
        <Link href="/products" className="hover:text-brand">Products</Link>
        <span> / </span>
        <Link href={`/products/${cat.key}`} className="hover:text-brand">{cat.title}</Link>
        <span> / </span>
        <span className="text-gray-900">{sub.name}</span>
      </nav>

      <h1 className="text-3xl font-bold mt-3">{sub.name}</h1>
      <p className="mt-2 text-gray-600">
        Short product brief (origin, grades, pack sizes, MOQ, lead times, certifications). Customise this content per subcategory.
      </p>

      <div className="mt-6 grid gap-3">
        <div className="rounded-lg border p-4">
          <div className="font-semibold">Typical pack sizes</div>
          <div className="text-gray-700">5kg · 10kg · 20kg · 25kg</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="font-semibold">Trade info</div>
          <div className="text-gray-700">VAT-compliant invoicing · UK warehouse · Credit terms (subject to approval)</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="font-semibold">Wholesale enquiry</div>
          <div className="text-gray-700">
            <Link href="/contact#enquiry" className="text-brand underline">Request a quote</Link>.
          </div>
        </div>
      </div>
    </section>
  );
}