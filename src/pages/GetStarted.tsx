import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { BasicInfoSection } from "@/components/profile/BasicInfoSection";
import { UserTypeSection } from "@/components/profile/UserTypeSection";
import { PreferencesSection } from "@/components/profile/PreferencesSection";
import { ArrowLeft, ClipboardCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string(),
  userType: z.enum(["engager", "supporter"]),
  goals: z.array(z.string()).optional(),
  interests: z.array(z.string()).optional(),
  healthTracking: z.boolean().optional(),
  healthMetrics: z.array(z.string()).optional(),
  emergencyContacts: z.array(z.object({
    name: z.string(),
    phone: z.string()
  })).optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions"
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const GetStarted = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goals: [],
      interests: [],
      healthMetrics: [],
      healthTracking: false,
      consent: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Profile Created!",
      description: "Welcome to GoldenDays. Let's get started on your journey.",
    });
  };

  const goals = [
    "Stay physically active",
    "Find volunteering opportunities",
    "Discover social events",
    "Manage caregiving tasks"
  ];

  const interests = [
    "Fitness",
    "Hobbies",
    "Social groups",
    "Book clubs"
  ];

  const healthMetrics = [
    "Steps",
    "Sleep",
    "Hydration",
    "Blood Pressure"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-white/50 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-primary mb-8 flex items-center justify-center gap-3">
            <ClipboardCheck className="h-8 w-8" />
            Create Your Profile
          </h1>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Get Started with GoldenDays</CardTitle>
              <CardDescription>Fill out the form below to create your personalized profile</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <BasicInfoSection form={form} />
                  <UserTypeSection form={form} />
                  <PreferencesSection 
                    form={form}
                    goals={goals}
                    interests={interests}
                    healthMetrics={healthMetrics}
                  />
                  
                  <Button type="submit" className="w-full">
                    Create My Profile
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;