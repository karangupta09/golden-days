import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
}

const TestimonialCard = ({ name, role, location, image, quote }: TestimonialCardProps) => {
  return (
    <Card className="group bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-8">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20 border-2 border-primary/20 group-hover:border-primary transition-colors duration-300 rounded-xl overflow-hidden">
              <AvatarImage 
                src={image} 
                alt={name}
                className="object-cover"
              />
              <AvatarFallback className="bg-primary/5">
                {name.split(' ')[0][0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-lg text-primary group-hover:text-primary/80 transition-colors">
                {name}
              </h4>
              <p className="text-gray-600">{role}</p>
              <p className="text-gray-500 text-sm">{location}</p>
            </div>
          </div>
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
            <p className="text-gray-700 italic pl-8 leading-relaxed">
              "{quote}"
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;