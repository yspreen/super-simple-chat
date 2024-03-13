import { ReactNode } from "react";

export interface ChatMessage {
  id?: string | number;
  body: string | ReactNode;
  side: "left" | "right";
  date?: Date;
  authorId: string;
}

export interface Chat {
  id?: string | number;
  lastMessageText: string;
  lastMessageDate: Date;
  name: string;
  authorNames: Record<string, string>;
}

export interface ChatProps {
  messages: ChatMessage[];
  chats: Chat[];
  selectedChatIdx?: number;
  onNewMessage?: (text: string) => void;
  setSelectedChatIdx?: (idx: number) => void;
  doSearch?: (val: string) => void;
}
