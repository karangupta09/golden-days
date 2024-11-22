import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

interface PreferencesSectionProps {
  form: any;
  title: string;
  name: "goals" | "interests" | "healthMetrics";
  items: { id: string; label: string }[];
}

export const PreferencesSection = ({
  form,
  title,
  name,
  items,
}: PreferencesSectionProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <FormField
        control={form.control}
        name={name}
        render={() => (
          <FormItem>
            <div className="grid grid-cols-2 gap-4">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name={name}
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...(field.value || []), item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};