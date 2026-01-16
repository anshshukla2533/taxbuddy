import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileText, Mail, Lock, Eye, EyeOff, ArrowRight, User, Phone } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<"client" | "ca">("client");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-20 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-2xl text-foreground">TaxBuddy</span>
            </Link>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Create your account
            </h1>
            <p className="text-muted-foreground">
              Get started with simple tax filing
            </p>
          </div>

          {/* Register Form */}
          <div className="bg-card rounded-2xl border border-border shadow-card p-6 md:p-8">
            {/* User Type Selection */}
            <div className="mb-6">
              <Label className="mb-3 block">I am a...</Label>
              <RadioGroup 
                value={userType} 
                onValueChange={(v) => setUserType(v as "client" | "ca")}
                className="grid grid-cols-2 gap-3"
              >
                <Label 
                  htmlFor="client"
                  className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    userType === "client" 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem value="client" id="client" className="sr-only" />
                  <div className="text-center">
                    <div className="font-semibold text-foreground">Taxpayer</div>
                    <div className="text-xs text-muted-foreground">File my ITR</div>
                  </div>
                </Label>
                <Label 
                  htmlFor="ca"
                  className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    userType === "ca" 
                      ? "border-accent bg-accent/5" 
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <RadioGroupItem value="ca" id="ca" className="sr-only" />
                  <div className="text-center">
                    <div className="font-semibold text-foreground">CA</div>
                    <div className="text-xs text-muted-foreground">Serve clients</div>
                  </div>
                </Label>
              </RadioGroup>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="pl-11"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-11"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="pl-11"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="pl-11 pr-11"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button 
                variant={userType === "client" ? "hero" : "accent"}
                size="lg" 
                className="w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : userType === "client" ? "Create Account" : "Register as CA"}
                {!isLoading && <ArrowRight className="w-5 h-5 ml-2" />}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
              {" "}and{" "}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
            </p>
          </div>

          {/* Login Link */}
          <p className="text-center text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
