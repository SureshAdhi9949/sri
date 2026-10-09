import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';

const PLOTS = [
  { id: 1, number: '01', size: 200, dim: '36 x 50 ft', facing: 'North-East Corner', status: 'Available', type: 'Corner Luxury Bit', price: '₹29,00,000' },
  { id: 2, number: '02', size: 165, dim: '33 x 45 ft', facing: 'East Facing', status: 'Booked', type: 'Standard Plot', price: '₹23,92,500' },
  { id: 3, number: '03', size: 165, dim: '33 x 45 ft', facing: 'East Facing', status: 'Available', type: 'Standard Plot', price: '₹23,92,500' },
  { id: 4, number: '04', size: 165, dim: '33 x 45 ft', facing: 'East Facing', status: 'Available', type: 'Standard Plot', price: '₹23,92,500' },
  { id: 5, number: '05', size: 220, dim: '40 x 49.5 ft', facing: 'East Facing', status: 'Reserved', type: 'Premium Villa Plot', price: '₹31,90,000' },
  { id: 6, number: '06', size: 250, dim: '45 x 50 ft', facing: 'South-East Corner', status: 'Available', type: 'Commercial / Resi', price: '₹36,25,000' },
  { id: 7, number: '07', size: 300, dim: '50 x 54 ft', facing: 'North Facing', status: 'Available', type: 'Grand Villa Bit', price: '₹43,50,000' },
  { id: 8, number: '08', size: 180, dim: '36 x 45 ft', facing: 'North Facing', status: 'Booked', type: 'Standard Plot', price: '₹26,10,000' },
  { id: 9, number: '09', size: 180, dim: '36 x 45 ft', facing: 'North Facing', status: 'Available', type: 'Standard Plot', price: '₹26,10,000' },
  { id: 10, number: '10', size: 200, dim: '36 x 50 ft', facing: 'North Facing', status: 'Available', type: 'Park Facing Bit', price: '₹29,00,000' },
  { id: 11, number: '11', size: 165, dim: '33 x 45 ft', facing: 'West Facing', status: 'Available', type: 'Standard Plot', price: '₹23,92,500' },
  { id: 12, number: '12', size: 165, dim: '33 x 45 ft', facing: 'West Facing', status: 'Available', type: 'Standard Plot', price: '₹23,92,500' },
  { id: 13, number: '13', size: 165, dim: '33 x 45 ft', facing: 'West Facing', status: 'Booked', type: 'Standard Plot', price: '₹23,92,500' },
  { id: 14, number: '14', size: 220, dim: '40 x 49.5 ft', facing: 'West Facing', status: 'Reserved', type: 'Premium Villa Plot', price: '₹31,90,000' },
  { id: 15, number: '15', size: 260, dim: '45 x 52 ft', facing: 'North-West Corner', status: 'Available', type: 'Corner Plot', price: '₹37,70,000' },
  { id: 16, number: '16', size: 350, dim: '55 x 57.2 ft', facing: 'East Facing', status: 'Available', type: 'Clubhouse Adjacent', price: '₹50,75,000' },
];

