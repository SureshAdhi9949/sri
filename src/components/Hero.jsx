import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ShieldCheck, Award, MapPin, CheckCircle2, 
  Compass, Sparkles, Phone, Volume2, 
  VolumeX, TrendingUp, ChevronLeft, ChevronRight, Star,
  ArrowUpRight
} from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    title: 'Sahasra Grandeur Layout',
    location: 'Sarpavaram Junction, Kakinada',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    tag: 'Flagship Gated Layout',
    sizes: '165 - 350 Sq. Yds',
    price: '₹14,500/yd',
    lp: 'DTCP LP No. 84/2024'
  },
  {
    id: 2,
    title: 'Sahasra Emerald City',
    location: 'Lalitha Nagar, Ramanayyapeta',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop',
    tag: 'Ultra Luxury Villa Bits',
    sizes: '200 - 500 Sq. Yds',
    price: '₹18,200/yd',
    lp: 'DTCP LP No. 112/2024'
  },
  {
    id: 3,
    title: 'Sahasra Royal Palms Corridor',
    location: 'Kakinada 6-Lane Highway Belt',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    tag: 'High Commercial ROI',
    sizes: '150 - 600 Sq. Yds',
    price: '₹12,800/yd',
    lp: 'DTCP LP No. 49/2024'
  }
];

