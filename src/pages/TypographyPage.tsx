
import { DocLayout } from "@/components/layout/DocLayout";
import { Code } from "@/components/ui/code";

const TypographyPage = () => {
  return (
    <DocLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Typography</h1>
          <p className="text-muted-foreground">
            A comprehensive guide to our typography system, ensuring consistent text styling across the application.
          </p>
        </div>

        {/* Typography Styles */}
        <section id="typography-styles" className="space-y-6 pt-4">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Typography Styles</h2>
          
          <div className="space-y-8">
            <div className="border rounded-lg p-6">
              <h1 className="text-5xl font-bold leading-tight mb-2">H1 Heading</h1>
              <p className="text-sm text-muted-foreground">
                48px / Bold / Line Height 1.2
              </p>
              <Code 
                code='<h1 className="text-5xl font-bold leading-tight">H1 Heading</h1>' 
                className="mt-4" 
              />
            </div>

            <div className="border rounded-lg p-6">
              <h2 className="text-4xl font-bold leading-tight mb-2">H2 Heading</h2>
              <p className="text-sm text-muted-foreground">
                36px / Bold / Line Height 1.2
              </p>
              <Code 
                code='<h2 className="text-4xl font-bold leading-tight">H2 Heading</h2>' 
                className="mt-4" 
              />
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-3xl font-bold leading-tight mb-2">H3 Heading</h3>
              <p className="text-sm text-muted-foreground">
                30px / Bold / Line Height 1.2
              </p>
              <Code 
                code='<h3 className="text-3xl font-bold leading-tight">H3 Heading</h3>' 
                className="mt-4" 
              />
            </div>

            <div className="border rounded-lg p-6">
              <p className="text-base leading-relaxed mb-2">
                This is regular body text. It should be used for most paragraph content across the application. 
                It has a comfortable line height and readable font size that works well across different screen sizes.
              </p>
              <p className="text-sm text-muted-foreground">
                16px / Regular / Line Height 1.5
              </p>
              <Code 
                code='<p className="text-base leading-relaxed">Body text content</p>' 
                className="mt-4" 
              />
            </div>

            <div className="border rounded-lg p-6">
              <p className="text-sm leading-relaxed mb-2">
                This is small text used for less important content, captions, footnotes and supporting information.
              </p>
              <p className="text-sm text-muted-foreground">
                12px / Regular / Line Height 1.4
              </p>
              <Code 
                code='<p className="text-sm leading-relaxed">Small text content</p>' 
                className="mt-4" 
              />
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section id="usage-guidelines" className="space-y-6 pt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Usage Guidelines</h2>
          
          <div className="grid gap-6">
            <div className="border rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3">H1 - Main Headings</h4>
              <p>
                Use H1 for page titles and main headings. Each page should only have one H1 element for 
                proper accessibility and SEO hierarchy.
              </p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3">H2 - Section Headings</h4>
              <p>
                Use H2 for major section headings within a page. They help organize content and improve 
                scannability for users.
              </p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3">H3 - Subsection Headings</h4>
              <p>
                Use H3 for subsections within major sections. These provide further content organization 
                and hierarchy.
              </p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3">Body Text</h4>
              <p>
                Use for main content paragraphs. This is the default text style for most content on the site.
              </p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3">Small Text</h4>
              <p>
                Use for auxiliary information like captions, footnotes, and helper text. Avoid using 
                small text for important information.
              </p>
            </div>
          </div>
        </section>

        {/* Responsive Typography */}
        <section id="responsive-typography" className="space-y-6 pt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Responsive Typography</h2>
          
          <div className="prose max-w-none">
            <p>
              Our typography system is built with responsive design in mind, using relative units (rem) 
              for font sizing that scale according to the user's device and preferences.
            </p>
            
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="border rounded-lg p-6">
                <h4 className="font-medium mb-2">Mobile</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>H1: 2.5rem (40px)</li>
                  <li>H2: 2rem (32px)</li>
                  <li>H3: 1.5rem (24px)</li>
                  <li>Body: 1rem (16px)</li>
                  <li>Small: 0.75rem (12px)</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h4 className="font-medium mb-2">Tablet</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>H1: 2.75rem (44px)</li>
                  <li>H2: 2.25rem (36px)</li>
                  <li>H3: 1.75rem (28px)</li>
                  <li>Body: 1rem (16px)</li>
                  <li>Small: 0.75rem (12px)</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h4 className="font-medium mb-2">Desktop</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>H1: 3rem (48px)</li>
                  <li>H2: 2.25rem (36px)</li>
                  <li>H3: 1.875rem (30px)</li>
                  <li>Body: 1rem (16px)</li>
                  <li>Small: 0.75rem (12px)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <Code 
                code="/* Using rem units ensures typography scales with user preferences */
.heading-1 {
  font-size: 2.5rem; /* Mobile */
}

@media (min-width: 768px) {
  .heading-1 {
    font-size: 2.75rem; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .heading-1 {
    font-size: 3rem; /* Desktop */
  }
}" 
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="space-y-6 pt-6 pb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Best Practices</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border rounded-lg p-6">
              <h4 className="font-medium mb-3">Line Height</h4>
              <p className="mb-3">
                Maintain appropriate line height to improve readability. For body text, use a line height 
                of 1.5-1.6 times the font size. For headings, use a tighter line height of 1.2-1.3.
              </p>
              <div className="mt-4 grid gap-4 grid-cols-2">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="leading-tight mb-1">Line height: tight (1.2)</p>
                  <p className="text-xs text-muted-foreground">Good for headings</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="leading-relaxed mb-1">Line height: relaxed (1.5)</p>
                  <p className="text-xs text-muted-foreground">Good for body text</p>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-6">
              <h4 className="font-medium mb-3">Letter Spacing</h4>
              <p className="mb-3">
                For better readability, use default letter spacing for body text. For headings, 
                slightly tighter letter spacing can create a more polished look.
              </p>
              <div className="mt-4 grid gap-4 grid-cols-2">
                <div className="p-3 bg-gray-50 rounded">
                  <p className="tracking-tight mb-1">Tight (-0.025em)</p>
                  <p className="text-xs text-muted-foreground">Good for large headings</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <p className="tracking-normal mb-1">Normal (0em)</p>
                  <p className="text-xs text-muted-foreground">Good for body text</p>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-6">
              <h4 className="font-medium mb-3">Text Width</h4>
              <p>
                Keep line lengths between 45-75 characters for optimal readability. Too short makes 
                reading choppy, too long makes it difficult to track from the end of one line to the 
                beginning of the next.
              </p>
            </div>
            
            <div className="border rounded-lg p-6">
              <h4 className="font-medium mb-3">Color Contrast</h4>
              <p>
                Ensure that text has sufficient contrast against its background to meet accessibility 
                standards. Text should have a contrast ratio of at least 4.5:1 for normal text and 3:1 for 
                large text.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DocLayout>
  );
};

export default TypographyPage;
