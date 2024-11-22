import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/lovable-uploads/cd1b4251-9f89-4fc3-8dbb-f804c4b0ef51.png"
                  alt="GoldenDays Logo"
                  className="w-8 h-8"
                />
                <span className="font-bold text-primary">GoldenDays</span>
              </div>
              <p className="text-gray-600 text-sm">
                Redefining the future of financial management with innovative solutions.
              </p>
            </div>

            {/* Product Section */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Features</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Security</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Business</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Enterprise</Link></li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-primary text-sm">About</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Careers</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Press</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Blog</Link></li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Terms</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Privacy</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Cookies</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-primary text-sm">Licenses</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-[#9b87f5] text-white py-3 text-center text-sm font-medium tracking-wide shadow-inner">
        © {new Date().getFullYear()} GoldenDays. All rights reserved.
      </div>
    </>
  );
};

export default Footer;