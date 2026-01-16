import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Star, 
  CheckCircle2, 
  Clock, 
  Languages, 
  Search,
  SlidersHorizontal,
  MapPin,
  Filter
} from "lucide-react";

const allCAs = [
  {
    id: 1,
    name: "Priya Sharma",
    initials: "PS",
    experience: "8 years",
    rating: 4.9,
    reviews: 245,
    price: 499,
    languages: ["Hindi", "English"],
    speciality: "Salaried & Freelancers",
    turnaround: "24 hrs",
    location: "Mumbai",
    verified: true,
    gradient: "gradient-primary",
    bio: "Specialized in individual tax returns for salaried employees and freelancers. Quick turnaround with detailed explanations."
  },
  {
    id: 2,
    name: "Amit Patel",
    initials: "AP",
    experience: "15 years",
    rating: 5.0,
    reviews: 512,
    price: 799,
    languages: ["Gujarati", "Hindi", "English"],
    speciality: "Business & Startups",
    turnaround: "48 hrs",
    location: "Ahmedabad",
    verified: true,
    gradient: "gradient-accent",
    bio: "Expert in business taxation, GST filing, and startup compliance. Trusted by 200+ SMEs."
  },
  {
    id: 3,
    name: "Sunita Reddy",
    initials: "SR",
    experience: "10 years",
    rating: 4.8,
    reviews: 189,
    price: 599,
    languages: ["Telugu", "English"],
    speciality: "NRI Returns",
    turnaround: "24 hrs",
    location: "Hyderabad",
    verified: true,
    gradient: "bg-info",
    bio: "Specialist in NRI taxation, DTAA benefits, and foreign income reporting."
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    initials: "RK",
    experience: "12 years",
    rating: 4.7,
    reviews: 328,
    price: 449,
    languages: ["Hindi", "English"],
    speciality: "Salaried Employees",
    turnaround: "12 hrs",
    location: "Delhi",
    verified: true,
    gradient: "bg-warning",
    bio: "Fast and affordable ITR filing for salaried individuals. Known for quick responses."
  },
  {
    id: 5,
    name: "Meera Iyer",
    initials: "MI",
    experience: "6 years",
    rating: 4.9,
    reviews: 156,
    price: 549,
    languages: ["Tamil", "English", "Hindi"],
    speciality: "Freelancers & Consultants",
    turnaround: "24 hrs",
    location: "Chennai",
    verified: true,
    gradient: "gradient-primary",
    bio: "Young and tech-savvy CA helping freelancers maximize their deductions legally."
  },
  {
    id: 6,
    name: "Vikram Singh",
    initials: "VS",
    experience: "20 years",
    rating: 5.0,
    reviews: 678,
    price: 999,
    languages: ["Hindi", "Punjabi", "English"],
    speciality: "High Net Worth Individuals",
    turnaround: "72 hrs",
    location: "Chandigarh",
    verified: true,
    gradient: "gradient-gold",
    bio: "Senior CA with expertise in complex tax situations, capital gains, and estate planning."
  },
];

const FindCA = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    language: "",
    price: "",
    turnaround: "",
  });

  const filteredCAs = allCAs.filter(ca => {
    const matchesSearch = ca.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ca.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ca.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Perfect CA
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse our network of 2,500+ verified Chartered Accountants. 
              Filter by language, price, or specialization.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-card rounded-2xl border border-border p-4 md:p-6 mb-8 shadow-card">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, specialty, or city..."
                  className="pl-12 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="default" className="gap-2">
                  <Languages className="w-4 h-4" />
                  Language
                </Button>
                <Button variant="secondary" size="default" className="gap-2">
                  <Clock className="w-4 h-4" />
                  Turnaround
                </Button>
                <Button variant="secondary" size="default" className="gap-2">
                  <SlidersHorizontal className="w-4 h-4" />
                  Price
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredCAs.length}</span> verified CAs
            </p>
            <Button variant="ghost" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Sort by: Recommended
            </Button>
          </div>

          {/* CA Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCAs.map((ca) => (
              <div 
                key={ca.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Header */}
                <div className="p-6">
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

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {ca.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      <Clock className="w-3 h-3" />
                      {ca.turnaround}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      <MapPin className="w-3 h-3" />
                      {ca.location}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      <Languages className="w-3 h-3" />
                      {ca.languages.slice(0, 2).join(", ")}
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
      </main>

      <Footer />
    </div>
  );
};

export default FindCA;
