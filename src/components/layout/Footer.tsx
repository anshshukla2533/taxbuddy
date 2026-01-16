import { Link } from "react-router-dom";
import { FileText, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                <FileText className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-display font-bold text-xl">TaxBuddy</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              India's most trusted platform connecting taxpayers with verified Chartered Accountants. 
              File your ITR with confidence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/file-itr" className="text-background/70 hover:text-background transition-colors text-sm">File ITR</Link></li>
              <li><Link to="/find-ca" className="text-background/70 hover:text-background transition-colors text-sm">Find a CA</Link></li>
              <li><Link to="/for-cas" className="text-background/70 hover:text-background transition-colors text-sm">Join as CA</Link></li>
              <li><Link to="/pricing" className="text-background/70 hover:text-background transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-background transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/itr-guide" className="text-background/70 hover:text-background transition-colors text-sm">ITR Filing Guide</Link></li>
              <li><Link to="/tax-calculator" className="text-background/70 hover:text-background transition-colors text-sm">Tax Calculator</Link></li>
              <li><Link to="/blog" className="text-background/70 hover:text-background transition-colors text-sm">Tax Blog</Link></li>
              <li><Link to="/faq" className="text-background/70 hover:text-background transition-colors text-sm">FAQs</Link></li>
              <li><Link to="/help" className="text-background/70 hover:text-background transition-colors text-sm">Help Center</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-background/70 text-sm">support@taxbuddy.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-background/70 text-sm">1800-123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-background/70 text-sm">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2025 TaxBuddy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-background/60 hover:text-background text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-background/60 hover:text-background text-sm transition-colors">Terms of Service</Link>
            <Link to="/refund" className="text-background/60 hover:text-background text-sm transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
