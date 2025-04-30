
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 px-4 bg-mocha text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl mb-10 opacity-90">
          Let's build something amazing together with our comprehensive design system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="group hover:scale-105 transition-all"
          >
            <Link to="/">
              Get Started
              <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white/20"
          >
            <Link to="/typography">Explore Documentation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
