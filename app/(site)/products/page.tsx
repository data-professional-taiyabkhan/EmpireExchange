import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

const sections = [
  { 
    id: 'rice', 
    title: 'Rice & Grains', 
    img: '/assets/Rice & Grains.png', 
    icon: '🌾',
    desc: 'Premium quality rice varieties sourced from the finest regions'
  },
  { 
    id: 'spices', 
    title: 'Spices', 
    img: '/assets/spices.png', 
    icon: '🌶️',
    desc: 'Authentic spices and blends that bring flavor to every dish'
  },
  { 
    id: 'legumes', 
    title: 'Legumes & Beans', 
    img: '/assets/Legumes & Beans.png', 
    icon: '🫘',
    desc: 'High-quality legumes and beans for nutritious meals'
  },
  { 
    id: 'essentials', 
    title: 'Essentials', 
    img: '/assets/essentials.png', 
    icon: '🛒',
    desc: 'Essential kitchen staples for authentic cooking'
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand to-brand-light text-white">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Discover our comprehensive range of authentic food essentials
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Product Categories */}
      <section className="container py-16">
        <div className="grid gap-12">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid gap-0 lg:grid-cols-[1fr,2fr]">
                <div className="relative aspect-[4/3] lg:aspect-square">
                  <Link href={`/products/${s.id}`}>
                    <Image 
                      src={s.img} 
                      alt={s.title} 
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300" 
                    />
                  </Link>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      <Link href={`/products/${s.id}`} className="hover:text-brand transition-colors">
                        {s.title}
                      </Link>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Products:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(() => {
                        const category = PRODUCTS.find(c => c.key === s.id);
                        return category?.subcats.map((subcat) => (
                          <Link 
                            key={subcat.slug} 
                            href={`/products/${s.id}/${subcat.slug}`}
                            className="flex items-center space-x-3 bg-gray-50 rounded-lg px-4 py-3 hover:bg-brand/5 hover:shadow-md transition-all duration-300 group"
                          >
                            <div className="w-2 h-2 bg-brand rounded-full group-hover:scale-125 transition-transform"></div>
                            <span className="text-gray-700 font-medium group-hover:text-brand transition-colors">{subcat.name}</span>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-brand group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ));
                      })()}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/products/${s.id}`}
                    className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-white hover:bg-brand-light transition-colors duration-300 font-semibold"
                  >
                    Explore {s.title}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand/5 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Source Quality Products?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team to discuss your wholesale requirements and get competitive pricing for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact#enquiry"
                className="inline-flex items-center rounded-full bg-brand px-8 py-3 text-white hover:bg-brand-light transition-colors duration-300 font-semibold"
              >
                Request Quote
              </Link>
              <Link 
                href="/wholesale"
                className="inline-flex items-center rounded-full border-2 border-brand text-brand px-8 py-3 hover:bg-brand hover:text-white transition-colors duration-300 font-semibold"
              >
                Learn About Wholesale
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}