import { Brain, Users, Heart, Palette, Shield } from "lucide-react";

const LearnMore = () => {
  const sections = [
    {
      icon: <Brain className="w-12 h-12 text-secondary" />,
      title: "Personalized Wellness",
      description: "Tailor your daily routines with health tracking, reminders, and activity suggestions that fit your goals and lifestyle.",
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Social Connection",
      description: "Discover local events, volunteering opportunities, and like-minded communities to stay engaged and active.",
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary" />,
      title: "Caregiver Support",
      description: "Simplify caregiving with tools to monitor loved ones' health, organize schedules, and access mental health resources.",
    },
    {
      icon: <Palette className="w-12 h-12 text-secondary" />,
      title: "Creative and Cultural Opportunities",
      description: "Explore hobbies, classes, and events to enrich your personal and social life.",
    },
    {
      icon: <Shield className="w-12 h-12 text-secondary" />,
      title: "Accessible and Secure",
      description: "Designed for ease of use with large fonts, intuitive navigation, and robust data protection.",
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
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{section.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{section.title}</h3>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnMore;