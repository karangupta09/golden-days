import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="relative overflow-hidden transition-transform hover:scale-105">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Engager Package</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$10</span>
                <span className="text-gray-600">/month</span>
                <p className="text-gray-500 mt-2">or $100/year</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Basic wellness tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Community access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Monthly newsletters</span>
                </li>
              </ul>
              <Link to="/payments">
                <Button className="w-full mt-8">Subscribe Now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden transition-transform hover:scale-105">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Supporter Package</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$15</span>
                <span className="text-gray-600">/month</span>
                <p className="text-gray-500 mt-2">or $150/year</p>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Advanced wellness tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Priority community access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Weekly newsletters</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span>Personal wellness coach</span>
                </li>
              </ul>
              <Link to="/payments">
                <Button className="w-full mt-8">Subscribe Now</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;