import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-16 sm:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Your trusted partner for authentic&nbsp;
            <span className="text-brand">rice, spices &amp; groceries</span>.
          </h1>
          <p className="mt-4 text-gray-600 max-w-prose">
            UK-based importer and wholesaler delivering essential foods with reliability,
            clear pricing and long-term commitment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-white hover:bg-brand-light">Explore Products</Link>
            <Link href="/contact#enquiry" className="inline-flex items-center rounded-full border px-5 py-2.5 hover:border-brand hover:text-brand">Wholesale Enquiry</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop"
            alt="Basmati rice in sacks"
            fill
            className="object-cover rounded-2xl shadow-lg ring-1 ring-gray-200"
            priority
          />
        </div>
      </div>
    </section>
  );
}
