import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Bell, Video, Phone, MessageSquare, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const CaregiverSupport = () => {
  const { toast } = useToast();
  const [engagers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      age: 75,
      healthMetrics: {
        heartRate: "72 bpm",
        bloodPressure: "120/80",
        lastActivity: "10 mins ago",
      },
      nextActivity: "Medication - 2:00 PM",
    },
    {
      id: 2,
      name: "Robert Smith",
      age: 68,
      healthMetrics: {
        heartRate: "68 bpm",
        bloodPressure: "118/75",
        lastActivity: "25 mins ago",
      },
      nextActivity: "Doctor's Appointment - 3:30 PM",
    },
  ]);

  const handleEmergencyNotification = () => {
    toast({
      title: "Emergency Alert Sent",
      description: "Emergency services have been notified.",
      variant: "destructive",
    });
  };

  const handleCommunication = (type: string, name: string) => {
    toast({
      title: `Initiating ${type}`,
      description: `Connecting with ${name}...`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-primary">Caregiver Dashboard Feature</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {engagers.map((engager) => (
          <Card key={engager.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{engager.name}</h2>
                <p className="text-gray-600">Age: {engager.age}</p>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleEmergencyNotification}
              >
                <Bell className="w-4 h-4 mr-2" />
                Emergency
              </Button>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold flex items-center gap-2">
                  <Heart className="w-5 h-5 text-secondary" />
                  Health Metrics
                </h3>
                <div className="mt-2 space-y-1">
                  <p>Heart Rate: {engager.healthMetrics.heartRate}</p>
                  <p>Blood Pressure: {engager.healthMetrics.bloodPressure}</p>
                  <p>Last Activity: {engager.healthMetrics.lastActivity}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  Schedule
                </h3>
                <p className="mt-2">{engager.nextActivity}</p>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => handleCommunication('video call', engager.name)}
                >
                  <Video className="w-4 h-4 mr-2" />
                  Video Call
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleCommunication('audio call', engager.name)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Audio Call
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleCommunication('message', engager.name)}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaregiverSupport;