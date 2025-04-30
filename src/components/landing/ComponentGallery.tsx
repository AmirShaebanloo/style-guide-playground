
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ComponentCardProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  link: string;
}

const ComponentCard = ({ title, description, preview, link }: ComponentCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center bg-slate-50 rounded-md p-6">
        {preview}
      </CardContent>
      <CardFooter className="pt-6">
        <Button asChild variant="outline" className="w-full">
          <Link to={link}>View Documentation</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ComponentGallery = () => {
  const [activeVariant, setActiveVariant] = useState("default");

  const handleSetVariant = (variant: string) => {
    setActiveVariant(variant);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Component Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our library of carefully crafted components designed for a seamless 
            user experience and developer productivity.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <ComponentCard
                title="Buttons"
                description="Versatile button components for different actions and emphasis levels"
                preview={
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant={activeVariant === "default" ? "default" : "outline"}
                        onClick={() => handleSetVariant("default")}
                      >
                        Default
                      </Button>
                      <Button 
                        variant={activeVariant === "secondary" ? "secondary" : "outline"}
                        onClick={() => handleSetVariant("secondary")}
                      >
                        Secondary
                      </Button>
                      <Button 
                        variant={activeVariant === "destructive" ? "destructive" : "outline"}
                        onClick={() => handleSetVariant("destructive")}
                      >
                        Destructive
                      </Button>
                    </div>
                    <Button variant={activeVariant} size="lg">
                      {activeVariant.charAt(0).toUpperCase() + activeVariant.slice(1)} Button
                    </Button>
                  </div>
                }
                link="/buttons"
              />
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <ComponentCard
                title="Inputs"
                description="Form elements designed for optimal user experience"
                preview={
                  <div className="flex flex-col gap-4 w-full max-w-xs">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        placeholder="Enter your password"
                        type="password"
                      />
                    </div>
                  </div>
                }
                link="/inputs"
              />
            </CarouselItem>

            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <ComponentCard
                title="Cards"
                description="Versatile container components for organizing content"
                preview={
                  <Card className="w-full max-w-xs">
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">This is a sample card with some content inside.</p>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" className="w-full">Action</Button>
                    </CardFooter>
                  </Card>
                }
                link="/typography"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default ComponentGallery;
