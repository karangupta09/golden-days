import { Heart, Activity, Footprints, Share2, Bell, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const HealthTracking = () => {
  const { toast } = useToast();

  const shareWithCaregiver = () => {
    toast({
      title: "Health Data Shared",
      description: "Your health information has been shared with your caregiver.",
    });
  };

  const healthMetrics = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Heart Rate",
      value: "72 BPM",
      status: "Normal",
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      title: "Blood Pressure",
      value: "120/80",
      status: "Normal",
    },
    {
      icon: <Footprints className="w-8 h-8 text-green-500" />,
      title: "Steps Today",
      value: "6,542",
      status: "On Track",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-20 pb-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-primary">Health Tracking Features</h1>
        </div>

        <div className="flex justify-end mb-8">
          <Button onClick={shareWithCaregiver} className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share with Caregiver
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {healthMetrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                {metric.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">{metric.status}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-6 h-6 text-yellow-500" />
              Important Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              No critical alerts at this time. All vitals are within normal ranges.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default HealthTracking;