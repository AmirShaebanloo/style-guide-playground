
import React, { useEffect, useState } from "react";
import NavigationBar from "@/components/landing/NavigationBar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ComponentGallery from "@/components/landing/ComponentGallery";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";
import { ChevronUp, Zap } from "lucide-react";

const LandingPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-4 border-t-mocha border-r-verdant border-b-cherry border-l-midnight animate-spin"></div>
            <Zap className="text-mocha absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6" />
          </div>
          <p className="mt-4 font-medium text-mocha animate-pulse">Loading Experience...</p>
        </div>
      </div>
    );
  }

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
      <div 
        className={`fixed bottom-8 right-8 z-40 transition-all duration-500 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <button 
          className="bg-gradient-to-r from-mocha to-cherry text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
