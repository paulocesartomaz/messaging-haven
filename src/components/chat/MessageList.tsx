
import { format } from "date-fns";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface MessageListProps {
  messages: Message[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message-bubble ${
            message.sender === "user" ? "message-sent" : "message-received"
          }`}
        >
          <p className="text-sm">{message.text}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {format(message.timestamp, "HH:mm")}
          </p>
        </div>
      ))}
    </div>
  );
};
