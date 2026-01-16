import { 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  Languages, 
  FileCheck, 
  Lock, 
  HeadphonesIcon 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified CAs Only",
    description: "Every CA is verified with their membership number. Your taxes are in safe hands.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Auto ITR Detection",
    description: "Enter your income details and we automatically detect ITR-1, ITR-2, ITR-3 or ITR-4.",
    color: "accent"
  },
  {
    icon: Clock,
    title: "24hr Filing",
    description: "Most returns are filed within 24 hours. Track progress in real-time.",
    color: "warning"
  },
  {
    icon: Languages,
    title: "Regional Languages",
    description: "Find CAs who speak Hindi, Tamil, Telugu, Bengali, Marathi & more.",
    color: "info"
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "PAN masking, Aadhaar vault, and encrypted document storage.",
    color: "primary"
  },
  {
    icon: HeadphonesIcon,
    title: "Direct CA Chat",
    description: "Chat directly with your CA. Ask questions, clarify doubts anytime.",
    color: "accent"
  },
  {
    icon: FileCheck,
    title: "Document Checklist",
    description: "Get a personalized document checklist based on your income type.",
    color: "success"
  },
  {
    icon: Users,
    title: "Smart Matching",
    description: "AI suggests the best CA based on your income complexity & location.",
    color: "info"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Why TaxBuddy
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tax Filing Made Simple & Secure
          </h2>
          <p className="text-muted-foreground text-lg">
            We've built everything you need to file your taxes with confidence, 
            from verified CAs to encrypted document handling.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                  feature.color === 'primary' ? 'gradient-primary text-primary-foreground' :
                  feature.color === 'accent' ? 'gradient-accent text-accent-foreground' :
                  feature.color === 'warning' ? 'bg-warning/10 text-warning' :
                  feature.color === 'info' ? 'bg-info/10 text-info' :
                  'bg-success/10 text-success'
                }`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
