import { TrendingUp, TrendingDown, IndianRupee, FileText, Clock, CheckCircle2, Users } from "lucide-react";

const stats = [
  {
    label: "Total Earnings",
    value: "₹48,500",
    change: "+12.5%",
    trend: "up",
    icon: IndianRupee,
    description: "This month",
    gradient: "gradient-accent"
  },
  {
    label: "New Requests",
    value: "8",
    change: "+3",
    trend: "up",
    icon: Users,
    description: "Pending review",
    gradient: "gradient-primary"
  },
  {
    label: "Active Cases",
    value: "12",
    change: "-2",
    trend: "down",
    icon: FileText,
    description: "In progress",
    gradient: "bg-info"
  },
  {
    label: "Completed",
    value: "45",
    change: "+8",
    trend: "up",
    icon: CheckCircle2,
    description: "This month",
    gradient: "bg-success"
  }
];

const CAStats = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-card rounded-2xl border border-border p-5 hover:shadow-card transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl ${stat.gradient} text-white flex items-center justify-center`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${
              stat.trend === 'up' ? 'text-success' : 'text-destructive'
            }`}>
              {stat.trend === 'up' ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {stat.change}
            </div>
          </div>
          <div className="font-display text-2xl font-bold text-foreground mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
          <div className="text-xs text-muted-foreground/70 mt-1">{stat.description}</div>
        </div>
      ))}
    </div>
  );
};

export default CAStats;
