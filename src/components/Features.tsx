import { Calendar, Heart, Users, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-secondary" />,
      title: "Personalized Care",
      description: "Tailored daily routines that adapt to your preferences and needs",
      link: "/schedule",
      details: {
        title: "Personalized Care",
        description: "Transform your daily wellness journey with GoldenDays' intelligent personalization system. Our platform analyzes your preferences, health goals, and activity patterns to create a tailored schedule that fits your lifestyle. Whether you're like Rebecca seeking structured post-retirement activities or Sumita looking for culturally relevant engagement, our system adapts to your unique needs. Users experience a 73% improvement in daily routine adherence and save up to 2 hours daily through organized scheduling that seamlessly integrates health activities, social events, and personal interests."
      }
    },
    {
      icon: <Heart className="w-12 h-12 text-secondary" />,
      title: "Health Tracking",
      description: "Monitor your well-being with easy-to-use health metrics and insights",
      link: "/health-tracking",
      details: {
        title: "Health Tracking",
        description: "Take control of your well-being with GoldenDays' comprehensive health monitoring system. Our user-friendly interface makes it effortless to track vital health metrics, medication schedules, and wellness goals. The platform's intuitive design has helped users achieve a 50% reduction in missed medication doses and a 40% increase in preventive health measure adoption. With real-time health insights and gentle reminders, you can maintain your independence while keeping family members and caregivers informed about your well-being through our secure sharing features."
      }
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Social Connection",
      description: "Stay connected with loved ones and find community events near you",
      link: "/social-connection",
      details: {
        title: "Community Support",
        description: "Break free from isolation and discover a vibrant community with GoldenDays' social engagement features. Our platform connects you with local events, volunteer opportunities, and like-minded individuals who share your interests. Users report an 80% increase in participation in community activities and double their meaningful social interactions weekly. Whether you're interested in book clubs, fitness groups, or cultural events, GoldenDays helps you build lasting connections while staying physically and mentally active. The platform's community features have led to a 75% reduction in feelings of isolation among users."
      }
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
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Features Designed for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              {feature.details ? (
                <Drawer>
                  <DrawerTrigger asChild>
                    <div
                      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="mb-6">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-2xl">
                      <DrawerHeader>
                        <DrawerTitle className="text-2xl font-bold text-primary">{feature.details.title}</DrawerTitle>
                        <DrawerDescription className="text-gray-600 mt-4">
                          {feature.details.description}
                        </DrawerDescription>
                      </DrawerHeader>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              ) : (
                <Link to={feature.link}>
                  <div
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;