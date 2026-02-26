import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import floorPlanImg from '../../assets/floor-plan.png';

const features = [
  {
    title: "Spacious 3-Bedroom Layout",
    description: "A masterfully designed 180m² residence featuring open-plan living, a gourmet kitchen, and panoramic city views.",
    active: true
  },
  {
    title: "Master Suite with Terrace",
    description: "The primary bedroom offers a private sanctuary with a walk-in wardrobe and direct access to the rooftop terrace.",
    active: false
  },
  {
    title: "Smart Home Integration",
    description: "Control every aspect of your environment with integrated climate, lighting, and security systems.",
    active: false
  },
  {
    title: "Premium Finish Selection",
    description: "Choose from three curated interior palettes featuring natural stone, oak flooring, and bespoke cabinetry.",
    active: false
  }
];

export const Villas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section id="skai-villas" ref={containerRef} className="relative py-24 md:py-40 bg-luxury-gloss text-luxury-beige overflow-hidden">
      {/* Wavy Background Texture */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#5c4033_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/waves-dark/1920/1080?blur=10')] bg-cover bg-center mix-blend-overlay opacity-50" />
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C20,40 40,60 60,50 C80,40 100,60 100,50 L100,100 L0,100 Z" fill="rgba(92, 64, 51, 0.1)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-60 mb-6 block"
          >
            FLOOR PLANS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-serif max-w-5xl mx-auto leading-tight opacity-90"
          >
            Masterfully designed <span className="font-script normal-case text-luxury-mustard text-4xl sm:text-5xl md:text-7xl">layouts</span> to suit your unique lifestyle
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Left Side: Features List */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer transition-all duration-500 ${feature.active ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <h3 className="text-lg md:text-2xl font-serif">{feature.title}</h3>
                  {feature.active && <ChevronRight className="text-luxury-mustard" size={20} />}
                </div>
                {feature.active && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.7, height: 'auto' }}
                    className="text-xs md:text-sm leading-relaxed max-w-sm"
                  >
                    {feature.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side: Parallax Image */}
          <div className="lg:col-span-7">
            <motion.div
              style={{ y, scale }}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-white/5 p-4 border-[3px] border-white/20 flex items-center justify-center"
            >
              <img
                src={floorPlanImg}
                alt="Floor Plan View"
                className="w-full h-full object-contain object-center mix-blend-lighten opacity-80 aspect-[16/10] rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/40 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
