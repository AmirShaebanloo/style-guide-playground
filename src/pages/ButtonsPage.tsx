
import { DocLayout } from "@/components/layout/DocLayout";
import { Code } from "@/components/ui/code";
import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <DocLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Buttons</h1>
          <p className="text-muted-foreground">
            Buttons communicate actions that users can take and are typically placed within forms, dialogs, panels, and pages.
          </p>
        </div>

        {/* Button Types */}
        <section id="button-types" className="space-y-6 pt-4">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Button Types</h2>
          
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="space-y-4">
              <div className="p-6 border rounded-lg flex flex-col items-center justify-center space-y-4">
                <Button>Primary Button</Button>
              </div>
              <h3 className="font-medium">Primary Button</h3>
              <p className="text-sm text-muted-foreground">
                Used for primary actions and main CTAs. High visual emphasis.
              </p>
              <Code
                code='<Button>Primary Button</Button>'
                className="text-sm"
              />
            </div>
            
            <div className="space-y-4">
              <div className="p-6 border rounded-lg flex flex-col items-center justify-center space-y-4">
                <Button variant="outline">Secondary Button</Button>
              </div>
              <h3 className="font-medium">Secondary Button</h3>
              <p className="text-sm text-muted-foreground">
                Used for secondary actions with medium visual emphasis.
              </p>
              <Code
                code='<Button variant="outline">Secondary Button</Button>'
                className="text-sm"
              />
            </div>
            
            <div className="space-y-4">
              <div className="p-6 border rounded-lg flex flex-col items-center justify-center space-y-4">
                <Button variant="ghost">Ghost Button</Button>
              </div>
              <h3 className="font-medium">Ghost Button</h3>
              <p className="text-sm text-muted-foreground">
                Used for less important actions with minimal visual emphasis.
              </p>
              <Code
                code='<Button variant="ghost">Ghost Button</Button>'
                className="text-sm"
              />
            </div>
          </div>
        </section>

        {/* Button States */}
        <section id="button-states" className="space-y-6 pt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Button States</h2>
          
          <div className="grid gap-6 sm:grid-cols-4">
            <div className="space-y-2">
              <Button className="w-full">Default</Button>
              <p className="text-xs text-center text-muted-foreground">Default state</p>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full" disabled>Disabled</Button>
              <p className="text-xs text-center text-muted-foreground">Disabled state</p>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full focus-visible:ring-2 ring-offset-2">Focused</Button>
              <p className="text-xs text-center text-muted-foreground">Focus state</p>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full" data-state="loading">
                <span className="animate-pulse">Loading...</span>
              </Button>
              <p className="text-xs text-center text-muted-foreground">Loading state</p>
            </div>
          </div>
          
          <div className="mt-6 p-6 border rounded-lg">
            <h3 className="font-medium mb-4">Interactive Demo</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Hover, focus, and click the buttons below to see their different states.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Hover me</Button>
              <Button variant="outline">Hover me</Button>
              <Button variant="ghost">Hover me</Button>
              <Button variant="link">Hover me</Button>
            </div>
          </div>
        </section>

        {/* Button Sizes */}
        <section id="button-sizes" className="space-y-6 pt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Button Sizes</h2>
          
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="space-y-4">
              <div className="p-6 border rounded-lg flex flex-col items-center justify-center space-y-4">
                <Button size="sm">Small Button</Button>
              </div>
              <h3 className="font-medium">Small Button</h3>
              <p className="text-sm text-muted-foreground">
                Used for compact UIs with limited space.
              </p>
              <Code
                code='<Button size="sm">Small Button</Button>'
                className="text-sm"
              />
            </div>
            
            <div className="space-y-4">
              <div className="p-6 border rounded-lg flex flex-col items-center justify-center space-y-4">
                <Button>Default Button</Button>
              </div>
              <h3 className="font-medium">Default Button</h3>
              <p className="text-sm text-muted-foreground">
                Standard size for most use cases.
              </p>
              <Code
                code='<Button>Default Button</Button>'
                className="text-sm"
              />
            </div>
            
            <div className="space-y-4">
              <div className="p-6 border rounded-lg flex flex-col items-center justify-center space-y-4">
                <Button size="lg">Large Button</Button>
              </div>
              <h3 className="font-medium">Large Button</h3>
              <p className="text-sm text-muted-foreground">
                Used for main CTAs and important actions.
              </p>
              <Code
                code='<Button size="lg">Large Button</Button>'
                className="text-sm"
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="space-y-6 pt-6 pb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Best Practices</h2>
          
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="border rounded-lg p-6">
              <h3 className="font-medium mb-3">✅ Do</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Use meaningful and concise button labels</li>
                <li>Use primary buttons for the main action</li>
                <li>Place the primary action on the right in button groups</li>
                <li>Maintain consistent button sizes in the same context</li>
                <li>Use icons with labels to enhance understanding</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="font-medium mb-3">❌ Don't</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Use too many primary buttons on one page</li>
                <li>Use vague labels like "Click Here"</li>
                <li>Place too many buttons side by side</li>
                <li>Use similar colors for buttons with opposite actions</li>
                <li>Use disabled buttons without providing a reason</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border rounded-lg p-6">
            <h3 className="font-medium mb-4">Button Hierarchy Example</h3>
            <div className="p-6 border rounded-lg bg-gray-50">
              <div className="flex flex-wrap justify-end gap-4">
                <Button variant="ghost">Cancel</Button>
                <Button variant="outline">Save Draft</Button>
                <Button>Publish</Button>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              In this example, the "Publish" action is most important, followed by "Save Draft" and then "Cancel".
              The visual weight of each button reflects its importance in the workflow.
            </p>
          </div>
        </section>
      </div>
    </DocLayout>
  );
};

export default ButtonsPage;
