import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../utils/emailConfig';

export default function QuoteForm() {
  const form = useRef();
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Honeypot check
    if (e.target.bot_ref && e.target.bot_ref.value) {
      console.warn("Bot detected.");
      setStatus('SUCCESS'); 
      return;
    }

    // 2. Rate limiting check
    const lastSubmit = localStorage.getItem('last_quote_submit');
    const nowTimestamp = Date.now();
    if (lastSubmit && nowTimestamp - parseInt(lastSubmit) < EMAIL_CONFIG.COOLDOWN_PERIOD) {
      alert(`Please wait ${Math.ceil((EMAIL_CONFIG.COOLDOWN_PERIOD - (nowTimestamp - parseInt(lastSubmit))) / 1000)}s before sending another request.`);
      return;
    }

    setStatus('SENDING');

    if (EMAIL_CONFIG.SERVICE_ID === "service_placeholder") {
      setTimeout(() => {
        setStatus('SUCCESS');
        localStorage.setItem('last_quote_submit', Date.now().toString());
      }, 1500);
      return;
    }

    emailjs.sendForm(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      form.current,
      EMAIL_CONFIG.PUBLIC_KEY
    ).then(() => {
      localStorage.setItem('last_quote_submit', Date.now().toString());
      setStatus('SUCCESS');
    }).catch((err) => {
      console.error('EmailJS Error:', err);
      setStatus('ERROR');
    });
  };

  return (
    <div id="quote" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden sm:flex border border-slate-800">
          <div className="px-6 py-12 sm:px-10 sm:w-5/12 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-20 transform -skew-x-12 scale-150"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-white tracking-tight">Bulk Order Request</h3>
              <p className="mt-6 text-blue-100 text-lg">
                Submit your material or cable requirements. Our sales team evaluates requests and responds with detailed pricing and logistics tailored for you.
              </p>
              <div className="mt-10 flex items-center space-x-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                <span className="flex-shrink-0 bg-amber-500/20 rounded-full p-2 text-amber-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                <span className="text-white font-medium">Fast turnaround for standard quotes</span>
              </div>
            </div>
          </div>
          
          <div className="px-6 py-12 sm:px-12 sm:w-7/12 bg-slate-800">
            {status === 'SUCCESS' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor font-black">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Request Transmitted</h3>
                  <p className="text-slate-400">Our sales engineers will contact you shortly.</p>
                </div>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="px-6 py-2 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from humans */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input type="text" name="bot_ref" tabIndex="-1" autoComplete="off" />
                </div>
                
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name & Company</label>
                    <div className="mt-2">
                      <input required type="text" name="user_name" id="name" className="py-3 px-4 block w-full bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-slate-500" placeholder="John Doe - ACME Corp" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                    <div className="mt-2">
                      <input required type="email" name="user_email" id="email" className="py-3 px-4 block w-full bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-slate-500" placeholder="contact@acmecorp.com" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="product" className="block text-sm font-medium text-slate-300">Product Line / Item Name</label>
                    <div className="mt-2">
                      <input required type="text" name="product_type" id="product" className="py-3 px-4 block w-full bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-slate-500" placeholder="e.g., Caustic Soda or Submersible Cables" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="volume" className="block text-sm font-medium text-slate-300">Target Volume / Quantity</label>
                    <div className="mt-2">
                      <input required type="text" name="volume" id="volume" className="py-3 px-4 block w-full bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-slate-500" placeholder="e.g., 5000 Liters" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-slate-300">Industry</label>
                    <div className="mt-2">
                      <select id="industry" name="industry" className="py-3 px-4 block w-full bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer">
                        <option>Chemical / Industrial</option>
                        <option>Sugar Processing</option>
                        <option>Electrical / Telecom</option>
                        <option>Agriculture / Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2 pt-4">
                    <button 
                      type="submit" 
                      disabled={status === 'SENDING'}
                      className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-amber-500 transition-all hover:shadow-lg hover:shadow-amber-500/20 disabled:opacity-50"
                    >
                      {status === 'SENDING' ? 'Processing...' : 'Get Pricing & Logistics Info'}
                    </button>
                    {status === 'ERROR' && (
                      <p className="mt-4 text-red-500 text-sm font-bold text-center uppercase">Transmission failed. Please check your connection.</p>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
