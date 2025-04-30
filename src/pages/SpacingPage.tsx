
import { DocLayout } from "@/components/layout/DocLayout";
import { Code } from "@/components/ui/code";

const SpacingPage = () => {
  const spacingValues = [4, 8, 12, 16, 24, 32, 48, 64];

  return (
    <DocLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Spacing System</h1>
          <p className="text-muted-foreground">
            Our spacing system helps maintain visual consistency throughout the application by using predefined spacing values.
          </p>
        </div>

        {/* Spacing Units */}
        <section id="spacing-units" className="space-y-6 pt-4">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Spacing Units</h2>
          
          <div className="prose max-w-none">
            <p>
              Our spacing system is based on a 4px unit. All spacing values are multiples of 4px to ensure consistency across the UI.
              This approach provides a harmonious visual rhythm throughout the application.
            </p>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Base Spacing Units</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {spacingValues.map((value) => (
                  <div key={value} className="flex flex-col items-center">
                    <div 
                      className="bg-mocha mb-2" 
                      style={{ width: `${value}px`, height: `${value}px` }}
                    />
                    <span className="text-sm">{value}px</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Code 
              code="/* Spacing values in Tailwind */
spacing: {
  1: '4px',   // 0.25rem 
  2: '8px',   // 0.5rem
  3: '12px',  // 0.75rem
  4: '16px',  // 1rem
  6: '24px',  // 1.5rem
  8: '32px',  // 2rem
  12: '48px', // 3rem
  16: '64px', // 4rem
}" 
            />
          </div>
        </section>

        {/* Margins and Paddings */}
        <section id="margins-paddings" className="space-y-6 pt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Margins and Paddings</h2>
          
          <p className="mb-6">
            Consistent margins and paddings help create visual rhythm and hierarchy in the UI. 
            Always use values from the spacing scale for margins and paddings.
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-4">Padding Examples</h3>
              <div className="space-y-6">
                <div className="border rounded-lg">
                  <div className="m-4 p-4 bg-mocha/10 border border-dashed border-mocha rounded">
                    <div className="bg-white p-4 rounded">
                      <p className="text-center">p-4 (16px padding)</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg">
                  <div className="m-4 p-6 bg-mocha/10 border border-dashed border-mocha rounded">
                    <div className="bg-white p-6 rounded">
                      <p className="text-center">p-6 (24px padding)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Margin Examples</h3>
              <div className="space-y-4 border p-8 rounded-lg bg-gray-50">
                <div className="bg-white p-2 rounded shadow">
                  <p className="text-center">First Element</p>
                </div>
                <div className="bg-white p-2 rounded shadow mt-4">
                  <p className="text-center">mt-4 (16px top margin)</p>
                </div>
                <div className="bg-white p-2 rounded shadow mt-8">
                  <p className="text-center">mt-8 (32px top margin)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Common Use Cases</h3>
            <ul className="space-y-3 list-disc pl-6">
              <li>Use <code>p-4</code> (16px) for component padding</li>
              <li>Use <code>p-6</code> (24px) for card elements</li>
              <li>Use <code>gap-4</code> (16px) between related items</li>
              <li>Use <code>gap-8</code> (32px) between unrelated sections</li>
              <li>Use <code>mb-4</code> (16px) after headings</li>
              <li>Use <code>my-8</code> (32px) between major sections</li>
            </ul>
          </div>
        </section>

        {/* Layout Spacing */}
        <section id="layout-spacing" className="space-y-6 pt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Layout Spacing</h2>
          
          <div className="prose max-w-none">
            <p>
              Layout spacing refers to the space between larger elements or sections in the UI.
              Consistent layout spacing helps create a visual hierarchy and improve the overall user experience.
            </p>
            
            <div className="mt-6 border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Container Padding</h3>
              <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <div className="bg-white border rounded-lg p-4">
                  <p className="text-center">Content Area</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Containers should have consistent padding to maintain spacing between content and edges:
              </p>
              <ul className="mt-2 list-disc pl-6 text-sm">
                <li>Mobile: 16px (p-4)</li>
                <li>Tablet: 24px (p-6)</li>
                <li>Desktop: 32px (p-8)</li>
              </ul>
            </div>

            <div className="mt-6 border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Grid Gutters</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-mocha/10 p-4 rounded text-center">
                    Item {i}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Grid gutters (gap between grid items) use the following values:
              </p>
              <ul className="mt-2 list-disc pl-6 text-sm">
                <li>Small gap: 8px (gap-2)</li>
                <li>Medium gap: 16px (gap-4)</li>
                <li>Large gap: 24px (gap-6)</li>
                <li>X-Large gap: 32px (gap-8)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Responsive Spacing */}
        <section id="responsive-spacing" className="space-y-6 pt-6 pb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Responsive Spacing</h2>
          
          <div className="prose max-w-none">
            <p>
              Spacing values should adjust based on screen size. On mobile devices, reduce spacing to make better use of limited screen real estate.
              On larger screens, increase spacing for better visual hierarchy and readability.
            </p>
            
            <div className="grid gap-8 mt-6 sm:grid-cols-3">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-3">Mobile</h4>
                <div className="space-y-2 text-sm">
                  <p>Section margin: 16px (my-4)</p>
                  <p>Card padding: 12px (p-3)</p>
                  <p>Grid gap: 8px (gap-2)</p>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-3">Tablet</h4>
                <div className="space-y-2 text-sm">
                  <p>Section margin: 24px (my-6)</p>
                  <p>Card padding: 16px (p-4)</p>
                  <p>Grid gap: 16px (gap-4)</p>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-3">Desktop</h4>
                <div className="space-y-2 text-sm">
                  <p>Section margin: 32px (my-8)</p>
                  <p>Card padding: 24px (p-6)</p>
                  <p>Grid gap: 24px (gap-6)</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Example of Responsive Spacing</h3>
              <Code 
                code='<div className="p-4 md:p-6 lg:p-8">
  <h2 className="mb-2 md:mb-4">Section Title</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
    <div className="p-3 md:p-4 lg:p-6 border rounded-lg">Item 1</div>
    <div className="p-3 md:p-4 lg:p-6 border rounded-lg">Item 2</div>
  </div>
</div>'
              />
            </div>
          </div>
        </section>
      </div>
    </DocLayout>
  );
};

export default SpacingPage;
