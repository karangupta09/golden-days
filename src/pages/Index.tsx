import Hero from "../components/Hero";
import Features from "../components/Features";
import LearnMore from "../components/LearnMore";
import Contact from "../components/Contact";
import DownloadApp from "../components/DownloadApp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <LearnMore />
      <DownloadApp />
      <Contact />
    </main>
  );
};

export default Index;