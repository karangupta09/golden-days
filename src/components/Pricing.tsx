import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 pt-8" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan that fits your needs. Join our community and start your wellness journey today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/20 group">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="text-center pb-8 relative">
              <CardTitle className="text-2xl mb-2">Engager Package</CardTitle>
              <p className="text-gray-600 mb-4">Perfect for getting started</p>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-5xl font-bold text-primary">$10</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-500">or $100/year (save 17%)</p>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-700">Basic wellness tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-700">Community access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-700">Monthly newsletters</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-700">24/7 Support access</span>
                </li>
              </ul>
              <Link to="/payments" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Get Started Now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-secondary/20 hover:border-secondary/40 group">
            <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm rounded-bl-lg">
              Popular Choice
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="text-center pb-8 relative">
              <CardTitle className="text-2xl mb-2">Supporter Package</CardTitle>
              <p className="text-gray-600 mb-4">For enhanced wellness journey</p>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-5xl font-bold text-secondary">$15</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-500">or $150/year (save 17%)</p>
            </CardHeader>
            <CardContent className="relative">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-secondary/10 p-1">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-gray-700">Advanced wellness tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-secondary/10 p-1">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-gray-700">Priority community access</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-secondary/10 p-1">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-gray-700">Weekly newsletters</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="rounded-full bg-secondary/10 p-1">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-gray-700">Personal wellness coach</span>
                </li>
              </ul>
              <Link to="/payments" className="block">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Subscribe Now</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;