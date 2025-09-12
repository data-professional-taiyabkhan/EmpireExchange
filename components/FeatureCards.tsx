import Image from 'next/image';

const features = [
  {
    title: "Direct Sourcing",
    desc: "We work with trusted exporters to ensure authenticity and compliance.",
    img: "https://images.unsplash.com/photo-1615559054071-08e6b24635e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "UK Warehouse",
    desc: "Local stock for reliable, on-time deliveries across the UK.",
    img: "https://images.unsplash.com/photo-1586521995568-39ab25ab7e5d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Transparent Payments",
    desc: "Clear invoicing, VAT-compliant, and credit terms for approved partners.",
    img: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeatureCards() {
  return (
    <section className="container py-10">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl overflow-hidden border bg-white">
            <div className="relative aspect-[16/10]">
              <Image src={f.img} alt={f.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <div className="font-semibold text-lg">{f.title}</div>
              <p className="text-gray-600 mt-1">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
