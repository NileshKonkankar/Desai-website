import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-6 md:px-12 py-5 bg-[var(--color-bone)]/80 backdrop-blur-md border-b-[3px] border-[var(--color-iron-900)]">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--color-signal)] origin-left"
        style={{ scaleX }}
      />

      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="flex items-center group">
          <img 
            src="https://www.desaigroupindia.com/catalog.wlimg.com/1/1022983/other-images/12569-comp-image.png" 
            alt="Desai Industries Logo" 
            className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </Link>
      </motion.div>
      
      <motion.div 
        className="space-x-12 hidden md:flex items-center font-bold text-xs tracking-[0.2em] uppercase"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ fontFamily: 'var(--font-tech)' }}
      >
        <Link to="/about" className="hover:text-[var(--color-signal)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-signal)] hover:after:w-full after:transition-all">About Us</Link>
        <Link to="/products" className="hover:text-[var(--color-signal)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-signal)] hover:after:w-full after:transition-all">Catalog</Link>
        <Link to="/enquiry" className="hover:text-[var(--color-signal)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-signal)] hover:after:w-full after:transition-all">Enquire</Link>
        <Link to="/contact" className="px-8 py-3 bg-[var(--color-iron-900)] text-[var(--color-bone)] rough-border hover:bg-[var(--color-signal)] transition-all">
          Contact
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
