import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

const goalsItems = [
  { id: "staying-active", label: "Staying Active" },
  { id: "volunteering", label: "Volunteering" },
  { id: "caregiving", label: "Caregiving Support" },
  { id: "social", label: "Social Connection" },
];

const healthTrackingItems = [
  { id: "steps", label: "Daily Steps" },
  { id: "sleep", label: "Sleep Pattern" },
  { id: "hydration", label: "Hydration" },
  { id: "medication", label: "Medication Schedule" },
];

const interestItems = [
  { id: "fitness", label: "Fitness Classes" },
  { id: "hobbies", label: "Creative Hobbies" },
  { id: "events", label: "Local Events" },
  { id: "learning", label: "Learning New Skills" },
];

const FormSchema = z.object({
  goals: z.array(z.string()).min(1, {
    message: "Please select at least one goal.",
  }),
  healthTracking: z.array(z.string()).min(1, {
    message: "Please select at least one health tracking preference.",
  }),
  interests: z.array(z.string()).min(1, {
    message: "Please select at least one interest.",
  }),
});

export function PersonalizationForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      goals: [],
      healthTracking: [],
      interests: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Preferences saved!",
      description: "Your profile has been personalized successfully.",
    });
    console.log(data);
  }

  const CheckboxGroup = ({ items, name }: { items: { id: string; label: string }[]; name: "goals" | "healthTracking" | "interests" }) => (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            {items.map((item) => (
              <FormField
                key={item.id}
                control={form.control}
                name={name}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.id}
                      className="flex flex-row items-start space-x-3 space-y-0 mb-2"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter((value) => value !== item.id)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Your Goals</h3>
            <CheckboxGroup items={goalsItems} name="goals" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Health Tracking Preferences</h3>
            <CheckboxGroup items={healthTrackingItems} name="healthTracking" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Your Interests</h3>
            <CheckboxGroup items={interestItems} name="interests" />
          </div>
        </div>

        <Button type="submit" className="w-full">Save Preferences</Button>
      </form>
    </Form>
  );
}