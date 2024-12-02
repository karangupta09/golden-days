import { Calendar, Heart, Users, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-10 h-10 text-primary" />,
      title: "Personalized Schedules",
      description: "Tailored daily routines that adapt to your preferences and needs",
      link: "/schedule"
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Health Tracking",
      description: "Monitor your well-being with easy-to-use health metrics and insights",
      link: "/health-tracking"
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Social Connection",
      description: "Stay connected with loved ones and find community events near you",
      link: "/social-connection"
    },
    {
      icon: <Bell className="w-10 h-10 text-primary" />,
      title: "Caregiver Support",
      description: "Comprehensive tools for caregivers to provide the best possible care",
      link: "/caregiver-support"
    },
  ];

  return (
    <section id="features" className="bg-background pt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Features Designed for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link 
              to={feature.link} 
              key={index}
              className="group hover:no-underline"
            >
              <div
                className="h-full bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group-hover:-translate-y-1 group-hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;