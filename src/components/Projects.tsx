import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import project1Img from '../../assets/project-1.jpg';
import project2Img from '../../assets/project-2.jpg';
import apartmentInside2Img from '../../assets/apartment-inside2.jpg';

const projects = [
  {
    id: "01",
    title: "Lumière Duplex",
    subtitle: "Residences",
    description: "Two-story luxury apartments that features sunlit living spaces, private terraces, and a selection of exclusive amenities.",
    image: project1Img
  },
  {
    id: "02",
    title: "Azure Penthouse",
    subtitle: "Collection",
    description: "The pinnacle of urban living, offering expansive floor plans and 360-degree views of the skyline.",
    image: project2Img
  },
  {
    id: "03",
    title: "Terra Garden",
    subtitle: "Suites",
    description: "A unique blend of indoor and outdoor living, featuring private botanical gardens and natural materials.",
    image: apartmentInside2Img
  }
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextProject();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section id="prices-and-plans" className="py-24 md:py-40 bg-luxury-gloss text-luxury-beige overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between items-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-60"
          >
            (Our Projects)
          </motion.span>

          <div className="flex gap-6 items-center">
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-4 text-[10px] font-medium opacity-60">
              {projects.map((_, i) => (
                <span
                  key={i}
                  className={`transition-opacity duration-300 ${currentIndex === i ? 'opacity-100' : 'opacity-30'}`}
                >
                  ({i + 1})
                </span>
              ))}
            </div>
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative h-[500px] sm:h-[600px] md:h-[700px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
              }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="w-full max-w-4xl aspect-[16/10] relative overflow-hidden group mb-6 md:mb-12 rounded-2xl shadow-2xl">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover brightness-75 transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-3xl sm:text-5xl md:text-8xl font-serif uppercase leading-none tracking-tighter"
                  >
                    {projects[currentIndex].title} <br /> <span className="font-script normal-case text-luxury-mustard text-2xl sm:text-4xl md:text-6xl">{projects[currentIndex].subtitle}</span>
                  </motion.h3>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-md text-center space-y-8"
              >
                <p className="text-sm opacity-70 leading-relaxed">
                  {projects[currentIndex].description}
                </p>

                <button className="px-8 py-3 bg-luxury-beige text-luxury-dark rounded-full text-[10px] uppercase tracking-widest font-semibold gloss-button hover:bg-luxury-mustard hover:text-white">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Background Peeks (Visual only, non-interactive) */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-[15%] w-[25%] aspect-[3/4] opacity-10 grayscale blur-[4px] pointer-events-none">
            <img
              src={projects[(currentIndex - 1 + projects.length) % projects.length].image}
              alt="Previous Peek"
              className="w-full h-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-[15%] w-[25%] aspect-[3/4] opacity-10 grayscale blur-[4px] pointer-events-none">
            <img
              src={projects[(currentIndex + 1) % projects.length].image}
              alt="Next Peek"
              className="w-full h-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
