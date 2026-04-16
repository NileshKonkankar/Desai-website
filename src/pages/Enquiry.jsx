import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../utils/emailConfig';

const PRODUCT_MAP = {
  'fruit-drying-oil': 'Fruit Drying Oil (Agri-Spec)',
  'sugar-chemicals': 'Sugar Refinement Chemicals',
  'industrial-chemicals': 'Basic Industrial Chemicals',
  'wire-cables': 'Electrical Wire & Cables'
};

const Enquiry = () => {
  const { productLink } = useParams();
  const form = useRef();
  
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR
  const [formData, setFormData] = useState(() => ({
    user_name: '',
    user_email: '',
    user_phone: '',
    company_name: '',
    product_type: (productLink && PRODUCT_MAP[productLink]) ? PRODUCT_MAP[productLink] : '',
    message: ''
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Honeypot check
    if (e.target.bot_ref && e.target.bot_ref.value) {
      console.warn("Bot detected.");
      setStatus('SUCCESS'); // Silently succeed for bots
      return;
    }

    // 2. Rate limiting check
    const lastSubmit = localStorage.getItem('last_enquiry_submit');
    const nowTimestamp = Date.now();
    if (lastSubmit && nowTimestamp - parseInt(lastSubmit) < EMAIL_CONFIG.COOLDOWN_PERIOD) {
      alert(`Please wait ${Math.ceil((EMAIL_CONFIG.COOLDOWN_PERIOD - (nowTimestamp - parseInt(lastSubmit))) / 1000)}s before sending another enquiry.`);
      return;
    }

    setStatus('SENDING');

    // If no credentials provided yet, simulate success for UX demo
    if (EMAIL_CONFIG.SERVICE_ID === "service_placeholder") {
      setTimeout(() => setStatus('SUCCESS'), 1500);
      return;
    }

    emailjs.sendForm(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      form.current,
      EMAIL_CONFIG.PUBLIC_KEY
    ).then(() => {
      localStorage.setItem('last_enquiry_submit', Date.now().toString());
      setStatus('SUCCESS');
    }).catch((err) => {
      console.error('EmailJS Error:', err);
      setStatus('ERROR');
    });
  };

  return (
    <main className="w-full min-h-screen bg-[var(--color-bone)] py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Structural Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Left Info Column */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="blueprint-label text-[var(--color-signal)] mb-4 block">TRANSCEIVER // ENQUIRY UNIT</span>
            <h1 className="text-[10vw] md:text-[7vw] font-black uppercase leading-[0.9] tracking-tighter" style={{ fontFamily: 'var(--font-brand)' }}>
              Submit<br /><span className="text-stroke">Specs.</span>
            </h1>
            <p className="mt-12 text-2xl font-bold border-l-8 border-[var(--color-iron-900)] pl-8 uppercase leading-tight opacity-90 max-w-lg">
              Authorized procurement unit. Direct channel to Desai Industries logistics hub.
            </p>
            
            <div className="mt-16 space-y-8">
              <div className="p-6 border-2 border-[var(--color-iron-900)] bg-[var(--color-iron-900)] text-[var(--color-bone)] rough-border transition-transform hover:scale-105">
                <span className="blueprint-label text-[var(--color-signal)]">RESPONSE TIME</span>
                <p className="text-2xl font-black mt-2">SUB-24 HR LATENCY</p>
              </div>
              <div className="p-6 border-2 border-[var(--color-iron-900)] rough-border transition-transform hover:scale-105">
                <span className="blueprint-label text-[var(--color-iron-900)]/40">SUPPLY TYPE</span>
                <p className="text-2xl font-black mt-2 uppercase">Bulk // Industrial // Export</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Form Column */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {status === 'SUCCESS' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-12 border-4 border-[var(--color-iron-900)] bg-[var(--color-signal)]"
              >
                <div className="w-24 h-24 bg-[var(--color-iron-900)] rounded-full flex items-center justify-center mb-8">
                   <svg className="w-12 h-12 text-[var(--color-signal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor font-black">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={4} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h2 className="text-4xl font-black uppercase mb-4" style={{ fontFamily: 'var(--font-brand)' }}>Transmitted.</h2>
                <p className="text-xl font-bold uppercase opacity-80 mb-12">Your specifications have been logged and routed to our logistics team.</p>
                <Link to="/" className="px-12 py-4 bg-[var(--color-iron-900)] text-[var(--color-bone)] font-black uppercase tracking-widest rough-border hover:bg-white hover:text-black transition-all">
                  Return To Base
                </Link>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[var(--color-bone)] p-8 md:p-12 border-4 border-[var(--color-iron-900)] rough-border shadow-[12px_12px_0px_var(--color-iron-900)]"
              >
                <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Honeypot field - hidden from humans */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input type="text" name="bot_ref" tabIndex="-1" autoComplete="off" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                       <label className="blueprint-label text-xs">CONTACT NAME</label>
                       <input 
                        required
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        type="text" 
                        placeholder="NAME.SURNAME"
                        className="p-4 border-2 border-[var(--color-iron-900)] focus:bg-[var(--color-iron-900)] focus:text-[var(--color-bone)] transition-colors outline-none font-bold placeholder:opacity-30"
                       />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="blueprint-label text-xs">BUSINESS EMAIL</label>
                       <input 
                        required
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="HQ@CORP.COM"
                        className="p-4 border-2 border-[var(--color-iron-900)] focus:bg-[var(--color-iron-900)] focus:text-[var(--color-bone)] transition-colors outline-none font-bold placeholder:opacity-30"
                       />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                       <label className="blueprint-label text-xs">PHONE / WHATSAPP</label>
                       <input 
                        required
                        name="user_phone"
                        value={formData.user_phone}
                        onChange={handleChange}
                        type="tel" 
                        placeholder="+91 XXXX XXX XXX"
                        className="p-4 border-2 border-[var(--color-iron-900)] focus:bg-[var(--color-iron-900)] focus:text-[var(--color-bone)] transition-colors outline-none font-bold placeholder:opacity-30"
                       />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="blueprint-label text-xs">COMPANY</label>
                       <input 
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        type="text" 
                        placeholder="LEGAL ENTITY NAME"
                        className="p-4 border-2 border-[var(--color-iron-900)] focus:bg-[var(--color-iron-900)] focus:text-[var(--color-bone)] transition-colors outline-none font-bold placeholder:opacity-30"
                       />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="blueprint-label text-xs">PRODUCT SELECTION</label>
                    <select 
                      name="product_type"
                      value={formData.product_type}
                      onChange={handleChange}
                      className="p-4 border-2 border-[var(--color-iron-900)] bg-transparent outline-none font-black appearance-none uppercase tracking-tight cursor-pointer"
                    >
                      <option value="">-- SELECT PRODUCT CATEGORY --</option>
                      <option value="Fruit Drying Oil (Agri-Spec)">Fruit Drying Oil (Agri-Spec)</option>
                      <option value="Sugar Refinement Chemicals">Sugar Refinement Chemicals</option>
                      <option value="Basic Industrial Chemicals">Basic Industrial Chemicals</option>
                      <option value="Electrical Wire & Cables">Electrical Wire & Cables</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="blueprint-label text-xs">REQUIREMENTS / TONNAGES</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="SPECIFY REQUIREMENTS IN DETAIL..."
                      className="p-4 border-2 border-[var(--color-iron-900)] focus:bg-[var(--color-iron-900)] focus:text-[var(--color-bone)] transition-colors outline-none font-bold placeholder:opacity-30 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={status === 'SENDING'}
                    type="submit"
                    className="w-full py-6 bg-[var(--color-iron-900)] text-[var(--color-signal)] font-black uppercase tracking-[0.3em] text-xl rough-border hover:bg-[var(--color-signal)] hover:text-[var(--color-iron-900)] transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                    style={{ fontFamily: 'var(--font-brand)' }}
                  >
                    {status === 'SENDING' ? (
                      <>
                        <div className="w-5 h-5 border-4 border-[var(--color-signal)] border-t-transparent animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : 'INITIATE ENQUIRY'}
                  </button>
                  
                  {status === 'ERROR' && (
                    <p className="text-red-600 font-bold text-center uppercase tracking-tighter">Transmission Failed. Please try direct mail.</p>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Enquiry;
