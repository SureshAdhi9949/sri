import React from 'react';
import { ShieldCheck, TrendingUp, Compass, Award, Layers, CheckCircle2, UserCheck, Briefcase } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function WhyChooseUs({ onOpenVisitModal }) {
  const pillars = [
    {
      icon: ShieldCheck,
      number: '01',
      title: '100% Legal Certainty & Spot Registration',
      subtitle: 'ZERO RISK • CLEAR TITLE GUARANTEE',
      description: 'All open plot ventures are vetted by legal counsels and certified under DTCP & AP RERA. Complete title deeds with instant spot registration and mutation assistance in Kakinada sub-registrar office.',
      highlight: 'Clear Title Deeds & Transparent Dealings'
    },
    {
      icon: TrendingUp,
      number: '02',
      title: 'High Capital Appreciation Corridors',
      subtitle: 'MAXIMUM ROI IN KAKINADA SMART CITY',
      description: 'We exclusively develop open plots in high-velocity growth trajectories — Sarpavaram Junction, Ramanayyapeta, Lalitha Nagar, and prime highway zones with maximum capital appreciation.',
      highlight: 'Strategic Proximity to SRMT Mall & Commercial Hubs'
    },
    {
      icon: Layers,
      number: '03',
      title: 'Master-Planned Gated Infrastructure',
      subtitle: 'READY-TO-BUILD VILLA STANDARDS',
      description: 'Equipped with heavy-duty 40ft/33ft Blacktop roads, underground drainage network, dedicated electrical transformer grid, 24/7 water lines, and compound wall perimeter.',
      highlight: 'Civil Works Built to Strict Standards'
    },
    {
      icon: Compass,
      number: '04',
      title: '100% Vaastu & Scientific Alignment',
      subtitle: 'AUTHENTIC EAST & NORTH PLOTS',
      description: 'Every layout is planned according to authentic Vaastu Shastra principles with perfect rectangular cuts, auspicious road alignments, and optimal wind/solar orientation.',
      highlight: '100% Vaastu Demarcated Plots'
    }
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/40 bg-sand-100 text-[10px] font-bold tracking-[0.25em] text-gold-800 uppercase mb-3 shadow-sm hover:border-gold-500 transition-colors">
            <Award className="w-3.5 h-3.5 text-gold-600 animate-pulse" />
            THE BENCHMARK OF TRUST
          </div>
          <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            WHY INVEST WITH <span className="gold-shimmer-text font-semibold italic">SRI SAHASRA</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 font-normal leading-relaxed">
            Led by <strong>Mr. Durgareddy Parisina</strong>, Sri Sahasra Developers stands as a symbol of trust, integrity, and exceptional land appreciation across Kakinada.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-[#FBF9F5] p-6 sm:p-8 rounded-2xl border border-sand-300 hover:border-gold-500 transition-all duration-300 hover:shadow-soft-luxury-hover relative group overflow-hidden"
              >
                <span className="absolute top-4 right-6 font-garamond text-7xl font-bold text-sand-300/80 select-none group-hover:text-gold-300/60 group-hover:scale-105 transition-all duration-500">
                  {pillar.number}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white border border-sand-300 flex items-center justify-center mb-4 text-gold-700 shadow-sm group-hover:bg-navy-900 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-[10px] font-bold tracking-[0.2em] text-gold-700 uppercase font-sans mb-1">
                    {pillar.subtitle}
                  </div>

                  <h3 className="font-garamond text-2xl font-bold text-navy-900 mb-2 group-hover:text-gold-700 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <div className="pt-3.5 border-t border-sand-300/80 flex items-center gap-2 text-xs font-semibold text-navy-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{pillar.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Leadership Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0C1829] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-300 to-amber-600 p-[2px] shrink-0 shadow-md animate-pulse-gold">
              <div className="w-full h-full rounded-full bg-[#0C1829] flex items-center justify-center">
                <UserCheck className="w-7 h-7 text-gold-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-garamond text-2xl font-bold text-white">Mr. Durgareddy Parisina</span>
                <span className="text-[10px] bg-gold-500/20 text-gold-300 border border-gold-400/40 px-2.5 py-0.5 rounded-full font-bold">
                  Managing Partner
                </span>
              </div>
              <div className="text-xs text-slate-300 mt-1 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1 text-gold-300 font-medium">
                  <Briefcase className="w-3.5 h-3.5 text-gold-400" /> BNI Amigos Chapter, East Godavari
                </span>
                <span>•</span>
                <span>Direct Contact: +91 98488 68150</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenVisitModal}
            className="btn-shimmer px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-500 shadow-md shrink-0 relative z-10 hover:scale-105"
          >
            Direct Consultation with Founder
          </button>
        </div>

        {/* Animated Number Counters Ribbon */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-7 rounded-2xl bg-sand-100 border border-sand-300 shadow-sm">
          <div className="text-center">
            <div className="font-garamond text-3xl sm:text-4xl font-bold text-navy-900">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-[11px] text-slate-600 uppercase tracking-wider mt-1 font-semibold">Plots Delivered</div>
          </div>
          <div className="text-center">
            <div className="font-garamond text-3xl sm:text-4xl font-bold text-navy-900">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-[11px] text-slate-600 uppercase tracking-wider mt-1 font-semibold">Clear Title Records</div>
          </div>
          <div className="text-center">
            <div className="font-garamond text-3xl sm:text-4xl font-bold text-navy-900">
              <AnimatedCounter end={5.0} decimals={1} suffix=" ★" />
            </div>
            <div className="text-[11px] text-slate-600 uppercase tracking-wider mt-1 font-semibold">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="font-garamond text-3xl sm:text-4xl font-bold text-navy-900">
              24/7
            </div>
            <div className="text-[11px] text-slate-600 uppercase tracking-wider mt-1 font-semibold">Assistance &amp; Visits</div>
          </div>
        </div>

      </div>
    </section>
  );
}
