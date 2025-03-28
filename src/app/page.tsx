'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

// Dynamically import Three.js components to avoid SSR issues
const Background = dynamic(() => import('@/components/three/Background'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Suspense fallback={<Loading />}>
        <Background />
      </Suspense>
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}