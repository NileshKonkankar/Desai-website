import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
  const groupCompanies = [
    { name: "Desai Industries", id: "GRP-UNIT-01", description: "Core Industrial & Chemical Supply Powerhouse." },
    { name: "Desai Agencies", id: "GRP-UNIT-02", description: "Strategic Distribution & Logistics Hub." },
    { name: "Desai Enterprises", id: "GRP-UNIT-03", description: "Global Export & Import Specialization." },
    { name: "Desai Stock Syndicate", id: "GRP-UNIT-04", description: "Bulk Procurement & Inventory Management." },
    { name: "Kanubhai Desai & Co", id: "GRP-UNIT-05", description: "Administrative & Strategic Consulting." },
    { name: "Rajveer Enterprises", id: "GRP-UNIT-06", description: "Niche Industrial Asset Management." }
  ];

  const strategicPartners = [
    "Grasim Industries Ltd. (Chemical Division)",
    "Schneider Electric (Authorized Distributor)",
    "Orgamine Chemicals (I) Pvt. Ltd.",
    "Finolex Cables Ltd.",
    "Dr. Kamat's Laboratory Pvt. Ltd. (QC)",
    "Krishna Antioxidants Pvt Ltd"
  ];

  return (
    <main className="w-full min-h-screen bg-[var(--color-bone)] border-b-8 border-[var(--color-iron-900)] pb-24 relative overflow-hidden">
      {/* Background Graphic Overlay */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <span className="text-[20vw] font-black leading-none uppercase" style={{ fontFamily: 'var(--font-brand)' }}>
          CORP
        </span>
      </div>

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b-[4px] border-[var(--color-iron-900)] relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="blueprint-label text-[var(--color-signal)] mb-4 block">ESTABLISHED // 1974</span>
          <h1 className="text-[12vw] md:text-[8vw] font-black uppercase leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-brand)' }}>
            The Desai<br />Group <span className="text-stroke">Ecosystem.</span>
          </h1>
          <p className="mt-8 text-xl md:text-3xl font-bold max-w-4xl border-l-8 border-[var(--color-signal)] pl-8 uppercase leading-tight opacity-95">
            A diverse industrial conglomerate specializing in chemical synthesis, electrical transmission, and precision warehousing.
          </p>
        </motion.div>
      </section>

      {/* The Legacy Timeline */}
      <section className="px-6 md:px-12 mt-24 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center">
          <div className="md:w-1/2">
            <h2 className="text-6xl font-black uppercase mb-8" style={{ fontFamily: 'var(--font-brand)' }}>Our Legacy.</h2>
            <div className="space-y-12">
              <div className="relative pl-12 border-l-4 border-[var(--color-iron-900)]">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-[var(--color-signal)] rounded-full" />
                <span className="blueprint-label opacity-70">1974 // THE GENESIS</span>
                <h3 className="text-2xl font-black uppercase mb-2">Desai Industries Foundation</h3>
                <p className="font-medium opacity-80">Started as a dedicated supplier of industrial chemicals in Sangli, Maharashtra, setting the benchmark for purity and supply chain reliability.</p>
              </div>
              <div className="relative pl-12 border-l-4 border-[var(--color-iron-900)]">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-[var(--color-iron-900)] rounded-full" />
                <span className="blueprint-label opacity-70">1992-2010 // DIVERSIFICATION</span>
                <h3 className="text-2xl font-black uppercase mb-2">Powering National Grid</h3>
                <p className="font-medium opacity-80">Expansion into Electrical Cables & Wire distribution, partnering with Finolex to power high-voltage industrial facilities across India.</p>
              </div>
              <div className="relative pl-12 border-l-4 border-[var(--color-iron-900)]">
                <span className="absolute -left-3 top-0 w-6 h-6 bg-[var(--color-iron-900)] rounded-full" />
                <span className="blueprint-label opacity-70">2024+ // MODERN COMMAND</span>
                <h3 className="text-2xl font-black uppercase mb-2">The Integrated Future</h3>
                <p className="font-bold">Merging advanced chemical synthesis for the sugar industry with smart transmission solutions under the Desai Group unified command.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="aspect-square bg-[var(--color-iron-900)] p-12 flex items-center justify-center relative rough-border">
              <div className="text-center flex flex-col items-center">
                <span className="text-[15vw] text-[var(--color-bone)] font-black leading-[0.9] tracking-tight mb-2" style={{ fontFamily: 'var(--font-brand)' }}>50</span>
                <p className="text-[var(--color-signal)] text-2xl font-black tracking-widest uppercase">Years Of Authority</p>
              </div>
              {/* Corner Labels */}
              <span className="absolute top-4 left-4 blueprint-label text-white/20">CODE: DGI-HIST</span>
              <span className="absolute bottom-4 right-4 blueprint-label text-white/20">STATUS: VERIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Group Directory */}
      <section className="px-6 md:px-12 mt-32 py-24 bg-[var(--color-iron-900)] text-[var(--color-bone)] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl relative">
              <span className="absolute -top-12 -left-4 text-9xl font-black text-stroke-bone opacity-5 select-none pointer-events-none" style={{ fontFamily: 'var(--font-brand)' }}>PORTFOLIO.</span>
              <span className="blueprint-label text-[var(--color-signal)] mb-4 block">STRUCTURE // HUB-01</span>
              <h2 className="text-6xl md:text-8xl font-black uppercase leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-brand)' }}>
                The<br />Group.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupCompanies.map((company, idx) => (
              <motion.div
                key={idx}
                className="border-2 border-white/10 p-8 hover:border-[var(--color-signal)] transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="blueprint-label text-[var(--color-signal)] group-hover:text-white transition-colors">{company.id}</span>
                <h3 className="text-2xl font-black uppercase mt-4 mb-4" style={{ fontFamily: 'var(--font-brand)' }}>{company.name}</h3>
                <p className="font-medium opacity-80 leading-relaxed group-hover:opacity-100">{company.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="text-5xl font-black uppercase leading-none tracking-normal" style={{ fontFamily: 'var(--font-brand)' }}>
              Authorized<br />Alliances.
            </h2>
            <p className="mt-8 font-bold opacity-60 uppercase">Our authority is backed by direct channel distribution agreements with India's most respected chemical and electrical manufacturers.</p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {strategicPartners.map((partner, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-[var(--color-iron-900)]/5 p-6 border-b-2 border-[var(--color-iron-900)] group hover:bg-[var(--color-signal)] transition-all">
                <span className="text-[var(--color-signal)] group-hover:text-[var(--color-iron-900)] font-black text-xs">»</span>
                <span className="font-black uppercase tracking-tight">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Infrastructure */}
      <section className="px-6 md:px-12 py-24 border-t-8 border-[var(--color-iron-900)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="blueprint-label text-[var(--color-signal)]">LOGISTICS // WAREHOUSING</span>
            <h2 className="text-6xl font-black uppercase mb-8 tracking-tight" style={{ fontFamily: 'var(--font-brand)' }}>The Engine Room.</h2>
            <p className="text-2xl font-bold opacity-90 leading-relaxed">Our operations are underpinned by state-of-the-art warehousing services, ensuring sub-24hr transit times for critical industrial chemical orders.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[var(--color-iron-900)] text-[var(--color-bone)] p-10 aspect-square flex flex-col justify-between rough-border">
              <span className="blueprint-label">LOC-HQ</span>
              <div>
                <span className="text-4xl md:text-5xl font-black uppercase leading-tight" style={{ fontFamily: 'var(--font-brand)' }}>SANGLI</span>
                <p className="text-xs font-bold opacity-60 mt-4 tracking-widest">Core Command & Stock Center</p>
              </div>
            </div>
            <div className="border-4 border-[var(--color-iron-900)] p-10 aspect-square flex flex-col justify-between">
              <span className="blueprint-label">UNIT-02</span>
              <div>
                <span className="text-4xl md:text-5xl font-black uppercase leading-tight" style={{ fontFamily: 'var(--font-brand)' }}>KUPWAD</span>
                <p className="text-xs font-bold opacity-60 mt-4 tracking-widest">Hazardous Chemical Storage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
