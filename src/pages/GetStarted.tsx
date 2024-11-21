import { Activity, Heart, Users, Calendar, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GetStarted = () => {
  const features = [
    {
      icon: <Activity className="w-12 h-12 text-secondary" />,
      title: "Personalized Activities",
      description: "Discover tailored activities and volunteering opportunities that match your interests and abilities.",
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary" />,
      title: "Health Tracking",
      description: "Monitor your daily health metrics including sleep, steps, and medication schedules with ease.",
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Social Connection",
      description: "Stay connected with family, friends, and your community through our easy-to-use platform.",
    },
    {
      icon: <Calendar className="w-12 h-12 text-secondary" />,
      title: "Daily Schedule",
      description: "Organize your day with our intuitive schedule planner, never miss an important event or medication.",
    },
    {
      icon: <Phone className="w-12 h-12 text-secondary" />,
      title: "Video Calling",
      description: "Connect face-to-face with loved ones through simple, one-tap video calls.",
    },
    {
      icon: <Shield className="w-12 h-12 text-secondary" />,
      title: "Emergency Support",
      description: "Quick access to emergency contacts and immediate help when you need it most.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Welcome to GoldenDays
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how GoldenDays can help you stay active, connected, and healthy. Here's everything you can do with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold text-primary">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg rounded-full"
            onClick={() => window.location.href = '/'}
          >
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;