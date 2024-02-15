import { FC, useCallback, useState } from "react";
import { ChatProps } from "./ChatModels";
import { ChatDrawer } from "./ChatDrawer";
import { ChatContainer } from "./ChatContainer";

export const ChatComponent: FC<ChatProps> = ({
  messages,
  onNewMessage,
  chats,
  selectedChatIdx,
  setSelectedChatIdx,
  doSearch,
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
      <ChatDrawer
        chats={chats}
        selectedChatIdx={selectedChatIdx ?? -1}
        selectIndex={setIndex}
        doSearch={doSearch}
      />
      <ChatContainer
        input={input}
        setInput={setInput}
        messages={messages}
        send={send}
        name={
          selectedChatIdx !== undefined ? chats[selectedChatIdx].name : "Chat"
        }
        setDrawerOpen={setDrawerOpen}
      />
    </div>
  );
};
