import { FC, ReactNode, useCallback, useState } from "react";
import { timeSince } from "./timeSince";
import { ArrowIcon } from "./ArrowIcon";

export interface ChatMessage {
  id?: string | number;
  body: string | ReactNode;
  side: "left" | "right";
}

export interface Chat {
  lastMessageText: string;
  lastMessageDate: Date;
}

export interface ChatProps {
  messages: ChatMessage[];
  chats: Chat[];
  selectedChatIdx?: number;
  onNewMessage?: (text: string) => void;
  setSelectedChatIdx?: (idx: number) => void;
}

export const ChatBubble: FC<{ message: ChatMessage }> = ({
  message: { body, side },
}) => (
  <div className={`chat-bubble bubble-${side}`}>
    {typeof body === "string" ? <span>{body}</span> : body}
  </div>
);

const ChatContainer: FC<{
  messages: ChatMessage[];
  setDrawerOpen: (callback: (oldVal: boolean) => boolean) => void;
  input: string;
  send: () => void;
  setInput: (input: string) => void;
}> = ({ messages, setDrawerOpen, setInput, input, send }) => (
  <div className="chat-container">
    <div className="header-container" onClick={() => setDrawerOpen((v) => !v)}>
      <span>&lt; Back</span>
    </div>
    <div className="messages-container">
      {[...messages].reverse().map((message, idx) => (
        <ChatBubble message={message} key={message.id ?? idx} />
      ))}
    </div>
    <div className="input-container">
      <input
        placeholder="Your Message &hellip;"
        type="text"
        onChange={(newVal) => setInput(newVal.target.value)}
        value={input}
        onKeyUp={(e) => e.key === "Enter" && send()}
      />
      <div className="button-container">
        <div className="button" onClick={send}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 24 24"
          >
            <ArrowIcon />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const ChatRow: FC<{ chat: Chat; selected: boolean; onClick: () => void }> = ({
  chat,
  selected,
  onClick,
}) => (
  <div
    className={`chat-row ${selected ? "chat-selected" : ""}`}
    onClick={onClick}
  >
    <div className="date">{timeSince(chat.lastMessageDate)}</div>
    <div className="truncate">{chat.lastMessageText}</div>
  </div>
);

const Drawer: FC<{
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

export const ChatComponent: FC<ChatProps> = ({
  messages,
  onNewMessage,
  chats,
  selectedChatIdx,
  setSelectedChatIdx,
}: ChatProps) => {
  const [input, setInput] = useState("");
  const [drawerOpen_, setDrawerOpen] = useState(false);
  const send = () => {
    if (!input) return;
    onNewMessage?.(input);
    setInput("");
  };
  const setIndex = (idx: number) => {
    setSelectedChatIdx?.(idx);
    setDrawerOpen(false);
  };

  const [width, setWidth] = useState(0);
  const isWide = width > 600;
  const drawerOpen = drawerOpen_ && !isWide;

  const measuredRef = useCallback((node: HTMLDivElement) => {
    if (!node) return;
    const resizeObserver = new ResizeObserver(() => {
      setWidth(node.getBoundingClientRect().width);
    });
    resizeObserver.observe(node);
  }, []);

  return (
    <div
      ref={measuredRef}
      className={`drawer-container ${drawerOpen ? "drawer-open" : ""} ${isWide ? "drawer-wide" : ""}`}
    >
      <Drawer
        chats={chats}
        selectedChatIdx={selectedChatIdx ?? -1}
        selectIndex={setIndex}
      />
      <ChatContainer
        input={input}
        setInput={setInput}
        messages={messages}
        send={send}
        setDrawerOpen={setDrawerOpen}
      />
    </div>
  );
};
