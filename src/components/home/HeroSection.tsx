import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Star, Users, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 lg:pt-40 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-8 animate-fade-in-up">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted by 50,000+ Indians</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            File Your ITR with{" "}
            <span className="text-gradient">Trusted CAs</span>{" "}
            in 3 Simple Steps
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Connect with verified Chartered Accountants across India. 
            No confusing forms, no hidden fees. Just simple, secure tax filing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/file-itr" className="flex items-center gap-2">
                Start Filing Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/find-ca">Browse CAs</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">₹99</div>
              <div className="text-sm text-muted-foreground">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">2,500+</div>
              <div className="text-sm text-muted-foreground">Verified CAs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">4.9★</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">24hrs</div>
              <div className="text-sm text-muted-foreground">Avg. Filing Time</div>
            </div>
          </div>
        </div>

        {/* Floating Cards Preview */}
        <div className="mt-16 lg:mt-24 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative">
            {/* Main Preview Card */}
            <div className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
              <div className="p-4 md:p-6 bg-secondary/30 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-warning/60" />
                    <div className="w-3 h-3 rounded-full bg-success/60" />
                  </div>
                  <div className="flex-1 h-8 bg-muted/50 rounded-lg max-w-md" />
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Step 1 */}
                  <div className="bg-secondary/50 rounded-xl p-5 border border-border/50">
                    <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-bold mb-4">1</div>
                    <h3 className="font-display font-semibold text-foreground mb-2">Enter Details</h3>
                    <p className="text-sm text-muted-foreground">Income type, PAN, Aadhaar & investments</p>
                  </div>
                  {/* Step 2 */}
                  <div className="bg-secondary/50 rounded-xl p-5 border border-border/50">
                    <div className="w-10 h-10 rounded-full gradient-accent text-accent-foreground flex items-center justify-center font-bold mb-4">2</div>
                    <h3 className="font-display font-semibold text-foreground mb-2">Choose CA</h3>
                    <p className="text-sm text-muted-foreground">Select from verified CAs based on rating & price</p>
                  </div>
                  {/* Step 3 */}
                  <div className="bg-secondary/50 rounded-xl p-5 border border-border/50">
                    <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold mb-4">3</div>
                    <h3 className="font-display font-semibold text-foreground mb-2">Get Filed</h3>
                    <p className="text-sm text-muted-foreground">CA files your return & you get acknowledgement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating CA Card */}
            <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 hidden lg:block float">
              <div className="bg-card rounded-xl shadow-lg border border-border p-4 w-56">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">RK</div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Rajesh Kumar</div>
                    <div className="text-xs text-muted-foreground">CA • 12 yrs exp</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-warning text-warning" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">4.9 (328)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">₹499</span>
                  <span className="text-xs text-success font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
