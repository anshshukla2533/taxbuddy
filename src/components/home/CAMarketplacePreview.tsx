import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle2, Clock, Languages, ArrowRight } from "lucide-react";

const sampleCAs = [
  {
    name: "Priya Sharma",
    initials: "PS",
    experience: "8 years",
    rating: 4.9,
    reviews: 245,
    price: 499,
    languages: ["Hindi", "English"],
    speciality: "Salaried & Freelancers",
    turnaround: "24 hrs",
    verified: true,
    gradient: "gradient-primary"
  },
  {
    name: "Amit Patel",
    initials: "AP",
    experience: "15 years",
    rating: 5.0,
    reviews: 512,
    price: 799,
    languages: ["Gujarati", "Hindi", "English"],
    speciality: "Business & Startups",
    turnaround: "48 hrs",
    verified: true,
    gradient: "gradient-accent"
  },
  {
    name: "Sunita Reddy",
    initials: "SR",
    experience: "10 years",
    rating: 4.8,
    reviews: 189,
    price: 599,
    languages: ["Telugu", "English"],
    speciality: "NRI Returns",
    turnaround: "24 hrs",
    verified: true,
    gradient: "bg-info"
  }
];

const CAMarketplacePreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
              CA Marketplace
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Perfect CA
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Browse verified Chartered Accountants by rating, price, language, and expertise. 
              Book in minutes, file with confidence.
            </p>
          </div>
          <Button variant="outline" size="lg" asChild className="self-start lg:self-auto">
            <Link to="/find-ca" className="flex items-center gap-2">
              View All CAs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* CA Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCAs.map((ca, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl ${ca.gradient} text-white flex items-center justify-center font-display font-bold text-lg`}>
                      {ca.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-semibold text-foreground">{ca.name}</h3>
                        {ca.verified && (
                          <CheckCircle2 className="w-4 h-4 text-success" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">CA • {ca.experience} exp</p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(ca.rating) ? 'fill-warning text-warning' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{ca.rating}</span>
                  <span className="text-sm text-muted-foreground">({ca.reviews} reviews)</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                    <Clock className="w-3 h-3" />
                    {ca.turnaround}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                    <Languages className="w-3 h-3" />
                    {ca.languages.join(", ")}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  Specializes in: <span className="text-foreground font-medium">{ca.speciality}</span>
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-secondary/30 border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-2xl font-display font-bold text-foreground">₹{ca.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">/ filing</span>
                </div>
                <Button variant="hero" size="sm">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CAMarketplacePreview;
