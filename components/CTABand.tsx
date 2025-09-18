import Link from 'next/link';

export default function CTABand() {
  return (
    <section className="bg-brand text-white">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Ready to discuss wholesale pricing with Empire Exchange Limited?</h3>
          <p className="text-white/90">Tell Empire Exchange Limited your requirements and we&apos;ll get back within one business day.</p>
        </div>
        <Link href="/contact#enquiry" className="rounded-full bg-white text-brand px-6 py-3 font-medium hover:bg-brand-muted">Start a Wholesale Enquiry</Link>
      </div>
    </section>
  );
}
