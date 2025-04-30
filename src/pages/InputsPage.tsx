
import { DocLayout } from "@/components/layout/DocLayout";
import { Code } from "@/components/ui/code";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const InputsPage = () => {
  const [textValue, setTextValue] = useState("");
  const [errorState, setErrorState] = useState(false);

  return (
    <DocLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Inputs</h1>
          <p className="text-muted-foreground">
            Input components allow users to enter text and data. These form controls are used for collecting user information.
          </p>
        </div>

        {/* Input Types */}
        <section id="input-types" className="space-y-6 pt-4">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Input Types</h2>
          
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-medium">Text Input</h3>
              <div className="p-6 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="text-input">Name</Label>
                  <Input id="text-input" placeholder="Enter your name" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Basic text input for collecting single-line text from users.
              </p>
              <Code
                code={`<div className="space-y-2">
  <Label htmlFor="text-input">Name</Label>
  <Input id="text-input" placeholder="Enter your name" />
</div>`}
                className="text-sm"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Text Area</h3>
              <div className="p-6 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="textarea-input">Message</Label>
                  <Textarea id="textarea-input" placeholder="Type your message here" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Multi-line text input for longer content, such as comments or messages.
              </p>
              <Code
                code={`<div className="space-y-2">
  <Label htmlFor="textarea-input">Message</Label>
  <Textarea id="textarea-input" placeholder="Type your message here" />
</div>`}
                className="text-sm"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-medium">Checkbox</h3>
              <div className="p-6 border rounded-lg">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Used for toggling a single option or selecting multiple options from a list.
              </p>
              <Code
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
                className="text-sm"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Radio Buttons</h3>
              <div className="p-6 border rounded-lg">
                <RadioGroup defaultValue="option-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-1" id="option-1" />
                    <Label htmlFor="option-1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="option-2" id="option-2" />
                    <Label htmlFor="option-2">Option 2</Label>
                  </div>
                </RadioGroup>
              </div>
              <p className="text-sm text-muted-foreground">
                Used for selecting a single option from a list of mutually exclusive options.
              </p>
              <Code
                code={`<RadioGroup defaultValue="option-1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-1" id="option-1" />
    <Label htmlFor="option-1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2 mt-2">
    <RadioGroupItem value="option-2" id="option-2" />
    <Label htmlFor="option-2">Option 2</Label>
  </div>
</RadioGroup>`}
                className="text-sm"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-medium">Select</h3>
              <div className="p-6 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="select">Select an option</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option-1">Option 1</SelectItem>
                      <SelectItem value="option-2">Option 2</SelectItem>
                      <SelectItem value="option-3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Dropdown selector for choosing a single option from a predefined list.
              </p>
              <Code
                code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option-1">Option 1</SelectItem>
    <SelectItem value="option-2">Option 2</SelectItem>
    <SelectItem value="option-3">Option 3</SelectItem>
  </SelectContent>
</Select>`}
                className="text-sm"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Disabled Input</h3>
              <div className="p-6 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="disabled-input">Username</Label>
                  <Input id="disabled-input" disabled value="user123" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Disabled inputs indicate that the field cannot be modified by the user.
              </p>
              <Code
                code={`<div className="space-y-2">
  <Label htmlFor="disabled-input">Username</Label>
  <Input id="disabled-input" disabled value="user123" />
</div>`}
                className="text-sm"
              />
            </div>
          </div>
        </section>

        {/* Input States */}
        <section id="input-states" className="space-y-6 pt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Input States</h2>
          
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="space-y-4">
              <div className="p-6 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="default-state">Default</Label>
                  <Input id="default-state" placeholder="Default state" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Default state of the input field.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="focus-state">Focus</Label>
                  <Input
                    id="focus-state"
                    placeholder="Click me"
                    className="focus-within:ring-2 focus-within:ring-mocha/50 focus-within:border-mocha"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Focus state when the input is active.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="error-state">Error</Label>
                  <Input
                    id="error-state"
                    placeholder="Error state"
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    className={errorState ? "border-red-500 focus:ring-red-500/30 focus:border-red-500" : ""}
                  />
                  {errorState && (
                    <p className="text-sm text-red-500">Please enter a valid value</p>
                  )}
                  <button
                    onClick={() => setErrorState(!errorState)}
                    className="mt-2 text-sm text-mocha hover:underline"
                  >
                    Toggle Error State
                  </button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Error state to indicate validation issues.
              </p>
            </div>
          </div>
        </section>

        {/* Input Variants */}
        <section id="input-variants" className="space-y-6 pt-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Input Variants</h2>
          
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-medium">Filled Input</h3>
              <div className="p-6 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="filled-input">Email</Label>
                  <Input
                    id="filled-input"
                    placeholder="Enter your email"
                    className="bg-gray-50 focus:bg-white transition-colors"
                  />
                </div>
              </div>
              <Code
                code={`<Input
  placeholder="Enter your email"
  className="bg-gray-50 focus:bg-white transition-colors"
/>`}
                className="text-sm"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Input with Icon</h3>
              <div className="p-6 border rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="icon-input">Search</Label>
                  <div className="relative">
                    <Input
                      id="icon-input"
                      placeholder="Search..."
                      className="pl-10"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      🔍
                    </div>
                  </div>
                </div>
              </div>
              <Code
                code={`<div className="relative">
  <Input
    placeholder="Search..."
    className="pl-10"
  />
  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
    🔍
  </div>
</div>`}
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
                <li>Use clear, concise labels above input fields</li>
                <li>Provide helpful placeholder text</li>
                <li>Show validation errors inline</li>
                <li>Mark required fields clearly</li>
                <li>Group related inputs together</li>
                <li>Provide input format hints when needed</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6">
              <h3 className="font-medium mb-3">❌ Don't</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Use placeholder text as a replacement for labels</li>
                <li>Create unnecessarily long forms</li>
                <li>Use vague error messages</li>
                <li>Make users guess the required format</li>
                <li>Have inconsistent input styles across the application</li>
                <li>Auto-advance focus without user action</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border rounded-lg p-6">
            <h3 className="font-medium mb-4">Input Accessibility</h3>
            <p className="text-sm text-muted-foreground mb-4">
              To ensure your inputs are accessible, always:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Use proper labels with the "for" attribute connected to the input's ID</li>
              <li>Include ARIA attributes when needed</li>
              <li>Ensure keyboard navigation works properly</li>
              <li>Provide error feedback for screen readers</li>
              <li>Maintain sufficient color contrast for text and borders</li>
            </ul>
          </div>
        </section>
      </div>
    </DocLayout>
  );
};

export default InputsPage;
