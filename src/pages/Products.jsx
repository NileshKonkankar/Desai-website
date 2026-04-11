import React from 'react';
import ProductsCatalog from '../components/Products';

const Products = () => {
  return (
    <main className="w-full bg-[var(--color-bone)] pb-24">
      {/* Heavy Header */}
      <header className="pt-24 pb-12 px-6 md:px-12 bg-[var(--color-iron-900)] text-[var(--color-bone)] border-b-8 border-[var(--color-signal)]">
        <h1 className="text-[12vw] md:text-[8vw] font-black uppercase leading-none tracking-normal" style={{ fontFamily: 'var(--font-brand)' }}>
          Industrial<br/>Apparatus.
        </h1>
        <p className="mt-8 text-xl md:text-2xl font-medium max-w-2xl border-l-4 border-[var(--color-signal)] pl-6 text-[var(--color-bone)]/80">
          Comprehensive physical and chemical supply for critical infrastructure.
        </p>
      </header>
      
      {/* Reusing the components catalog */}
      <ProductsCatalog />

    </main>
  );
};

export default Products;
