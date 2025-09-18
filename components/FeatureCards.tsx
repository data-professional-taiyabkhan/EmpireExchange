import Image from 'next/image';

const features = [
  {
    title: "Direct Sourcing",
    desc: "Empire Exchange Limited works with trusted exporters to ensure authenticity and compliance.",
    img: "/assets/spices.png",
  },
  {
    title: "UK Warehouse",
    desc: "Empire Exchange Limited maintains local stock for reliable, on-time deliveries across the UK.",
    img: "/assets/Rice & Grains.png",
  },
  {
    title: "Transparent Payments",
    desc: "Empire Exchange Limited provides clear invoicing, VAT-compliant, and credit terms for approved partners.",
    img: "/assets/Legumes & Beans.png",
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
