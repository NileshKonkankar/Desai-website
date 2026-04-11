import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ContactForm from '../components/Contact';

const Contact = () => {
  const [isOPen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const day = indiaTime.getDay();
      const hours = indiaTime.getHours();

      // Mon (1) to Sat (6), 9 AM (9) to 7 PM (19)
      if (day >= 1 && day <= 6 && hours >= 9 && hours < 19) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const locations = [
    {
      id: "LOC-01 [HQ]",
      title: "Head Office / Industrial Unit",
      address: "P-66, Kupwad MIDC Road, MIDC Industrial Area, Kupwad, Sangli, Maharashtra 416436, India",
      phone: "093703 33337",
      rating: "4.5 / 5.0",
      poc: "Mr. Hardik Desai // Lead Strategist",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.1!2d74.62!3d16.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1230000000000%3A0x0!2sDesai+Industries+Kupwad+MIDC!5e0!3m2!1sen!2sin!4v1628172839210!5m2!1sen!2sin"
    },
    {
      id: "LOC-02 [BR]",
      title: "Administrative Branch",
      address: "61/1, Mahatma Gandhi Bhavan, Mahaveer Nagar, Vakharbhag, Sangli, Maharashtra 416416, India",
      phone: "0233 264 3201",
      rating: "4.0 / 5.0",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.5!2d74.58!3d16.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc123f8be3c9077%3A0x17d23d45c63ed96f!2sMahaveer%20Nagar%2C%20Vakharbhag%2C%20Sangli%2C%20Maharashtra%20416416!5e0!3m2!1sen!2sin!4v1628172911200!5m2!1sen!2sin"
    }
  ];

  return (
    <main className="w-full bg-[var(--color-bone)] pb-24 overflow-hidden relative">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] industrial-glow">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Heavy Header */}
      <header className="pt-24 pb-12 px-6 md:px-12 bg-transparent text-[var(--color-iron-900)] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className={`w-3 h-3 rounded-full ${isOPen ? 'bg-green-500 animate-pulse' : 'bg-red-500'} industrial-glow`} />
            <span className="blueprint-label">SYSTEM STATUS: {isOPen ? 'OPERATIONAL' : 'OFFLINE [AFTER HOURS]'}</span>
          </div>
          <h1 className="text-[12vw] md:text-[8vw] font-black uppercase leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-brand)' }}>
            Command<br />Center.
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-medium max-w-2xl border-l-4 border-[var(--color-signal)] pl-6 text-[var(--color-iron-900)]/80 leading-relaxed uppercase">
            Authorized Distributors for Finolex & Schneider. High-integrity supply chain solutions originating from Sangli.
          </p>
        </motion.div>
      </header>

      {/* Location Cards */}
      <section className="px-6 md:px-12 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              className="bg-[var(--color-iron-900)] text-[var(--color-bone)] border-4 border-[var(--color-iron-900)] transition-all duration-500 flex flex-col"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Embedded Map Header */}
              <div className="w-full h-64 bg-black/20 overflow-hidden relative border-b-4 border-[var(--color-iron-900)]">
                <iframe
                  src={loc.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }}
                  allowFullScreen=""
                  loading="lazy"
                  title={loc.title}
                />
                <div className="absolute inset-0 pointer-events-none border-inset-shadow" />
              </div>

              <div className="p-10 flex-grow group hover:bg-[var(--color-signal)] hover:text-[var(--color-iron-900)] transition-colors duration-500">
                <div className="flex justify-between items-start mb-8">
                  <span className="blueprint-label text-[var(--color-signal)] group-hover:text-[var(--color-iron-900)] font-black text-xs">
                    {loc.id}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">{loc.rating}</span>
                    <div className="flex gap-0.5 text-[var(--color-signal)] group-hover:text-[var(--color-iron-900)]">
                      {[1, 2, 3, 4, 5].map(s => (
                        <svg key={s} className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                      ))}
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-black uppercase mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-brand)' }}>
                  {loc.title}
                </h2>

                <div className="flex flex-col gap-6 border-t border-white/10 group-hover:border-black/20 pt-8">
                  {loc.poc && (
                    <div className="flex gap-4">
                      <span className="blueprint-label opacity-70 shrink-0">POC</span>
                      <p className="font-bold text-lg leading-tight uppercase text-[var(--color-signal)] group-hover:text-[var(--color-iron-900)]">{loc.poc}</p>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <span className="blueprint-label opacity-70 shrink-0">ADR</span>
                    <p className="font-bold text-lg leading-tight uppercase opacity-90">{loc.address}</p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <span className="blueprint-label opacity-70 shrink-0">TEL</span>
                    <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="text-2xl font-black tracking-tight hover:underline">
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="mt-12 relative z-10">
        <div className="px-6 md:px-12 mb-16">
          <h2 className="text-4xl font-bold uppercase border-l-4 border-[var(--color-signal)] pl-6 tracking-normal leading-tight" style={{ fontFamily: 'var(--font-brand)' }}>
            Signal Transmitter // Enquiry Form
          </h2>
        </div>
        <ContactForm />
      </section>

    </main>
  );
};

export default Contact;
