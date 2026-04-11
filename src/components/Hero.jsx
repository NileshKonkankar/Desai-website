import React from 'react';
import { Canvas } from '@react-three/fiber';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Molecules3D from './Molecules3D';
import factoryImg from '../assets/factory.png';

const Hero = () => {
  return (
    <header className="relative w-full min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden bg-[var(--color-bone)] border-b-8 border-[var(--color-iron-900)] scanline">
      
      {/* Industrial Coordinate Overlays */}
      <div className="absolute top-24 left-12 z-20 hidden lg:block opacity-60 select-none">
        <p className="font-[var(--font-tech)] text-xs tracking-[0.2em] uppercase">
          Sector // IN-MH-SHA-01 <br/>
          LAT: 17.5 N / LONG: 74.6 E
        </p>
      </div>
      <div className="absolute bottom-12 right-12 z-20 hidden lg:block opacity-60 select-none text-right">
        <p className="font-[var(--font-tech)] text-xs tracking-[0.2em] uppercase">
          Status: Active <br/>
          Load: 500k MT / ANN
        </p>
      </div>

      <div className="absolute inset-0 z-0">
        <img 
          src={factoryImg} 
          alt="Desai Industries Production Facility" 
          className="w-full h-full object-cover grayscale opacity-35 transition-all duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bone)]/30 to-[var(--color-bone)]" />
      </div>

      {/* 3D WebGL Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-auto z-10 opacity-70">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }} alpha={true}>
          <fog attach="fog" args={['#dbd2c3', 5, 25]} />
          <Molecules3D />
        </Canvas>
      </div>

      {/* Foreground Content Stack */}
      <motion.div 
        className="relative z-20 w-full max-w-7xl mx-auto flex flex-col justify-center h-full pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
        {/* Main Headline with staggered mechanical reveals */}
        <div className="pr-0 md:pr-32">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 
              className="text-7xl md:text-9xl lg:text-[11rem] font-bold uppercase tracking-tight leading-[1.1] text-[var(--color-iron-900)] selection:bg-[var(--color-signal)]"
              style={{ fontFamily: 'var(--font-brand)' }}
            >
              Industrial <br/>
              <span className="text-[var(--color-signal)]">Power.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6 mt-6 overflow-hidden"
          >
            <div className="h-[4px] w-24 bg-[var(--color-iron-900)]" />
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-widest italic" style={{ fontFamily: 'var(--font-brand)' }}>
              Since 1974
            </h3>
          </motion.div>

          <motion.p 
            className="mt-12 text-xl md:text-3xl max-w-2xl font-medium leading-relaxed opacity-95"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Premier B2B Suppliers of High-Grade Chemicals, Sugar Chemicals, and Industrial Wire & Cables. Unyielding reliability for global manufacturing.
          </motion.p>
        </div>

        {/* Action Row */}
        <motion.div 
          className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button 
            className="group relative px-10 py-5 bg-[var(--color-iron-900)] text-[var(--color-bone)] font-black uppercase text-xl md:text-2xl rough-border industrial-glow transition-all active:scale-95"
            style={{ fontFamily: 'var(--font-brand)' }}
          >
            <span className="relative z-10 flex items-center gap-4">
              Explore Catalog
              <svg className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <div className="flex gap-4 items-center opacity-85">
            <div className="w-6 h-[2px] bg-[var(--color-iron-900)]" />
            <span className="font-[var(--font-tech)] font-bold uppercase tracking-[0.15em] text-sm">Now Shipping Globally</span>
          </div>
        </motion.div>

      </motion.div>
    </header>
  );
};

export default Hero;
