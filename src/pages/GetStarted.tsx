import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-primary mb-8">Create Your Profile</h1>
          <Card>
            <CardHeader>
              <CardTitle>Get Started with GoldenDays</CardTitle>
              <CardDescription>Fill out the form below to create your personalized profile</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Basic Information</h2>
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Create a password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Confirm your password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* User Type */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">User Type</h2>
                    <FormField
                      control={form.control}
                      name="userType"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="engager" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Engager (Senior user/retiree)
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
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Goals */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Your Goals</h2>
                    <FormField
                      control={form.control}
                      name="goals"
                      render={() => (
                        <FormItem>
                          <div className="grid grid-cols-2 gap-4">
                            {goals.map((goal) => (
                              <FormField
                                key={goal}
                                control={form.control}
                                name="goals"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={goal}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(goal)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...(field.value || []), goal])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== goal
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {goal}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Interests */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Your Interests</h2>
                    <FormField
                      control={form.control}
                      name="interests"
                      render={() => (
                        <FormItem>
                          <div className="grid grid-cols-2 gap-4">
                            {interests.map((interest) => (
                              <FormField
                                key={interest}
                                control={form.control}
                                name="interests"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={interest}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(interest)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...(field.value || []), interest])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== interest
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {interest}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Health Tracking */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Health Tracking Preferences</h2>
                    <FormField
                      control={form.control}
                      name="healthTracking"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            I want to track health metrics
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    {form.watch("healthTracking") && (
                      <FormField
                        control={form.control}
                        name="healthMetrics"
                        render={() => (
                          <FormItem>
                            <div className="grid grid-cols-2 gap-4">
                              {healthMetrics.map((metric) => (
                                <FormField
                                  key={metric}
                                  control={form.control}
                                  name="healthMetrics"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={metric}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(metric)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...(field.value || []), metric])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== metric
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          {metric}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                          </FormItem>
                        )}
                      />
                    )}
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the Terms & Conditions and Privacy Policy
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" className="w-full">Create My Profile</Button>
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