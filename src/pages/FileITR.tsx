import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  ArrowLeft, 
  ArrowRight, 
  Briefcase, 
  Building2, 
  GraduationCap, 
  Laptop, 
  Tractor, 
  CheckCircle2,
  Shield,
  FileText
} from "lucide-react";

type IncomeType = "salary" | "freelance" | "business" | "student" | "farmer";

const incomeTypes = [
  { id: "salary", label: "Salaried", icon: Briefcase, description: "Working for a company" },
  { id: "freelance", label: "Freelancer", icon: Laptop, description: "Self-employed consultant" },
  { id: "business", label: "Business", icon: Building2, description: "Own a business/startup" },
  { id: "student", label: "Student", icon: GraduationCap, description: "Part-time income" },
  { id: "farmer", label: "Farmer", icon: Tractor, description: "Agricultural income" },
];

const FileITR = () => {
  const [step, setStep] = useState(1);
  const [incomeType, setIncomeType] = useState<IncomeType | "">("");
  const [formData, setFormData] = useState({
    pan: "",
    aadhaar: "",
    annualIncome: "",
    bankAccount: "",
    ifsc: "",
    investments: [] as string[],
  });

  const investments = [
    { id: "lic", label: "LIC / Insurance Premium" },
    { id: "ppf", label: "PPF / EPF" },
    { id: "fd", label: "Fixed Deposits (Tax Saver)" },
    { id: "elss", label: "ELSS Mutual Funds" },
    { id: "nps", label: "NPS (National Pension)" },
    { id: "housing", label: "Home Loan / HRA" },
    { id: "medical", label: "Medical Insurance" },
    { id: "education", label: "Education Loan" },
  ];

  const toggleInvestment = (id: string) => {
    setFormData(prev => ({
      ...prev,
      investments: prev.investments.includes(id) 
        ? prev.investments.filter(i => i !== id)
        : [...prev.investments, id]
    }));
  };

  const detectITRForm = () => {
    if (incomeType === "salary" && formData.investments.length <= 3) return "ITR-1";
    if (incomeType === "freelance") return "ITR-3";
    if (incomeType === "business") return "ITR-3";
    return "ITR-2";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                  step >= s 
                    ? 'gradient-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div className={`w-16 sm:w-24 h-1 mx-2 rounded-full transition-all ${
                    step > s ? 'gradient-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Income Type */}
          {step === 1 && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                  What's Your Income Type?
                </h1>
                <p className="text-muted-foreground">
                  Select your primary source of income. This helps us detect the right ITR form.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {incomeTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setIncomeType(type.id as IncomeType)}
                    className={`p-5 rounded-xl border-2 text-left transition-all ${
                      incomeType === type.id
                        ? 'border-primary bg-primary/5 shadow-glow'
                        : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                      incomeType === type.id ? 'gradient-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                    }`}>
                      <type.icon className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-foreground mb-1">{type.label}</div>
                    <div className="text-sm text-muted-foreground">{type.description}</div>
                  </button>
                ))}
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => setStep(2)}
                disabled={!incomeType}
              >
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}

          {/* Step 2: Personal Details */}
          {step === 2 && (
            <div className="animate-fade-in-up">
              <Button 
                variant="ghost" 
                className="mb-6"
                onClick={() => setStep(1)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <div className="text-center mb-8">
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Your Details
                </h1>
                <p className="text-muted-foreground">
                  Enter your basic information. All data is encrypted and secure.
                </p>
              </div>

              <div className="space-y-5 mb-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number</Label>
                    <Input 
                      id="pan"
                      placeholder="ABCDE1234F"
                      value={formData.pan}
                      onChange={(e) => setFormData(prev => ({ ...prev, pan: e.target.value.toUpperCase() }))}
                      maxLength={10}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aadhaar">Aadhaar Number</Label>
                    <Input 
                      id="aadhaar"
                      placeholder="1234 5678 9012"
                      value={formData.aadhaar}
                      onChange={(e) => setFormData(prev => ({ ...prev, aadhaar: e.target.value }))}
                      maxLength={14}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="income">Annual Income (₹)</Label>
                  <Input 
                    id="income"
                    type="number"
                    placeholder="e.g. 800000"
                    value={formData.annualIncome}
                    onChange={(e) => setFormData(prev => ({ ...prev, annualIncome: e.target.value }))}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bank">Bank Account Number</Label>
                    <Input 
                      id="bank"
                      placeholder="Enter account number"
                      value={formData.bankAccount}
                      onChange={(e) => setFormData(prev => ({ ...prev, bankAccount: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ifsc">IFSC Code</Label>
                    <Input 
                      id="ifsc"
                      placeholder="e.g. HDFC0001234"
                      value={formData.ifsc}
                      onChange={(e) => setFormData(prev => ({ ...prev, ifsc: e.target.value.toUpperCase() }))}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-4 bg-secondary/50 rounded-lg mb-6">
                <Shield className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Your data is encrypted with bank-grade security. PAN & Aadhaar are masked for privacy.
                </p>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={() => setStep(3)}
              >
                Continue to Investments
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}

          {/* Step 3: Investments */}
          {step === 3 && (
            <div className="animate-fade-in-up">
              <Button 
                variant="ghost" 
                className="mb-6"
                onClick={() => setStep(2)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <div className="text-center mb-8">
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Tax-Saving Investments
                </h1>
                <p className="text-muted-foreground">
                  Select all investments you've made this year for tax deductions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {investments.map((inv) => (
                  <button
                    key={inv.id}
                    onClick={() => toggleInvestment(inv.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${
                      formData.investments.includes(inv.id)
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                      formData.investments.includes(inv.id)
                        ? 'border-accent bg-accent text-accent-foreground'
                        : 'border-muted-foreground'
                    }`}>
                      {formData.investments.includes(inv.id) && <CheckCircle2 className="w-3 h-3" />}
                    </div>
                    <span className="font-medium text-foreground">{inv.label}</span>
                  </button>
                ))}
              </div>

              {/* ITR Form Detection */}
              <div className="p-5 rounded-xl border-2 border-primary bg-primary/5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground mb-1">
                      Detected: {detectITRForm()}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on your income type and investments, you need to file {detectITRForm()}.
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                asChild
              >
                <Link to="/find-ca">
                  Find a CA to File My ITR
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FileITR;
