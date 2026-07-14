import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight, MessageSquare } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export default function Hero({ onOpenBookingModal }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out scale-105"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: 0.35
        }}
      >
        <img
          src="https://i.ibb.co/jkPCRw0v/510803809-1303635485099987-6053751125620520743-n.jpg"
          alt="Centrum Szkoleniowe Kuźnia Talentów"
          className="w-full h-full object-cover object-center filter grayscale brightness-75 contrast-125"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Luxury Radial & Linear Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/70 to-brand-dark z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,177,109,0.08)_0%,transparent_70%)] z-1" />

      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent hidden md:block" />
      <div className="absolute bottom-1/4 right-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent hidden md:block" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Accent Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-brand-gold/10 border border-brand-gold/25 px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold font-mono">
            Edukacja · Inspiracja · Kompetencje
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-white tracking-tight leading-tight max-w-4xl"
          id="hero-headline"
        >
          Rozwijamy kompetencje.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold">
            Inspirujemy.
          </span>{' '}
          Wspieramy rozwój.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-gray-300 font-sans font-light max-w-3xl leading-relaxed"
          id="hero-subtitle"
        >
          Nowoczesne szkolenia i warsztaty dla edukacji, instytucji oraz osób rozwijających swoje kompetencje zawodowe i społeczne.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollTo('#oferta')}
            className="group w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-dark text-brand-dark px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-bold transition-all duration-300 shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            id="hero-cta-offers"
          >
            <span>Zobacz szkolenia</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button
            onClick={() => handleScrollTo('#kontakt')}
            className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white hover:text-brand-gold border border-white/20 hover:border-brand-gold/50 px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center space-x-2"
            id="hero-cta-contact"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Skontaktuj się</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Bottom Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={() => handleScrollTo('#o-nas')}
        id="hero-scroll-indicator"
      >
        <span className="text-gray-400 text-xs tracking-widest uppercase mb-2 font-mono">Przewiń</span>
        <ChevronDown className="w-5 h-5 text-brand-gold animate-bounce" />
      </motion.div>
    </section>
  );
}
