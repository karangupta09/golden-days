import { Users, Book, Heart, Brain, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SocialConnection = () => {
  const communityGroups = [
    {
      icon: <Book className="w-8 h-8 text-blue-500" />,
      title: "Book Club",
      members: 24,
      nextMeeting: "Thursday, 3 PM",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Mindfulness Group",
      members: 18,
      nextMeeting: "Monday, 10 AM",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Yoga & Relaxation",
      members: 15,
      nextMeeting: "Wednesday, 9 AM",
    },
  ];

  const resources = [
    {
      title: "Finding Peace in Nature",
      type: "Article",
      readTime: "5 min read",
    },
    {
      title: "Meditation for Beginners",
      type: "Guide",
      readTime: "10 min read",
    },
    {
      title: "Building Lasting Friendships",
      type: "Workshop",
      readTime: "45 min video",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-20 pb-8">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Community Connection
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {communityGroups.map((group, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">
                  {group.title}
                </CardTitle>
                {group.icon}
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{group.members} members</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Next meeting: {group.nextMeeting}
                </p>
                <Button className="w-full">Join Group</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-primary mb-6">
          Learning Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    {resource.type}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {resource.readTime}
                  </span>
                </div>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              Share Your Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Share your thoughts and experiences with the community.
            </p>
            <Button className="w-full">Create Post</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SocialConnection;