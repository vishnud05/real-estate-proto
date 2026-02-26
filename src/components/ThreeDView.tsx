import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, Maximize2 } from 'lucide-react';

export const ThreeDView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="interior" className="py-24 md:py-40 bg-[#f5f2ed] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Container with white background like the image */}
        <div className="bg-white rounded-[40px] p-8 md:p-20 relative shadow-sm">

          {/* Heading */}
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-serif font-medium uppercase tracking-tight leading-none text-black">
              Designing <span className="font-script normal-case text-luxury-mustard text-5xl sm:text-7xl md:text-8xl -ml-2 md:-ml-8">Spaces</span>
            </h2>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-serif font-medium uppercase tracking-tight leading-none text-black mt-4">
              That <span className="italic font-light">Inspire.</span>
            </h2>
          </div>

          {/* Central Image Container */}
          <div className="relative max-w-5xl mx-auto">

            {/* Top Left Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -top-12 -left-4 md:-left-12 z-20 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-luxury-mustard/20 max-w-[200px] hidden sm:block"
            >
              <button className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-lg mb-3 uppercase tracking-widest">
                The Modern Homes
              </button>
              <p className="text-[11px] text-black/60 font-medium leading-relaxed">
                From Modern Homes <br /> To Iconic
              </p>
            </motion.div>

            {/* Main Image with Border */}
            <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <div className="absolute -inset-1 border border-luxury-mustard/30 rounded-[32px] md:rounded-[48px]" />
              <div className="relative aspect-[16/10] rounded-[28px] md:rounded-[44px] overflow-hidden shadow-2xl">
                <img
                  src="assets/apartment-inside3.jpg"
                  alt="3D Architectural View"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-md p-6 rounded-full text-white">
                    <Maximize2 size={32} />
                  </div>
                </div>
              </div>

              {/* Get In Touch Button at bottom of image */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30">
                <button className="bg-luxury-mustard text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-xl hover:scale-105 transition-transform font-bold text-xs uppercase tracking-widest">
                  Get In Touch
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight size={14} />
                  </div>
                </button>
              </div>
            </div>

            {/* Bottom Right Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-12 -right-4 md:-right-12 z-20 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-luxury-mustard/20 max-w-[200px] hidden sm:block"
            >
              <button className="bg-black text-white text-[10px] font-bold px-4 py-2 rounded-lg mb-3 uppercase tracking-widest">
                Transform Visions
              </button>
              <p className="text-[11px] text-black/60 font-medium leading-relaxed">
                Into Architectural <br /> Masterpieces.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3D View Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors z-50"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="assets/apartment-inside3.jpg"
                alt="3D Interior View"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <h3 className="text-2xl font-serif mb-2">Interactive 3D Walkthrough</h3>
                <p className="text-sm opacity-70">Experience the future of living in high-definition 3D.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
