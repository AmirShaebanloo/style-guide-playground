
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mocha/5 via-verdant/5 to-cherry/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-mocha/10 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-verdant/10 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full bg-cherry/10 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-midnight mb-4 md:mb-6">
          <span className="block text-mocha">Design Systems Made</span>
          <span className="block">Simple and Beautiful</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-8 md:mb-10">
          Create sleek, responsive, and visually consistent interfaces with ease.
          Our design system provides everything you need to build modern web experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild 
            size="lg"
            className="group transition-all hover:scale-105"
          >
            <Link to="/">
              Start Designing Today
              <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="transition-all hover:bg-background/80"
          >
            <Link to="/typography">Explore Documentation</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown className="h-6 w-6 text-mocha" />
      </div>
    </div>
  );
};

export default HeroSection;
