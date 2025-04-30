
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Palette, 
  Component, 
  MousePointerClick, 
  Code, 
  Layout,
  Layers,
  ChevronRight,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    // Reset active section when component mounts
    setActiveSection(null);
  }, []);

  // Categories with their respective components
  const categories = [
    {
      title: "Foundations",
      description: "The building blocks of our design system",
      icon: <Layers className="h-8 w-8" />,
      items: [
        { name: "Typography", path: "/typography", color: "bg-mocha/10 hover:bg-mocha/20" },
        { name: "Colors", path: "/colors", color: "bg-verdant/10 hover:bg-verdant/20" },
        { name: "Spacing", path: "/spacing", color: "bg-cherry/10 hover:bg-cherry/20" },
        { name: "Shadows & Radius", path: "/shadows", color: "bg-midnight/10 hover:bg-midnight/20" },
      ],
    },
    {
      title: "Components",
      description: "Ready-to-use UI building blocks",
      icon: <Component className="h-8 w-8" />,
      items: [
        { name: "Buttons", path: "/buttons", color: "bg-mocha/10 hover:bg-mocha/20" },
        { name: "Inputs", path: "/inputs", color: "bg-verdant/10 hover:bg-verdant/20" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mocha/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-verdant/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMjBMMjAgMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-6 inline-block"
            >
              <div className="h-24 w-24 rounded-xl bg-gradient-to-br from-mocha to-cherry mx-auto flex items-center justify-center shadow-lg">
                <Layout className="h-12 w-12 text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-midnight relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Design System
              <div className="h-1.5 w-full bg-gradient-to-r from-mocha via-cherry to-verdant mt-2"></div>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              A comprehensive guide to our UI components, styles, and patterns for creating
              beautiful, consistent user experiences.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 flex-wrap justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Button asChild className="group bg-gradient-to-r from-mocha to-cherry text-white shadow-md hover:shadow-lg">
                <Link to="/landing">
                  Explore Landing Page
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </Button>
            </motion.div>
          </div>
          
          {/* Main content - Categories */}
          <div className="mt-16 md:mt-24">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1), duration: 0.7 }}
              >
                <div 
                  className={`p-6 rounded-xl border bg-white shadow-sm cursor-pointer transition-all ${
                    activeSection === index ? "shadow-md" : ""
                  }`}
                  onClick={() => setActiveSection(activeSection === index ? null : index)}
                >
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-mocha/10 to-cherry/10">
                      {category.icon}
                    </div>
                    <div className="ml-4 flex-grow">
                      <h2 className="text-2xl font-semibold">{category.title}</h2>
                      <p className="text-slate-500">{category.description}</p>
                    </div>
                    <ChevronRight className={`h-6 w-6 text-slate-400 transition-transform ${
                      activeSection === index ? "rotate-90" : ""
                    }`} />
                  </div>
                </div>
                
                {/* Items grid */}
                <motion.div 
                  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 overflow-hidden`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeSection === index ? "auto" : 0,
                    opacity: activeSection === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {category.items.map((item) => (
                    <Link 
                      to={item.path} 
                      key={item.name}
                      className={`p-6 rounded-lg ${item.color} hover:shadow-md transition-all flex items-center justify-between`}
                    >
                      <span className="font-medium">{item.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-60" />
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Featured component */}
          <motion.div 
            className="mt-20 rounded-2xl overflow-hidden border bg-white shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <div className="bg-gradient-to-r from-mocha to-cherry p-6 text-white">
              <h2 className="text-2xl font-bold">Featured Component</h2>
              <p>Check out our newest addition to the design system</p>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Interactive Buttons</h3>
                  <p className="text-slate-500 mb-4">
                    Our button components are fully customizable, accessible, and designed for maximum user engagement.
                  </p>
                  <Button asChild>
                    <Link to="/buttons">View Documentation</Link>
                  </Button>
                </div>
                
                <div className="flex-1 flex flex-wrap gap-4 justify-center">
                  <Button>Default Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Footer */}
          <motion.div 
            className="mt-20 text-center text-slate-500 border-t pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.7 }}
          >
            <p>Version 1.1.0 • Last updated: April 30, 2025</p>
            <p className="mt-2">Designed and built with ♥ by the Design Team</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
