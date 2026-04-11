import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SpecPageTemplate = ({
  code,
  title,
  image,
  coordinateLabels = [],
  contentTitle,
  contentDescription,
  note = {},
  specTitle = "Technical Specs",
  specs = [],
  buttonText = "Request Technical Quote",
  leftColumnCustom,
  children,
  productSlug = ""
}) => {
  return (
    <main className="w-full min-h-screen bg-[var(--color-bone)] border-b-8 border-[var(--color-iron-900)] overflow-hidden">
      {/* Cinematic Hero Header */}
      <header className="relative w-full h-[60vh] bg-[var(--color-iron-900)] border-b-8 border-[var(--color-iron-900)] selection:bg-[var(--color-signal)]">
        <img
          src={image}
          alt="Refinement Context Image"
          className="w-full h-full object-cover opacity-90 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-iron-900)] to-transparent" />

        <div className="absolute bottom-12 left-6 md:left-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="blueprint-label text-[var(--color-signal)] mb-4 block">CODE: {code}</span>
            <h1 className="text-[12vw] md:text-[8vw] font-black uppercase leading-[1.1] tracking-tight text-[var(--color-bone)]" style={{ fontFamily: 'var(--font-brand)' }}>
              {title}
            </h1>
          </motion.div>
        </div>

        {/* Technical Coordinate Overlay */}
        <div className="absolute top-12 right-12 hidden md:block">
          <div className="flex flex-col items-end opacity-70">
            {coordinateLabels.map((label, idx) => (
               <span key={idx} className="blueprint-label text-[var(--color-bone)]">{label}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Specification Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-24">
        
        {/* Left: Product About / Custom Logic */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold uppercase mb-8 border-l-4 border-[var(--color-signal)] pl-6 tracking-normal leading-tight" style={{ fontFamily: 'var(--font-brand)' }}>
            {contentTitle}
          </h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-[var(--color-iron-900)] opacity-95 mb-12">
            {contentDescription}
          </p>
          
          {leftColumnCustom}

          {note.text && (
            <div className={`mt-12 p-10 rough-border ${note.bgClass || 'bg-[var(--color-iron-900)] text-[var(--color-bone)]'} selection:text-[var(--color-iron-900)] selection:bg-[var(--color-signal)]`}>
              {note.title && <h3 className={`blueprint-label mb-4 ${note.labelClass || 'text-[var(--color-signal)]'}`}>{note.title}</h3>}
              <p className="text-lg font-bold">{note.text}</p>
            </div>
          )}
        </div>

        {/* Right: Spec Table & Children */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold uppercase mb-8 leading-tight" style={{ fontFamily: 'var(--font-brand)' }}>
            {specTitle}
          </h2>
          <div className="border-t-4 border-[var(--color-iron-900)]">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between py-6 border-b-2 border-[var(--color-iron-900)]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="blueprint-label text-[var(--color-iron-900)]/80 text-xs">{spec.label}</span>
                <span className="text-lg md:text-xl font-bold uppercase tracking-tight text-[var(--color-iron-900)] text-right">{spec.value}</span>
              </motion.div>
            ))}
          </div>

          {children}

          <Link 
            to={productSlug ? `/enquiry/${productSlug}` : '/enquiry'}
            className="mt-12 w-full py-6 bg-[var(--color-signal)] text-[var(--color-bone)] font-black uppercase tracking-[0.3em] text-xl rough-border hover:bg-[var(--color-iron-900)] transition-all inline-block text-center"
          >
            {buttonText}
          </Link>
        </div>

      </section>

      {/* Visual Scanner Background Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] industrial-glow">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>
    </main>
  );
};

export default SpecPageTemplate;
