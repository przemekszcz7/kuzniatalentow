import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSE_OFFERS } from '../data';
import { CourseOffer } from '../types';
import IconLoader from './IconLoader';
import { X, Clock, Users, CheckCircle, ArrowRight, Calendar } from 'lucide-react';

interface OfferSectionProps {
  onSelectCourseForBooking: (course: CourseOffer) => void;
}

export default function OfferSection({ onSelectCourseForBooking }: OfferSectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseOffer | null>(null);

  const openDetails = (course: CourseOffer) => {
    setSelectedCourse(course);
  };

  const closeDetails = () => {
    setSelectedCourse(null);
  };

  return (
    <section id="oferta" className="py-24 sm:py-32 bg-gray-50 relative">
      {/* Decorative Background Accents */}
      <div className="absolute left-0 top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-brand-gold-light/10 rounded-full blur-3xl -z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-brand-gold font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
            Nasze specjalizacje
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-brand-dark tracking-tight">
            Profesjonalna Oferta Szkoleniowa
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto mt-6 mb-6" />
          <p className="text-gray-500 font-sans font-light text-base sm:text-lg leading-relaxed">
            Wybierz ścieżkę rozwoju dopasowaną do Twoich potrzeb. Każdy z poniższych obszarów prowadzony jest przez wykwalifikowanych trenerów-praktyków.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSE_OFFERS.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 hover:border-brand-gold/30 p-8 rounded-sm hover:shadow-xl hover:shadow-brand-gold/5 transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden"
              id={`offer-card-${course.id}`}
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-brand-gold group-hover:w-full transition-all duration-300" />

              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 bg-brand-gold-light/45 rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-dark transition-colors duration-300">
                  <IconLoader
                    name={course.iconName}
                    className="text-brand-dark group-hover:text-brand-gold transition-colors duration-300"
                    size={28}
                  />
                </div>

                <h3 className="font-sans font-bold text-xl text-brand-dark mb-4 group-hover:text-brand-gold transition-colors duration-200">
                  {course.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                  {course.shortDescription}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => openDetails(course)}
                className="inline-flex items-center space-x-2 text-brand-gold hover:text-brand-gold-dark text-xs uppercase tracking-widest font-bold self-start mt-4 transition-colors group-hover:translate-x-1 duration-200"
                id={`offer-card-details-btn-${course.id}`}
              >
                <span>Szczegóły szkolenia</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Offer Detail Overlay Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm"
            onClick={closeDetails}
            id="offer-modal-backdrop"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white text-brand-dark w-full max-w-3xl rounded-sm shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
              id={`offer-modal-content-${selectedCourse.id}`}
            >
              {/* Close Button */}
              <button
                onClick={closeDetails}
                className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                aria-label="Zamknij"
                id="offer-modal-close-btn"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="bg-brand-dark p-8 sm:p-10 text-white relative">
                {/* Accent Background light */}
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center space-x-3 mb-3 text-brand-gold font-mono text-[10px] uppercase tracking-widest font-semibold">
                  <IconLoader name={selectedCourse.iconName} className="w-4 h-4" />
                  <span>Oferta Szkoleniowa</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
                  {selectedCourse.title}
                </h3>
              </div>

              {/* Scrollable details container */}
              <div className="p-8 sm:p-10 overflow-y-auto space-y-8 flex-1">
                {/* Meta Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-10 h-10 bg-brand-gold-light/40 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-gray-400 tracking-wider font-mono">Dla kogo</span>
                      <span className="text-sm font-semibold">{selectedCourse.targetGroup}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-700">
                    <div className="w-10 h-10 bg-brand-gold-light/40 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-gray-400 tracking-wider font-mono">Czas trwania</span>
                      <span className="text-sm font-semibold">{selectedCourse.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-3">
                    O szkoleniu
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans font-light">
                    {selectedCourse.fullDescription}
                  </p>
                </div>

                {/* Key Benefits */}
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-4">
                    Główne korzyści i rezultaty
                  </h4>
                  <ul className="space-y-3">
                    {selectedCourse.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-700 text-sm">
                        <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                        <span className="font-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer (Action Panel) */}
              <div className="bg-gray-50 px-8 py-6 sm:px-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-400 font-mono">
                  Szkolenia dopasowujemy również do grup zamkniętych.
                </span>
                <button
                  onClick={() => {
                    onSelectCourseForBooking(selectedCourse);
                    closeDetails();
                  }}
                  className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-dark text-brand-dark px-6 py-3 rounded-sm text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center space-x-2"
                  id="offer-modal-enroll-btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Zgłoś chęć udziału</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
