import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    "Introduction",
    "Location and quarter",
    "Amenities",
    "Interior",
    "SKAI Villas",
    "Prices and Plans",
    "Open House",
    "Gallery",
    "Contact"
  ];

  const secondaryItems = [
    "FOR INVESTORS",
    "TEAM",
    "ENDOVER",
    "CONSTRUCTION INFORMATION",
    "PURCHASE PROCESS AND FINANCING"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#1a1410] text-luxury-beige flex flex-col p-8 md:p-16 lg:p-24 overflow-y-auto"
        >
          {/* Top Bar: Language & Close */}
          <div className="flex justify-between items-center mb-12 md:mb-20">
            <div className="flex gap-6 text-[10px] uppercase tracking-[0.3em]">
              <span className="opacity-40 cursor-pointer hover:opacity-100 transition-opacity font-sans">EST</span>
              <span className="font-bold border-b border-luxury-mustard pb-1 font-sans">ENG</span>
            </div>
            
            <button 
              onClick={onClose}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group"
            >
              <X size={24} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </div>

          <div className="flex flex-col h-full justify-between max-w-2xl">
            {/* Main Navigation */}
            <nav className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={onClose}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif hover:text-luxury-mustard transition-all duration-500 hover:translate-x-4 opacity-80 hover:opacity-100 whitespace-nowrap"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Secondary Links */}
            <div className="mt-20 pt-12 border-t border-white/5 grid grid-cols-1 gap-4">
              {secondaryItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  whileHover={{ opacity: 1, x: 5 }}
                  transition={{ delay: 0.8 + (index * 0.05) }}
                  className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 font-sans"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