export default function Hero({ onOpenVisitModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [activeFacingFilter, setActiveFacingFilter] = useState('All');

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-[#FBF9F5] border-b border-sand-300/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Editorial Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            
            {/* Luxury Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold-600"></span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gold-800 uppercase font-sans">
                SRI SAHASRA DEVELOPERS • KAKINADA
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-sand-400"></span>
              <span className="hidden sm:inline-block text-[10px] font-semibold text-slate-500">
                DTCP &amp; RERA APPROVED
              </span>
            </div>

            {/* Editorial Headline */}
            <div>
              <h1 className="font-garamond text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-[1.08]">
                FOUNDATIONS OF <br />
                <span className="text-gold-600 font-semibold italic">DISTINCTION.</span> <br />
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-800 block mt-1">
                  Wake to Prosperity.
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="font-sans text-xs sm:text-sm tracking-[0.2em] text-gold-700 uppercase font-bold flex items-center gap-2">
              <span className="text-gold-500">✦</span>
              <span>COMFORT, VALUE &amp; LUXURY, CRAFTED FOR BETTER TOMORROWS</span>
            </p>

            {/* Supporting Paragraph */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 max-w-xl font-normal leading-relaxed">
              Thoughtfully curated residential &amp; commercial open plot ventures near <strong className="text-navy-900 font-semibold underline decoration-gold-400/60 decoration-2 underline-offset-4">Sarpavaram Junction</strong> &amp; <strong className="text-navy-900 font-semibold underline decoration-gold-400/60 decoration-2 underline-offset-4">Ramanayyapeta</strong>. 100% clear title deeds, 40ft BT roads, underground drainage, and unmatched capital appreciation.
            </p>

            {/* Quick Filter Bar */}
            <div className="w-full max-w-xl p-2 rounded-2xl bg-white border border-sand-300 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <div className="flex items-center gap-2 px-2">
                <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-navy-900">Choose Location: </span>
                  <span className="text-slate-500">Sarpavaram • Ramanayyapeta</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {['All Plots', 'East Facing', 'Corner Bit'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFacingFilter(filter)}
                    className={`text-[11px] font-bold px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                      activeFacingFilter === filter
                        ? 'bg-navy-900 text-white shadow-sm'
                        : 'bg-sand-100 text-slate-700 hover:bg-sand-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
              <a
                href="#ventures"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-gold-600 transition-colors shadow-sm"
              >
                <span>EXPLORE 4 VENTURES</span>
                <ArrowRight className="w-4 h-4 text-gold-300" />
              </a>

              <button
                onClick={onOpenVisitModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-navy-900 border border-sand-400 bg-white hover:border-gold-500 hover:bg-sand-50 transition-colors shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>BOOK FREE SITE VISIT</span>
              </button>

              <a
                href="tel:+919848868150"
                className="sm:hidden inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-slate-700 border border-sand-300 bg-sand-100"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Call +91 98488 68150</span>
              </a>
            </div>

            {/* Trust Points Ribbon */}
            <div className="pt-4 sm:pt-5 w-full border-t border-sand-300">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-sand-300 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-sand-100 border border-sand-300 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-700" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-navy-900">100% CLEAR</div>
                    <div className="text-[9px] text-slate-500 uppercase font-semibold">Spot Title</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-sand-300 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-sand-100 border border-sand-300 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-gold-700" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-navy-900">DTCP &amp; RERA</div>
                    <div className="text-[9px] text-slate-500 uppercase font-semibold">Approved</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-sand-300 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-sand-100 border border-sand-300 flex items-center justify-center shrink-0">
                    <Compass className="w-3.5 h-3.5 text-gold-700" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-navy-900">100% VAASTU</div>
                    <div className="text-[9px] text-slate-500 uppercase font-semibold">East/North Plots</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-sand-300 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-sand-100 border border-sand-300 flex items-center justify-center shrink-0">
                    <span className="font-extrabold text-xs text-gold-700">5.0★</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold text-navy-900">TOP RATED</div>
                    <div className="text-[9px] text-slate-500 uppercase font-semibold">500+ Families</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right: Clean High-Performance Showcase Slider */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-sand-300 shadow-lg bg-white p-2">
              
              <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-sand-200">
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center transition-opacity duration-500"
                />
                
                {/* Clean Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="bg-white/95 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider text-navy-900 border border-sand-300 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {slide.tag}
                  </span>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-navy-900/80 text-white border border-white/20 hover:bg-navy-900 transition-colors"
                    title={isMuted ? "Unmute Ambient Tour Sound" : "Mute Sound"}
                    aria-label="Toggle ambient tour sound"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-gold-300" />}
                  </button>
                </div>

                {/* Slider Arrows */}
                <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                    className="w-7 h-7 rounded-full bg-white/90 text-navy-900 flex items-center justify-center shadow-sm pointer-events-auto hover:bg-navy-900 hover:text-white transition-colors"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                    className="w-7 h-7 rounded-full bg-white/90 text-navy-900 flex items-center justify-center shadow-sm pointer-events-auto hover:bg-navy-900 hover:text-white transition-colors"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Slide Dots */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        currentSlide === i ? 'w-5 bg-gold-400' : 'w-1.5 bg-white/50'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    ></button>
                  ))}
                </div>

                {/* Bottom Venture Info Card */}
                <div className="absolute bottom-10 left-3 right-3 bg-white/95 p-3 rounded-xl border border-sand-300 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-gold-800 font-semibold">
                        <MapPin className="w-3 h-3 text-gold-600" />
                        <span>{slide.location}</span>
                      </div>
                      <div className="font-garamond text-base font-bold text-navy-900 mt-0.5">
                        {slide.title}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[8px] uppercase text-slate-500 font-bold">Rate from</div>
                      <div className="font-sans text-xs font-extrabold text-gold-700">{slide.price}</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-navy-900 text-white flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-gold-300 font-semibold text-[10px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {slide.lp}
                  </span>
                  <button 
                    onClick={onOpenVisitModal}
                    className="text-white hover:text-gold-300 font-bold text-[10px] tracking-wider uppercase flex items-center gap-1"
                  >
                    <span>View Layout</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </button>
                </div>

              </div>

            </div>

            {/* Floating ROI Pill */}
            <div className="hidden sm:flex absolute -bottom-3 -left-3 bg-white p-2.5 rounded-xl border border-sand-300 shadow-md items-center gap-2.5 z-20">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Historical ROI</div>
                <div className="font-sans text-xs font-black text-navy-900">+24% / Year in Kakinada</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
