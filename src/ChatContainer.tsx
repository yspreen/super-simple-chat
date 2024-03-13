import { FC } from "react";
import { ChatMessage } from "./ChatModels";
import { ArrowIcon } from "./ArrowIcon";
import { ChatBubble } from "./ChatBubble";

export const ChatContainer: FC<{
  messages: ChatMessage[];
  setDrawerOpen: (callback: (oldVal: boolean) => boolean) => void;
  input: string;
  send: () => void;
  setInput: (input: string) => void;
  name: string;
}> = ({ messages, setDrawerOpen, setInput, input, send, name }) => {
  let lastMessage: ChatMessage | null = null;
  return (
    <div className="chat-container">
      <div
        className="header-container"
        onClick={() => setDrawerOpen((v) => !v)}
      >
        <span className="back">&lt; Back</span>
        <span className="name">{name}</span>
      </div>
      <div className="messages-container">
        {[...messages]
          .map((message) => {
            const { date = new Date() } = message;
            let showDate =
              lastMessage === null ||
              date.getDay() !== (lastMessage.date ?? new Date()).getDay();
            const topGap =
              !showDate &&
              !!lastMessage &&
              lastMessage.authorId !== message.authorId;
            lastMessage = message;
            return {
              ...message,
              showDate,
              topGap,
            };
          })
          .reverse()
          .map((message, idx) => (
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
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
