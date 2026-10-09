import React from 'react';
import { MapPin, Phone, Clock, Navigation, Building2, Globe } from 'lucide-react';

export default function LocationShowcase({ onOpenVisitModal }) {
  const landmarks = [
    { name: 'Sarpavaram Junction', dist: '1 Min Walk' },
    { name: 'SRMT Mall & Multiplex', dist: '4 Mins Drive' },
    { name: 'JNTU Kakinada Campus', dist: '6 Mins Drive' },
    { name: 'Rangaraya Medical College', dist: '8 Mins Drive' },
    { name: 'Kakinada Town Railway Station', dist: '10 Mins Drive' },
    { name: 'Kakinada Beach & Port Road', dist: '12 Mins Drive' }
  ];

  return (
    <section id="location" className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/40 bg-sand-100 text-[10px] font-bold tracking-[0.25em] text-gold-800 uppercase mb-2">
            <MapPin className="w-3.5 h-3.5 text-gold-600" />
            STRATEGIC PRESENCE
          </div>
          <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            HEADQUARTERS &amp; <span className="text-gold-600 font-semibold italic">LOCAL PRESENCE</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 font-normal">
            Conveniently situated at Sarpavaram Junction for effortless access, personalized plot consultation, and direct site visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left: Office Details */}
          <div className="lg:col-span-6 bg-[#FBF9F5] p-6 sm:p-8 rounded-2xl border border-sand-300 shadow-soft-luxury flex flex-col justify-between space-y-6">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>Open 24 Hours • 7 Days a Week</span>
              </div>

              <h3 className="font-garamond text-2xl sm:text-3xl font-bold text-navy-900 mb-0.5">
                Sri Sahasra Developers
              </h3>
              <p className="text-xs text-gold-700 uppercase tracking-wider font-bold">
                Real Estate Development &amp; Open Plot Ventures
              </p>

              {/* Address Info */}
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <Building2 className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block font-semibold">3rd Floor, BVR Complex (3-18/1A)</strong>
                    <span>Sarpavaram Junction, Lalitha Nagar, Ramanayyapeta</span>
                    <span className="block text-slate-500 text-xs">Kakinada, Andhra Pradesh — 533005</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <Phone className="w-4 h-4 text-gold-700 shrink-0" />
                  <div>
                    <span className="text-slate-500 text-xs block">Official Phone &amp; WhatsApp:</span>
                    <a href="tel:+919848868150" className="text-navy-900 font-bold hover:text-gold-700 transition-colors">
                      +91 98488 68150
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <Globe className="w-4 h-4 text-gold-700 shrink-0" />
                  <div>
                    <span className="text-slate-500 text-xs block">Official Website:</span>
                    <a href="http://www.srisahasradevelopers.com" target="_blank" rel="noopener noreferrer" className="text-navy-900 font-medium hover:underline">
                      www.srisahasradevelopers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <Clock className="w-4 h-4 text-gold-700 shrink-0" />
                  <div>
                    <span className="text-slate-500 text-xs block">Operating Hours:</span>
                    <span className="text-navy-900 font-medium">Monday to Sunday, Open 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Landmarks Connectivity */}
            <div className="pt-4 border-t border-sand-300">
              <h4 className="text-xs font-bold tracking-wider text-navy-900 uppercase font-sans mb-2">
                Key Nearby Distances &amp; Connectivity
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {landmarks.map((l, i) => (
                  <div key={i} className="p-2 rounded-xl bg-white border border-sand-300 flex items-center justify-between text-xs">
                    <span className="text-slate-700 truncate mr-1.5">{l.name}</span>
                    <span className="text-navy-900 font-bold shrink-0">{l.dist}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={onOpenVisitModal}
                className="w-full sm:flex-1 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-gold-600 transition-all shadow-sm"
              >
                Request Free Cab Pickup
              </button>
              <a
                href="https://maps.google.com/?q=Sri+Sahasra+Developers+BVR+Complex+Sarpavaram+Junction+Kakinada"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded-full border border-sand-400 hover:border-navy-900 text-xs font-semibold text-navy-900 bg-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-gold-700" />
                <span>Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right: Map Perspective */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-sand-300 overflow-hidden shadow-soft-luxury relative min-h-[380px] flex flex-col justify-between">
            
            <div className="relative w-full h-full min-h-[360px]">
              <iframe
                title="Sri Sahasra Developers Kakinada Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15252.378906912348!2d82.2355!3d16.9890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38283a00000001%3A0x0!2sSarpavaram%20Junction%2C%20Kakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Landmark Overlay Card */}
              <div className="absolute top-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-sand-300 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-gold-600"></div>
                    <span className="text-xs font-bold text-navy-900 font-sans">SARPAVARAM JUNCTION HUB</span>
                  </div>
                  <span className="text-[10px] text-navy-900 font-bold bg-sand-200 px-2 py-0.5 rounded">
                    Prime Commercial Heart
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  3rd Floor, BVR Complex, Lalitha Nagar Main Entrance, Kakinada.
                </p>
              </div>

              {/* Bottom Quick Direction Bar */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-sand-300 shadow-md flex items-center justify-between text-xs">
                <span className="text-slate-600">Visiting from outside Kakinada?</span>
                <a
                  href="tel:+919848868150"
                  className="text-navy-900 font-bold hover:text-gold-700 flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-600" /> Call for Directions
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
