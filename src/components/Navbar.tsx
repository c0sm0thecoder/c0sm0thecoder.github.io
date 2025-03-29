'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Services', 'Projects', 'Contact'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly earlier
      
      const currentSection = sections
        .filter(section => section)
        .find(section => {
          if (!section) return false;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
        });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    
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
    const sectionId = id.toLowerCase();
    const element = document.getElementById(sectionId);
    
    console.log(`Attempting to scroll to section: ${sectionId}`); // Debug info
    
    if (element) {
      // Close the menu before scrolling
      setIsMobileMenuOpen(false);
      
      // Minor delay to ensure menu closing animation doesn't affect scroll
      setTimeout(() => {
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 300);
    } else {
      console.error(`Section with ID ${sectionId} not found`); // Debug info
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
            {/* Logo or name */}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                className={`transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-white" 
                    : "text-gray-300 hover:text-white"
                }`}
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
              className={`transition-colors py-3 ${
                activeSection === item.toLowerCase()
                  ? "text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
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