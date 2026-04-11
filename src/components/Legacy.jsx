import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Legacy = () => {
  const stats = [
    { label: "Founded", value: "1974", tag: "Sangli, MH" },
    { label: "Supply Chain", value: "50+", tag: "Global Networks" },
    { label: "Partners", value: "05", tag: "Industry Giants" },
    { label: "Reach", value: "PAN", tag: "India-Wide" }
  ];

  const partners = [
    "Solaris ChemTech Industries Ltd.",
    "Finolex Cables Ltd.",
    "Orgamine Chemicals (I) Pvt. Ltd.",
    "GACL",
    "TGVGV SRAAC Limited (formerly Sree Rayalaseema Alkalies and Allied Chemicals Ltd.)",
    "Krishna Antioxidants",
    "Pushkar Chemicals and fertilizers Ltd."
  ];

  return (
    <section id="legacy" className="w-full py-32 md:py-56 bg-[var(--color-iron-900)] text-[var(--color-bone)] border-b-8 border-[var(--color-signal)] relative overflow-hidden">

      {/* Background Aesthetic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-signal)]/5 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Header Block */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-[var(--font-tech)] text-[var(--color-signal)] font-bold text-sm tracking-[0.4em] mb-8 uppercase">
              // HERITAGE // TRUST // QUALITY
            </span>
            <h3
              className="text-6xl md:text-9xl font-black uppercase leading-[1.1] mb-12 tracking-tight"
              style={{ fontFamily: 'var(--font-brand)' }}
            >
              The DNA <br />
              Of <span className="text-stroke-bone">Proven</span><br />
              Supply.
            </h3>

            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl border-l-4 border-[var(--color-signal)] pl-8 opacity-80 mb-12">
              Desai Industries has been the silent engine of Indian industry since 1974. Based in the strategic hub of Sangli, we transform raw chemical potential into industrial reality.
            </p>
          </motion.div>

          {/* Stats & Partners Block */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="p-10 border-2 border-[var(--color-bone)]/20 hover:border-[var(--color-signal)] transition-all group flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-6xl font-black mb-2 group-hover:text-[var(--color-signal)] transition-colors tracking-tight leading-none" style={{ fontFamily: 'var(--font-brand)' }}>
                    {stat.value}
                  </div>
                  <div className="font-[var(--font-tech)] text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Strategic Partners Section */}
            <motion.div
              className="bg-[var(--color-bone)]/5 p-12 border-l-8 border-[var(--color-signal)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-[var(--font-tech)] text-[var(--color-signal)] font-black uppercase tracking-widest mb-8 flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[var(--color-signal)]" />
                Authorized Strategic Partners
              </h4>
              <div className="flex flex-wrap gap-x-12 gap-y-8">
                {partners.map((partner, i) => (
                  <div key={i} className="group cursor-default">
                    <span className="text-lg md:text-xl font-bold tracking-tight opacity-75 group-hover:opacity-100 group-hover:text-[var(--color-signal)] transition-all duration-300">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Legacy;
