import {
  FC,
  KeyboardEvent,
  ChangeEvent,
  useRef,
  ReactNode,
  useEffect,
} from "react";
import { ChatMessage } from "./ChatModels";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ChatBubble } from "./ChatBubble";
import { ArrowBack } from "@mui/icons-material";
import { MatcherInterface } from "interweave";

export const ChatContainer: FC<{
  messages: ChatMessage[];
  setDrawerOpen: (callback: (oldVal: boolean) => boolean) => void;
  input: string;
  send: () => void;
  setInput: (input: string) => void;
  name: string;
  showNamesLeftSide?: boolean;
  showNamesRightSide?: boolean;
  authors: Record<string, string>;
  inputWidgets?: ReactNode;
  matchers?: MatcherInterface<any>[];
}> = ({
  messages,
  setDrawerOpen,
  setInput,
  input,
  send,
  name,
  authors,
  showNamesLeftSide = true,
  showNamesRightSide = false,
  inputWidgets,
  matchers,
}) => {
  let lastMessage: ChatMessage | null = null;
  const area = useRef(null as HTMLTextAreaElement | null);
  const keyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== "Enter") return;

    // For macOS, check if the Meta (Command) key is pressed
    // For Windows, check if the Ctrl key is pressed
    if (
      (navigator.userAgent.includes("Mac") && e.metaKey) ||
      (!navigator.userAgent.includes("Mac") && e.ctrlKey)
    ) {
      send();
    }
  };
  const setHeight = () => {
    if (!area.current) return;
    area.current.style.height = "auto";
    area.current.style.height = `${area.current.scrollHeight}px`;
  };
  const onChange = (newVal: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(newVal.target.value);
  };
  useEffect(setHeight, [input]);
  return (
    <div className="chat-container">
      <div
        className="header-container"
        onClick={() => setDrawerOpen((v) => !v)}
      >
        <span className="back">
          <ArrowBack />
        </span>
        <span className="name">{name}</span>
      </div>
      <div className="messages-container">
        {[...messages]
          .map((message) => {
            const { date = new Date(), authorId } = message;
            let showDate =
              lastMessage === null ||
              date.getDay() !== (lastMessage.date ?? new Date()).getDay();
            const newAuthor = lastMessage?.authorId !== authorId;
            let topGap = !showDate && !!lastMessage && newAuthor;
            let showName = newAuthor;
            if (message.side === "left" && !showNamesLeftSide) {
              showName = false;
            }
            if (message.side === "right" && !showNamesRightSide) {
              showName = false;
            }
            if (showName) {
              topGap = false;
            }
            lastMessage = message;
            return {
              ...message,
              showDate,
              topGap,
              showName,
              name: authors[authorId],
            };
          })
          .reverse()
          .map((message, idx) => (
            <ChatBubble key={message.id ?? idx} {...{ matchers, message }} />
          ))}
      </div>
      <div className="input-container">
        {inputWidgets}
        <textarea
          ref={area}
          placeholder="Your Message &hellip;"
          onChange={onChange}
          value={input}
          onKeyDown={keyDown}
          rows={1}
        />
        <div className="button-container">
          <div className="button" onClick={send}>
            <ArrowOutwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
