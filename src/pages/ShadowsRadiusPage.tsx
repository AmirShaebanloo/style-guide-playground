
import { DocLayout } from "@/components/layout/DocLayout";
import { Code } from "@/components/ui/code";

const ShadowsRadiusPage = () => {
  return (
    <DocLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Shadows & Border Radius</h1>
          <p className="text-muted-foreground">
            Consistent use of shadows and border radius helps create depth, hierarchy, and a cohesive visual language.
          </p>
        </div>

        {/* Shadow Styles */}
        <section id="shadow-styles" className="space-y-6 pt-4">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Shadow Styles</h2>
          
          <p className="mb-6">
            Shadows create depth and elevation in the UI. Use them consistently to indicate hierarchy and interactivity.
          </p>
          
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="w-full h-32 bg-white rounded-lg shadow-sm border flex items-center justify-center mb-4">
                <span>Small Shadow</span>
              </div>
              <Code 
                code="shadow-sm" 
                className="w-full text-sm"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                0px 1px 2px rgba(0,0,0,0.05)
              </p>
              <p className="mt-1 text-sm">Use for: Subtle highlights, buttons</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-full h-32 bg-white rounded-lg shadow border flex items-center justify-center mb-4">
                <span>Medium Shadow</span>
              </div>
              <Code 
                code="shadow" 
                className="w-full text-sm"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                0px 4px 6px rgba(0,0,0,0.1)
              </p>
              <p className="mt-1 text-sm">Use for: Cards, dropdowns</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-full h-32 bg-white rounded-lg shadow-lg border flex items-center justify-center mb-4">
                <span>Large Shadow</span>
              </div>
              <Code 
                code="shadow-lg" 
                className="w-full text-sm"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                0px 10px 15px rgba(0,0,0,0.15)
              </p>
              <p className="mt-1 text-sm">Use for: Modals, popovers</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Interactive Shadows</h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="border p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <button className="px-4 py-2 bg-mocha text-white rounded-md shadow transition-shadow hover:shadow-md">
                      Hover me
                    </button>
                  </div>
                  <Code 
                    code='<button className="shadow hover:shadow-md transition-shadow">
  Button Text
</button>' 
                    className="text-sm"
                  />
                </div>
                <p className="mt-2 text-sm text-center">
                  Shadows can enhance hover states to indicate interactivity
                </p>
              </div>
              
              <div>
                <div className="border p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <div className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-center">Hover this card</p>
                    </div>
                  </div>
                  <Code 
                    code='<div className="shadow-md hover:shadow-lg transition-shadow">
  Card Content
</div>' 
                    className="text-sm"
                  />
                </div>
                <p className="mt-2 text-sm text-center">
                  Apply increasing shadow depth on hover for interactive elements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section id="border-radius" className="space-y-6 pt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Border Radius</h2>
          
          <p className="mb-6">
            Border radius softens edges and creates a more approachable, modern UI. 
            Use border radius consistently across similar components.
          </p>
          
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="w-full h-32 bg-mocha/10 rounded-sm flex items-center justify-center mb-4">
                <span>Small Radius</span>
              </div>
              <Code 
                code="rounded-sm" 
                className="w-full text-sm"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                2px
              </p>
              <p className="mt-1 text-sm">Use for: Tags, badges</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-full h-32 bg-mocha/10 rounded-md flex items-center justify-center mb-4">
                <span>Medium Radius</span>
              </div>
              <Code 
                code="rounded-md" 
                className="w-full text-sm"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                6px
              </p>
              <p className="mt-1 text-sm">Use for: Buttons, input fields</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-full h-32 bg-mocha/10 rounded-lg flex items-center justify-center mb-4">
                <span>Large Radius</span>
              </div>
              <Code 
                code="rounded-lg" 
                className="w-full text-sm"
              />
              <p className="mt-2 text-sm text-muted-foreground">
                8px
              </p>
              <p className="mt-1 text-sm">Use for: Cards, modals</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Full Radius</h3>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-mocha/10 rounded-full flex items-center justify-center mb-4">
                </div>
                <Code 
                  code="rounded-full" 
                  className="w-full text-sm"
                />
                <p className="mt-2 text-sm">Use for: Avatars, floating action buttons</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-32 h-12 bg-mocha/10 rounded-full flex items-center justify-center mb-4">
                  <span>Pill Button</span>
                </div>
                <Code 
                  code="rounded-full" 
                  className="w-full text-sm"
                />
                <p className="mt-2 text-sm">Use for: Pill buttons, tags</p>
              </div>
            </div>
          </div>
        </section>

        {/* Examples in Use */}
        <section id="examples-in-use" className="space-y-6 pt-6 pb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Examples in Use</h2>
          
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-4">Buttons</h3>
              <div className="p-6 border rounded-lg bg-gray-50">
                <div className="space-y-4">
                  <button className="w-full py-2 px-4 bg-mocha text-white rounded-md shadow hover:shadow-md transition-all">
                    Primary Button
                  </button>
                  
                  <button className="w-full py-2 px-4 bg-white border border-mocha/30 text-mocha rounded-md shadow-sm hover:shadow transition-all">
                    Secondary Button
                  </button>
                  
                  <button className="w-full py-2 px-4 bg-white border border-red-500/30 text-red-500 rounded-md shadow-sm hover:shadow transition-all">
                    Danger Button
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <Code 
                  code='<button className="rounded-md shadow hover:shadow-md">
  Button Text
</button>' 
                  className="text-sm"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Cards</h3>
              <div className="border rounded-lg shadow">
                <div className="p-4 border-b">
                  <h3 className="font-medium">Card Title</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    This is an example card with medium radius and medium shadow.
                    Cards typically contain related information and actions.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 border-t">
                  <div className="flex justify-end">
                    <button className="px-3 py-1.5 bg-mocha text-white text-sm rounded-md shadow-sm">
                      Action
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Code 
                  code='<div className="rounded-lg shadow">
  <!-- Card Content -->
</div>' 
                  className="text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-4">Input Fields</h3>
              <div className="p-6 border rounded-lg bg-gray-50">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Regular input" 
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-mocha/30 focus:border-mocha"
                  />
                  
                  <select className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-mocha/30 focus:border-mocha">
                    <option>Select option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <Code 
                  code='<input className="rounded-md shadow-sm focus:ring-2" />' 
                  className="text-sm"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Modal</h3>
              <div className="border rounded-lg shadow-lg">
                <div className="p-4 border-b">
                  <h3 className="font-medium">Modal Dialog</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Modals use large radius and large shadows to indicate they're elevated above other content.
                  </p>
                  <div className="flex space-x-3">
                    <button className="flex-1 px-3 py-1.5 border text-sm rounded-md">
                      Cancel
                    </button>
                    <button className="flex-1 px-3 py-1.5 bg-mocha text-white text-sm rounded-md">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Code 
                  code='<div className="rounded-lg shadow-lg">
  <!-- Modal Content -->
</div>' 
                  className="text-sm"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocLayout>
  );
};

export default ShadowsRadiusPage;
