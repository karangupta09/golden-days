import { Activity, Heart, Users, Calendar, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { PersonalizationForm } from "@/components/PersonalizationForm";
import { useForm } from "react-hook-form";

const GetStarted = () => {
  const form = useForm({
    defaultValues: {
      userType: "engager",
    },
  });

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
            Welcome to GoldenDays! Let's Get Started
          </h1>
        </div>

        <div className="max-w-3xl mx-auto space-y-16">
          {/* Step 1 */}
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-bold text-primary mb-4">Step 1: Create Your Account</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">Sign up using your email, phone number, or social media accounts.</p>
                <Form {...form}>
                  <FormField
                    control={form.control}
                    name="userType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Choose your user type:</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="engager" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Engager (Retiree or senior user)
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="supporter" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Supporter (Caregiver or family member)
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Step 2 */}
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl font-bold text-primary mb-4">Step 2: Personalize Your Experience</h2>
            <Card>
              <CardContent className="pt-6">
                <PersonalizationForm />
              </CardContent>
            </Card>
          </div>

          {/* Step 3 */}
          <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl font-bold text-primary mb-4">Step 3: Explore Features</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">For Engagers:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Discover local activities and events tailored to you</li>
                    <li>Track your health metrics effortlessly</li>
                    <li>Stay socially connected with friends and family</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">For Supporters:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Monitor health and daily activities for loved ones</li>
                    <li>Organize schedules and set reminders</li>
                    <li>Access resources for stress management and mental well-being</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Step 4 */}
          <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <h2 className="text-2xl font-bold text-primary mb-4">Step 4: Start Your GoldenDays Journey!</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-6">Set Up Your Account and enjoy a platform that makes wellness and connection effortless.</p>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg rounded-full"
                >
                  Set Up Your Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-primary text-center mb-16">Our Features</h2>
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
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
