import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  XCircle,
  ChevronRight,
  Briefcase,
  Laptop,
  Building2
} from "lucide-react";

interface CARequestListProps {
  onChatOpen: (clientId: string) => void;
}

const requests = [
  {
    id: "REQ001",
    clientName: "Rahul Verma",
    clientInitials: "RV",
    incomeType: "salary",
    itrForm: "ITR-1",
    amount: "₹8,50,000",
    price: 499,
    requestedAt: "2 hours ago",
    deadline: "July 31, 2025",
    documents: 4,
    priority: "normal"
  },
  {
    id: "REQ002",
    clientName: "Sneha Gupta",
    clientInitials: "SG",
    incomeType: "freelance",
    itrForm: "ITR-3",
    amount: "₹15,20,000",
    price: 799,
    requestedAt: "5 hours ago",
    deadline: "July 31, 2025",
    documents: 6,
    priority: "high"
  },
  {
    id: "REQ003",
    clientName: "Amit Shah",
    clientInitials: "AS",
    incomeType: "business",
    itrForm: "ITR-3",
    amount: "₹45,00,000",
    price: 1499,
    requestedAt: "1 day ago",
    deadline: "July 31, 2025",
    documents: 12,
    priority: "urgent"
  },
  {
    id: "REQ004",
    clientName: "Priyanka Reddy",
    clientInitials: "PR",
    incomeType: "salary",
    itrForm: "ITR-2",
    amount: "₹12,00,000",
    price: 599,
    requestedAt: "1 day ago",
    deadline: "July 31, 2025",
    documents: 5,
    priority: "normal"
  }
];

const incomeIcons = {
  salary: Briefcase,
  freelance: Laptop,
  business: Building2
};

const priorityColors = {
  normal: "bg-secondary text-secondary-foreground",
  high: "bg-warning/10 text-warning",
  urgent: "bg-destructive/10 text-destructive"
};

const CARequestList = ({ onChatOpen }: CARequestListProps) => {
  return (
    <div className="space-y-4">
      {requests.map((request) => {
        const IncomeIcon = incomeIcons[request.incomeType as keyof typeof incomeIcons] || Briefcase;
        
        return (
          <div 
            key={request.id}
            className="bg-card rounded-xl border border-border p-4 md:p-5 hover:shadow-card transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Client Info */}
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center font-display font-bold">
                  {request.clientInitials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-foreground">{request.clientName}</h3>
                    <Badge variant="secondary" className={priorityColors[request.priority as keyof typeof priorityColors]}>
                      {request.priority === 'urgent' ? '🔴 Urgent' : request.priority === 'high' ? '🟡 High' : 'Normal'}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <IncomeIcon className="w-3.5 h-3.5" />
                      {request.incomeType}
                    </span>
                    <span>•</span>
                    <span>{request.itrForm}</span>
                    <span>•</span>
                    <span>{request.amount}</span>
                  </div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {request.requestedAt}
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <FileText className="w-4 h-4" />
                  {request.documents} docs
                </div>
                <div className="font-display font-bold text-foreground text-lg">
                  ₹{request.price}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-border md:ml-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => onChatOpen(request.id)}
                >
                  <MessageSquare className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <XCircle className="w-4 h-4" />
                  Decline
                </Button>
                <Button variant="hero" size="sm" className="gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Accept
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      {requests.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No new requests at the moment</p>
        </div>
      )}
    </div>
  );
};

export default CARequestList;
