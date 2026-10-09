import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, ArrowUp, Globe, Briefcase } from 'lucide-react';

export default function Footer({ onOpenVisitModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C1829] border-t border-sand-300 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-br from-gold-300 via-gold-500 to-amber-700 flex items-center justify-center shadow-sm">
                <div className="w-full h-full bg-[#0C1829] rounded-full flex items-center justify-center">
                  <span className="font-cinzel text-sm font-bold text-[#F5E6BE]">SS</span>
                </div>
              </div>
              <div>
                <span className="font-cinzel text-base font-bold text-white tracking-wider block">
                  SRI SAHASRA
                </span>
                <span className="text-[9px] tracking-[0.25em] text-gold-400 uppercase font-semibold">
                  DEVELOPERS • KAKINADA
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Premier real estate development and open plot ventures in Kakinada. Led by <strong>Mr. Durgareddy Parisina</strong> (Member of BNI Amigos, East Godavari).
            </p>

            <div className="flex flex-col gap-1.5 pt-1 text-xs">
              <div className="flex items-center gap-2 text-gold-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>AP RERA &amp; DTCP Certified Layouts</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Briefcase className="w-4 h-4 text-gold-400" />
                <span>BNI East Godavari Region Member</span>
              </div>
            </div>
          </div>

          {/* Ventures Col */}
          <div>
            <h4 className="font-sans text-xs font-bold text-white tracking-widest uppercase mb-4">
              Key Offerings
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#ventures" className="hover:text-gold-300 transition-colors">Residential Open Plots (Sarpavaram)</a></li>
              <li><a href="#ventures" className="hover:text-gold-300 transition-colors">Luxury Villa Plots (Ramanayyapeta)</a></li>
              <li><a href="#ventures" className="hover:text-gold-300 transition-colors">Commercial Highway Bits (Kakinada Corridor)</a></li>
              <li><a href="#masterplan" className="hover:text-gold-300 transition-colors">Interactive Plot Masterplan &amp; X-Ray</a></li>
              <li><a href="#calculator" className="hover:text-gold-300 transition-colors">Smart EMI &amp; 5-Year ROI Calculator</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-bold text-white tracking-widest uppercase mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#why-us" className="hover:text-gold-300 transition-colors">Why Invest With Sri Sahasra</a></li>
              <li><a href="#amenities" className="hover:text-gold-300 transition-colors">Gated Layout Infrastructure</a></li>
              <li><a href="#reviews" className="hover:text-gold-300 transition-colors">5.0 Star Rated Client Testimonials</a></li>
              <li><a href="#location" className="hover:text-gold-300 transition-colors">Office Location &amp; Directions</a></li>
              <li>
                <a href="http://www.srisahasradevelopers.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-gold-400" />
                  <span>www.srisahasradevelopers.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div>
            <h4 className="font-sans text-xs font-bold text-white tracking-widest uppercase mb-4">
              Office &amp; Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>3rd Floor, BVR Complex, Sarpavaram Jct, Lalitha Nagar, Ramanayyapeta, Kakinada - 533005</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+919848868150" className="text-gold-300 font-bold hover:text-white text-sm">
                  +91 98488 68150
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-emerald-400 font-medium">Open 24 Hours (Monday to Sunday)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Sri Sahasra Developers. All Rights Reserved. Managing Partner: Mr. Durgareddy Parisina.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenVisitModal}
              className="text-gold-300 hover:text-white transition-colors font-bold"
            >
              Schedule Site Visit
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-gold-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
