import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Software Engineer, Bangalore",
    content: "First time filing my own ITR. TaxBuddy made it so simple! My CA Priya explained everything in Hindi and filed my return within 24 hours.",
    rating: 5,
    avatar: "RV"
  },
  {
    name: "Sneha Gupta",
    role: "Freelance Designer, Delhi",
    content: "As a freelancer, my taxes were always confusing. Found a CA who specializes in freelancers, and now I'm confident I'm not overpaying.",
    rating: 5,
    avatar: "SG"
  },
  {
    name: "Arun Krishnan",
    role: "Small Business Owner, Chennai",
    content: "The CA I found speaks Tamil, understands GST complexity, and charges half of what my local accountant did. Best decision ever!",
    rating: 5,
    avatar: "AK"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
            Happy Taxpayers
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of Indians who've simplified their tax filing with TaxBuddy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 border border-border relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 p-8 rounded-2xl gradient-primary">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">50,000+</div>
              <div className="text-primary-foreground/80 text-sm">ITRs Filed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">2,500+</div>
              <div className="text-primary-foreground/80 text-sm">Verified CAs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">28</div>
              <div className="text-primary-foreground/80 text-sm">States Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">4.9/5</div>
              <div className="text-primary-foreground/80 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
