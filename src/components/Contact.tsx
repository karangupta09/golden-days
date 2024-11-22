import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:goldendays@reachout.com" className="hover:text-primary">
                    goldendays@reachout.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:312-345-6789" className="hover:text-primary">
                    312-345-6789
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
        </div>
      </div>
      <div className="text-center mt-16 text-sm text-gray-600">
        © {new Date().getFullYear()} GoldenDays. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;