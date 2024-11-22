import { Sun, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Hero = () => {
  const scrollToLearnMore = () => {
    const learnMoreSection = document.getElementById("learn-more");
    if (learnMoreSection) {
      learnMoreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: <Sun className="w-8 h-8 mx-auto mb-2" />,
      title: "Personalized Care",
      content: "GoldenDays transforms your wellness journey through intelligent personalization that adapts to your unique lifestyle. Our platform creates tailored schedules that integrate your health goals, activity preferences, and daily routines. Users experience a 73% improvement in maintaining daily wellness routines through customized activity recommendations, whether you're seeking cultural events, fitness classes, or creative workshops."
    },
    {
      icon: <Heart className="w-8 h-8 mx-auto mb-2" />,
      title: "Health Tracking",
      content: "Take control of your well-being with our comprehensive health monitoring system. The platform helps you track vital health metrics, maintain medication schedules, and achieve wellness goals with user-friendly tools. Our integrated approach has helped users achieve a 50% reduction in missed medication doses and a 40% increase in preventive health measures. Family members and caregivers can stay informed through secure health updates, ensuring coordinated care and peace of mind."
    },
    {
      icon: <Users className="w-8 h-8 mx-auto mb-2" />,
      title: "Community Support",
      content: "Connect with a vibrant community through GoldenDays' dynamic social features. Our platform matches you with local events and like-minded individuals who share your interests, from book clubs to cultural activities. Users report an 80% increase in meaningful social interactions and a 75% reduction in feelings of isolation. Whether you're interested in volunteering opportunities or cultural celebrations, GoldenDays helps you build lasting connections while staying mentally and physically active in your community."
    }
  ];

  return (
    <div className="relative min-h-screen bg-hero-gradient text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/cd1b4251-9f89-4fc3-8dbb-f804c4b0ef51.png')] opacity-10 bg-center bg-no-repeat bg-contain"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <img
            src="/lovable-uploads/cd1b4251-9f89-4fc3-8dbb-f804c4b0ef51.png"
            alt="GoldenDays Logo"
            className="w-32 h-32 mx-auto mb-8 animate-pulse"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
            Embrace Your Golden Days
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100">
            Your comprehensive wellness platform for enriched living and meaningful connections
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-started">
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </Link>
            <button 
              onClick={scrollToLearnMore}
              className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-16 p-8 bg-white/10 backdrop-blur-sm">
        {features.map((feature, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="text-center cursor-pointer transform hover:scale-110 transition-transform duration-300">
                {feature.icon}
                <p className="font-semibold">{feature.title}</p>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  {feature.icon}
                  {feature.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6">
                <p className="text-gray-700 leading-relaxed">
                  {feature.content}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Hero;