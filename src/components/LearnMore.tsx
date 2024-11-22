import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LearnMore = () => {
  return (
    <section id="learn-more" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-accent">
            Learn More About GoldenDays
          </h2>
          <p className="text-xl mb-12 text-white leading-relaxed">
            Discover how GoldenDays can help you maintain an active and fulfilling lifestyle. Our platform is designed to support your well-being journey with intuitive features and a caring community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-accent">For Active Adults</h3>
              <p className="text-white mb-6">
                Stay engaged with personalized activities, health tracking, and social connections that match your interests and lifestyle.
              </p>
              <Link 
                to="/get-started" 
                className="inline-flex items-center text-accent hover:text-white transition-colors"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="bg-secondary p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-accent">For Caregivers</h3>
              <p className="text-white mb-6">
                Access comprehensive tools and resources to provide better care while maintaining your own well-being and interests.
              </p>
              <Link 
                to="/caregiver-support" 
                className="inline-flex items-center text-accent hover:text-white transition-colors"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center bg-secondary text-accent hover:bg-accent hover:text-secondary px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Explore All Features <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;