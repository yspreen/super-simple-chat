import { FC } from "react";
import { ChatMessage } from "./ChatModels";
import { formatDay } from "./timeSince";

export const ChatBubble: FC<{
  message: ChatMessage & {
    showDate: boolean;
    topGap: boolean;
    name: string;
    showName: boolean;
  };
}> = ({ message: { body, side, showDate, date, topGap, showName, name } }) => (
  <>
    <div className={`chat-bubble bubble-${side} ${topGap ? "top-gap" : ""}`}>
      {typeof body === "string" ? <span>{body}</span> : body}
    </div>
    {showName && (
      <div className={`chat-name bubble-${side} ${topGap ? "top-gap" : ""}`}>
        <span>{name}</span>
      </div>
    )}
    {showDate && (
      <div className="date-row">{formatDay(date ?? new Date())}</div>
    )}
  </>
);
