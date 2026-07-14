import React from 'react';
import { motion } from 'motion/react';
import { Award, FileCheck, Globe, Star } from 'lucide-react';

export default function ProjectSection() {
  return (
    <section id="projekt" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Card with elegant golden gradient background and fine borders */}
        <div className="relative bg-gradient-to-b from-brand-gold-light/60 to-brand-gold-light/20 border border-brand-gold/20 rounded-lg p-8 sm:p-12 md:p-16 shadow-lg shadow-brand-gold/5 overflow-hidden">
          
          {/* Subtle star pattern overlay */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left side text column */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-brand-gold/20 border border-brand-gold/45 text-brand-dark px-3.5 py-1 rounded-sm text-xs uppercase tracking-widest font-bold">
                <Star className="w-3.5 h-3.5 text-brand-gold-dark fill-brand-gold-dark" />
                <span>Projekt Unijny</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-brand-dark tracking-tight leading-tight" id="project-headline">
                Projekt „Wyższa jakość usług w obszarze edukacji”
              </h2>
              
              <div className="h-0.5 w-16 bg-brand-gold" />

              <p className="text-gray-700 text-base sm:text-lg font-sans font-light leading-relaxed">
                Centrum Szkoleniowe <strong className="font-semibold text-brand-dark">Kuźnia Talentów</strong> realizuje kompleksowy cykl szkoleń i doradztwa w ramach innowacyjnego programu podnoszenia standardów nauczania:
              </p>

              <div className="bg-white/80 p-6 rounded-sm border-l-4 border-brand-dark text-brand-dark text-lg sm:text-xl font-sans font-semibold italic tracking-tight">
                „Wyższa jakość usług w obszarze edukacji”
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-gray-600 text-sm font-sans font-light leading-relaxed">
                  Projekt realizowany jest dzięki prestiżowemu wsparciu unijnemu oraz rządowemu w ramach programu:
                </p>
                
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-[10px] text-brand-dark font-extrabold">1</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-brand-dark text-sm sm:text-base">
                      Fundusze Europejskie dla Rozwoju Społecznego 2021–2027 (FERS)
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                    <span className="text-[10px] text-brand-dark font-extrabold">2</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-brand-dark text-sm sm:text-base">
                      Europejski Fundusz Społeczny Plus (EFS+)
                    </h4>
                    <p className="text-gray-500 text-xs mt-1">
                      Współfinansowanie ze środków unijnych ukierunkowane na inkluzywność, innowacyjność i najwyższą efektywność usług edukacyjnych w Polsce.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side graphical badge column */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center space-y-6">
              
              {/* European Flag Visual Styling Badge */}
              <div className="bg-brand-dark border-2 border-brand-gold/30 p-8 rounded-sm w-full max-w-[280px] text-center shadow-2xl relative flex flex-col items-center">
                
                {/* 12 Stars of the EU Circle */}
                <div className="grid grid-cols-4 gap-2 w-14 h-14 items-center justify-center mb-6">
                  {[...Array(12)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 text-brand-gold fill-brand-gold mx-auto animate-pulse" />
                  ))}
                </div>

                <span className="text-[10px] text-gray-400 font-mono block uppercase tracking-widest mb-1">
                  Unia Europejska
                </span>
                <span className="text-white font-sans font-bold text-sm tracking-wide block uppercase leading-snug">
                  Współfinansowane<br />ze środków UE
                </span>
                <div className="h-[1px] w-12 bg-brand-gold/30 my-4" />
                <span className="text-[10px] text-brand-gold font-mono uppercase tracking-wider block">
                  Europejski Fundusz Społeczny Plus
                </span>
              </div>

              {/* National/FERS Badge */}
              <div className="bg-white border border-brand-gold/30 p-6 rounded-sm w-full max-w-[280px] text-center shadow-md flex flex-col items-center">
                <FileCheck className="w-8 h-8 text-brand-gold mb-3" />
                <span className="text-brand-dark font-sans font-bold text-xs uppercase tracking-wider block">
                  Fundusze Europejskie
                </span>
                <span className="text-gray-500 text-[10px] font-mono block mt-1 uppercase">
                  Dla Rozwoju Społecznego
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
