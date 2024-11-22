import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Retired Teacher",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      quote: "GoldenDays has made managing my retirement finances so much easier. The interface is intuitive and the support is exceptional!"
    },
    {
      name: "Robert Chen",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      quote: "The financial planning tools have helped me make better decisions for my future. Highly recommend!"
    },
    {
      name: "Maria Garcia",
      role: "Healthcare Professional",
      image: "/placeholder.svg",
      quote: "I love how easy it is to track my investments and plan for retirement. GoldenDays has everything I need in one place."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">What Our Users Say</h2>
          <p className="text-gray-600 text-lg">
            Join thousands of satisfied users who have transformed their banking experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;