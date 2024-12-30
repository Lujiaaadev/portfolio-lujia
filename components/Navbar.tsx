'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
          
          // Update active section based on scroll position
          const sections = ['home', 'about', 'services', 'projects', 'contact'];
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          if (current) setActiveSection(current);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 border-b
        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${
        scrolled 
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg shadow-black/20 border-transparent' 
          : 'bg-transparent border-gray-800/30'
      }`}
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
           <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative z-10 flex items-center space-x-3"
        >
          <Image 
            src="/images/Lujia-logo-NoBG.svg" 
            alt="Lujia Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl md:text-2xl font-bold italic bg-gradient-to-r from-cyan-400 to-yellow-500 via-pink-500 bg-clip-text text-transparent">
          Lujia
        </span>
        </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm lg:text-base transition-all duration-300 hover:text-white group ${
                  activeSection === item.href.replace('#', '') 
                    ? 'text-white' 
                    : 'text-gray-400'
                }`}
              >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 
                bg-gradient-to-r from-blue-500 to-yellow-500 via-pink-500 
                [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
                transform transition-transform duration-300 ${
                  activeSection === item.href.replace('#', '')
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
              }`} />
              </Link>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </div>
          </motion.button>


          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-lg shadow-lg md:hidden"
              >
                <div className="p-5 pt-20">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 text-lg transition-colors ${
                          activeSection === item.href.replace('#', '')
                            ? 'text-white'
                            : 'text-gray-400'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>


        </div>
      </div>
    </motion.nav>
  );
}