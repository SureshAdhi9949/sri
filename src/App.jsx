import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedVentures from './components/FeaturedVentures';
import InteractiveMasterPlan from './components/InteractiveMasterPlan';
import WhyChooseUs from './components/WhyChooseUs';
import AmenitiesShowcase from './components/AmenitiesShowcase';
import RoiCalculator from './components/RoiCalculator';
import ReviewsSection from './components/ReviewsSection';
import LocationShowcase from './components/LocationShowcase';
import SiteVisitModal from './components/SiteVisitModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [selectedVenture, setSelectedVenture] = useState(null);
  const [selectedPlot, setSelectedPlot] = useState(null);

  // Ultra-lightweight IntersectionObserver for Scroll Reveal Animations
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenVisitModal = () => {
    setIsVisitModalOpen(true);
  };

  const handleSelectVenture = (venture) => {
    setSelectedVenture(venture);
    setIsVisitModalOpen(true);
  };

  const handleSelectPlot = (plot) => {
    setSelectedPlot(plot);
    setIsVisitModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-slate-800 font-sans selection:bg-[#B38827] selection:text-white antialiased">
      
      {/* Top Fixed Header */}
      <Navbar onOpenVisitModal={handleOpenVisitModal} />

      {/* Main Content Sections with Scroll Reveal Animations */}
      <main>
        {/* Section 00: Hero */}
        <Hero onOpenVisitModal={handleOpenVisitModal} />

        {/* Section 01: Featured Ventures */}
        <div className="reveal-on-scroll">
          <FeaturedVentures
            onSelectVenture={handleSelectVenture}
            onOpenVisitModal={handleOpenVisitModal}
          />
        </div>

        {/* Section 02: Interactive Master Plan */}
        <div className="reveal-on-scroll">
          <InteractiveMasterPlan
            onSelectPlot={handleSelectPlot}
            onOpenVisitModal={handleOpenVisitModal}
          />
        </div>

        {/* Section 03: Why Sri Sahasra */}
        <div className="reveal-on-scroll">
          <WhyChooseUs onOpenVisitModal={handleOpenVisitModal} />
        </div>

        {/* Section 04: Amenities Showcase */}
        <div className="reveal-on-scroll">
          <AmenitiesShowcase />
        </div>

        {/* Section 05: EMI & ROI Calculator */}
        <div className="reveal-on-scroll">
          <RoiCalculator onOpenVisitModal={handleOpenVisitModal} />
        </div>

        {/* Section 06: Customer Reviews */}
        <div className="reveal-on-scroll">
          <ReviewsSection />
        </div>

        {/* Section 07: Location Showcase */}
        <div className="reveal-on-scroll">
          <LocationShowcase onOpenVisitModal={handleOpenVisitModal} />
        </div>
      </main>

      {/* Master Footer */}
      <Footer onOpenVisitModal={handleOpenVisitModal} />

      {/* Site Visit Modal */}
      <SiteVisitModal
        isOpen={isVisitModalOpen}
        onClose={() => {
          setIsVisitModalOpen(false);
          setSelectedVenture(null);
          setSelectedPlot(null);
        }}
        initialVenture={selectedVenture}
        initialPlot={selectedPlot}
      />

      {/* Floating Action Widget with Gentle Pulse */}
      <FloatingWhatsApp />

    </div>
  );
}
