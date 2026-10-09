import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
      {/* Floating Call Button */}
      <a
        href="tel:+919848868150"
        className="w-11 h-11 rounded-full bg-white text-navy-900 border border-sand-400 flex items-center justify-center shadow-lg hover:bg-navy-900 hover:text-white hover:scale-110 transition-all duration-300 group"
        title="Direct Call"
        aria-label="Direct Call to Sri Sahasra Developers"
      >
        <Phone className="w-4 h-4 text-gold-700 group-hover:text-gold-300" />
      </a>

      {/* Floating WhatsApp Button with Gentle Pulse */}
      <a
        href="https://wa.me/919848868150?text=Hello%20Sri%20Sahasra%20Developers,%20I%20am%20interested%20in%20open%20plots%20in%20Kakinada.%20Please%20share%20venture%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pulse-glow w-13 h-13 p-3 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:bg-emerald-700 hover:scale-110 transition-all duration-300 relative group"
        title="Chat on WhatsApp"
        aria-label="Chat with Sri Sahasra Developers on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
