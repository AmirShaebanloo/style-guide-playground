
import { DocLayout } from "@/components/layout/DocLayout";
import { ColorCard } from "@/components/color/ColorCard";

const primaryColor = {
  name: "Mocha Mousse",
  hex: "#A47864",
  description: "Primary color for main UI elements like buttons, links, and headers.",
  usage: [
    "Use for primary buttons and calls-to-action (CTA).",
    "Apply to primary navigation elements.",
    "Use for links and interactive elements.",
  ],
};

const secondaryColor = {
  name: "Verdant Green",
  hex: "#4CAF50", 
  description: "Secondary color for backgrounds, secondary buttons, and highlights.",
  usage: [
    "Use for secondary actions and status indicators.",
    "Apply to success states and confirmations.",
    "Use for progress indicators.",
  ],
};

const accentColor = {
  name: "Cherry Red",
  hex: "#BF1922",
  description: "Accent color for alerts, notifications, and danger buttons.",
  usage: [
    "Use for critical alerts and warnings.",
    "Apply to error states and destructive actions.",
    "Use sparingly to draw attention to important elements.",
  ],
};

const textColor = {
  name: "Midnight Charcoal",
  hex: "#1A1A1A",
  description: "Default text color for body content.",
  usage: [
    "Use for body text and dark UI components.",
    "Apply to headings and important text.",
    "Use for high contrast text on light backgrounds.",
  ],
};

const neutralColors = [
  {
    name: "Light Gray",
    hex: "#F5F5F5",
    usage: ["Background color", "Container backgrounds"],
  },
  {
    name: "Medium Gray",
    hex: "#E0E0E0",
    usage: ["Borders", "Dividers"],
  },
  {
    name: "Dark Gray",
    hex: "#757575",
    usage: ["Secondary text", "Disabled states"],
  },
  {
    name: "Off White",
    hex: "#FAFAFA",
    usage: ["Page backgrounds", "Card backgrounds"],
  },
];

export default function ColorPage() {
  return (
    <DocLayout>
      <div>
        <h1 className="text-4xl font-bold mb-2">Color Palette</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Comprehensive guidelines for using colors in the design system
        </p>

        <section id="primary-color" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Primary Color</h2>
          <ColorCard
            name={primaryColor.name}
            hex={primaryColor.hex}
            description={primaryColor.description}
            usage={primaryColor.usage}
            className="max-w-md"
          />
        </section>

        <section id="secondary-color" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Secondary Color</h2>
          <ColorCard
            name={secondaryColor.name}
            hex={secondaryColor.hex}
            description={secondaryColor.description}
            usage={secondaryColor.usage}
            className="max-w-md"
          />
        </section>

        <section id="accent-color" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Accent Color</h2>
          <ColorCard
            name={accentColor.name}
            hex={accentColor.hex}
            description={accentColor.description}
            usage={accentColor.usage}
            className="max-w-md"
          />
        </section>

        <section id="text-color" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Text Color</h2>
          <ColorCard
            name={textColor.name}
            hex={textColor.hex}
            description={textColor.description}
            usage={textColor.usage}
            className="max-w-md"
          />
        </section>

        <section id="neutral-colors" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Neutral Colors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neutralColors.map((color) => (
              <ColorCard
                key={color.name}
                name={color.name}
                hex={color.hex}
                usage={color.usage}
              />
            ))}
          </div>
        </section>

        <section id="usage-guidelines" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Usage Guidelines</h2>
          <div className="prose">
            <h3 className="text-xl font-semibold mb-3">Color Accessibility</h3>
            <p className="mb-4">
              Ensure all color combinations meet WCAG 2.1 AA standards with a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Color Proportions</h3>
            <p className="mb-4">
              Follow the 60-30-10 rule: 60% primary colors, 30% secondary colors, and 10% accent colors.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Color Combinations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-mocha text-white rounded-md">Primary on Dark</div>
              <div className="p-4 bg-white text-mocha border rounded-md">Primary on Light</div>
              <div className="p-4 bg-verdant text-white rounded-md">Secondary on Dark</div>
              <div className="p-4 bg-white text-verdant border rounded-md">Secondary on Light</div>
            </div>
          </div>
        </section>
      </div>
    </DocLayout>
  );
}
