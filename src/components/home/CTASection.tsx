import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Taxpayers */}
          <div className="bg-background rounded-2xl p-8 md:p-10 border border-border relative overflow-hidden group hover:shadow-card transition-shadow duration-300">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center mb-6">
                <FileText className="w-7 h-7" />
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to File Your ITR?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Start in 3 simple steps. Tell us your income, pick a CA, and get your return filed. 
                Starting at just ₹499.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/file-itr" className="flex items-center gap-2">
                    Start Filing
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* For CAs */}
          <div className="bg-foreground rounded-2xl p-8 md:p-10 text-background relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl gradient-accent text-accent-foreground flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Are You a Chartered Accountant?
              </h3>
              <p className="text-background/70 mb-6 max-w-md">
                Join our network of 2,500+ verified CAs. Get matched with clients, 
                manage cases easily, and grow your practice.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/for-cas" className="flex items-center gap-2">
                    Join as CA
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="border-background/30 text-background hover:bg-background/10 hover:text-background"
                >
                  <Link to="/ca-benefits">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
