import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

import lobby2Img from '../../assets/lobby2.jpg';
import apartmentInsideImg from '../../assets/apartment-inside.jpg';
import image1Img from '../../assets/image 1.jpg';

const aboutGroups = [
  {
    id: 1,
    label: "(About)",
    title: <>Timeless <br /> Design. <br /> <span className="font-script normal-case text-luxury-mustard text-5xl md:text-7xl">Wellness-</span> <br /> Focused <br /> Living.</>,
    image: lobby2Img,
    description: "Every element of Elyse Residence reflects a commitment to excellence. From the timeless elegance of its interiors to its thoughtfully curated amenities, the property embodies a holistic approach to luxury living.",
    subDescription: "Whether you're seeking a serene retreat, cultural hub, or a space that fosters personal growth, Elyse Residence offers it all."
  },
  {
    id: 2,
    label: "(Amenities)",
    title: <>Curated <br /> Spaces. <br /> <span className="font-script normal-case text-luxury-mustard text-5xl md:text-7xl">Unrivaled</span> <br /> Comfort.</>,
    image: apartmentInsideImg,
    description: "Our amenities are designed to cater to your every need. From state-of-the-art fitness centers to tranquil spa retreats, every space is a testament to our dedication to your well-being.",
    subDescription: "Experience a lifestyle where luxury is not just a feature, but a standard of living."
  },
  {
    id: 3,
    label: "(Vision)",
    title: <>Sustainable <br /> Future. <br /> <span className="font-script normal-case text-luxury-mustard text-5xl md:text-7xl">Modern</span> <br /> Elegance.</>,
    image: image1Img,
    description: "We believe in building for the future. Our residences incorporate sustainable practices and modern technologies to ensure a lasting impact on both the environment and your quality of life.",
    subDescription: "Join us in redefining luxury for the next generation of urban dwellers."
  }
];

interface AboutGroupProps {
  group: typeof aboutGroups[0];
  progress: any;
  index: number;
}

const AboutGroup: React.FC<AboutGroupProps> = ({ group, progress, index }) => {
  const start = index * 0.33;
  const end = (index + 1) * 0.33;

  const opacity = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [50, 0, 0, -50]
  );

  const scale = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [0.98, 1, 1, 0.98]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 w-full pointer-events-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 items-center">

          <div className="md:col-span-5 order-2 md:order-1 text-center md:text-left">
            <div className="space-y-6 md:space-y-12">
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-medium opacity-60 block">
                {group.label}
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif leading-tight uppercase tracking-tight">
                {group.title}
              </h2>
            </div>
          </div>

          <div className="md:col-span-4 order-1 md:order-2">
            <div className="aspect-[4/5] md:aspect-[3/4] relative overflow-hidden group rounded-sm shadow-2xl max-w-[280px] md:max-w-none mx-auto">
              <img
                src={group.image}
                alt="Luxury Interior"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[10px] md:border-[20px] border-luxury-brown/20 pointer-events-none" />
            </div>
          </div>

          <div className="md:col-span-3 order-3 text-center md:text-left">
            <div className="space-y-4 md:space-y-8">
              <p className="text-xs md:text-sm leading-relaxed opacity-80 max-w-xs mx-auto md:mx-0">
                {group.description}
              </p>
              <p className="hidden md:block text-sm leading-relaxed opacity-80">
                {group.subDescription}
              </p>

              <button className="px-6 md:px-8 py-2 md:py-3 bg-luxury-beige text-luxury-dark rounded-full text-[8px] md:text-[10px] uppercase tracking-widest font-semibold gloss-button hover:bg-luxury-mustard hover:text-white">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="introduction" ref={containerRef} className="relative h-[300vh] bg-luxury-gloss text-luxury-beige">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {aboutGroups.map((group, index) => (
          <AboutGroup
            key={group.id}
            group={group}
            progress={smoothProgress}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
