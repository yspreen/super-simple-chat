import { FC, useRef, useState } from "react";
import { Chat } from "./ChatModels";
import { ChatRow } from "./ChatRow";

export const ChatDrawer: FC<{
  chats: Chat[];
  selectedChatIdx: number;
  selectIndex: (idx: number) => void;
  doSearch?: (val: string) => void;
}> = ({ chats, selectedChatIdx, selectIndex, doSearch }) => {
  const timeout = useRef(null as NodeJS.Timeout | null);
  const setInput = (val: string) => {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      doSearch?.(val);
    }, 250);
  };

  return (
    <div className="drawer">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search&hellip;"
          onChange={(newVal) => setInput(newVal.target.value)}
        />
      </div>
      {chats.map((chat, idx) => (
        <ChatRow
          chat={chat}
          selected={idx === selectedChatIdx}
          onClick={() => selectIndex(idx)}
          key={chat.id ?? idx}
        />
      ))}
    </div>
  );
};
