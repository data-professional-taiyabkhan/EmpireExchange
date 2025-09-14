import Link from "next/link";
import Image from "next/image";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand to-brand-light text-white">
        <div className="container py-16">
          <nav className="text-sm opacity-90 mb-6">
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <Link href={`/products/${cat.key}`} className="hover:text-white">{cat.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{sub.name}</span>
          </nav>
          
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{sub.name}</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Premium quality {sub.name.toLowerCase()} sourced from trusted global suppliers with strict quality standards and authentic flavors.
              </p>
            </div>
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={sub.image}
                alt={sub.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Product Details */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Standards</h3>
                    <p className="text-gray-600">Premium grade with strict quality control and authentic sourcing from reputed global suppliers.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Packaging Options</h3>
                    <p className="text-gray-600">Available in various pack sizes to meet your business requirements.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Certifications</h3>
                    <p className="text-gray-600">All products meet UK food safety standards and international quality certifications.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Wholesale Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Typical Pack Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">5kg</span>
                      <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">10kg</span>
                      <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">20kg</span>
                      <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">25kg</span>
                      <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">Bulk Orders</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Lead Times</h3>
                    <p className="text-gray-600">Standard delivery: 3-5 business days from UK warehouse</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Minimum Order Quantity</h3>
                    <p className="text-gray-600">Flexible MOQ based on product type and customer requirements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trade Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Trade Benefits</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">VAT-Compliant Invoicing</h3>
                      <p className="text-gray-600 text-sm">All invoices comply with UK VAT regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">UK Warehouse Stock</h3>
                      <p className="text-gray-600 text-sm">Fast delivery from our UK-based warehouse</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Credit Terms Available</h3>
                      <p className="text-gray-600 text-sm">Flexible payment terms for approved clients</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                      <p className="text-gray-600 text-sm">Rigorous quality control and testing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand/5 rounded-2xl p-8 border border-brand/20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Your Quote</h2>
                <p className="text-gray-600 mb-6">
                  Ready to source {sub.name.toLowerCase()} for your business? Contact our team for competitive wholesale pricing and availability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact#enquiry"
                    className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-white hover:bg-brand-light transition-colors duration-300 font-semibold"
                  >
                    Request Quote
                  </Link>
                  <Link 
                    href="/wholesale"
                    className="inline-flex items-center justify-center rounded-full border-2 border-brand text-brand px-6 py-3 hover:bg-brand hover:text-white transition-colors duration-300 font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}