import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: "Grasim Industries", branch: "Chemical Division", role: "Strategic Supplier" },
    { name: "Dr. Kamat's Lab", branch: "Quality Control", role: "Verification Partner" },
    { name: "Schneider", branch: "Electrical Systems", role: "Authorized Distributor" },
    { name: "Finolex Cables Ltd.", branch: "Transmission", role: "Authorized Distributor" },
    { name: "Orgamine Chemicals", branch: "Specialty Compounds", role: "Primary Channel" },
    { name: "Krishna Antioxidants", branch: "Chemical Labs", role: "Supply Partner" }
  ];

  return (
    <section className="py-24 bg-[var(--color-bone)] border-b-8 border-[var(--color-iron-900)] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <span className="text-[15vw] font-black leading-none uppercase" style={{ fontFamily: 'var(--font-brand)' }}>
          AUTH
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <span className="blueprint-label text-[var(--color-signal)] mb-4 block">NETWORK-01 [AUTHORIZED]</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-brand)' }}>
              Strategic<br/>Partners.
            </h2>
          </div>
          <p className="text-xl font-bold uppercase opacity-85 max-w-xs border-l-2 border-[var(--color-iron-900)] pl-6">
            Direct supply chain integration with global industrial leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-[var(--color-iron-900)]">
          {partners.map((partner, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
               className="p-10 border-[1px] border-[var(--color-iron-900)] hover:bg-[var(--color-signal)] transition-colors group cursor-default flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-black blueprint-label opacity-70 group-hover:opacity-100 uppercase">
                  VERIFIED // 0{idx + 1}
                </span>
                <div className="w-2 h-2 bg-[var(--color-signal)] group-hover:bg-[var(--color-iron-900)] rounded-full" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-brand)' }}>
                {partner.name}
              </h3>
              <p className="text-sm font-bold opacity-80 uppercase mb-6 group-hover:opacity-100">
                {partner.branch}
              </p>
              <div className="pt-4 border-t border-[var(--color-iron-900)]/20 flex justify-between items-center group-hover:border-black/30">
                <span className="blueprint-label text-[10px]">{partner.role}</span>
                <span className="text-[10px] font-black">[AUTHORIZED]</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
