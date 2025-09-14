import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-16 sm:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Your Trusted Partner for Authentic&nbsp;
            <span className="text-brand">Rice, Spices & Groceries</span> – Imported with Care, Delivered with Trust.
          </h1>
          <p className="mt-4 text-gray-600 max-w-prose">
            We are a UK-based importer and wholesaler delivering authentic food essentials with
            reliability, transparency, and a commitment to excellence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-white hover:bg-brand-light">Explore Products</Link>
            <Link href="/contact#enquiry" className="inline-flex items-center rounded-full border px-5 py-2.5 hover:border-brand hover:text-brand">Wholesale Enquiry</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/assets/LandingPageBanner.png"
            alt="Empire Exchange - Rice, Spices & Groceries"
            fill
            className="object-cover rounded-2xl shadow-lg ring-1 ring-gray-200"
            priority
          />
        </div>
      </div>
    </section>
  );
}
