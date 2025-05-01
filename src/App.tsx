import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ColorPage from "./pages/ColorPage";
import TypographyPage from "./pages/TypographyPage";
import SpacingPage from "./pages/SpacingPage";
import ShadowsRadiusPage from "./pages/ShadowsRadiusPage";
import ButtonsPage from "./pages/ButtonsPage";
import InputsPage from "./pages/InputsPage";
import LandingPage from "./pages/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/colors" element={<ColorPage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/spacing" element={<SpacingPage />} />
          <Route path="/shadows" element={<ShadowsRadiusPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/inputs" element={<InputsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
