import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50/50 border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/lovable-uploads/cd1b4251-9f89-4fc3-8dbb-f804c4b0ef51.png"
                  alt="GoldenDays Logo"
                  className="w-10 h-10"
                />
                <span className="font-bold text-xl text-primary">GoldenDays</span>
              </div>
              <p className="text-gray-600">
                Empowering seniors with innovative solutions for a more connected and fulfilling life.
              </p>
            </div>

            {/* Product Section */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-gray-900">Product</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Features</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Security</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Business</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Enterprise</Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-gray-900">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Careers</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Press</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Blog</Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg text-gray-900">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Terms</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Privacy</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Cookies</Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-600 hover:text-primary transition-colors">Licenses</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-primary text-white py-4 text-center text-sm font-medium tracking-wide shadow-inner">
        © {new Date().getFullYear()} GoldenDays. All rights reserved.
      </div>
    </>
  );
};

export default Footer;