import { useEffect, useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Features from "../components/Features";
import LearnMore from "../components/LearnMore";
import Contact from "../components/Contact";
import DownloadApp from "../components/DownloadApp";
import Pricing from "../components/Pricing";
import Navigation from "../components/Navigation";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Features />
        <LearnMore />
        <Pricing />
        <DownloadApp />
        <Contact />
      </div>
    </main>
  );
};

export default Index;