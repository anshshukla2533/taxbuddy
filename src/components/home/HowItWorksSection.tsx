import { ClipboardList, Search, CreditCard, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Enter Your Details",
    description: "Tell us your income type (salary, freelance, business), investments, and basic info like PAN & Aadhaar.",
    color: "primary"
  },
  {
    number: "02",
    icon: Search,
    title: "Choose Your CA",
    description: "Browse verified CAs filtered by rating, price, language, and turnaround time. Select the one that fits you.",
    color: "accent"
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pay & Upload Docs",
    description: "Make a secure payment and upload your documents. Our CA checklist tells you exactly what's needed.",
    color: "warning"
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Get Your ITR Filed",
    description: "Your CA files the return, handles any queries, and you receive the acknowledgement PDF.",
    color: "success"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Filing your taxes shouldn't be complicated. Here's our simple 4-step process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-primary via-accent to-success" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-background rounded-2xl p-6 border border-border shadow-card text-center lg:text-left">
                  {/* Number Badge */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 ${
                    step.color === 'primary' ? 'gradient-primary' :
                    step.color === 'accent' ? 'gradient-accent' :
                    step.color === 'warning' ? 'bg-warning' :
                    'bg-success'
                  } text-white relative z-10`}>
                    <step.icon className="w-7 h-7" />
                  </div>

                  {/* Step Number */}
                  <div className="font-display text-5xl font-bold text-muted/30 mb-2">
                    {step.number}
                  </div>

                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
