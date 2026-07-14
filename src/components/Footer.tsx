import React from 'react';
import { ArrowUp, Phone, Facebook, Mail, HelpCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-brand-gold/10 relative overflow-hidden">
      
      {/* Decorative Gold overlay */}
      <div className="absolute left-1/2 bottom-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800/60">
          
          {/* Column 1: Brand details (span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToTop();
              }}
              className="flex items-center space-x-3 group"
              id="footer-logo-link"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-gold/30 group-hover:border-brand-gold transition-colors duration-300">
                <img
                  src="https://i.ibb.co/cKP3MyQq/511150186-1303633345100201-5722910057638806314-n.jpg"
                  alt="Centrum Szkoleniowe Kuźnia Talentów Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-sans font-bold text-lg tracking-tight leading-tight group-hover:text-brand-gold transition-colors duration-300">
                  Kuźnia Talentów
                </span>
                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-semibold font-mono">
                  Centrum Szkoleniowe
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-sm font-sans font-light leading-relaxed max-w-sm">
              Organizujemy profesjonalne szkolenia oraz warsztaty rozwijające kluczowe kompetencje zawodowe i społeczne. Stawiamy na praktyczną wiedzę, innowacyjne metody i najwyższy standard prowadzenia zajęć.
            </p>

            {/* Slogan mandated by user */}
            <div className="border-l-2 border-brand-gold pl-4 py-2 bg-brand-gold/5 rounded-r-sm">
              <p className="text-brand-gold font-sans font-semibold text-xs leading-relaxed uppercase tracking-wider">
                Centrum Szkoleniowe Kuźnia Talentów – miejsce, w którym wiedza spotyka praktykę.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation links (span 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-gold font-mono">
              Szybka Nawigacja
            </h4>
            <ul className="space-y-3 text-sm font-sans text-gray-400">
              {[
                { name: 'O nas', href: '#o-nas' },
                { name: 'Nasza oferta', href: '#oferta' },
                { name: 'Realizowany projekt', href: '#projekt' },
                { name: 'Dlaczego my', href: '#dlaczego' },
                { name: 'Aktualności', href: '#aktualnosci' },
                { name: 'Kontakt', href: '#kontakt' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact quick detail (span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-sans font-extrabold text-xs uppercase tracking-widest text-brand-gold font-mono">
              Informacje Kontaktowe
            </h4>
            <div className="space-y-4 text-sm font-sans text-gray-400">
              <a
                href="tel:667253257"
                className="flex items-center space-x-3 hover:text-brand-gold transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="font-mono font-semibold">667 253 257</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100063606430926"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-brand-gold transition-colors"
              >
                <Facebook className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Znajdź nas na Facebooku</span>
              </a>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Centrum Szkoleniowe Kuźnia Talentów<br />
                  Województwo Podkarpackie, Polska
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-mono">
          <div>
            <p>© {new Date().getFullYear()} Centrum Szkoleniowe Kuźnia Talentów. Wszelkie prawa zastrzeżone.</p>
            <p className="mt-1 text-[10px] text-gray-600">Projekt współfinansowany ze środków Europejskiego Funduszu Społecznego Plus.</p>
          </div>

          {/* Scroll to Top Circle button */}
          <button
            onClick={handleScrollToTop}
            className="bg-[#120713] hover:bg-brand-gold text-brand-gold hover:text-brand-dark p-3 rounded-full border border-brand-gold/25 hover:border-brand-gold transition-all duration-300 shadow-md hover:-translate-y-1"
            aria-label="Do góry"
            id="footer-scroll-to-top-btn"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
