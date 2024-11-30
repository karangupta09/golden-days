import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, LogIn, LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useToast } from "./ui/use-toast";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const supabase = useSupabaseClient();
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const goToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account",
      });
      navigate('/');
    }
    setIsOpen(false);
  };

  const navigationLinks = [
    { label: "Home", action: goToHome, icon: <Home className="w-4 h-4" /> },
    { label: "About", path: "/about" },
    { label: "Features", action: () => scrollToSection("features") },
    { label: "Pricing", action: () => scrollToSection("pricing") },
    { label: "Contact Us", action: () => scrollToSection("contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={goToHome} className="flex items-center gap-2">
            <img
              src="/lovable-uploads/cd1b4251-9f89-4fc3-8dbb-f804c4b0ef51.png"
              alt="GoldenDays Logo"
              className="w-8 h-8"
            />
            <span className="font-bold text-primary">GoldenDays</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link, index) => (
              link.path ? (
                <Link 
                  key={index}
                  to={link.path} 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={link.action}
                  className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
                >
                  {link.icon}
                  {link.label}
                </button>
              )
            ))}
            <div className="flex items-center gap-2">
              {session ? (
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </Button>
              ) : (
                <>
                  <Link to="/signin">
                    <Button variant="outline" className="flex items-center gap-2">
                      <LogIn className="w-4 h-4" />
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/get-started">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigationLinks.map((link, index) => (
                    link.path ? (
                      <Link
                        key={index}
                        to={link.path}
                        className="text-lg font-medium hover:text-primary transition-colors p-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        key={index}
                        onClick={link.action}
                        className="text-lg font-medium hover:text-primary transition-colors text-left flex items-center gap-2 p-2"
                      >
                        {link.icon}
                        {link.label}
                      </button>
                    )
                  ))}
                  <div className="flex flex-col gap-2 mt-4">
                    {session ? (
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center gap-2"
                        onClick={handleSignOut}
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </Button>
                    ) : (
                      <>
                        <Link to="/signin" onClick={() => setIsOpen(false)}>
                          <Button variant="outline" className="w-full flex items-center gap-2">
                            <LogIn className="w-4 h-4" />
                            Sign In
                          </Button>
                        </Link>
                        <Link to="/get-started" onClick={() => setIsOpen(false)}>
                          <Button className="w-full">Sign Up</Button>
                        </Link>
                      </>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;