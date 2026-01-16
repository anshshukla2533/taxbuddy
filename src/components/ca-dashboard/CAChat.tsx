import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Send, 
  Paperclip, 
  X, 
  Phone, 
  Video,
  MoreVertical,
  Image,
  FileText,
  CheckCheck,
  MessageSquare
} from "lucide-react";

interface CAChatProps {
  clientId: string | null;
  onClose: () => void;
}

// Mock client data
const clientsData: Record<string, { name: string; initials: string; lastSeen: string }> = {
  "REQ001": { name: "Rahul Verma", initials: "RV", lastSeen: "Online" },
  "REQ002": { name: "Sneha Gupta", initials: "SG", lastSeen: "2 min ago" },
  "REQ003": { name: "Amit Shah", initials: "AS", lastSeen: "1 hour ago" },
  "CASE001": { name: "Vikram Singh", initials: "VS", lastSeen: "Online" },
  "CASE002": { name: "Meera Iyer", initials: "MI", lastSeen: "30 min ago" },
  "CASE003": { name: "Arun Kumar", initials: "AK", lastSeen: "Online" },
};

// Mock messages
const mockMessages = [
  {
    id: 1,
    sender: "client",
    content: "Hi, I've uploaded my Form 16. Can you check if everything looks correct?",
    time: "10:30 AM",
    status: "read"
  },
  {
    id: 2,
    sender: "ca",
    content: "Hello! Yes, I've received the Form 16. Let me review it and get back to you.",
    time: "10:32 AM",
    status: "read"
  },
  {
    id: 3,
    sender: "ca",
    content: "I've reviewed your Form 16. Everything looks good! I'll need a few more documents:\n\n1. Bank statement (Apr-Mar)\n2. Investment proofs (if any)\n3. Rent receipts (if applicable)",
    time: "10:45 AM",
    status: "read"
  },
  {
    id: 4,
    sender: "client",
    content: "Great! I'll upload the bank statement now. I have some ELSS investments too.",
    time: "10:48 AM",
    status: "read"
  },
  {
    id: 5,
    sender: "client",
    content: "📎 Bank_Statement_FY24.pdf",
    time: "10:50 AM",
    status: "read",
    isFile: true
  },
  {
    id: 6,
    sender: "ca",
    content: "Perfect! Received the bank statement. Please also share the ELSS investment proof when you can.",
    time: "10:52 AM",
    status: "delivered"
  }
];

const CAChat = ({ clientId, onClose }: CAChatProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);
  const scrollRef = useRef<HTMLDivElement>(null);

  const client = clientId ? clientsData[clientId] : null;

  useEffect(() => {
    // Scroll to bottom on new messages
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: "ca",
      content: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "sent"
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!clientId || !client) {
    return (
      <div className="bg-card rounded-2xl border border-border h-[600px] flex flex-col items-center justify-center text-center p-6">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
          <MessageSquare className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="font-display font-semibold text-foreground mb-2">Client Chat</h3>
        <p className="text-sm text-muted-foreground max-w-[200px]">
          Select a request or case to start chatting with the client
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border h-[600px] flex flex-col overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
            {client.initials}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{client.name}</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${client.lastSeen === 'Online' ? 'bg-success' : 'bg-muted'}`} />
              {client.lastSeen}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Phone className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Video className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <MoreVertical className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {/* Date Separator */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">Today</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'ca' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                  msg.sender === 'ca'
                    ? 'gradient-primary text-primary-foreground rounded-br-md'
                    : 'bg-secondary text-secondary-foreground rounded-bl-md'
                }`}
              >
                {msg.isFile ? (
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm underline cursor-pointer">
                      {msg.content.replace('📎 ', '')}
                    </span>
                  </div>
                ) : (
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                )}
                <div className={`flex items-center justify-end gap-1 mt-1 ${
                  msg.sender === 'ca' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                }`}>
                  <span className="text-xs">{msg.time}</span>
                  {msg.sender === 'ca' && (
                    <CheckCheck className={`w-3.5 h-3.5 ${msg.status === 'read' ? 'text-info' : ''}`} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground shrink-0">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground shrink-0">
            <Image className="w-5 h-5" />
          </Button>
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button 
            variant="hero" 
            size="icon"
            onClick={handleSend}
            disabled={!message.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CAChat;
