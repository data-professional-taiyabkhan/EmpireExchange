'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Network');
      setStatus('sent');
      form.reset();
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <section className="container py-12 grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-600">Business Hours: Mon – Sat (9 AM – 6 PM)</p>
        <div className="mt-4 space-y-2 text-gray-700">
          <div><strong>Office:</strong> London, United Kingdom</div>
          <div><strong>Phone:</strong> +44 0000 000000</div>
          <div><strong>Email:</strong> info@empireexchange.co.uk</div>
        </div>
      </div>
      <form id="enquiry" onSubmit={onSubmit} className="rounded-2xl border p-6">
        <div className="text-xl font-semibold mb-4">Quick Enquiry</div>
        <div className="grid gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input name="name" required className="w-full rounded-lg border px-3 py-2" placeholder="Your name" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input name="email" type="email" required className="w-full rounded-lg border px-3 py-2" placeholder="you@business.com" />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input name="phone" className="w-full rounded-lg border px-3 py-2" placeholder="+44 ..." />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" required className="w-full rounded-lg border px-3 py-2 min-h-[120px]" placeholder="Tell us what you need"></textarea>
          </div>
          <button disabled={status==='sending'} className="rounded-full bg-brand text-white px-5 py-2.5">
            {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
          </button>
          {status === 'sent' && <p className="text-green-600">Thanks! We&apos;ll be in touch within one business day.</p>}
          {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
        </div>
      </form>
    </section>
  );
}
