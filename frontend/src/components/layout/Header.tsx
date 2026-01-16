import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Users, Shield, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              TaxBuddy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/file-itr" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium animated-underline"
            >
              File ITR
            </Link>
            <Link 
              to="/find-ca" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium animated-underline"
            >
              Find CA
            </Link>
            <Link 
              to="/ca-dashboard"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium animated-underline"
            >
              For CAs
            </Link>
            <Link 
              to="/pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium animated-underline"
            >
              Pricing
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              <Link 
                to="/file-itr" 
                className="px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                File ITR
              </Link>
              <Link 
                to="/find-ca" 
                className="px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Find CA
              </Link>
              <Link 
                to="/for-cas" 
                className="px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                For CAs
              </Link>
              <Link 
                to="/pricing" 
                className="px-4 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col gap-2 pt-3 border-t border-border mt-2">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="hero" asChild className="w-full">
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
