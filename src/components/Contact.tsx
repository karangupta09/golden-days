import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    field: string
  ) => {
    if (typeof e === 'string') {
      setFormData(prev => ({ ...prev, [field]: e }));
    } else {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="w-full"
                  value={formData.name}
                  onChange={e => handleChange(e, 'name')}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full"
                  value={formData.email}
                  onChange={e => handleChange(e, 'email')}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                  Subject
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => handleChange(value, 'subject')}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="min-h-[150px] w-full"
                  value={formData.message}
                  onChange={e => handleChange(e, 'message')}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="flex items-center gap-4 hover:text-primary transition-colors">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <a href="mailto:support@goldendays.com" className="text-lg">
                      support@goldendays.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 hover:text-primary transition-colors">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <a href="tel:+18001234567" className="text-lg">
                      +1 (800) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg">Evanston, IL</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="GoldenDays Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47511.92258972556!2d-87.7152255!3d42.0450722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd00b703e4c39%3A0x2c37b567fad56106!2sEvanston%2C%20IL!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>

            <div className="flex justify-center space-x-8">
              <a 
                href="https://facebook.com/goldendays" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="font-medium">Facebook</span>
              </a>
              <a 
                href="https://instagram.com/goldendays" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="font-medium">Instagram</span>
              </a>
              <a 
                href="https://twitter.com/goldendays" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span className="font-medium">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;