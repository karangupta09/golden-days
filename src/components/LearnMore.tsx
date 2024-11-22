import { Brain, Users, Heart, Palette, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const LearnMore = () => {
  const sections = [
    {
      icon: <Brain className="w-12 h-12 text-secondary" />,
      title: "Personalized Wellness",
      description: "Tailor your daily routines with health tracking, reminders, and activity suggestions that fit your goals and lifestyle.",
      details: "Your wellness journey should be as unique as you are. GoldenDays creates tailored health and activity schedules that adapt to your preferences and goals. Our intelligent system helps you track vital health metrics, maintain daily routines, and receive personalized recommendations for activities that keep you physically and mentally active. Users experience a 73% improvement in maintaining their wellness routines and report feeling more in control of their health journey through our customized approach."
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Social Connection",
      description: "Discover local events, volunteering opportunities, and like-minded communities to stay engaged and active.",
      details: "Stay vibrant and engaged with GoldenDays' dynamic social features. Our platform connects you with like-minded individuals who share your interests, whether it's joining local book clubs, fitness groups, or cultural events. Through our community-driven approach, users report an 80% increase in meaningful social interactions and discover new friendships that enrich their daily lives. Regular engagement with community activities helps reduce feelings of isolation by 75% while fostering lasting connections."
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary" />,
      title: "Caregiver Support",
      description: "Simplify caregiving with tools to monitor loved ones' health, organize schedules, and access mental health resources.",
      details: "GoldenDays transforms the caregiving experience through intuitive tools that streamline communication and coordination. Our platform enables seamless information sharing between family members and professional caregivers, resulting in 40% better care coordination and a 50% reduction in missed appointments. Caregivers report significantly reduced stress levels and improved work-life balance through our organized scheduling and health tracking features."
    },
    {
      icon: <Palette className="w-12 h-12 text-secondary" />,
      title: "Creative and Cultural Opportunities",
      description: "Explore hobbies, classes, and events to enrich your personal and social life.",
      details: "Express yourself and celebrate diversity through GoldenDays' rich array of creative and cultural activities. Our platform connects you with local art workshops, cultural festivals, and community events that match your interests and heritage. Users discover new hobbies and traditions while sharing their own cultural experiences, creating a vibrant, inclusive community that celebrates individual expression and shared learning."
    },
    {
      icon: <Shield className="w-12 h-12 text-secondary" />,
      title: "Accessible and Secure",
      description: "Designed for ease of use with large fonts, intuitive navigation, and robust data protection.",
      details: "Experience peace of mind with GoldenDays' user-friendly interface and robust security features. Our platform is designed for all comfort levels with technology, featuring large text options, voice commands, and simplified navigation. Your personal information remains protected through advanced encryption, ensuring your wellness journey is both comfortable and confidential. The platform's accessibility features have helped users save up to 2 hours daily through simplified health management and activity planning."
    },
  ];

  return (
    <section id="learn-more" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Learn More About GoldenDays
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">{section.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-2xl">
                    {section.icon}
                    {section.title}
                  </DialogTitle>
                  <DialogDescription className="text-base pt-4 leading-relaxed">
                    {section.details}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnMore;