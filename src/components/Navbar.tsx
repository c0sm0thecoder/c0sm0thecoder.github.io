'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Services', 'Projects', 'Contact'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            {/* You can add your logo or name here */}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <div 
            className={`hamburger-menu ${isMobileMenuOpen ? 'menu-open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : 'closed'}`}>
        <nav className="mobile-nav-links">
          {navItems.map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-white transition-colors py-3"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.nav>
  );
}