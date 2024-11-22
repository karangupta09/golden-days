import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format, startOfWeek, addDays } from "date-fns";

interface Activity {
  id: number;
  time: string;
  title: string;
  type: "health" | "social" | "leisure" | "medication";
  description?: string;
  day: number; // 0-6 for Sunday-Saturday
}

const weeklyActivities: Activity[] = [
  {
    id: 1,
    time: "09:00",
    title: "Morning Yoga",
    type: "health",
    description: "30-minute gentle yoga session",
    day: 1, // Monday
  },
  {
    id: 2,
    time: "10:00",
    title: "Book Club",
    type: "social",
    description: "Weekly reading group",
    day: 2, // Tuesday
  },
  {
    id: 3,
    time: "15:00",
    title: "Doctor's Appointment",
    type: "health",
    description: "Regular checkup",
    day: 3, // Wednesday
  },
  {
    id: 4,
    time: "11:00",
    title: "Garden Club",
    type: "leisure",
    description: "Community garden meetup",
    day: 4, // Thursday
  },
  {
    id: 5,
    time: "14:00",
    title: "Medication Review",
    type: "medication",
    description: "Monthly review with pharmacist",
    day: 5, // Friday
  },
];

interface WeeklyScheduleProps {
  selectedDate?: Date;
}

const WeeklySchedule = ({ selectedDate = new Date() }: WeeklyScheduleProps) => {
  const startOfCurrentWeek = startOfWeek(selectedDate);
  
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

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startOfCurrentWeek, i);
    const dayActivities = weeklyActivities.filter(activity => activity.day === i);
    return { date, activities: dayActivities };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Week of {format(startOfCurrentWeek, "MMMM do, yyyy")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {weekDays.map(({ date, activities }, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 bg-card"
            >
              <h3 className="font-semibold text-center mb-3">
                {format(date, "EEEE")}
                <br />
                <span className="text-sm text-muted-foreground">
                  {format(date, "MMM d")}
                </span>
              </h3>
              <div className="space-y-2">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="p-2 rounded-md bg-muted/50 text-sm"
                  >
                    <div className="font-mono text-xs">{activity.time}</div>
                    <div className="font-medium">{activity.title}</div>
                    <Badge className={getBadgeColor(activity.type)}>
                      {activity.type}
                    </Badge>
                    {activity.description && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {activity.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklySchedule;