'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    
    try {
      // Formspree integration - replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const res = await fetch('https://formspree.io/f/xvgbjlpr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form) as any)),
      });
      
      if (!res.ok) throw new Error('Network error');
      setStatus('sent');
      form.reset();
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand to-brand-light text-white">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Get in touch with our team for wholesale enquiries and partnerships
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">Ready to discuss your wholesale needs? We're here to help you find the perfect solutions for your business.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+44 7424 914353</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@empireexchange.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Mon – Sat (9 AM – 6 PM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form 
            id="enquiry" 
            action="https://formspree.io/f/xvgbjlpr"
            method="POST"
            onSubmit={onSubmit} 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within one business day.</p>
            </div>
            
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input 
                  name="name" 
                  required 
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-brand focus:border-transparent transition-colors" 
                  placeholder="Your full name" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input 
                    name="email" 
                    type="email" 
                    required 
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-brand focus:border-transparent transition-colors" 
                    placeholder="you@business.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    name="phone" 
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-brand focus:border-transparent transition-colors" 
                    placeholder="+44 ..." 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea 
                  name="message" 
                  required 
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 min-h-[120px] focus:ring-2 focus:ring-brand focus:border-transparent transition-colors resize-none" 
                  placeholder="Tell us about your wholesale needs, product requirements, or any questions you have..."
                ></textarea>
              </div>
              
              <button 
                disabled={status==='sending'} 
                className="w-full rounded-full bg-brand text-white px-6 py-3 font-semibold hover:bg-brand-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Enquiry'}
              </button>
              
              {status === 'sent' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">✅ Thank you! Your enquiry has been sent and we'll be in touch within one business day.</p>
                  <p className="text-green-700 text-sm mt-2">You can also reach us directly at <a href="tel:+447424914353" className="underline hover:text-green-900">+44 7424 914353</a> for urgent enquiries.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">❌ Something went wrong. Please try again.</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
