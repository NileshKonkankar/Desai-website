import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../utils/emailConfig';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Honeypot check
    if (e.target.bot_ref && e.target.bot_ref.value) {
      console.warn("Bot detected.");
      setStatus('SUCCESS'); // Silently succeed for bots
      return;
    }

    // 2. Rate limiting check
    const lastSubmit = localStorage.getItem('last_contact_submit');
    const nowTimestamp = Date.now();
    if (lastSubmit && nowTimestamp - parseInt(lastSubmit) < EMAIL_CONFIG.COOLDOWN_PERIOD) {
      alert(`Please wait ${Math.ceil((EMAIL_CONFIG.COOLDOWN_PERIOD - (nowTimestamp - parseInt(lastSubmit))) / 1000)}s before sending another message.`);
      return;
    }

    setStatus('SENDING');

    if (EMAIL_CONFIG.SERVICE_ID === "service_placeholder") {
      setTimeout(() => {
        setStatus('SUCCESS');
        setTimeout(() => setStatus('IDLE'), 3000);
      }, 1500);
      return;
    }

    emailjs.sendForm(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      form.current,
      EMAIL_CONFIG.PUBLIC_KEY
    ).then(() => {
      localStorage.setItem('last_contact_submit', Date.now().toString());
      setStatus('SUCCESS');
      setTimeout(() => setStatus('IDLE'), 3000);
    }).catch((err) => {
      console.error('EmailJS Error:', err);
      setStatus('ERROR');
    });
  };

  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-[var(--color-signal)] text-[var(--color-iron-900)] border-b-8 border-[var(--color-iron-900)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Header & Contact Info */}
          <div className="flex flex-col">
            <h2 
              className="text-6xl md:text-8xl font-black uppercase leading-[0.85] mb-8"
              style={{ fontFamily: 'var(--font-brand)' }}
            >
              Initiate<br/>
              Supply.
            </h2>
            <p className="text-xl font-medium mb-12 max-w-md border-l-4 border-[var(--color-iron-900)] pl-6">
              Connect with our procurement specialists to establish a reliable supply chain for your manufacturing needs.
            </p>
            
            <div className="mt-8 space-y-4 text-lg md:text-xl font-bold uppercase tracking-widest">
              <div className="flex items-start gap-4 cursor-default">
                <span className="w-3 h-3 bg-[var(--color-iron-900)] mt-2 shrink-0" />
                <span>P – 66, MIDC Area, Kupwad, <br/>Sangli, Maharashtra, 416436</span>
              </div>
              <div className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
                <span className="w-3 h-3 bg-[var(--color-iron-900)]" />
                {EMAIL_CONFIG.COMPANY_EMAIL}
              </div>
              <div className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
                <span className="w-3 h-3 bg-[var(--color-iron-900)]" />
                Mobile: +91-9370333337
              </div>
              <div className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
                <span className="w-3 h-3 bg-[var(--color-iron-900)]" />
                Phone: +91-233-2643201
              </div>
            </div>
          </div>

          {/* Brutalist Form */}
          <div className="bg-[var(--color-bone)] p-8 rough-border">
            {status === 'SUCCESS' ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-[var(--color-iron-900)] rounded-full flex items-center justify-center mb-6">
                   <svg className="w-10 h-10 text-[var(--color-signal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor font-black">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={4} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h3 className="text-3xl font-black uppercase mb-2" style={{ fontFamily: 'var(--font-brand)' }}>Received.</h3>
                <p className="font-bold uppercase opacity-60">We will respond within 24 hours.</p>
              </div>
            ) : (
              <form ref={form} className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Honeypot field - hidden from humans */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input type="text" name="bot_ref" tabIndex="-1" autoComplete="off" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-widest">Company Name</label>
                  <input 
                    required
                    name="company_name"
                    type="text" 
                    className="w-full p-4 bg-transparent border-2 border-[var(--color-iron-900)] focus:outline-none focus:bg-[var(--color-iron-900)] focus:text-[var(--color-bone)] font-medium transition-colors"
                    placeholder="ACME Corp"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-widest">Business Email</label>
                  <input 
                    required
                    name="user_email"
                    type="email" 
                    className="w-full p-4 bg-transparent border-2 border-[var(--color-iron-900)] focus:outline-none focus:bg-[var(--color-iron-900)] focus:text-[var(--color-bone)] font-medium transition-colors"
                    placeholder="procurement@acme.corp"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-widest">Inquiry Type</label>
                  <select name="product_type" className="w-full p-4 bg-transparent border-2 border-[var(--color-iron-900)] focus:outline-none font-medium appearance-none rounded-none cursor-pointer">
                    <option>Chemicals (Bulk)</option>
                    <option>Sugar Chemicals</option>
                    <option>Wire & Cables</option>
                    <option>Other Engineering Supplies</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-widest">Requirements</label>
                  <textarea 
                    required
                    name="message"
                    className="w-full p-4 bg-transparent border-2 border-[var(--color-iron-900)] focus:outline-none focus:bg-[var(--color-iron-900)] focus:text-[var(--color-bone)] font-medium transition-colors min-h-[120px] resize-none"
                    placeholder="Detail your tonnages or lengths here..."
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'SENDING'}
                  type="submit"
                  className="mt-4 w-full py-5 bg-[var(--color-iron-900)] text-[var(--color-signal)] hover:bg-[var(--color-bone)] hover:text-[var(--color-iron-900)] border-[3px] border-[var(--color-iron-900)] font-black uppercase tracking-widest text-xl transition-colors cursor-pointer flex items-center justify-center gap-4"
                  style={{ fontFamily: 'var(--font-brand)' }}
                >
                  {status === 'SENDING' ? 'TRANSMITTING...' : 'Submit Inquiry'}
                </button>
                {status === 'ERROR' && <p className="text-red-700 font-bold text-center">FAILED. PLEASE MAIL DIRECTLY.</p>}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
