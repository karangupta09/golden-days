import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Quote } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Voices of Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from members who have found joy, connection, and purpose through GoldenDays
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16 border-2 border-primary">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg text-primary">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-gray-700 italic pl-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-5xl font-bold text-white mb-3 animate-fade-in">
                  {stat.percentage}
                </p>
                <p className="text-white/90 text-lg capitalize">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;