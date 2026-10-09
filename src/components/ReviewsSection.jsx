import React from 'react';
import { Star, Quote, CheckCircle2, Award, Users } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: 'V. Ramakrishna Murthy',
      role: 'Retd. Deputy Collector • Kakinada',
      venture: 'Sahasra Grandeur, Sarpavaram',
      rating: 5,
      date: 'Purchased Oct 2024',
      quote: '100% genuine legal documentation and transparent dealings. Sri Sahasra Developers completed the spot registration at Kakinada Sub-Registrar office on the exact committed day. The 40ft wide roads and drainage work are top tier.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Dr. Swapna Reddy',
      role: 'Cardiologist • Apollo Kakinada',
      venture: 'Sahasra Emerald City, Ramanayyapeta',
      rating: 5,
      date: 'Purchased Jan 2025',
      quote: 'We wanted a 300 Sq. Yard East-facing plot in Lalitha Nagar / Ramanayyapeta belt for our luxury villa. The management accommodated our custom requirements and got our SBI bank loan sanctioned within 5 days.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'K. Srinivasa Rao (NRI)',
      role: 'Software Architect • Dallas, USA',
      venture: 'Sahasra Royal Palms Highway Corridor',
      rating: 5,
      date: 'Purchased Nov 2024',
      quote: 'Being in the USA, I was apprehensive about investing in real estate back home. Sri Sahasra provided complete video walkthroughs, DTCP LP numbers, and managed the entire registration process seamlessly. The land value has already risen by 25%!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
    }
  ];

  return (
    <section id="reviews" className="py-12 sm:py-16 bg-[#FBF9F5] border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/40 bg-white text-[10px] font-bold tracking-[0.25em] text-gold-800 uppercase mb-2 shadow-sm">
            <Award className="w-3.5 h-3.5 text-gold-600" />
            UNCOMPROMISED CLIENT TRUST
          </div>
          <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            5.0 STAR <span className="text-gold-600 font-semibold italic">CLIENT EXPERIENCES</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 font-normal">
            Read firsthand experiences from proud plot owners and property investors across Kakinada and worldwide.
          </p>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sand-300 shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-navy-900">5.0 / 5.0 (Google &amp; Magicpin Verified)</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
              <Users className="w-3.5 h-3.5 text-gold-700" />
              <span>500+ Happy Families in Godavari Region</span>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-sand-300 hover:border-gold-500 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-soft-luxury relative group"
            >
              <Quote className="w-7 h-7 text-sand-300 mb-2.5 group-hover:text-gold-400 transition-colors" />

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed italic mb-5">
                "{rev.quote}"
              </p>

              <div className="pt-3.5 border-t border-sand-200">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-sand-300 shadow-sm"
                  />
                  <div>
                    <div className="font-sans text-xs sm:text-sm font-bold text-navy-900 group-hover:text-gold-700 transition-colors">
                      {rev.name}
                    </div>
                    <div className="text-[10px] text-slate-500">{rev.role}</div>
                    <div className="text-[10px] text-gold-700 font-semibold mt-0.5">{rev.venture}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-sand-100 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3 h-3" /> Verified Plot Owner
                  </span>
                  <span>{rev.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
