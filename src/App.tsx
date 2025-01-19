import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import VenueDetails from "./components/venue/VenueDetails";
import EventNavbar from "./components/EventNavbar";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";

const queryClient = new QueryClient();

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <EventNavbar onMenuClick={() => setIsMobileMenuOpen(true)} />
              <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/venues/:id" element={<VenueDetails />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;