import TestimonialCard from "./testimonials/TestimonialCard";
import StatsSection from "./testimonials/StatsSection";
import { testimonials, stats } from "./testimonials/TestimonialsData";

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pt-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Voices of Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from members who have found joy, connection, and purpose through GoldenDays
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <StatsSection stats={stats} />
      </div>
    </section>
  );
};

export default Testimonials;