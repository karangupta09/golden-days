import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

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
    // Here you would integrate with a payment processor
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: "Welcome to GoldenDays! Redirecting to get started...",
      });
      navigate("/get-started");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-primary">
              Complete Your Subscription
            </h1>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="mb-4"
            >
              Back
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card
              className={`cursor-pointer transition-all ${
                selectedPlan === "engager"
                  ? "ring-2 ring-primary"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedPlan("engager")}
            >
              <CardHeader>
                <CardTitle>Engager Package</CardTitle>
                <p className="text-2xl font-bold">$10/month</p>
                <p className="text-sm text-gray-500">or $100/year</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>✓ Basic wellness tracking</li>
                  <li>✓ Community access</li>
                  <li>✓ Monthly newsletters</li>
                  <li>✓ 24/7 Support access</li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all ${
                selectedPlan === "supporter"
                  ? "ring-2 ring-primary"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedPlan("supporter")}
            >
              <CardHeader>
                <CardTitle>Supporter Package</CardTitle>
                <p className="text-2xl font-bold">$15/month</p>
                <p className="text-sm text-gray-500">or $150/year</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>✓ Advanced wellness tracking</li>
                  <li>✓ Priority community access</li>
                  <li>✓ Weekly newsletters</li>
                  <li>✓ Personal wellness coach</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {selectedPlan && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div>
                    <label
                      htmlFor="cardName"
                      className="block text-sm font-medium mb-2"
                    >
                      Name on Card
                    </label>
                    <Input
                      id="cardName"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium mb-2"
                    >
                      Card Number
                    </label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expiry"
                        className="block text-sm font-medium mb-2"
                      >
                        Expiry Date
                      </label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvc"
                        className="block text-sm font-medium mb-2"
                      >
                        CVC
                      </label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        required
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