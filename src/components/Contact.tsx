import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input id="name" placeholder="Your full name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Select>
                  <SelectTrigger>
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:support@goldendays.com" className="hover:text-primary">
                      support@goldendays.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+18001234567" className="hover:text-primary">
                      +1 (800) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Evanston, IL</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="h-[300px] rounded-lg overflow-hidden">
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

            <div className="flex justify-center space-x-6">
              <a href="https://facebook.com/goldendays" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a href="https://instagram.com/goldendays" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a href="https://twitter.com/goldendays" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 text-sm text-gray-600">
        © {new Date().getFullYear()} GoldenDays. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
