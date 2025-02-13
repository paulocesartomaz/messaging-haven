
import { useState, useEffect, useRef } from "react";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const addMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Simulate webhook call to n8n
      // Replace with actual webhook implementation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Simulate bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "This is a simulated response. Replace with actual webhook response.",
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      
      toast({
        title: "New message",
        description: "You have a new message",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message",
      });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-3xl mx-auto">
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <MessageList messages={messages} />
      </ScrollArea>
      <div className="p-4 glass-morphism">
        <MessageInput onSend={addMessage} />
      </div>
    </div>
  );
};
