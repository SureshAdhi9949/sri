import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenVisitModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ventures', href: '#ventures' },
    { name: 'Plot Layout', href: '#masterplan' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-sand-300 shadow-sm py-3'
          : 'bg-[#FBF9F5]/80 backdrop-blur-sm py-4 sm:py-5 border-b border-sand-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[1.5px] bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0C1829] rounded-full flex items-center justify-center border border-gold-400/40">
                <span className="font-cinzel text-sm sm:text-base font-bold text-[#F5E6BE]">SS</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-navy-900 group-hover:text-gold-600 transition-colors">
                SRI SAHASRA
              </span>
              <span className="text-[9px] tracking-[0.26em] text-gold-700 uppercase font-semibold">
                Developers • Kakinada
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-gold-600 transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919848868150"
              className="flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-gold-700 px-3.5 py-2 rounded-full border border-sand-400 bg-white hover:border-gold-500 transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-gold-600" />
              <span>+91 98488 68150</span>
            </a>

            <button
              onClick={onOpenVisitModal}
              className="relative group overflow-hidden px-4.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-gold-600 transition-all duration-300 shadow-sm hover:shadow-gold-pill"
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold-300" />
                <span>Book Site Visit</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenVisitModal}
              className="sm:hidden text-xs font-bold px-3 py-1.5 rounded-full bg-navy-900 text-white uppercase tracking-wider"
            >
              Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:text-gold-600 hover:bg-sand-200 transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-sand-300 px-5 pt-4 pb-6 mt-3 space-y-4 shadow-xl animate-fade-in">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-sand-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-gold-600 py-2.5 px-3 rounded-lg hover:bg-sand-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col gap-2.5 pt-1">
            <a
              href="tel:+919848868150"
              className="flex items-center justify-center gap-2 text-xs font-bold text-navy-900 py-3 rounded-xl border border-sand-400 bg-white"
            >
              <Phone className="w-4 h-4 text-gold-600" />
              <span>Call +91 98488 68150</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisitModal();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white py-3 rounded-xl bg-navy-900"
            >
              <Calendar className="w-4 h-4 text-gold-300" />
              <span>Schedule Free Site Visit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
