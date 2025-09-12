export default function CareersPage() {
  const roles = [
    {
      title: 'Procurement &amp; Buying Manager',
      summary: 'Build relationships with exporters, ensure quality, and manage sourcing.',
      email: 'careers@empireexchange.co.uk',
    },
    {
      title: 'Supply Chain &amp; Logistics Manager',
      summary: 'Oversee import operations, warehousing, and UK-wide distribution.',
      email: 'careers@empireexchange.co.uk',
    },
    {
      title: 'Business Development &amp; Sales Manager',
      summary: 'Grow our client base and build long-term partnerships across the UK.',
      email: 'careers@empireexchange.co.uk',
    },
  ];
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">Careers</h1>
      <p className="mt-2 text-gray-600 max-w-prose">We\'re expanding and looking for talented professionals to strengthen our operations.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {roles.map((r) => (
          <div key={r.title} className="rounded-2xl border p-5">
            <div className="font-semibold text-lg">{r.title}</div>
            <p className="text-gray-600 mt-1">{r.summary}</p>
            <a href={`mailto:${r.email}`} className="mt-4 inline-flex rounded-full bg-brand px-4 py-2 text-white">Apply via Email</a>
          </div>
        ))}
      </div>
    </section>
  );
}
