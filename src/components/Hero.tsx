import React from 'react';
import { motion } from 'motion/react';
import heroVideo from '../../assets/Apartment_Walkthrough_Video_2.mp4';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          src={heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-brown/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-8 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[18vw] sm:text-[15vw] md:text-[12vw] leading-[0.85] text-white uppercase font-serif tracking-tighter"
            >
              Elyse <span className="font-script normal-case text-luxury-mustard text-[12vw] sm:text-[10vw] md:text-[8vw] -ml-4 sm:-ml-8 md:-ml-12">Residence</span>
            </motion.h1>
          </div>
          
          <div className="md:col-span-4 text-white space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h2 className="text-xl md:text-2xl font-serif italic mb-4">
                Holistic luxury <br /> in perfect harmony
              </h2>
              <p className="text-sm md:text-base font-light opacity-80 leading-relaxed max-w-xs">
                Welcome to Elyse Residence, where timeless design, wellness-focused living and cultural enrichment converge in order to create an unparalleled sanctuary of elegance and serenity.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
              <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative Line */}
      <div className="absolute top-[15%] left-8 right-8 h-[1px] bg-white/20 z-10" />
    </section>
  );
};
