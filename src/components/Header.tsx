import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Phone, Menu, X, Facebook } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal: () => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Projekt', href: '#projekt' },
    { name: 'Dlaczego my', href: '#dlaczego' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const isMobile = window.innerWidth < 1024; // lg breakpoint in tailwind is 1024px

    if (href === '#') {
      setIsMobileMenuOpen(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    if (isMobile) {
      // Close the mobile menu first so its collapse doesn't disrupt/cancel the smooth scroll
      setIsMobileMenuOpen(false);

      // Perform the scroll after the menu closing transition has completed (approx 300ms)
      setTimeout(() => {
        try {
          const element = document.querySelector(href);
          if (element) {
            const offset = 80; // height of the header
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        } catch (err) {
          console.error('Error finding element to scroll to:', err);
        }
      }, 320);
    } else {
      // Desktop: scroll immediately
      try {
        const element = document.querySelector(href);
        if (element) {
          const offset = 80; // height of the header
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } catch (err) {
        console.error('Error finding element to scroll to:', err);
      }
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-50 origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/10 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, '#')}
              className="flex items-center space-x-3 group"
              id="header-logo-link"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300">
                <img
                  src="https://i.ibb.co/cKP3MyQq/511150186-1303633345100201-5722910057638806314-n.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-sans font-bold text-base sm:text-lg tracking-tight leading-tight group-hover:text-brand-gold transition-colors duration-300">
                  Kuźnia Talentów
                </span>
                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-medium font-mono">
                  Centrum Szkoleniowe
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-gray-300 hover:text-brand-gold transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
                  id={`nav-link-${link.href.substring(1)}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA and Call Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="tel:667253257"
                className="flex items-center space-x-2 text-brand-gold hover:text-white transition-colors duration-200 text-sm font-semibold font-mono"
                id="header-call-btn"
              >
                <Phone className="w-4 h-4" />
                <span>667 253 257</span>
              </a>
              <button
                onClick={onOpenBookingModal}
                className="bg-brand-gold hover:bg-brand-gold-dark text-brand-dark px-4 py-2 rounded-sm text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm shadow-brand-gold/20 hover:shadow-brand-gold/40 hover:-translate-y-0.5"
                id="header-enroll-btn"
              >
                Zapisz się
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <a
                href="tel:667253257"
                className="sm:hidden text-brand-gold p-2"
                aria-label="Zadzwoń"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-brand-gold focus:outline-none p-1"
                aria-label="Otwórz menu"
                id="header-mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-brand-dark/98 backdrop-blur-lg border-b border-brand-gold/10 overflow-hidden"
        >
          <div className="px-4 pt-3 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-gray-300 hover:text-brand-gold transition-colors duration-200 py-2 text-base font-medium uppercase tracking-wider border-b border-gray-800/50"
                id={`mobile-nav-link-${link.href.substring(1)}`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="tel:667253257"
                className="flex items-center justify-center space-x-2 text-brand-gold border border-brand-gold/30 hover:border-brand-gold py-2.5 rounded-sm text-sm font-semibold font-mono"
              >
                <Phone className="w-4 h-4" />
                <span>667 253 257</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063606430926"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-blue-400 border border-blue-500/20 bg-blue-500/5 py-2.5 rounded-sm text-sm font-semibold"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Facebook</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-dark py-3 rounded-sm text-xs uppercase tracking-widest font-bold transition-all"
              >
                Zapisz się na szkolenie
              </button>
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}
