import { Card, CardContent } from "./ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Benefits = () => {
  const healthMetrics = [
    { name: "Sedentary Time Reduction", percentage: 40 },
    { name: "Physical Activity Tracking", percentage: 60 },
    { name: "Stress Level Decrease", percentage: 14 },
    { name: "Daily Routine Adherence", percentage: 73 },
  ];

  const socialMetrics = [
    { name: "Local Event Participation", percentage: 80 },
    { name: "Family Communication", percentage: 300 },
    { name: "Caregiver Coordination", percentage: 65 },
  ];

  const wellnessOutcomes = [
    { name: "Improved Purpose", percentage: 86 },
    { name: "Reduced Isolation", percentage: 75 },
    { name: "Life Satisfaction", percentage: 83 },
    { name: "Healthcare Management", percentage: 50 },
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          The GoldenDays Difference
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Health & Wellness Impact</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={healthMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="percentage" fill="#2D1B69" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Social Connection Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={socialMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="percentage" fill="#FF6B6B" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Wellness Outcomes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={wellnessOutcomes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="percentage" fill="#FFD700" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">Time Management</h4>
              <ul className="list-disc pl-4 space-y-2">
                <li>Save up to 2 hours daily through structured scheduling</li>
                <li>61% improvement in task completion rates</li>
                <li>40% reduction in missed appointments</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">Healthcare Management</h4>
              <ul className="list-disc pl-4 space-y-2">
                <li>50% reduction in missed medication doses</li>
                <li>40% increase in preventive health measures</li>
                <li>30% reduction in unnecessary healthcare visits</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">Quality of Life</h4>
              <ul className="list-disc pl-4 space-y-2">
                <li>86% report improved sense of purpose</li>
                <li>75% reduction in feelings of isolation</li>
                <li>83% improvement in overall life satisfaction</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;