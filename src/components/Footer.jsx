import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-iron-900)] text-[var(--color-bone)] py-12 border-t-[1px] border-white/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          <div className="flex flex-col gap-6">
            <Link to="/" className="group inline-block">
              <div className="bg-[var(--color-bone)] p-3 rough-border transition-transform group-hover:scale-105">
                <img 
                  src="https://www.desaigroupindia.com/catalog.wlimg.com/1/1022983/other-images/12569-comp-image.png" 
                  alt="Desai Industries Logo" 
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-xs uppercase font-bold tracking-[0.15em] opacity-70 leading-relaxed">
              Serving the industrial landscape<br/>since 1974. Authorized Distributors<br/>for Finolex & Schneider.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="blueprint-label text-[var(--color-signal)]">SUPPORT // SALES [HQ]</span>
            <div className="text-xs font-bold uppercase tracking-widest leading-loose opacity-60">
              <p>P-66, Kupwad MIDC Road</p>
              <p>Industrial Area, Kupwad</p>
              <p>Sangli, Maharashtra 416436</p>
              <a href="tel:09370333337" className="block mt-2 text-[var(--color-bone)] hover:text-[var(--color-signal)] transition-colors">TEL: 093703 33337</a>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-start md:items-end">
             <span className="blueprint-label text-[var(--color-signal)]">SYSTEM CLOCK</span>
             <div className="text-2xl font-black tracking-normal" style={{ fontFamily: 'var(--font-brand)' }}>
                {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' })}
                <span className="text-[var(--color-signal)] ml-1 cursor-default opacity-50">IST</span>
             </div>
             <div className="flex gap-4 text-xs font-bold uppercase tracking-widest opacity-40 mt-4">
                <a href="#" className="hover:text-[var(--color-signal)] transition-colors">Terms</a>
                <a href="#" className="hover:text-[var(--color-signal)] transition-colors">Privacy</a>
             </div>
          </div>

        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 opacity-20 text-[10px] font-bold uppercase tracking-[0.3em] gap-4">
          <p>© 1974 - {new Date().getFullYear()} Desai Industries. All Rights Reserved.</p>
          <p>BUILT FOR INDUSTRIAL SCALE // v1.0.4</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
