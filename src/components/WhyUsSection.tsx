import React from 'react';
import { motion } from 'motion/react';
import { WHY_US_ITEMS } from '../data';
import IconLoader from './IconLoader';

export default function WhyUsSection() {
  return (
    <section id="dlaczego" className="py-24 sm:py-32 bg-brand-dark text-white relative overflow-hidden">
      
      {/* Luxury Background overlays */}
      <div className="absolute left-1/3 top-1/3 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Thin Gold Separators */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-brand-gold font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
            Nasze atuty
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
            Dlaczego warto wybrać Kuźnię Talentów?
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-6 mb-6" />
          <p className="text-gray-400 font-sans font-light text-sm sm:text-base leading-relaxed">
            Stworzyliśmy przestrzeń, w której teoria spotyka się z pełną praktyką. Zobacz, co wyróżnia naszą ofertę edukacyjną.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_ITEMS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#0f0710] border border-gray-800/40 hover:border-brand-gold/35 p-8 rounded-sm hover:-translate-y-1 transition-all duration-300 flex flex-col items-start relative group"
              id={`why-us-card-${benefit.id}`}
            >
              {/* Dynamic light spot on hover */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-gold/10 rounded-full blur-xl group-hover:bg-brand-gold/20 transition-all duration-500 pointer-events-none" />

              {/* Icon Circle */}
              <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 group-hover:border-brand-gold rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-all duration-300">
                <IconLoader
                  name={benefit.iconName}
                  className="text-brand-gold group-hover:text-brand-dark transition-colors duration-300"
                  size={22}
                />
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-lg text-white mb-3 tracking-wide">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Stats / Slogan Panel */}
        <div className="mt-16 sm:mt-24 bg-gradient-to-r from-brand-gold/10 via-brand-gold/5 to-brand-gold/10 border border-brand-gold/20 p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="font-sans font-extrabold text-white text-lg tracking-wide uppercase">
              Chcesz zorganizować szkolenie zamknięte?
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm font-light mt-1 max-w-2xl leading-relaxed">
              Dostosujemy program, case studies oraz czas trwania warsztatu pod specyfikę Twojej instytucji lub zespołu. Szkolimy na terenie całego kraju.
            </p>
          </div>
          <a
            href="#kontakt"
            className="bg-brand-gold hover:bg-brand-gold-dark text-brand-dark px-6 py-3.5 rounded-sm text-xs uppercase tracking-widest font-bold shrink-0 transition-all shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/20"
            id="why-us-cta-contact"
          >
            Napisz do nas
          </a>
        </div>

      </div>
    </section>
  );
}
