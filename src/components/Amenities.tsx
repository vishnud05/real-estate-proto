import React from 'react';
import { motion } from 'motion/react';

const amenityList = [
  { id: "01", title: "Spacious floor-to-ceiling windows" },
  { id: "02", title: "Ceiling heights of up to 3.8 m" },
  { id: "03", title: "Enchanting panoramic views" },
  { id: "04", title: "Private rooftop terraces" },
];

import gymImg from '../../assets/gym.jpg';
import lobbyImg from '../../assets/lobby.jpg';
import homeTheaterImg from '../../assets/home-theater.jpg';
import playAreaImg from '../../assets/play-area.jpg';
import shoppingComplexImg from '../../assets/shopping-complex.jpg';

const collageImages = [
  gymImg,
  lobbyImg,
  homeTheaterImg,
  playAreaImg,
  shoppingComplexImg,
];

export const Amenities = () => {
  return (
    <section id="amenities" className="py-24 md:py-40 bg-luxury-beige text-luxury-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-60 mb-4 block">
              (Amenities)
            </span>
            <h2 className="text-5xl md:text-7xl font-serif uppercase leading-none">
              The Art of <br /> <span className="font-script normal-case text-luxury-mustard text-5xl md:text-7xl">Living</span> Well
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xs text-sm opacity-70 leading-relaxed"
          >
            Experience a collection of amenities designed to elevate every moment of your day, from sunrise to sunset.
          </motion.p>
        </div>

        {/* Amenity List Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-32">
          {amenityList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l border-luxury-dark/10 pl-6 space-y-4"
            >
              <span className="text-[10px] font-medium opacity-40">{item.id}</span>
              <h3 className="text-xl md:text-2xl font-serif leading-tight">{item.title}</h3>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-l border-luxury-dark/10 pl-6 space-y-4 flex flex-col justify-end"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Explore</span>
            <a
              href="#"
              className="text-xl md:text-2xl font-serif text-luxury-brown hover:text-luxury-mustard transition-colors underline underline-offset-8 decoration-luxury-mustard/30"
            >
              Interior design
            </a>
          </motion.div>
        </div>

        {/* Image Collage */}
        <div id="gallery" className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 h-auto lg:h-[600px]">
          {collageImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="relative overflow-hidden group aspect-[3/4] lg:aspect-auto"
            >
              <img
                src={img}
                alt={`Amenity Collage ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
