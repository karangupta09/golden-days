import { Calendar, Heart, Users, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-secondary" />,
      title: "Personalized Schedules",
      description: "Tailored daily routines that adapt to your preferences and needs",
      link: "/schedule"
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary" />,
      title: "Health Tracking",
      description: "Monitor your well-being with easy-to-use health metrics and insights",
      link: "/health-tracking"
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Social Connection",
      description: "Stay connected with loved ones and find community events near you",
      link: "/social-connection"
    },
    {
      icon: <Bell className="w-12 h-12 text-secondary" />,
      title: "Caregiver Support",
      description: "Comprehensive tools for caregivers to provide the best possible care",
      link: "/caregiver-support"
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h2 className="text-4xl font-bold text-center mb-16 text-primary cursor-help">
                Features Designed for You
              </h2>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click on the below squares to learn more about each feature</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index}>
              <div
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;