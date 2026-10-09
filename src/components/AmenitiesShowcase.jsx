import React from 'react';
import { Sparkles, Shield, TreePine, Droplets, Sun, Car, Lock, Waves } from 'lucide-react';

export default function AmenitiesShowcase() {
  const amenities = [
    {
      icon: Shield,
      title: 'Grand Entrance Arch',
      desc: 'Architecturally designed landmark entrance arch with 24/7 manned security surveillance & boom barriers.'
    },
    {
      icon: Car,
      title: '40ft & 33ft BT Roads',
      desc: 'Heavy-grade bitumen blacktop roads with kerbing, designed for smooth vehicle flow and lifetime durability.'
    },
    {
      icon: Droplets,
      title: 'Underground Drainage',
      desc: 'Modern closed drainage network preventing waterlogging and maintaining immaculate hygiene throughout.'
    },
    {
      icon: Sun,
      title: 'Electrification & LED',
      desc: 'Dedicated electrical transformers with modern energy-efficient LED street lighting on every lane.'
    },
    {
      icon: TreePine,
      title: 'Avenue Greenery & Parks',
      desc: 'Designer horticulture, herbal plantations, tree-lined walking tracks, and dedicated children play zones.'
    },
    {
      icon: Waves,
      title: '24/7 Potable Water Grid',
      desc: 'Overhead water reservoir connected with deep borewells, supplying clean continuous water to each plot boundary.'
    },
    {
      icon: Lock,
      title: 'Compound Wall & Fencing',
      desc: 'High perimeter security wall safeguarding the entire gated community from unauthorized entry.'
    },
    {
      icon: Sparkles,
      title: '100% Vaastu Demarcation',
      desc: 'Individual stone demarcations with precise GPS coordinates aligned to auspicious cardinal directions.'
    }
  ];

  return (
    <section id="amenities" className="py-12 sm:py-16 bg-[#FBF9F5] border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/40 bg-white text-[10px] font-bold tracking-[0.25em] text-gold-800 uppercase mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            WORLD CLASS LIVING STANDARDS
          </div>
          <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            PRISTINE <span className="text-gold-600 font-semibold italic">AMENITIES</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 font-normal">
            Every venture is developed with comprehensive civil infrastructure, ensuring instant readiness for your dream home.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-sand-300 hover:border-gold-500 transition-all duration-300 shadow-sm hover:shadow-soft-luxury hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sand-100 border border-sand-300 flex items-center justify-center mb-3 text-gold-700 group-hover:bg-navy-900 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-garamond text-lg font-bold text-navy-900 mb-1 group-hover:text-gold-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
