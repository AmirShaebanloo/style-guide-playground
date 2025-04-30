
import React, { useEffect } from "react";
import NavigationBar from "@/components/landing/NavigationBar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ComponentGallery from "@/components/landing/ComponentGallery";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

const LandingPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Fixed navigation */}
      <NavigationBar />
      
      {/* Main content */}
      <main>
        {/* Hero section */}
        <HeroSection />
        
        {/* Features section */}
        <FeaturesSection />
        
        {/* Component Gallery */}
        <ComponentGallery />
        
        {/* Call to Action */}
        <CtaSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating CTA Button */}
      <div className="fixed bottom-8 right-8 z-40 md:block hidden">
        <button 
          className="bg-mocha hover:bg-mocha/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>Explore Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
