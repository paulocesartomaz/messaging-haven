
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/common/Layout";
import { ChatInterface } from "@/components/chat/ChatInterface";

const Chat = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Layout>
      <ChatInterface />
    </Layout>
  );
};

export default Chat;
