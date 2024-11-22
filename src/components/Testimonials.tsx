import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rebecca & Chad",
      role: "Active Retirees, 55",
      location: "Evanston",
      image: "https://images.unsplash.com/photo-1595954379419-2d4a8f844789",
      quote: "GoldenDays helped us maintain an active lifestyle after retirement. The personalized schedules and health tracking keep us organized, while the community events have introduced us to wonderful new friends who share our interests."
    },
    {
      name: "Sumita",
      role: "Community Member, 70",
      location: "Evanston",
      image: "https://images.unsplash.com/photo-1581579438747-104c53e81cd4",
      quote: "I love how easy it is to stay connected with my family and find cultural activities in my community. The large text options make it comfortable to use, and I've joined several book clubs through the platform."
    },
    {
      name: "Erwin",
      role: "Professional Caregiver, 42",
      location: "Evanston",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      quote: "The caregiver tools have transformed how I manage patient care. The simplified interface helps me track health metrics and engage patients in meaningful activities, while the mental health resources help me maintain my own well-being."
    },
    {
      name: "Sofia",
      role: "Family Caregiver, 68",
      location: "Evanston",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      quote: "Balancing caregiving with my creative hobbies was challenging until I found GoldenDays. Now I can coordinate care for my aunt while still making time for my photography and crafting interests."
    }
  ];

  const stats = [
    { percentage: "73%", description: "improvement in daily routine adherence" },
    { percentage: "80%", description: "increase in community participation" },
    { percentage: "75%", description: "reduction in feelings of isolation" },
    { percentage: "50%", description: "better care coordination" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">What Our Users Say</h2>
          <p className="text-gray-600 text-lg">
            Join thousands of satisfied users who have transformed their daily lives with GoldenDays
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-lg p-8 shadow-sm">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{stat.percentage}</p>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;