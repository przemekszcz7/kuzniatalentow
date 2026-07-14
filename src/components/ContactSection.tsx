import React from 'react';
import { WORKING_HOURS } from '../data';
import { Phone, Facebook, Clock, Info } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      
      {/* Decorative Blur Background spot */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-brand-gold-light/20 rounded-full blur-3xl -z-1" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl -z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-brand-gold font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
            Skontaktuj się
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-brand-dark tracking-tight leading-none">
            Zróbmy krok naprzód
          </h2>
          <div className="h-1 w-20 bg-brand-gold mt-6 mb-6" />
          <p className="text-gray-500 font-sans font-light text-base sm:text-lg max-w-2xl leading-relaxed">
            Napisz do nas na Facebooku, zadzwoń bezpośrednio lub skorzystaj z formularza szybkiego zapisu w nagłówku. Chętnie odpowiemy na wszelkie pytania i doradzimy najlepsze rozwiązanie.
          </p>
        </div>

        {/* Contact Layout Grid - Two Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Contact Cards & Info Tag */}
          <div className="space-y-6">
            {/* Phone Card */}
            <a
              href="tel:667253257"
              className="bg-brand-dark hover:bg-brand-dark/95 text-white border border-brand-gold/15 p-6 rounded-sm flex items-center space-x-4 transition-all duration-300 hover:scale-[1.01] shadow-md shadow-brand-dark/5 group block"
              id="contact-phone-card"
            >
              <div className="w-12 h-12 bg-brand-gold/15 rounded-full flex items-center justify-center shrink-0 border border-brand-gold/30 group-hover:bg-brand-gold transition-colors duration-300">
                <Phone className="w-5 h-5 text-brand-gold group-hover:text-brand-dark transition-colors duration-300" />
              </div>
              <div>
                <span className="block text-[10px] uppercase text-gray-400 tracking-wider font-mono">Zadzwoń teraz</span>
                <span className="text-lg font-bold font-mono text-brand-gold group-hover:text-white transition-colors">
                  667 253 257
                </span>
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href="https://www.facebook.com/profile.php?id=100063606430926"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border border-gray-100 p-6 rounded-sm flex items-center space-x-4 transition-all duration-300 hover:scale-[1.01] shadow-sm group block"
              id="contact-facebook-card"
            >
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-full flex items-center justify-center shrink-0 border border-blue-100 transition-colors duration-300">
                <Facebook className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="block text-[10px] uppercase text-gray-400 tracking-wider font-mono">Nasz profil Facebook</span>
                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  facebook.com/kuźniatalentów
                </span>
              </div>
            </a>

            {/* Quality Standard Info Tag */}
            <div className="bg-brand-gold-light/40 border border-brand-gold/20 p-5 rounded-sm flex items-start space-x-3">
              <Info className="w-5 h-5 text-brand-gold-dark shrink-0 mt-0.5" />
              <p className="text-xs text-gray-600 leading-relaxed">
                Nasze szkolenia organizowane są z dbałością o najwyższe standardy merytoryczne. Wszelkie zapytania ofertowe oraz zgłoszenia rozpatrujemy indywidualnie. Gwarantujemy profesjonalne doradztwo certyfikowanych trenerów.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Opening Hours Box */}
          <div className="bg-white border border-gray-100 p-8 rounded-sm shadow-md">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-5 h-5 text-brand-gold" />
              <h3 className="font-sans font-bold text-lg text-brand-dark">
                Godziny Otwarcia
              </h3>
            </div>
            <div className="space-y-3.5">
              {WORKING_HOURS.map((d, idx) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center text-sm pb-2.5 border-b border-gray-100/70 last:border-0 ${
                    d.isClosed ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <span className="font-medium">{d.day}</span>
                  <span className={`font-mono font-semibold ${
                    d.isClosed ? 'text-red-500 bg-red-50 px-2.5 py-0.5 rounded-sm text-xs' : 'text-brand-dark'
                  }`}>
                    {d.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
