import { FC } from "react";
import { Chat } from "./ChatModels";
import { ChatRow } from "./ChatRow";

export const ChatDrawer: FC<{
  chats: Chat[];
  selectedChatIdx: number;
  selectIndex: (idx: number) => void;
}> = ({ chats, selectedChatIdx, selectIndex }) => (
  <div className="drawer">
    {chats.map((chat, idx) => (
      <ChatRow
        chat={chat}
        selected={idx === selectedChatIdx}
        onClick={() => selectIndex(idx)}
      />
    ))}
  </div>
);
