export default function CareersPage() {
  const roles = [
    {
      title: 'Procurement & Buying Manager',
      summary: 'Build relationships with global exporters, ensure product quality, manage sourcing.',
      email: 'careers@empireexchange.co.uk',
      icon: '🤝',
      responsibilities: ['Supplier relationship management', 'Quality assurance', 'Cost optimization', 'Market research']
    },
    {
      title: 'Supply Chain & Logistics Manager',
      summary: 'Manage import operations, warehousing, and UK-wide distribution.',
      email: 'careers@empireexchange.co.uk',
      icon: '🚚',
      responsibilities: ['Import logistics', 'Warehouse management', 'Distribution planning', 'Compliance oversight']
    },
    {
      title: 'Business Development & Sales Manager',
      summary: 'Expand client base, build long-term partnerships with UK retailers and restaurants.',
      email: 'careers@empireexchange.co.uk',
      icon: '📈',
      responsibilities: ['Client acquisition', 'Partnership development', 'Sales strategy', 'Market expansion']
    },
  ];

  const benefits = [
    { icon: '🌍', title: 'International Experience', desc: 'Work with global suppliers and markets' },
    { icon: '📚', title: 'Skill Development', desc: 'Continuous learning and growth opportunities' },
    { icon: '🤝', title: 'Diverse Team', desc: 'Inclusive workplace with diverse perspectives' },
    { icon: '🚀', title: 'Career Growth', desc: 'Clear progression paths and advancement' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand to-brand-light text-white">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              We are expanding and seeking talented professionals to strengthen our operations
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Available Roles */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Positions</h2>
          <p className="text-lg text-gray-600">Join our dynamic team and help us grow the UK's leading import business</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 leading-relaxed">{role.summary}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {role.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={`mailto:${role.email}?subject=Application for ${role.title}`}
                className="w-full inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-white hover:bg-brand-light transition-colors duration-300"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600">Discover the benefits of joining Empire Exchange</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
              <p className="text-gray-600">Ready to join our team? Follow these simple steps</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Prepare Your CV</h3>
                <p className="text-gray-600 text-sm">Update your CV with relevant experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Application</h3>
                <p className="text-gray-600 text-sm">Send your CV to our careers email</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Interview Process</h3>
                <p className="text-gray-600 text-sm">We'll contact you for next steps</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="mailto:careers@empireexchange.co.uk?subject=General Career Inquiry"
                className="inline-flex items-center rounded-full bg-brand px-8 py-3 text-white hover:bg-brand-light transition-colors duration-300"
              >
                Send Your Application
              </a>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Email:</strong> <a href="mailto:careers@empireexchange.co.uk" className="text-brand hover:underline">careers@empireexchange.co.uk</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
