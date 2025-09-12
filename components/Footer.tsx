export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="container py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="text-brand text-lg font-semibold">Empire Exchange</div>
          <p className="mt-2 text-gray-600">Authentic rice, spices, legumes &amp; essentials for UK retailers, restaurants, and distributors.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1 text-gray-700">
            <li>Company Reg: 00000000</li>
            <li>VAT: 000 0000 00</li>
            <li><a className="hover:text-brand" href="/about">About</a></li>
            <li><a className="hover:text-brand" href="/careers">Careers</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <ul className="space-y-1 text-gray-700">
            <li>Mon–Sat: 9:00–18:00</li>
            <li>Phone: +44 0000 000000</li>
            <li>Email: info@empireexchange.co.uk</li>
            <li>Address: London, United Kingdom</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Payments</div>
          <div className="flex items-center gap-3">
            <span className="rounded-md border bg-white px-2 py-1">Visa</span>
            <span className="rounded-md border bg-white px-2 py-1">Mastercard</span>
            <span className="rounded-md border bg-white px-2 py-1">Bank Transfer</span>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-gray-600">&copy; {new Date().getFullYear()} Empire Exchange Limited. All rights reserved.</div>
      </div>
    </footer>
  );
}
