import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User, Mail, Lock } from "lucide-react";

export const BasicInfoSection = ({ form }: { form: any }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <User className="h-5 w-5 text-primary" />
        Basic Information
      </h2>
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <div className="relative">
                <Input placeholder="Enter your full name" {...field} className="pl-10" />
                <User className="h-5 w-5 absolute left-3 top-2.5 text-gray-500" />
              </div>
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
              <div className="relative">
                <Input type="email" placeholder="Enter your email" {...field} className="pl-10" />
                <Mail className="h-5 w-5 absolute left-3 top-2.5 text-gray-500" />
              </div>
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
              <div className="relative">
                <Input type="password" placeholder="Create a password" {...field} className="pl-10" />
                <Lock className="h-5 w-5 absolute left-3 top-2.5 text-gray-500" />
              </div>
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
              <div className="relative">
                <Input type="password" placeholder="Confirm your password" {...field} className="pl-10" />
                <Lock className="h-5 w-5 absolute left-3 top-2.5 text-gray-500" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};