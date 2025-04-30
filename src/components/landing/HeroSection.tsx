
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, MousePointerClick, Zap, Code } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate dynamic positions for background elements based on mouse and scroll
  const getBlobStyle = (baseX: number, baseY: number, scale: number = 1) => {
    return {
      left: `${baseX + mousePosition.x * 5}%`,
      top: `${baseY + mousePosition.y * 5 - scrollY * 0.03}%`,
      transform: `scale(${scale})`
    };
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden">
      {/* Animated background with parallax effect */}
      <div className="absolute inset-0 -z-10">
        {/* Dynamic gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-mocha/10 via-verdant/10 to-cherry/10 transition-opacity duration-1000"
          style={{ opacity: 0.8 + mousePosition.y * 0.2 }}
        ></div>
        
        {/* Interactive floating blobs */}
        <div 
          className="absolute w-[40vw] h-[40vw] rounded-full bg-mocha/5 animate-pulse blur-3xl"
          style={getBlobStyle(10, 30, 1 + mousePosition.x * 0.2)}
        ></div>
        <div 
          className="absolute w-[35vw] h-[35vw] rounded-full bg-verdant/8 animate-pulse blur-3xl"
          style={{...getBlobStyle(60, 60, 1 - mousePosition.y * 0.1), animationDelay: "1s"}}
        ></div>
        <div 
          className="absolute w-[25vw] h-[25vw] rounded-full bg-cherry/5 animate-pulse blur-3xl"
          style={{...getBlobStyle(40, 20, 1 + mousePosition.y * 0.15), animationDelay: "2s"}}
        ></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDYwdjYwSDB6Ii8+PHBhdGggZD0iTTYwIDBIMHY2MGg2MFYwem0tMiAyVjU4SDJWMmg1NnoiIGZpbGw9IiMxMTEiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      <div 
        className="relative z-10 max-w-5xl transition-all duration-700"
        style={{ 
          transform: `translateY(${scrollY * 0.05}px)`, 
          opacity: Math.max(0, 1 - scrollY * 0.002) 
        }}
      >
        {/* Floating design elements */}
        <div className="absolute -top-16 -left-16 text-mocha/20 animate-bounce">
          <Code size={64} />
        </div>
        <div className="absolute -bottom-20 -right-12 text-verdant/20 animate-pulse">
          <MousePointerClick size={48} />
        </div>
        <div className="absolute top-20 -right-20 text-cherry/20 animate-ping">
          <Zap size={32} />
        </div>
        
        {/* Main content with staggered animation */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-midnight mb-6 md:mb-8 opacity-0 animate-[fade-in_0.8s_0.2s_forwards]">
          <span className="block text-mocha relative">
            Design Systems Made
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-cherry animate-ping"></span>
          </span>
          <span className="block mt-2 relative">
            Simple and Beautiful
            <span className="w-full h-1 bg-gradient-to-r from-verdant/0 via-verdant to-verdant/0 absolute bottom-0 left-0 animate-[width_3s_ease-in-out_infinite]"></span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-8 md:mb-10 opacity-0 animate-[fade-in_0.8s_0.5s_forwards]">
          Create sleek, responsive, and visually consistent interfaces with ease.
          Our design system provides everything you need to build modern web experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fade-in_0.8s_0.8s_forwards]">
          <Button
            asChild 
            size="lg"
            className="group transition-all hover:scale-110 bg-gradient-to-r from-mocha to-cherry text-white shadow-lg hover:shadow-xl"
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
            className="transition-all hover:bg-background/80 border-2 hover:border-mocha"
          >
            <Link to="/typography">Explore Documentation</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex flex-col items-center opacity-0 animate-[fade-in_0.8s_1.2s_forwards]">
          <p className="text-sm text-mocha mb-2">Scroll to explore</p>
          <div className="h-12 w-6 rounded-full border-2 border-mocha flex items-start justify-center p-1">
            <div className="w-1.5 h-1.5 bg-mocha rounded-full animate-[bounce_1.5s_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
