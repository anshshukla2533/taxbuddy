import { useState } from "react";
import Header from "@/components/layout/Header";
import CAStats from "@/components/ca-dashboard/CAStats";
import CARequestList from "@/components/ca-dashboard/CARequestList";
import CACasesList from "@/components/ca-dashboard/CACasesList";
import CAChat from "@/components/ca-dashboard/CAChat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const CADashboard = () => {
  const [selectedChatClient, setSelectedChatClient] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Welcome back, Priya 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Here's what's happening with your practice today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="secondary" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="gap-2">
                <User className="w-4 h-4" />
                Profile
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <CAStats />

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            {/* Left Column - Requests & Cases */}
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="requests" className="w-full">
                <TabsList className="w-full grid grid-cols-3 h-12 p-1 bg-secondary rounded-xl">
                  <TabsTrigger value="requests" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                    New Requests
                  </TabsTrigger>
                  <TabsTrigger value="active" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                    Active Cases
                  </TabsTrigger>
                  <TabsTrigger value="completed" className="rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">
                    Completed
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="requests" className="mt-6">
                  <CARequestList onChatOpen={setSelectedChatClient} />
                </TabsContent>
                <TabsContent value="active" className="mt-6">
                  <CACasesList status="active" onChatOpen={setSelectedChatClient} />
                </TabsContent>
                <TabsContent value="completed" className="mt-6">
                  <CACasesList status="completed" onChatOpen={setSelectedChatClient} />
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Chat */}
            <div className="lg:col-span-1">
              <CAChat 
                clientId={selectedChatClient} 
                onClose={() => setSelectedChatClient(null)} 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CADashboard;
