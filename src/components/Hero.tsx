import { Sun, Heart, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-hero-gradient text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <img
            src="/lovable-uploads/cd1b4251-9f89-4fc3-8dbb-f804c4b0ef51.png"
            alt="GoldenDays Logo"
            className="w-32 h-32 mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Embrace Your Golden Days
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100">
            Your comprehensive wellness platform for enriched living and meaningful connections
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-primary transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-16 p-8 bg-white/10 backdrop-blur-sm">
        <div className="text-center">
          <Sun className="w-8 h-8 mx-auto mb-2" />
          <p className="font-semibold">Personalized Care</p>
        </div>
        <div className="text-center">
          <Heart className="w-8 h-8 mx-auto mb-2" />
          <p className="font-semibold">Health Tracking</p>
        </div>
        <div className="text-center">
          <Users className="w-8 h-8 mx-auto mb-2" />
          <p className="font-semibold">Community Support</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;