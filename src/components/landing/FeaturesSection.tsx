
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronDown, 
  MousePointerClick, 
  LayoutList, 
  GridIcon 
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const FeatureCard = ({ title, description, icon, color }: FeatureCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-t-4" style={{ borderTopColor: color }}>
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${color}20` }}>
          <div className="text-2xl" style={{ color }}>{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Typography",
      description: "Carefully crafted type scales and styles for perfect readability and hierarchy across interfaces.",
      icon: <LayoutList className="h-6 w-6" />,
      color: "#A47864" // Mocha
    },
    {
      title: "Color Palette",
      description: "Cohesive and accessible color system designed for brand expression and user experience.",
      icon: <GridIcon className="h-6 w-6" />,
      color: "#4CAF50" // Verdant
    },
    {
      title: "Components",
      description: "Ready-to-use UI components built for flexibility, consistency and developer experience.",
      icon: <MousePointerClick className="h-6 w-6" />,
      color: "#BF1922" // Cherry
    },
    {
      title: "Responsive Design",
      description: "Fully responsive system that works beautifully across all devices and screen sizes.",
      icon: <ChevronDown className="h-6 w-6" />,
      color: "#1A1A1A" // Midnight
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design System Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive toolkit provides everything you need to create beautiful, 
            consistent, and accessible user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
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
