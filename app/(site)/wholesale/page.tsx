import Image from 'next/image';

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand to-brand-light text-white">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Wholesale & Payments</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Professional wholesale solutions for businesses across the UK
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Business Types */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We Specialise in Bulk Supply For:</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🏪", title: "Supermarkets & Retail Chains", desc: "Large-scale distribution solutions" },
              { icon: "🍽️", title: "Restaurants & Catering", desc: "Fresh ingredients for food service" },
              { icon: "🛒", title: "Independent Food Stores", desc: "Quality products for local retailers" },
              { icon: "🚚", title: "Wholesale Distributors", desc: "Bulk supply for regional distribution" }
            ].map((business, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="text-4xl mb-4">{business.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{business.title}</h3>
                <p className="text-gray-600 text-sm">{business.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Sourcing */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Direct Sourcing</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We source directly from reputed exporters around the globe, ensuring authenticity,
                quality, and compliance with international standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Verified global suppliers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Quality assurance protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Full compliance documentation</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/spices.png"
                alt="Global sourcing and logistics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payments & Trade Assurance */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Payments & Trade Assurance</h2>
            <p className="text-lg text-gray-600">Secure, transparent, and flexible payment solutions</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Methods</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand rounded-full"></div>
                  <span className="text-gray-700">Bank Transfer</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand rounded-full"></div>
                  <span className="text-gray-700">Debit/Credit Card</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand rounded-full"></div>
                  <span className="text-gray-700">Trade Credit (approved clients)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trade Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand rounded-full"></div>
                  <span className="text-gray-700">Transparent invoicing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand rounded-full"></div>
                  <span className="text-gray-700">Flexible credit terms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand rounded-full"></div>
                  <span className="text-gray-700">VAT-compliant invoicing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand/5 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Empire Exchange?</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              { icon: "🏠", title: "UK-Based Importer", desc: "Local warehouse stock for reliable delivery" },
              { icon: "🌍", title: "Global Sourcing", desc: "Direct relationships with reputed exporters" },
              { icon: "💰", title: "Competitive Pricing", desc: "Wholesale rates that work for your business" },
              { icon: "🔒", title: "Trade Assurance", desc: "Transparent payments and secure transactions" }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
