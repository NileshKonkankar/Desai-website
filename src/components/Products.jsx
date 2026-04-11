import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Asset Imports
import fruitOil from '../assets/fruit-oil.png';
import chemicals from '../assets/chemicals.png';
import sugarChem from '../assets/sugar-chem.png';
import wireCables from '../assets/wire-cables.png';

const Products = () => {
  const products = [
    {
      id: "01",
      title: "Fruit Drying Oil",
      desc: "Premium agricultural processing chemicals for rapid and safe crop dehydration. Food-grade compliance.",
      image: fruitOil,
      path: "/products/fruit-drying-oil",
      reversed: false,
      meta: "GRADE: A+ // COMP: AGRI-SAFE",
      coord: "17.4N / 74.6E"
    },
    {
      id: "02",
      title: "Chemicals",
      desc: "Industrial-grade raw materials formulated for heavy manufacturing, textiles, and synthesis processes. Uncompromising purity.",
      image: chemicals,
      path: "/products/chemicals",
      reversed: true,
      meta: "PURITY: 99.8% // IND-STD",
      coord: "17.6N / 74.5E"
    },
    {
      id: "03",
      title: "Sugar Chemicals",
      desc: "Specialized compounds and clarifyers designed explicitly for the rigorous demands of sugar refinement and processing mills.",
      image: sugarChem,
      path: "/products/sugar-chemicals",
      reversed: false,
      meta: "REFINE-ST: PH-BAL // CLARIFIER",
      coord: "17.3N / 74.8E"
    },
    {
      id: "04",
      title: "Wire & Cables",
      desc: "High-voltage transmission lines, industrial instrumentation cables, and heavy-duty wiring setups built to survive extreme environments.",
      image: wireCables,
      path: "/products/wire-cables",
      reversed: true,
      meta: "VOLT: 33KV+ // IS-694",
      coord: "17.5N / 74.9E"
    }
  ];

  return (
    <section id="products" className="w-full py-24 md:py-48 bg-[var(--color-bone)] border-b-8 border-[var(--color-iron-900)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Background Decorative Text */}
        <h2 
          className="text-[20vw] leading-none font-black text-stroke absolute top-0 left-0 opacity-5 select-none pointer-events-none tracking-tighter"
          style={{ fontFamily: 'var(--font-brand)' }}
        >
          CATALOG
        </h2>

        <div className="relative z-10 flex flex-col gap-48">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 group ${product.reversed ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image Container with Technical Overlay */}
              <div className="w-full lg:w-[55%] aspect-video lg:aspect-square overflow-hidden border-[8px] border-[var(--color-iron-900)] rough-border relative">
                <div className="absolute top-4 left-4 z-20 bg-[var(--color-iron-900)] text-[var(--color-bone)] px-3 py-1 font-[var(--font-tech)] text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  REF: {product.coord}
                </div>

                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
                />
                
                {/* Visual Scanner Line Effect */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--color-signal)] opacity-0 group-hover:opacity-30 group-hover:animate-scanline transition-opacity" />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-[45%] flex flex-col">
                <div className="flex flex-col mb-8">
                  <span className="font-[var(--font-tech)] text-[var(--color-signal)] font-bold text-sm tracking-[0.4em] mb-4 uppercase">
                    {product.meta}
                  </span>
                  
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-black text-[var(--color-iron-900)]/30" style={{ fontFamily: 'var(--font-brand)' }}>{product.id}</span>
                    <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-brand)' }}>
                      {product.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-xl md:text-2xl font-medium border-t-4 border-[var(--color-iron-900)] pt-8 mb-12 max-w-xl leading-relaxed">
                  {product.desc}
                </p>
                
                <div className="transition-transform group-hover:translate-x-8">
                  <Link to={product.path} className="inline-flex items-center gap-6 text-[var(--color-iron-900)] font-black uppercase tracking-widest text-lg hover:text-[var(--color-signal)] transition-colors">
                    <div className="w-16 h-2 bg-[var(--color-iron-900)] group-hover:bg-[var(--color-signal)] transition-colors" />
                    Specifications // [OPEN]
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Products;
