/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Amenities } from './components/Amenities';
import { ThreeDView } from './components/ThreeDView';
import { Projects } from './components/Projects';
import { Architecture } from './components/Architecture';
import { Villas } from './components/Villas';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative">
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Hero />
      <About />
      <Amenities />
      <Villas />
      <ThreeDView />
      <Projects />
      <Architecture />
      <Footer />
    </main>
  );
}
