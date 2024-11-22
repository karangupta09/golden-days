import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { Star, Heart, Users, Brain, Shield, Palette, Trophy, BarChart } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          <section>
            <h1 className="text-4xl font-bold text-primary mb-6">About GoldenDays</h1>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">
              GoldenDays is a comprehensive wellness platform enhancing physical, mental, and emotional well-being through personalized care and community connection. We believe in enriching daily lives by fostering meaningful connections, supporting health goals, and creating purposeful engagement for both individuals and their caregivers.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-semibold">Core Features</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">Personalized Wellness</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Tailored health tracking and activity scheduling</li>
                    <li>Customized wellness recommendations</li>
                    <li>Adaptive daily routines that match your lifestyle</li>
                    <li>Comprehensive health monitoring tools</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">Social Connection</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Local event discovery and community engagement</li>
                    <li>Virtual and in-person activity coordination</li>
                    <li>Cultural and creative group activities</li>
                    <li>Volunteer opportunities matching your interests</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">Caregiver Support</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Seamless communication between family members and caregivers</li>
                    <li>Real-time health updates and monitoring</li>
                    <li>Simplified care coordination tools</li>
                    <li>Mental health resources and support networks</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Palette className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">Creative and Cultural Opportunities</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Access to diverse cultural events and activities</li>
                    <li>Creative workshops and hobby groups</li>
                    <li>Multilingual support for diverse communities</li>
                    <li>Cultural celebration opportunities</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">Accessibility and Security</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Senior-friendly interface with large text options</li>
                    <li>Voice command capabilities</li>
                    <li>Simplified navigation</li>
                    <li>Advanced data protection</li>
                    <li>Secure health information sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-semibold">Our Impact</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <BarChart className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Wellness Achievements</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary">73%</span>
                  <span>improvement in daily routine adherence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary">80%</span>
                  <span>increase in community participation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary">75%</span>
                  <span>reduction in feelings of isolation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary">50%</span>
                  <span>better care coordination</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-semibold">Our Commitment</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We're dedicated to creating an inclusive, supportive environment where every user can thrive. Whether you're seeking to maintain an active lifestyle, connect with others, or provide care for loved ones, GoldenDays offers the tools and support you need to enhance your daily wellness journey.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;