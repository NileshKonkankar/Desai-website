import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Chemicals from './pages/Chemicals';
import SugarChemicals from './pages/SugarChemicals';
import WireCables from './pages/WireCables';
import FruitDryingOil from './pages/FruitDryingOil';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';

const PageTransition = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex-grow"
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bone)] font-[var(--font-body)] text-[var(--color-iron-900)] overflow-x-hidden flex flex-col selection:bg-[var(--color-signal)] selection:text-[var(--color-bone)]">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
            <Route path="/products/fruit-drying-oil" element={<PageTransition><FruitDryingOil /></PageTransition>} />
            <Route path="/products/chemicals" element={<PageTransition><Chemicals /></PageTransition>} />
            <Route path="/products/sugar-chemicals" element={<PageTransition><SugarChemicals /></PageTransition>} />
            <Route path="/products/wire-cables" element={<PageTransition><WireCables /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/enquiry" element={<PageTransition><Enquiry /></PageTransition>} />
            <Route path="/enquiry/:productLink" element={<PageTransition><Enquiry /></PageTransition>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
