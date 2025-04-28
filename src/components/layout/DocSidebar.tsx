
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Define the sidebar navigation items
const sidebarItems = [
  {
    title: "Design System",
    items: [
      { name: "Typography", href: "/typography" },
      { name: "Colors", href: "/colors" },
      { name: "Spacing", href: "/spacing" },
      { name: "Shadows & Radius", href: "/shadows" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Buttons", href: "/buttons" },
      { name: "Inputs", href: "/inputs" },
    ],
  },
];

type DocSidebarProps = {
  className?: string;
};

export function DocSidebar({ className }: DocSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-background",
        collapsed ? "w-[60px]" : "w-[250px]",
        className
      )}
    >
      <div className="flex justify-between items-center h-16 px-4 border-b">
        {!collapsed && (
          <Link to="/" className="font-semibold text-lg">
            Design System
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {sidebarItems.map((section, i) => (
          <div key={i} className={cn("mb-4", collapsed ? "px-2" : "px-4")}>
            {!collapsed && (
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {section.title}
              </h3>
            )}

            <div className="space-y-1">
              {section.items.map((item, j) => (
                <Link
                  key={j}
                  to={item.href}
                  className={cn(
                    "flex items-center py-2 px-3 text-sm font-medium rounded-md",
                    currentPath === item.href
                      ? "bg-mocha text-white"
                      : "hover:bg-muted",
                    collapsed ? "justify-center" : ""
                  )}
                >
                  {collapsed ? (
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-muted">
                      {item.name.charAt(0)}
                    </span>
                  ) : (
                    item.name
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileSidebarTrigger({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setOpen(true)}
      className="md:hidden"
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  );
}

export function MobileSidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setOpen(false)} />
      )}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[250px] bg-background transform transition-transform duration-200 ease-in-out md:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <h2 className="font-semibold text-lg">Design System</h2>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="overflow-y-auto py-4">
          {sidebarItems.map((section, i) => (
            <div key={i} className="mb-4 px-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item, j) => (
                  <Link
                    key={j}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center py-2 px-3 text-sm font-medium rounded-md",
                      location.pathname === item.href
                        ? "bg-mocha text-white"
                        : "hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
