import Hero from "../components/Hero";
import Features from "../components/Features";
import LearnMore from "../components/LearnMore";
import Contact from "../components/Contact";
import DownloadApp from "../components/DownloadApp";
import Pricing from "../components/Pricing";
import Navigation from "../components/Navigation";
import Benefits from "../components/Benefits";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Features />
        <Benefits />
        <LearnMore />
        <Pricing />
        <DownloadApp />
        <Contact />
      </div>
    </main>
  );
};

export default Index;