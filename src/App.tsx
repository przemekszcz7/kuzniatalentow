import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSE_OFFERS } from './data';
import { CourseOffer, Booking, ContactMessage } from './types';

// Importing extracted modular components
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OfferSection from './components/OfferSection';
import ProjectSection from './components/ProjectSection';
import WhyUsSection from './components/WhyUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Icons for interactive overlays
import { X, Calendar, CheckCircle, Bell, ArrowRight, MessageSquare, Phone } from 'lucide-react';

export default function App() {
  // Global modal state (for nav-bar or hero CTA)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState<CourseOffer | null>(null);

  // In-memory data states for submitted requests
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  // Toast / Notification states
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  // Quick booking form states
  const [quickName, setQuickName] = useState('');
  const [quickEmail, setQuickEmail] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickCourseId, setQuickCourseId] = useState(COURSE_OFFERS[0].id);
  const [quickNotes, setQuickNotes] = useState('');
  const [quickSuccess, setQuickSuccess] = useState<string | null>(null);
  const [quickIsSubmitting, setQuickIsSubmitting] = useState(false);
  const [quickErrors, setQuickErrors] = useState<Record<string, string>>({});

  // Trigger temporary toast notifications
  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Form submission receivers
  const handleNewBooking = (booking: Booking) => {
    setBookings((prev) => [booking, ...prev]);
    showToast(`Zgłoszenie na szkolenie "${booking.courseTitle}" zostało pomyślnie zarejestrowane.`);
  };

  const handleNewMessage = (msg: ContactMessage) => {
    setMessages((prev) => [msg, ...prev]);
    showToast(`Wiadomość "${msg.subject}" została pomyślnie wysłana.`);
  };

  // Quick Enrollment validation and submit
  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errorsMap: Record<string, string> = {};
    if (!quickName.trim()) errorsMap.name = 'Imię i nazwisko jest wymagane';
    if (!quickEmail.trim()) {
      errorsMap.email = 'E-mail jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(quickEmail)) {
      errorsMap.email = 'Nieprawidłowy e-mail';
    }
    if (!quickPhone.trim()) {
      errorsMap.phone = 'Telefon jest wymagany';
    } else if (!/^[0-9\s+-]{9,15}$/.test(quickPhone.replace(/\s/g, ''))) {
      errorsMap.phone = 'Nieprawidłowy telefon';
    }

    if (Object.keys(errorsMap).length > 0) {
      setQuickErrors(errorsMap);
      return;
    }

    setQuickIsSubmitting(true);
    setTimeout(() => {
      const matchedCourse = COURSE_OFFERS.find(c => c.id === quickCourseId);
      const bookingId = 'REG-' + Math.floor(Math.random() * 90000 + 10000);
      const newBooking: Booking = {
        id: bookingId,
        fullName: quickName,
        email: quickEmail,
        phone: quickPhone,
        courseId: quickCourseId,
        courseTitle: matchedCourse?.title || 'Wybrane Szkolenie',
        message: quickNotes,
        timestamp: new Date().toLocaleTimeString(),
        status: 'Oczekujący'
      };

      setBookings((prev) => [newBooking, ...prev]);
      setQuickSuccess(bookingId);
      setQuickIsSubmitting(false);

      // Reset
      setQuickName('');
      setQuickEmail('');
      setQuickPhone('');
      setQuickNotes('');
      setQuickErrors({});

      showToast(`Zgłoszenie na "${newBooking.courseTitle}" wysłane pomyślnie.`);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-brand-dark flex flex-col font-sans selection:bg-brand-gold selection:text-brand-dark overflow-x-hidden">
      
      {/* Sticky Header */}
      <Header onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Main Sections Wrapper */}
      <main className="flex-1">
        
        {/* Hero Banner */}
        <Hero onOpenBookingModal={() => setIsBookingModalOpen(true)} />

        {/* About Us (O nas) */}
        <AboutUs />

        {/* Offers Grid with details overlay modals */}
        <OfferSection onSelectCourseForBooking={(course) => {
          setPreselectedCourse(course);
          setQuickCourseId(course.id);
          setIsBookingModalOpen(true);
        }} />

        {/* Highlighted European Union co-funded Project section */}
        <ProjectSection />

        {/* Advantages (Dlaczego my) */}
        <WhyUsSection />

        {/* Contact info, Hours, and forms */}
        <ContactSection />
      </main>

      {/* Footer and top action anchor */}
      <Footer />

      {/* FLOATING ACTION UTILITY: Call & Contact indicator */}
      <div className="fixed bottom-6 left-6 z-30 hidden sm:flex items-center space-x-3 bg-brand-dark/95 border border-brand-gold/20 text-white py-2 px-4 rounded-full shadow-2xl backdrop-blur-md">
        <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping shrink-0" />
        <span className="text-xs text-gray-300 font-mono">Działamy stacjonarnie i online</span>
      </div>

      {/* TOAST SYSTEM */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-brand-dark border border-brand-gold/30 p-4 rounded-sm shadow-2xl flex items-start space-x-3 max-w-sm"
            id="toast-notification"
          >
            <div className="w-8 h-8 bg-brand-gold/15 rounded-full flex items-center justify-center shrink-0 border border-brand-gold/25 mt-0.5">
              <Bell className="w-4 h-4 text-brand-gold" />
            </div>
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold">Powiadomienie</p>
              <p className="text-xs text-gray-300 leading-relaxed font-sans font-light mt-1">
                {toast.message}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUICK ENROLLMENT MODAL OVERLAY */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm"
            onClick={() => {
              setIsBookingModalOpen(false);
              setQuickSuccess(null);
            }}
            id="quick-booking-modal-backdrop"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white text-brand-dark w-full max-w-md rounded-sm shadow-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
              id="quick-booking-modal-content"
            >
              {/* Close button */}
              <button
                onClick={() => {
                  setIsBookingModalOpen(false);
                  setQuickSuccess(null);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                aria-label="Zamknij"
                id="quick-booking-close-btn"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Title */}
              <div className="bg-brand-dark p-6 text-white text-center relative">
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg uppercase tracking-widest font-mono text-brand-gold font-bold mb-1">
                  Szybki zapis
                </h3>
                <p className="text-xs text-gray-400 font-sans">
                  Wypełnij zgłoszenie i zarezerwuj miejsce na szkoleniu.
                </p>
              </div>

              {/* Scrollable Container */}
              <div className="p-6 overflow-y-auto max-h-[80vh]">
                <AnimatePresence mode="wait">
                  {quickSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-4 flex flex-col items-center"
                      id="quick-success-display"
                    >
                      <div className="w-12 h-12 bg-green-50 border border-green-200 text-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-sans font-bold text-lg text-brand-dark">Zgłoszenie zarejestrowane!</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-light">
                          Kod zgłoszenia: <strong className="font-mono text-brand-gold font-semibold">{quickSuccess}</strong>. Nasz trener oddzwoni do Ciebie wkrótce!
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setIsBookingModalOpen(false);
                          setQuickSuccess(null);
                        }}
                        className="bg-brand-dark hover:bg-brand-gold text-white hover:text-brand-dark px-6 py-2 rounded-sm text-xs uppercase tracking-widest font-bold transition-all"
                      >
                        Zamknij formularz
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleQuickSubmit} className="space-y-4" id="quick-booking-form">
                      
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold">
                          Imię i Nazwisko *
                        </label>
                        <input
                          type="text"
                          value={quickName}
                          onChange={(e) => setQuickName(e.target.value)}
                          placeholder="np. Jan Kowalski"
                          className={`w-full bg-gray-50 border ${
                            quickErrors.name ? 'border-red-500' : 'border-gray-200 focus:border-brand-gold'
                          } px-3 py-2 rounded-sm text-sm focus:outline-none transition-colors text-brand-dark`}
                          disabled={quickIsSubmitting}
                          id="quick-input-name"
                        />
                        {quickErrors.name && <p className="text-red-500 text-[11px] font-medium">{quickErrors.name}</p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold">
                          Adres E-mail *
                        </label>
                        <input
                          type="email"
                          value={quickEmail}
                          onChange={(e) => setQuickEmail(e.target.value)}
                          placeholder="np. jan.kowalski@poczta.pl"
                          className={`w-full bg-gray-50 border ${
                            quickErrors.email ? 'border-red-500' : 'border-gray-200 focus:border-brand-gold'
                          } px-3 py-2 rounded-sm text-sm focus:outline-none transition-colors text-brand-dark`}
                          disabled={quickIsSubmitting}
                          id="quick-input-email"
                        />
                        {quickErrors.email && <p className="text-red-500 text-[11px] font-medium">{quickErrors.email}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold">
                          Numer Telefonu *
                        </label>
                        <input
                          type="tel"
                          value={quickPhone}
                          onChange={(e) => setQuickPhone(e.target.value)}
                          placeholder="np. 667 253 257"
                          className={`w-full bg-gray-50 border ${
                            quickErrors.phone ? 'border-red-500' : 'border-gray-200 focus:border-brand-gold'
                          } px-3 py-2 rounded-sm text-sm focus:outline-none transition-colors text-brand-dark`}
                          disabled={quickIsSubmitting}
                          id="quick-input-phone"
                        />
                        {quickErrors.phone && <p className="text-red-500 text-[11px] font-medium">{quickErrors.phone}</p>}
                      </div>

                      {/* Course Selection */}
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold">
                          Szkolenie *
                        </label>
                        <select
                          value={quickCourseId}
                          onChange={(e) => setQuickCourseId(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-brand-gold px-3 py-2 rounded-sm text-sm focus:outline-none transition-colors text-brand-dark cursor-pointer font-sans"
                          disabled={quickIsSubmitting}
                          id="quick-select-course"
                        >
                          {COURSE_OFFERS.map(c => (
                            <option key={c.id} value={c.id}>{c.title}</option>
                          ))}
                        </select>
                      </div>

                      {/* Notes */}
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 font-bold">
                          Dodatkowe uwagi (opcjonalnie)
                        </label>
                        <textarea
                          rows={3}
                          value={quickNotes}
                          onChange={(e) => setQuickNotes(e.target.value)}
                          placeholder="np. Preferowane daty, miasto..."
                          className="w-full bg-gray-50 border border-gray-200 focus:border-brand-gold px-3 py-2 rounded-sm text-sm focus:outline-none transition-colors text-brand-dark"
                          disabled={quickIsSubmitting}
                          id="quick-input-notes"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full bg-brand-dark hover:bg-brand-gold text-white hover:text-brand-dark py-3.5 rounded-sm text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer mt-4"
                        disabled={quickIsSubmitting}
                        id="quick-submit-btn"
                      >
                        {quickIsSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Zapisywanie...</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4" />
                            <span>Wyślij zgłoszenie</span>
                          </>
                        )}
                      </button>

                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
