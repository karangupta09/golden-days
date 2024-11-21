import { Calendar, Heart, Users, Bell } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-secondary" />,
      title: "Personalized Schedules",
      description: "Tailored daily routines that adapt to your preferences and needs",
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary" />,
      title: "Health Tracking",
      description: "Monitor your well-being with easy-to-use health metrics and insights",
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Social Connection",
      description: "Stay connected with loved ones and find community events near you",
    },
    {
      icon: <Bell className="w-12 h-12 text-secondary" />,
      title: "Caregiver Support",
      description: "Comprehensive tools for caregivers to provide the best possible care",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Features Designed for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;