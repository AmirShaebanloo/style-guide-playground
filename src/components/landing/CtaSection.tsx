import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, Zap, Code, Component } from "lucide-react";
import { motion } from "framer-motion";

const CtaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-28 px-4 relative overflow-hidden"
    >
      {/* Creative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mocha via-mocha to-[#7A573E]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Animated icons */}
      <div className="absolute left-10 top-20 text-white/5 animate-spin-slow">
        <Code size={80} />
      </div>
      <div className="absolute right-10 bottom-20 text-white/5 animate-bounce-slow">
        <Component size={80} />
      </div>
      <div className="absolute right-1/4 top-1/4 text-white/5 animate-pulse">
        <Zap size={60} />
      </div>
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
          Ready to get started?
        </h2>
        <p className="text-xl mb-12 text-white/90">
          Let's build something amazing together with our comprehensive design system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            asChild
            size="sm"
            className="group hover:scale-105 transition-all bg-white text-mocha hover:bg-white/90 text-base px-5 py-3 h-auto shadow-xl"
          >
            <Link to="/typography">
              Get Started
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className="bg-transparent border-2 border-white text-white hover:bg-white/20 text-base px-5 py-3 h-auto"
          >
            <Link to="/typography">Explore Documentation</Link>
          </Button>
        </div>
        
        {/* Decorative element */}
        <div className="mt-16 h-1 w-32 bg-white/30 mx-auto rounded-full"></div>
      </motion.div>
      
      <style>
        {`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-60px) translateX(30px);
          }
          66% {
            transform: translateY(-30px) translateX(-30px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  );
};

export default CtaSection;
