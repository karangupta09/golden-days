import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserRound, Users } from "lucide-react";

export const UserTypeSection = ({ form }: { form: any }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Users className="h-5 w-5 text-primary" />
        User Type
      </h2>
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
                  <FormLabel className="font-normal flex items-center gap-2">
                    <UserRound className="h-4 w-4 text-primary" />
                    Engager (Senior user/retiree)
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="supporter" />
                  </FormControl>
                  <FormLabel className="font-normal flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Supporter (Caregiver or family member)
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};