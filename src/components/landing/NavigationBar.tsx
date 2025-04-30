
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      const isScrolled = currentScrollY > 50;
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !mobileMenuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-lg font-bold text-mocha hover:opacity-80 transition-opacity flex items-center"
          >
            <span className="text-2xl mr-2">⬢</span>
            <span className="relative group">
              Design System
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-mocha to-cherry group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm text-gray-700 hover:text-mocha dark:text-gray-300 dark:hover:text-white relative group overflow-hidden"
          >
            <span>Docs</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-mocha to-verdant transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-300"></span>
          </Link>
          <Link
            to="/buttons"
            className="text-sm text-gray-700 hover:text-mocha dark:text-gray-300 dark:hover:text-white relative group overflow-hidden"
          >
            <span>Components</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-verdant to-cherry transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-300"></span>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 hover:text-mocha dark:text-gray-300 dark:hover:text-white relative group overflow-hidden"
          >
            <span>GitHub</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cherry to-mocha transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-300"></span>
          </a>
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className="group transition-all hover:scale-105 hover:shadow-md bg-gradient-to-r from-mocha to-cherry text-white"
          >
            <Link to="/">
              Start Using
              <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
            </Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="p-1"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } ${
          scrolled ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md" : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          <Link
            to="/"
            className="block py-2 text-base font-medium text-gray-700 hover:text-mocha dark:text-gray-300 dark:hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Docs
          </Link>
          <Link
            to="/buttons"
            className="block py-2 text-base font-medium text-gray-700 hover:text-mocha dark:text-gray-300 dark:hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Components
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-base font-medium text-gray-700 hover:text-mocha dark:text-gray-300 dark:hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            GitHub
          </a>
          <Button
            asChild
            className="w-full mt-4 group"
          >
            <Link 
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Using
              <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
