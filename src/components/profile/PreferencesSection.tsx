import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Target, Heart, Activity } from "lucide-react";

export const PreferencesSection = ({ form, goals, interests, healthMetrics }: { 
  form: any;
  goals: string[];
  interests: string[];
  healthMetrics: string[];
}) => {
  return (
    <>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Your Goals
        </h2>
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
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(goal)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...(field.value || []), goal])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== goal
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{goal}</FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" />
          Your Interests
        </h2>
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
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(interest)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...(field.value || []), interest])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== interest
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{interest}</FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Health Tracking Preferences
        </h2>
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
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(metric)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...(field.value || []), metric])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: string) => value !== metric
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{metric}</FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </FormItem>
            )}
          />
        )}
      </div>
    </>
  );
};