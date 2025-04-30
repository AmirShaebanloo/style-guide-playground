
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronDown, 
  MousePointerClick, 
  LayoutList, 
  GridIcon,
  Palette,
  Component,
  Code,
  Smartphone
} from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}

const FeatureCard = ({ title, description, icon, color, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Add staggered animation delay based on index
  const animationDelay = 0.1 + index * 0.1;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: animationDelay }}
    >
      <Card 
        className={`
          group overflow-hidden transition-all duration-300 
          hover:shadow-lg hover:-translate-y-2 border-t-4 
          ${isHovered ? 'shadow-lg' : 'shadow-md'}
        `} 
        style={{ borderTopColor: color }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6">
          <div 
            className={`
              h-16 w-16 rounded-lg flex items-center justify-center mb-6
              transition-all duration-500 
              ${isHovered ? 'scale-110 rotate-3' : ''}
            `}
            style={{ 
              backgroundColor: `${color}20`,
              boxShadow: isHovered ? `0 10px 30px -10px ${color}80` : 'none'
            }}
          >
            <div className="text-3xl" style={{ color }}>{icon}</div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-3 transition-all duration-300"
              style={{ color: isHovered ? color : '' }}>
            {title}
          </h3>
          
          <p className="text-muted-foreground transition-all duration-300">
            {description}
          </p>
          
          {isHovered && (
            <div className="mt-4 h-1 w-full bg-gradient-to-r from-transparent via-mocha to-transparent animate-pulse"></div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Typography",
      description: "Carefully crafted type scales and styles for perfect readability and hierarchy across interfaces.",
      icon: <LayoutList className="h-8 w-8" />,
      color: "#A47864" // Mocha
    },
    {
      title: "Color Palette",
      description: "Cohesive and accessible color system designed for brand expression and user experience.",
      icon: <Palette className="h-8 w-8" />,
      color: "#4CAF50" // Verdant
    },
    {
      title: "Components",
      description: "Ready-to-use UI components built for flexibility, consistency and developer experience.",
      icon: <Component className="h-8 w-8" />,
      color: "#BF1922" // Cherry
    },
    {
      title: "Responsive Design",
      description: "Fully responsive system that works beautifully across all devices and screen sizes.",
      icon: <Smartphone className="h-8 w-8" />,
      color: "#1A1A1A" // Midnight
    },
    {
      title: "Developer Tools",
      description: "Comprehensive API documentation with code snippets and interactive examples.",
      icon: <Code className="h-8 w-8" />,
      color: "#A47864" // Mocha
    },
    {
      title: "Interactive UX",
      description: "Thoughtfully designed interactions and animations that elevate user experience.",
      icon: <MousePointerClick className="h-8 w-8" />,
      color: "#4CAF50" // Verdant
    },
  ];

  return (
    <section className="py-28 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 to-slate-100"></div>
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMjBMMjAgMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-mocha/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-verdant/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            Design System Features
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-mocha/30 via-cherry to-mocha/30"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive toolkit provides everything you need to create beautiful, 
            consistent, and accessible user interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
