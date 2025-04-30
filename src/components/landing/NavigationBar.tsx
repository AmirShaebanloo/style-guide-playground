
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-lg font-bold text-mocha hover:opacity-80 transition-opacity"
          >
            Design System
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm text-gray-700 hover:text-mocha dark:text-gray-300 dark:hover:text-white relative group"
          >
            <span>Docs</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mocha transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/buttons"
            className="text-sm text-gray-700 hover:text-mocha dark:text-gray-300 dark:hover:text-white relative group"
          >
            <span>Components</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mocha transition-all group-hover:w-full"></span>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 hover:text-mocha dark:text-gray-300 dark:hover:text-white relative group"
          >
            <span>GitHub</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mocha transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className="group transition-all hover:scale-105"
          >
            <Link to="/">
              Start Using
              <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
