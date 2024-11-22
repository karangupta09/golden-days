import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/cd1b4251-9f89-4fc3-8dbb-f804c4b0ef51.png"
              alt="GoldenDays Logo"
              className="w-8 h-8"
            />
            <span className="font-bold text-primary">GoldenDays</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {location.pathname === '/' && (
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Link>
            )}
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact Us
            </button>
            <Link to="/get-started">
              <Button>Get Started</Button>
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;