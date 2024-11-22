import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import Payments from "./pages/Payments";
import Schedule from "./pages/Schedule";
import HealthTracking from "./pages/HealthTracking";
import SocialConnection from "./pages/SocialConnection";
import CaregiverSupport from "./pages/CaregiverSupport";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={0}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/health-tracking" element={<HealthTracking />} />
              <Route path="/social-connection" element={<SocialConnection />} />
              <Route path="/caregiver-support" element={<CaregiverSupport />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;