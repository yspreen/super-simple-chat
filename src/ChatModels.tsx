import { MatcherInterface } from "interweave";
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
  unread?: number;
}

export interface ChatProps {
  messages: ChatMessage[];
  chats: Chat[];
  selectedChatIdx?: number;
  onInputSubmit?: (text: string) => void;
  onSelectedIndexChange?: (idx: number) => void;
  onDoSearch?: (val: string) => void;
  showNamesLeftSide?: boolean;
  showNamesRightSide?: boolean;
  inputWidgets?: ReactNode;
  matchers?: MatcherInterface<any>[];
  darkMode?: boolean;
}
