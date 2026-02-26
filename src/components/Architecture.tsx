import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const Architecture = () => {
  return (
    <section id="location-and-quarter" className="py-24 md:py-40 bg-[#f7f3f0] text-luxury-dark">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-40 mb-8 block"
          >
            Architecture
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] max-w-5xl opacity-90 tracking-tight"
          >
            Iconic <span className="font-script normal-case text-luxury-mustard text-4xl sm:text-5xl md:text-7xl">architecture</span>, designed as the flagship development of Elyse Quarter
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          {/* Left Column: Quote Block */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-[#ede8e1] p-6 sm:p-8 md:p-14 rounded-[30px] md:rounded-[40px] relative overflow-hidden"
            >
              <div className="flex flex-col gap-8 md:gap-12">
                <div className="space-y-6 md:space-y-8">
                  <span className="text-5xl md:text-7xl font-serif text-luxury-mustard opacity-40 leading-none">“</span>
                  <p className="text-sm md:text-lg leading-relaxed opacity-70 font-light">
                    The Elyse towers are designed as a striking duo — distinct on the skyline, yet harmonious with the surrounding quarter. Every line was drawn to shape both the city’s horizon as well as elevate the residents’ living quality.
                  </p>
                  <p className="hidden sm:block text-base md:text-lg leading-relaxed opacity-70 font-light">
                    From curved balconies to panoramic windows, the building has been designed with a focus on people, light, and unique views.
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 md:gap-8 pt-6 md:pt-8 border-t border-luxury-dark/5">
                  <div className="space-y-1">
                    <h4 className="text-xs md:text-sm font-serif uppercase tracking-widest font-semibold">Rasmus Tamme</h4>
                    <p className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-50">Elyse Lead Architect</p>
                    <div className="pt-4 md:pt-6 text-lg md:text-xl font-serif tracking-[0.2em] uppercase opacity-30">
                      ARSPROJEKT
                    </div>
                  </div>

                  <div className="w-24 md:w-40 aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl rotate-2">
                    <img 
                      src="https://picsum.photos/seed/architect-portrait/600/800" 
                      alt="Architect" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stats & Link */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-y-12 md:gap-y-20 gap-x-12 pt-8 md:pt-12">
            <div className="space-y-4 md:space-y-6 border-l border-luxury-dark/10 pl-6 md:pl-10">
              <div className="text-5xl sm:text-7xl md:text-8xl font-serif text-luxury-brown leading-none">
                <Counter value={2} />
              </div>
              <p className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-bold opacity-40">
                High-rise buildings
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 border-l border-luxury-dark/10 pl-6 md:pl-10">
              <div className="text-5xl sm:text-7xl md:text-8xl font-serif text-luxury-brown leading-none">
                <Counter value={12} />
              </div>
              <p className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-bold opacity-40">
                Floors
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 border-l border-luxury-dark/10 pl-6 md:pl-10">
              <div className="text-5xl sm:text-7xl md:text-8xl font-serif text-luxury-brown leading-none">
                <Counter value={2027} duration={3} />
              </div>
              <p className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-bold opacity-40">
                Move-in ready by mid-year
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 border-l border-luxury-dark/10 pl-6 md:pl-10 flex flex-col justify-end">
              <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-bold opacity-40 mb-4 md:mb-6">
                Take a closer look
              </span>
              <a 
                href="#" 
                className="text-2xl sm:text-4xl md:text-5xl font-serif text-luxury-brown hover:text-luxury-mustard transition-all duration-500 underline underline-offset-[8px] md:underline-offset-[12px] decoration-luxury-mustard/40 hover:decoration-luxury-mustard"
              >
                Prices and plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
