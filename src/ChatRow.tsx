import { FC } from "react";
import { Chat } from "./ChatModels";
import { timeSince } from "./timeSince";
import { ChatIcon } from "./ChatIcon";

export const ChatRow: FC<{
  chat: Chat;
  selected: boolean;
  onClick: () => void;
}> = ({ chat, selected, onClick }) => (
  <div
    className={`chat-row ${selected ? "chat-selected" : ""}`}
    onClick={onClick}
  >
    <ChatIcon />
    <div className="row-right">
      <div className="date">{timeSince(chat.lastMessageDate)}</div>
      <div className="name">{chat.name}</div>
      <div className="truncate">{chat.lastMessageText}</div>
    </div>
  </div>
);
