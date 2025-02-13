
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <header className="h-16 glass-morphism px-4">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Chat App
          </h1>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>
      <main className="container py-8">{children}</main>
    </div>
  );
};
