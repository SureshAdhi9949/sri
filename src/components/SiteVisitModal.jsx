import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, User, Mail, Sparkles, Send, Car, CheckCircle2 } from 'lucide-react';

export default function SiteVisitModal({ isOpen, onClose, initialVenture = null, initialPlot = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    venture: 'Sahasra Grandeur (Sarpavaram)',
    plotSize: '200 Sq. Yards',
    facing: 'East Facing',
    visitDate: '',
    pickupRequired: false,
    pickupLocation: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialVenture) {
      setFormData(prev => ({ ...prev, venture: initialVenture.title }));
    }
    if (initialPlot) {
      setFormData(prev => ({
        ...prev,
        plotSize: `${initialPlot.size} Sq. Yards`,
        facing: initialPlot.facing
      }));
    }
  }, [initialVenture, initialPlot]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare WhatsApp Message
    const msg = `*NEW SITE VISIT INQUIRY — SRI SAHASRA DEVELOPERS*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `📧 *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A` +
      `🏢 *Venture:* ${encodeURIComponent(formData.venture)}%0A` +
      `📐 *Plot Size:* ${encodeURIComponent(formData.plotSize)}%0A` +
      `🧭 *Facing:* ${encodeURIComponent(formData.facing)}%0A` +
      `📅 *Preferred Date:* ${encodeURIComponent(formData.visitDate || 'This Weekend')}%0A` +
      `🚗 *Free Cab Pickup:* ${formData.pickupRequired ? `Yes (${encodeURIComponent(formData.pickupLocation)})` : 'No (Self Drive)'}%0A%0A` +
      `_Submitted via Official Website_`;

    setTimeout(() => {
      window.open(`https://wa.me/919848868150?text=${msg}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white border border-sand-300 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 animate-fade-in text-slate-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-sand-100 hover:bg-sand-200 text-slate-500 hover:text-navy-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/40 bg-sand-100 text-[10px] font-bold tracking-widest text-gold-800 uppercase mb-2">
                <Sparkles className="w-3 h-3 text-gold-600" />
                VIP SITE VISIT &amp; CONSULTATION
              </div>
              <h3 className="font-garamond text-2xl sm:text-3xl font-bold text-navy-900">
                Book Your <span className="text-gold-600 italic">Site Visit</span>
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Experience Sri Sahasra's luxury layouts in person. Free AC car pickup available across Kakinada.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-navy-900 block mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gold-700 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-sand-100 border border-sand-300 focus:border-navy-900 text-navy-900 text-xs outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-navy-900 block mb-1">Phone Number (WhatsApp) *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gold-700 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98488 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-sand-100 border border-sand-300 focus:border-navy-900 text-navy-900 text-xs outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-navy-900 block mb-1">Select Venture of Interest</label>
                <select
                  value={formData.venture}
                  onChange={(e) => setFormData({ ...formData, venture: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-sand-100 border border-sand-300 focus:border-navy-900 text-navy-900 text-xs outline-none transition-colors"
                >
                  <option value="Sahasra Grandeur (Near Sarpavaram Jct)">Sahasra Grandeur (Near Sarpavaram Jct)</option>
                  <option value="Sahasra Emerald City (Lalitha Nagar, Ramanayyapeta)">Sahasra Emerald City (Lalitha Nagar, Ramanayyapeta)</option>
                  <option value="Sahasra Royal Palms (Highway Corridor)">Sahasra Royal Palms (Highway Corridor)</option>
                  <option value="Sahasra Boulevard (Beach Road / Smart City)">Sahasra Boulevard (Beach Road / Smart City)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-navy-900 block mb-1">Preferred Plot Size</label>
                  <select
                    value={formData.plotSize}
                    onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-sand-100 border border-sand-300 focus:border-navy-900 text-navy-900 text-xs outline-none transition-colors"
                  >
                    <option value="150 - 165 Sq. Yards">150 - 165 Sq. Yards (Budget Friendly)</option>
                    <option value="200 - 250 Sq. Yards">200 - 250 Sq. Yards (Ideal Villa Plot)</option>
                    <option value="300 - 350 Sq. Yards">300 - 350 Sq. Yards (Luxury Mansion)</option>
                    <option value="400 - 600+ Sq. Yards">400 - 600+ Sq. Yards (Commercial Bit)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-navy-900 block mb-1">Preferred Facing</label>
                  <select
                    value={formData.facing}
                    onChange={(e) => setFormData({ ...formData, facing: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-sand-100 border border-sand-300 focus:border-navy-900 text-navy-900 text-xs outline-none transition-colors"
                  >
                    <option value="East Facing">East Facing (100% Vaastu)</option>
                    <option value="North Facing">North Facing</option>
                    <option value="West Facing">West Facing</option>
                    <option value="Corner Luxury Bit">Corner Luxury Bit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-navy-900 block mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gold-700 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-2 rounded-xl bg-sand-100 border border-sand-300 focus:border-navy-900 text-navy-900 text-xs outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-navy-900 block mb-1">Email (Optional)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gold-700 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2 rounded-xl bg-sand-100 border border-sand-300 focus:border-navy-900 text-navy-900 text-xs outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Free Cab Pickup */}
              <div className="p-3.5 rounded-xl bg-sand-100 border border-sand-300 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.pickupRequired}
                    onChange={(e) => setFormData({ ...formData, pickupRequired: e.target.checked })}
                    className="rounded accent-[#0C1829] w-4 h-4"
                  />
                  <span className="text-xs font-bold text-navy-900 flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-gold-700" /> Request Free AC Cab Pickup in Kakinada
                  </span>
                </label>

                {formData.pickupRequired && (
                  <input
                    type="text"
                    placeholder="Enter your pickup location in Kakinada"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-white border border-sand-300 text-navy-900 text-xs outline-none"
                  />
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-gold-600 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Confirm Free Site Visit Booking</span>
                <Send className="w-4 h-4 text-gold-300" />
              </button>

              <div className="text-center text-[11px] text-slate-500">
                Direct hotline: <a href="tel:+919848868150" className="text-navy-900 font-bold hover:underline">+91 98488 68150</a> (Open 24/7)
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-garamond text-2xl font-bold text-navy-900">
              Site Visit Request Confirmed!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong className="text-navy-900">{formData.name}</strong>. Our senior property advisor from Sri Sahasra Developers will call you shortly on <strong className="text-gold-700">{formData.phone}</strong>.
            </p>
            <p className="text-xs text-slate-500">
              Redirecting you to WhatsApp for immediate plot brochure and layout dispatch...
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-navy-900 text-xs font-semibold text-white hover:bg-gold-600 shadow-sm"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
