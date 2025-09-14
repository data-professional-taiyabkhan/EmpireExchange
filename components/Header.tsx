'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-brand">Empire Exchange</Link>
        <button
          className="md:hidden rounded-lg border px-3 py-2"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/about" className="hover:text-brand">About</Link>
          <Link href="/products" className="hover:text-brand">Products</Link>
          <Link href="/wholesale" className="hover:text-brand">Wholesale & Payments</Link>
          <Link href="/careers" className="hover:text-brand">Careers</Link>
          <Link href="/contact" className="hover:text-brand">Contact</Link>
          <Link href="/contact#enquiry" className="ml-2 inline-flex items-center rounded-full bg-brand px-4 py-2 text-white hover:bg-brand-light">Wholesale Enquiry</Link>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-3">
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/wholesale" onClick={() => setOpen(false)}>Wholesale & Payments</Link>
            <Link href="/careers" onClick={() => setOpen(false)}>Careers</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/contact#enquiry" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-white">Wholesale Enquiry</Link>
          </div>
        </div>
      )}
    </header>
  );
}
