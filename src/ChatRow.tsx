import { FC } from "react";
import { Chat } from "./ChatModels";
import { timeSince } from "./timeSince";

export const ChatRow: FC<{
  chat: Chat;
  selected: boolean;
  onClick: () => void;
}> = ({ chat, selected, onClick }) => (
  <div
    className={`chat-row ${selected ? "chat-selected" : ""}`}
    onClick={onClick}
  >
    <div className="date">{timeSince(chat.lastMessageDate)}</div>
    <div className="cols">
      <div className="row-left">
        <div className="name">{chat.name}</div>
        <div className="truncate">{chat.lastMessageText}</div>
      </div>
      {chat.unread && (
        <div className="row-right">
          <span className="badge">{chat.unread}</span>
        </div>
      )}
    </div>
  </div>
);
