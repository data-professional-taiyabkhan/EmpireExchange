import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-gray-100 text-sm">
      <div className="container py-2 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <span>Email: info@empireexchange.co.uk</span>
          <span className="hidden sm:inline">•</span>
          <span>UK: +44 0000 000000</span>
        </div>
        <Link href="/contact#enquiry" className="rounded-full bg-brand px-3 py-1.5 text-white hover:bg-brand-light">
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
