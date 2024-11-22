import Navigation from "../components/Navigation";

const About = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          <section>
            <h1 className="text-4xl font-bold text-primary mb-6">About GoldenDays</h1>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              GoldenDays is a comprehensive wellness platform enhancing physical, mental, and emotional well-being through personalized care and community connection. We believe in enriching daily lives by fostering meaningful connections, supporting health goals, and creating purposeful engagement for both individuals and their caregivers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Personalized Wellness</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Tailored health tracking and activity scheduling</li>
                    <li>Customized wellness recommendations</li>
                    <li>Adaptive daily routines that match your lifestyle</li>
                    <li>Comprehensive health monitoring tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Social Connection</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Local event discovery and community engagement</li>
                    <li>Virtual and in-person activity coordination</li>
                    <li>Cultural and creative group activities</li>
                    <li>Volunteer opportunities matching your interests</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Caregiver Support</h3>
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
                  <h3 className="text-xl font-semibold text-primary mb-3">Creative and Cultural Opportunities</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Access to diverse cultural events and activities</li>
                    <li>Creative workshops and hobby groups</li>
                    <li>Multilingual support for diverse communities</li>
                    <li>Cultural celebration opportunities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Accessibility and Security</h3>
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
            <h2 className="text-2xl font-semibold mb-6">Our Impact</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Wellness Achievements</h3>
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
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
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