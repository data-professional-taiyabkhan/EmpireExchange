import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand to-brand-light text-white">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Empire Exchange</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              At Empire Exchange Limited, our purpose is to bridge global producers and the UK
              market through authentic food essentials.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Vision, Mission, Promise */}
      <section className="container py-16">
        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative importer of authentic food
                products in the UK, recognised for quality, integrity, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower restaurants, retailers, and distributors with consistent
                supply of high-quality groceries and spices sourced from trusted global
                exporters.
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h2>
              <p className="text-gray-600 leading-relaxed">
                Every delivery reflects our commitment to authenticity, reliability,
                and long-term partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Empire Exchange
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: "🤝",
                  title: "Integrity & Transparency",
                  description: "We operate with honesty, fair pricing, and clear communication."
                },
                {
                  icon: "⭐",
                  title: "Quality First",
                  description: "From sourcing to delivery, we prioritise strict quality standards."
                },
                {
                  icon: "⏰",
                  title: "Reliability",
                  description: "On-time delivery and consistent supply is our guarantee."
                },
                {
                  icon: "🌱",
                  title: "Partnership",
                  description: "We grow together with our customers, suppliers, and employees."
                },
                {
                  icon: "🚀",
                  title: "Innovation & Growth",
                  description: "Investing in modern logistics and technology to serve better.",
                  span: "md:col-span-2"
                }
              ].map((value, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 ${value.span || ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/LandingPageBanner.png"
              alt="Empire Exchange warehouse and operations"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Excellence in Every Delivery</h3>
              <p className="text-lg opacity-90">Committed to bringing authentic flavors to the UK market</p>
            </div>
          </div>
        </div>
    </section>
    </div>
  );
}
