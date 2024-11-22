import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Activity {
  id: number;
  time: string;
  title: string;
  type: "health" | "social" | "leisure" | "medication";
  description?: string;
}

const activities: Activity[] = [
  {
    id: 1,
    time: "09:00",
    title: "Morning Yoga",
    type: "health",
    description: "30-minute gentle yoga session",
  },
  {
    id: 2,
    time: "10:00",
    title: "Take Morning Medications",
    type: "medication",
    description: "Blood pressure and vitamins",
  },
  {
    id: 3,
    time: "11:30",
    title: "Book Club Meeting",
    type: "social",
    description: "Discussion of 'The Great Gatsby'",
  },
  {
    id: 4,
    time: "15:00",
    title: "Watch Baseball Game",
    type: "leisure",
    description: "Yankees vs Red Sox",
  },
  {
    id: 5,
    time: "18:00",
    title: "Evening Walk",
    type: "health",
    description: "30-minute walk in the park",
  },
];

interface DailyScheduleProps {
  selectedDate?: Date;
}

const DailySchedule = ({ selectedDate = new Date() }: DailyScheduleProps) => {
  const getBadgeColor = (type: Activity["type"]) => {
    switch (type) {
      case "health":
        return "bg-green-500";
      case "social":
        return "bg-blue-500";
      case "leisure":
        return "bg-yellow-500";
      case "medication":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule for {format(selectedDate, "EEEE, MMMM do")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="w-20 font-mono text-sm">{activity.time}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium">{activity.title}</h3>
                  <Badge className={getBadgeColor(activity.type)}>
                    {activity.type}
                  </Badge>
                </div>
                {activity.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {activity.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailySchedule;