
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      navigate("/chat");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center">
      <div className="text-center space-y-6 p-4 animate-fade-in">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Welcome to Chat App
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Connect and chat in real-time with a modern, secure messaging experience.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => navigate("/login")} className="px-8">
            <MessageCircle className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
