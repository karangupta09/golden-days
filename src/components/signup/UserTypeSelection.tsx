import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

export const UserTypeSelection = ({ form }: { form: any }) => {
  return (
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
        </FormItem>
      )}
    />
  );
};