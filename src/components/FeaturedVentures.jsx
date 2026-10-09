import React, { useState } from 'react';
import { MapPin, Compass, ArrowUpRight, Phone, Sparkles } from 'lucide-react';

export const VENTURES_DATA = [
  {
    id: 'sahasra-grandeur',
    title: 'Sahasra Grandeur',
    category: 'gated',
    tag: 'Fast Selling • Phase II',
    location: 'Near Sarpavaram Junction, Kakinada',
    distance: '3 Mins from Sarpavaram Main Jct',
    sizes: '165 to 350 Sq. Yards',
    pricePerSqYd: '₹14,500 / Sq. Yd',
    status: 'DTCP & RERA Approved',
    lpNumber: 'LP No. 84/2024/DTCP',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      '40ft & 33ft Wide Black Top Roads',
      'Grand Entrance Arch with 24/7 Security',
      'Underground Drainage & Water Pipelines',
      'Designer Avenue Plantation & Park'
    ],
    facing: 'East & North Facing Plots Available',
    bankLoans: 'SBI, HDFC, ICICI Bank Approved'
  },
  {
    id: 'sahasra-emerald-city',
    title: 'Sahasra Emerald City',
    category: 'villa',
    tag: 'Ultra Luxury Layout',
    location: 'Lalitha Nagar, Ramanayyapeta, Kakinada',
    distance: '2 Mins from BVR Complex & Lalitha Nagar',
    sizes: '200 to 500 Sq. Yards',
    pricePerSqYd: '₹18,200 / Sq. Yd',
    status: 'Ready for Immediate Construction',
    lpNumber: 'LP No. 112/2024/DTCP',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Underground Cabling & LED Streetlights',
      'Children Play Area & Open Amphitheatre',
      '100% Vaastu Compliant Demarcation',
      'Compound Wall with Solar Fencing'
    ],
    facing: 'All 4 Facings with Corner Bits',
    bankLoans: 'Up to 75% Bank Loan Available'
  },
  {
    id: 'sahasra-royal-palms',
    title: 'Sahasra Royal Palms',
    category: 'highway',
    tag: 'Commercial & High ROI',
    location: 'Kakinada-Samalkot 6-Lane Corridor',
    distance: '5 Mins from SRMT Mall & Railway Station',
    sizes: '150 to 600 Sq. Yards',
    pricePerSqYd: '₹12,800 / Sq. Yd',
    status: 'High Growth Corridor',
    lpNumber: 'LP No. 49/2024/DTCP',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      '60ft Master Plan Road Connectivity',
      'Suitable for Commercial & Residential',
      'Rapid Capital Appreciation Potential',
      'Electricity with Transformer Installed'
    ],
    facing: 'East Facing & 60ft Road Facing',
    bankLoans: 'Pre-Approved Loans from Major Banks'
  },
  {
    id: 'sahasra-boulevard',
    title: 'Sahasra Boulevard',
    category: 'villa',
    tag: 'New Launch',
    location: 'Adjacent to Smart City Coastal Belt',
    distance: '8 Mins from Kakinada Beach Road',
    sizes: '180 to 450 Sq. Yards',
    pricePerSqYd: '₹15,900 / Sq. Yd',
    status: 'Bookings Open',
    lpNumber: 'LP No. 136/2024/DTCP',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    highlights: [
      'Serene Greenery & Lake View Enclave',
      'Jogging Track & Organic Plantation',
      'Water Supply Tank & Overhead Reservoir',
      'Clear Spot Registration with Mutation'
    ],
    facing: 'East & North 100% Vaastu',
    bankLoans: 'Instant Loan Approvals'
  }
];

export default function FeaturedVentures({ onSelectVenture, onOpenVisitModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredVentures = activeTab === 'all'
    ? VENTURES_DATA
    : VENTURES_DATA.filter(v => v.category === activeTab);

  return (
    <section id="ventures" className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-[2px] bg-gold-600"></span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gold-700 uppercase font-sans">
                CURATED PORTFOLIO
              </span>
            </div>
            <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
              SIGNATURE <span className="text-gold-600 font-semibold italic">VENTURES</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mt-1.5 font-normal">
              Explore our landmark open plot ventures situated in high-appreciation growth sectors of Kakinada.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-sand-200/80 border border-sand-300 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Ventures' },
              { id: 'gated', label: 'Gated Layouts' },
              { id: 'villa', label: 'Luxury Villa Plots' },
              { id: 'highway', label: 'Highway & Commercial' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-navy-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Venture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {filteredVentures.map((venture) => (
            <div
              key={venture.id}
              className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Media Top */}
              <div className="relative aspect-[16/9.5] overflow-hidden bg-sand-200">
                <img
                  src={venture.image}
                  alt={venture.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Status Badges */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                  <span className="bg-white/95 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-navy-900 border border-sand-300 shadow-sm">
                    {venture.tag}
                  </span>
                  <span className="bg-emerald-800 text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold shadow-sm">
                    {venture.lpNumber}
                  </span>
                </div>

                {/* Price Pill Overlay */}
                <div className="absolute bottom-3.5 right-3.5 bg-white/95 px-3 py-1 rounded-xl border border-sand-300 text-right shadow-md">
                  <div className="text-[8px] uppercase tracking-wider text-slate-500 font-medium">Starting At</div>
                  <div className="font-sans text-xs font-bold text-gold-700">{venture.pricePerSqYd}</div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-garamond text-2xl font-bold text-navy-900 group-hover:text-gold-700 transition-colors">
                        {venture.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>{venture.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2.5 text-[11px] text-gold-800 font-semibold bg-sand-100 px-2.5 py-0.5 rounded-lg border border-sand-300 inline-block">
                    {venture.distance}
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-3.5 pt-3 border-t border-sand-200">
                    {venture.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-600 shrink-0"></span>
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-sand-200 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-gold-600" />
                      <strong className="text-navy-900">{venture.sizes}</strong>
                    </span>
                    <span className="text-emerald-700 font-semibold">
                      {venture.bankLoans}
                    </span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-1 flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      if (onSelectVenture) onSelectVenture(venture);
                      onOpenVisitModal();
                    }}
                    className="flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-gold-600 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Enquire &amp; Site Visit</span>
                    <ArrowUpRight className="w-4 h-4 text-gold-300" />
                  </button>

                  <a
                    href={`https://wa.me/919848868150?text=Hello%20Sri%20Sahasra%20Developers,%20I%20am%20interested%20in%20${encodeURIComponent(venture.title)}%20at%20Kakinada.%20Please%20share%20layout%20map%20and%20price%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-sand-300 bg-sand-100 text-navy-900 hover:bg-sand-200 transition-colors shadow-sm"
                    title="Instant WhatsApp Enquiry"
                  >
                    <Phone className="w-4 h-4 text-gold-700" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-8 p-5 rounded-2xl bg-sand-100 border border-sand-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white border border-sand-300 flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy-900 font-garamond text-base sm:text-lg">Looking for a custom plot dimension or corner bit?</div>
              <div className="text-xs text-slate-600">Our senior property consultants in Kakinada will assist you immediately.</div>
            </div>
          </div>
          <button
            onClick={onOpenVisitModal}
            className="px-4 py-2 rounded-full text-xs font-bold text-navy-900 border border-sand-400 bg-white hover:border-gold-500 uppercase tracking-wider shadow-sm"
          >
            Talk to Consultant
          </button>
        </div>

      </div>
    </section>
  );
}