export default function InteractiveMasterPlan({ onSelectPlot, onOpenVisitModal }) {
  const [selectedPlot, setSelectedPlot] = useState(PLOTS[0]);
  const [filterFacing, setFilterFacing] = useState('All');

  const filteredPlots = filterFacing === 'All'
    ? PLOTS
    : PLOTS.filter(p => p.facing.toLowerCase().includes(filterFacing.toLowerCase()));

  const handlePlotClick = (plot) => {
    setSelectedPlot(plot);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:border-emerald-500';
      case 'Reserved':
        return 'bg-amber-50 border-amber-300 text-amber-800 hover:border-amber-500';
      case 'Booked':
        return 'bg-slate-100 border-slate-300 text-slate-400 opacity-60 cursor-not-allowed';
      default:
        return 'bg-sand-100 border-sand-300';
    }
  };

  return (
    <section id="masterplan" className="py-12 sm:py-16 bg-[#FBF9F5] border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/40 bg-white text-[10px] font-bold tracking-[0.25em] text-gold-800 uppercase mb-2 shadow-sm hover:border-gold-500 transition-colors">
            <Layers className="w-3.5 h-3.5 text-gold-600 animate-bounce" style={{ animationDuration: '3s' }} />
            INTERACTIVE LAYOUT X-RAY
          </div>
          <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            EXPLORE THE <span className="gold-shimmer-text font-semibold italic">MASTER PLAN</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 font-normal">
            Select any plot below to inspect live dimensions, Vaastu orientation, facing, and instant pricing estimate.
          </p>

          {/* Facing Filter */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4">
            {['All', 'East', 'North', 'West', 'Corner'].map((facing) => (
              <button
                key={facing}
                onClick={() => setFilterFacing(facing)}
                className={`text-xs font-semibold px-3.5 py-1 rounded-full border transition-all duration-200 ${
                  filterFacing === facing
                    ? 'border-navy-900 bg-navy-900 text-white font-bold shadow-sm scale-105'
                    : 'border-sand-300 bg-white text-slate-700 hover:border-sand-400 hover:bg-sand-100'
                }`}
              >
                {facing === 'All' ? 'All Facings' : `${facing} Facing`}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left: Layout Visual Grid */}
          <div className="lg:col-span-8 bg-white p-5 sm:p-7 rounded-2xl border border-sand-300 shadow-soft-luxury relative">
            
            {/* Top Blueprint Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 mb-4 border-b border-sand-200 text-xs">
              <div className="flex items-center gap-2 text-navy-900 font-bold font-sans">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>SAHASRA GRANDEUR — PHASE 1 BLUEPRINT (40FT MAIN ROAD)</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-medium">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Available
                </span>
                <span className="flex items-center gap-1.5 text-amber-700">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span> Reserved
                </span>
                <span className="flex items-center gap-1.5 text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span> Booked
                </span>
              </div>
            </div>

            {/* Entrance Arch Marker */}
            <div className="w-full bg-sand-100 border border-dashed border-sand-400 py-1.5 px-4 rounded-xl text-center mb-4">
              <span className="text-[10px] font-bold tracking-[0.25em] text-navy-900 uppercase font-sans flex items-center justify-center gap-2">
                <Compass className="w-3.5 h-3.5 text-gold-600 animate-spin-slow" />
                <span>60FT MAIN ENTRANCE ARCH &amp; COMMERCIAL BOULEVARD</span>
              </span>
            </div>

            {/* Plots Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {filteredPlots.map((plot) => {
                const isSelected = selectedPlot.id === plot.id;
                return (
                  <button
                    key={plot.id}
                    onClick={() => handlePlotClick(plot)}
                    className={`plot-card relative p-3 rounded-xl border text-left flex flex-col justify-between h-24 ${
                      isSelected
                        ? 'border-navy-900 bg-sand-100 ring-2 ring-navy-900 shadow-md scale-105 z-10'
                        : `${getStatusBadgeClass(plot.status)}`
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-sans text-[11px] font-black tracking-wider text-navy-900">
                        PLOT #{plot.number}
                      </span>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded transition-transform ${
                        plot.status === 'Available' ? 'bg-emerald-700 text-white' :
                        plot.status === 'Reserved' ? 'bg-amber-700 text-white' : 'bg-slate-400 text-white'
                      }`}>
                        {plot.status}
                      </span>
                    </div>

                    <div>
                      <div className="font-sans text-xs font-extrabold text-navy-900">
                        {plot.size} <span className="text-[9px] font-normal text-slate-600">Sq. Yd</span>
                      </div>
                      <div className="text-[9px] text-slate-600 truncate">
                        {plot.facing}
                      </div>
                    </div>

                    <div className="text-[9px] font-mono text-slate-500 text-right">
                      {plot.dim}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 40ft Road Indicator */}
            <div className="w-full bg-sand-200 border-y border-sand-300 py-1.5 mt-4 rounded text-center">
              <span className="text-[9px] tracking-[0.25em] text-slate-600 uppercase font-mono font-medium">
                ← 40 FT WIDE BLACK TOP INTERNAL ROAD →
              </span>
            </div>

          </div>

          {/* Right: Selected Plot Specification Card */}
          <div className="lg:col-span-4 bg-white p-5 sm:p-6 rounded-2xl border border-sand-300 shadow-soft-luxury relative transition-all duration-300">
            <div className="flex items-center justify-between pb-2.5 border-b border-sand-200">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold-600 animate-ping"></span>
                <span className="text-xs font-bold tracking-widest text-navy-900 uppercase font-sans">
                  PLOT SPECIFICATION
                </span>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-sand-200 text-navy-900 border border-sand-300">
                DTCP APPR.
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-baseline justify-between">
                <h3 className="font-garamond text-2xl font-bold text-navy-900">
                  PLOT #{selectedPlot.number}
                </h3>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  selectedPlot.status === 'Available' ? 'bg-emerald-100 text-emerald-800' :
                  selectedPlot.status === 'Reserved' ? 'bg-amber-100 text-amber-800' :
                  'bg-slate-200 text-slate-600'
                }`}>
                  {selectedPlot.status}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">{selectedPlot.type} in Sahasra Grandeur</p>
            </div>

            {/* Key Specs Breakdown */}
            <div className="space-y-2 my-4 pt-1">
              <div className="flex justify-between py-1 border-b border-sand-200 text-xs">
                <span className="text-slate-500">Plot Extent:</span>
                <strong className="text-navy-900">{selectedPlot.size} Sq. Yards</strong>
              </div>

              <div className="flex justify-between py-1 border-b border-sand-200 text-xs">
                <span className="text-slate-500">Dimensions:</span>
                <strong className="text-navy-900">{selectedPlot.dim}</strong>
              </div>

              <div className="flex justify-between py-1 border-b border-sand-200 text-xs">
                <span className="text-slate-500">Facing:</span>
                <strong className="text-gold-800 font-semibold">{selectedPlot.facing}</strong>
              </div>

              <div className="flex justify-between py-1 border-b border-sand-200 text-xs">
                <span className="text-slate-500">Vaastu Compliance:</span>
                <strong className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Auspicious
                </strong>
              </div>

              <div className="flex justify-between py-1 border-b border-sand-200 text-xs">
                <span className="text-slate-500">Estimated Price:</span>
                <strong className="text-sm font-bold text-navy-900">{selectedPlot.price}</strong>
              </div>
            </div>

            {/* Bank Loan Note */}
            <div className="p-2.5 rounded-xl bg-sand-100 border border-sand-300 text-[10px] text-slate-700 leading-relaxed mb-4">
              <span className="text-navy-900 font-bold">Bank Loan:</span> Available through SBI, HDFC &amp; ICICI with up to 75% funding.
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  if (onSelectPlot) onSelectPlot(selectedPlot);
                  onOpenVisitModal();
                }}
                disabled={selectedPlot.status === 'Booked'}
                className={`btn-shimmer w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                  selectedPlot.status === 'Booked'
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-navy-900 hover:bg-gold-600 text-white hover:scale-105'
                }`}
              >
                <span>{selectedPlot.status === 'Booked' ? 'Plot Already Booked' : `Enquire for Plot #${selectedPlot.number}`}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
              </button>

              <a
                href={`https://wa.me/919848868150?text=Hi%20Sri%20Sahasra%20Developers,%20I%20am%20interested%20in%20Plot%20%23${selectedPlot.number}%20(${selectedPlot.size}%20Sq.Yds)%20at%20Kakinada.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-full text-xs font-semibold text-center block text-navy-900 hover:bg-sand-200 border border-sand-300 bg-sand-100 transition-colors"
              >
                WhatsApp Instant Inquiry
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
