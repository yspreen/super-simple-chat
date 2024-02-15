import { ReactNode } from "react";

export interface ChatMessage {
  id?: string | number;
  body: string | ReactNode;
  side: "left" | "right";
  date?: Date;
}

export interface Chat {
  lastMessageText: string;
  lastMessageDate: Date;
  name: string;
}

export interface ChatProps {
  messages: ChatMessage[];
  chats: Chat[];
  selectedChatIdx?: number;
  onNewMessage?: (text: string) => void;
  setSelectedChatIdx?: (idx: number) => void;
}
