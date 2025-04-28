
import { useState } from "react";
import { DocSidebar, MobileSidebar, MobileSidebarTrigger } from "./DocSidebar";

type DocLayoutProps = {
  children: React.ReactNode;
};

export function DocLayout({ children }: DocLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <DocSidebar className="hidden md:flex" />
      <MobileSidebar open={mobileSidebarOpen} setOpen={setMobileSidebarOpen} />

      <main className="flex-1 overflow-y-auto">
        <div className="flex items-center h-16 px-4 border-b sticky top-0 bg-background z-10">
          <MobileSidebarTrigger
            open={mobileSidebarOpen}
            setOpen={setMobileSidebarOpen}
          />
        </div>
        <div className="container py-8 px-4 md:px-8 max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
