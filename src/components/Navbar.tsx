import React from 'react';
import { motion } from 'motion/react';

interface NavbarProps {
  onMenuOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuOpen }) => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-gradient-to-b from-luxury-brown/20 to-transparent backdrop-blur-md text-white"
    >
      <div className="text-2xl font-serif tracking-widest uppercase mix-blend-difference">
        Elyse <span className="font-script normal-case text-luxury-mustard text-3xl ml-1">Residence</span>
      </div>

      <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-medium mix-blend-difference">
        <a href="#introduction" className="hover:text-luxury-mustard transition-colors">Introduction</a>
        <a href="#amenities" className="hover:text-luxury-mustard transition-colors">Amenities</a>
        <a href="#interior" className="hover:text-luxury-mustard transition-colors">Interior</a>
        <a href="#skai-villas" className="hover:text-luxury-mustard transition-colors">SKAI Villas</a>
        <a href="#contact" className="hover:text-luxury-mustard transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={onMenuOpen}
          className="text-[10px] uppercase tracking-[0.2em] font-medium hover:text-luxury-mustard transition-colors mix-blend-difference"
        >
          Menu
        </button>
        <button className="px-6 py-2 border border-white/30 rounded-full text-[10px] uppercase tracking-widest gloss-button hover:bg-white hover:text-black">
          Book a Visit
        </button>
      </div>
    </motion.nav>
  );
};
