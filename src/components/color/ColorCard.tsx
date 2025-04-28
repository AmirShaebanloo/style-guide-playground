
import { cn } from "@/lib/utils";
import { Code } from "@/components/ui/code";
import { useState } from "react";
import { Check } from "lucide-react";

interface ColorCardProps {
  name: string;
  hex: string;
  description?: string;
  usage?: string[];
  className?: string;
}

export function ColorCard({ name, hex, description, usage, className }: ColorCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const textColor = getContrastYIQ(hex);

  return (
    <div className={cn("border rounded-lg overflow-hidden", className)}>
      <div
        className="h-32 flex flex-col justify-between p-4 cursor-pointer transition-transform hover:scale-[1.02]"
        style={{ backgroundColor: hex, color: textColor }}
        onClick={() => copyToClipboard(hex)}
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">{name}</span>
          <span className="text-sm opacity-80">{hex}</span>
        </div>
        <div className="flex justify-end">
          {copied ? (
            <span className="flex items-center text-sm">
              <Check className="h-3 w-3 mr-1" /> Copied!
            </span>
          ) : (
            <span className="text-xs opacity-80">Click to copy</span>
          )}
        </div>
      </div>
      <div className="p-4 bg-white">
        {description && <p className="text-sm mb-3">{description}</p>}
        {usage && usage.length > 0 && (
          <div className="mb-3">
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Usage</h4>
            <ul className="text-sm space-y-1 list-disc pl-4">
              {usage.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <Code
          code={`<div className="bg-[${hex}]">Content</div>`}
          language="jsx"
          className="text-xs mt-2"
        />
      </div>
    </div>
  );
}

// Function to determine if text should be white or black based on background color
function getContrastYIQ(hexcolor: string): string {
  // Remove # if present
  hexcolor = hexcolor.replace("#", "");
  
  // Convert to RGB
  const r = parseInt(hexcolor.substr(0, 2), 16);
  const g = parseInt(hexcolor.substr(2, 2), 16);
  const b = parseInt(hexcolor.substr(4, 2), 16);
  
  // Calculate YIQ value
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  
  // Return black or white depending on YIQ value
  return yiq >= 128 ? "#000000" : "#FFFFFF";
}
