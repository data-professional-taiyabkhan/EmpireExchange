export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="container py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="text-brand text-lg font-semibold">Empire Exchange</div>
          <p className="mt-2 text-gray-600">Empire Exchange Limited delivers authentic rice, spices, legumes & essentials for UK retailers, restaurants, and distributors.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1 text-gray-700">
            <li>Empire Exchange Limited</li>
            <li>VAT Number: 498 8155 24</li>
            <li><a className="hover:text-brand" href="/about">About</a></li>
            <li><a className="hover:text-brand" href="/careers">Careers</a></li>
          </ul>
          <div className="mt-3">
            <div className="font-semibold mb-1">Registered office address</div>
            <div className="text-gray-700 text-xs">
              Chilterns House, 64, High Street,<br />
              Burnham, Bucks, England, SL1 7JT
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <ul className="space-y-1 text-gray-700">
            <li>Mon–Sat: 9:00–18:00</li>
            <li>Phone: +44 7424 914353</li>
            <li>Email: info@empireexchange.co.uk</li>
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
        <div className="container py-4 flex flex-wrap justify-between items-center text-xs text-gray-600 gap-4">
          <div>&copy; {new Date().getFullYear()} Empire Exchange Limited. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand">Carbon Reduction Plan</a>
            <a href="#" className="hover:text-brand">Modern Slavery Statement</a>
            <a href="#" className="hover:text-brand">Evergreen Assessment Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
