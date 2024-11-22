import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import Payments from "./pages/Payments";
import Schedule from "./pages/Schedule";
import HealthTracking from "./pages/HealthTracking";
import SocialConnection from "./pages/SocialConnection";
import CaregiverSupport from "./pages/CaregiverSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/health-tracking" element={<HealthTracking />} />
          <Route path="/social-connection" element={<SocialConnection />} />
          <Route path="/caregiver-support" element={<CaregiverSupport />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;