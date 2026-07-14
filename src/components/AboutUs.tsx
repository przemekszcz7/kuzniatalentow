import React from 'react';

export default function AboutUs() {
  return (
    <section id="o-nas" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative subtle background path */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-gold-light/20 rounded-full blur-3xl -z-1" />
      <div className="absolute left-10 bottom-10 w-72 h-72 bg-gray-50 rounded-full blur-2xl -z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-brand-gold font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
              Kim jesteśmy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-brand-dark tracking-tight leading-tight">
              Kujemy talenty,<br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-brand-gold">
                otwieramy możliwości
              </span>
            </h2>
            <div className="h-1 w-20 bg-brand-gold mt-6 mb-8" />
            
            <p className="text-gray-500 font-sans leading-relaxed text-sm uppercase tracking-widest mb-6 font-semibold">
              Centrum Szkoleniowe Kuźnia Talentów
            </p>
            
            {/* Elegant Brand Quote Box */}
            <div className="bg-brand-dark text-white p-6 rounded-sm border-l-4 border-brand-gold relative shadow-xl">
              <p className="font-sans italic text-sm text-gray-300 leading-relaxed">
                "Naszą misją jest przekazywanie praktycznej wiedzy, nowoczesnych metod pracy oraz narzędzi wspierających ciągły rozwój naszych uczestników."
              </p>
              <span className="block text-brand-gold font-mono text-xs mt-3 text-right uppercase tracking-wider font-semibold">
                — Kuźnia Talentów
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed font-sans font-light">
              <p>
                Centrum Szkoleniowe <strong className="font-semibold text-brand-dark">Kuźnia Talentów</strong> organizuje profesjonalne szkolenia oraz warsztaty rozwijające kompetencje zawodowe i społeczne.
              </p>
              <p>
                Naszą misją jest dostarczanie sprawdzonych rozwiązań szkoleniowych dla edukacji, placówek oświatowych, instytucji publicznych oraz wszystkich osób, które pragną świadomie budować swoje kompetencje i poszerzać horyzonty.
              </p>
              <p>
                Wierzymy, że kluczem do efektywnej edukacji jest synergia teorii z dynamiczną praktyką. Dlatego stawiamy na interaktywne formy warsztatowe, inspirację i rozwój umiejętności, które mają <strong className="font-semibold text-brand-dark">realne, namacalne zastosowanie</strong> w codziennych wyzwaniach zawodowych i osobistych.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
