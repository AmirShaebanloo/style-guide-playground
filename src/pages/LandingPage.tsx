
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mocha">
            <span className="block">Modern Design System</span>
            <span className="block mt-2 text-slate-700">for Professional Web Apps</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of reusable components, guidelines, and principles 
            that helps designers and developers build consistent, accessible interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/typography">
                Explore Documentation
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/buttons">View Components</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Design System Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Typography"
            description="Consistent type scales and styles to ensure readability and hierarchy across your interfaces."
            link="/typography"
            bgColor="bg-gradient-to-br from-slate-50 to-slate-100"
          />
          <FeatureCard 
            title="Colors"
            description="Carefully selected color palette with accessibility considerations for brand expression."
            link="/colors"
            bgColor="bg-gradient-to-br from-slate-50 to-slate-100"
          />
          <FeatureCard 
            title="Spacing"
            description="Predictable spacing system that creates rhythm and consistency in your layouts."
            link="/spacing"
            bgColor="bg-gradient-to-br from-slate-50 to-slate-100"
          />
          <FeatureCard 
            title="Shadows & Radius"
            description="Elevation system to establish visual hierarchy and component boundaries."
            link="/shadows"
            bgColor="bg-gradient-to-br from-slate-50 to-slate-100"
          />
          <FeatureCard 
            title="Buttons"
            description="Various button styles for different levels of emphasis and user interactions."
            link="/buttons"
            bgColor="bg-gradient-to-br from-slate-50 to-slate-100"
          />
          <FeatureCard 
            title="Inputs"
            description="Form controls designed for optimal user experience and accessibility."
            link="/inputs"
            bgColor="bg-gradient-to-br from-slate-50 to-slate-100"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Our Design System?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-mocha/10 text-mocha flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><path d="M13 2H11L3 14H11L9 22L21 10H13L13 2Z"/></svg>
              </div>
              <h3 className="text-xl font-semibold">Faster Development</h3>
              <p className="text-muted-foreground">Speed up your workflow with pre-built components and established patterns.</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-verdant/10 text-verdant flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="text-xl font-semibold">Design Consistency</h3>
              <p className="text-muted-foreground">Maintain visual and behavioral consistency across your entire product.</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-cherry/10 text-cherry flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <h3 className="text-xl font-semibold">Accessibility Built-in</h3>
              <p className="text-muted-foreground">All components follow accessibility best practices for inclusive user experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-mocha text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to build better interfaces?</h2>
          <p className="text-lg opacity-90">
            Start using our design system today to create cohesive, accessible, and beautiful user experiences.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-4">
            <Link to="/">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© 2025 Design System Documentation</p>
          <div className="flex gap-8">
            <Link to="/typography" className="hover:text-white transition-colors">Typography</Link>
            <Link to="/colors" className="hover:text-white transition-colors">Colors</Link>
            <Link to="/buttons" className="hover:text-white transition-colors">Components</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  link: string;
  bgColor?: string;
}

const FeatureCard = ({ title, description, link, bgColor = "bg-white" }: FeatureCardProps) => {
  return (
    <Card className={`${bgColor} border hover:border-mocha/30 hover:shadow-md transition-all`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="ghost" className="group">
          <Link to={link}>
            Learn More
            <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LandingPage;
