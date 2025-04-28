
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] p-4">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-bold mb-6 text-mocha">Design System Documentation</h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          A comprehensive guide to our UI components, styles, and patterns for creating consistent user experiences.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <Link to="/typography" className="group">
            <div className="p-8 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-mocha">Typography</h2>
              <p className="text-muted-foreground">Text styles, headings, paragraphs, and more</p>
            </div>
          </Link>
          
          <Link to="/colors" className="group">
            <div className="p-8 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-mocha">Colors</h2>
              <p className="text-muted-foreground">Color palette, usage guidelines, and accessibility</p>
            </div>
          </Link>
          
          <Link to="/spacing" className="group">
            <div className="p-8 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-mocha">Spacing</h2>
              <p className="text-muted-foreground">Spacing system, margins, paddings, and layout</p>
            </div>
          </Link>
          
          <Link to="/shadows" className="group">
            <div className="p-8 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-mocha">Shadows & Radius</h2>
              <p className="text-muted-foreground">Shadow styles, border radius, and depth</p>
            </div>
          </Link>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Components</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button asChild>
            <Link to="/buttons">Buttons</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/inputs">Inputs</Link>
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-16">
          Version 1.0.0 • Last updated: April 28, 2025
        </p>
      </div>
    </div>
  );
};

export default Index;
