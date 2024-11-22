import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Heart, Users, Shield, ArrowLeft } from "lucide-react";

const Payments = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<"engager" | "supporter" | null>(
    null
  );

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Processing",
      description: "Your payment is being processed. Please wait...",
    });
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: "Welcome to GoldenDays! Redirecting to get started...",
      });
      navigate("/get-started");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Join the GoldenDays Family
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred plan and become part of our caring community. Start your journey towards a more connected and fulfilling lifestyle today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card
              className={`cursor-pointer transition-all transform hover:scale-105 ${
                selectedPlan === "engager"
                  ? "ring-2 ring-primary shadow-lg"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedPlan("engager")}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Engager Package</CardTitle>
                <p className="text-3xl font-bold mt-4">$10<span className="text-lg font-normal text-gray-500">/month</span></p>
                <p className="text-sm text-gray-500">or $100/year</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">✓ Basic wellness tracking</li>
                  <li className="flex items-center text-gray-600">✓ Community access</li>
                  <li className="flex items-center text-gray-600">✓ Monthly newsletters</li>
                  <li className="flex items-center text-gray-600">✓ 24/7 Support access</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all transform hover:scale-105 ${
                selectedPlan === "supporter"
                  ? "ring-2 ring-primary shadow-lg"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedPlan("supporter")}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Supporter Package</CardTitle>
                <p className="text-3xl font-bold mt-4">$15<span className="text-lg font-normal text-gray-500">/month</span></p>
                <p className="text-sm text-gray-500">or $150/year</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">✓ Advanced wellness tracking</li>
                  <li className="flex items-center text-gray-600">✓ Priority community access</li>
                  <li className="flex items-center text-gray-600">✓ Weekly newsletters</li>
                  <li className="flex items-center text-gray-600">✓ Personal wellness coach</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {selectedPlan && (
            <Card className="shadow-lg animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Secure Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div>
                    <label
                      htmlFor="cardName"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Name on Card
                    </label>
                    <Input
                      id="cardName"
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Card Number
                    </label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expiry"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Expiry Date
                      </label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvc"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        CVC
                      </label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Complete Payment
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;