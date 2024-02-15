import { FC } from "react";
import { ChatMessage } from "./ChatModels";
import { formatDay } from "./timeSince";

export const ChatBubble: FC<{
  message: ChatMessage & { showDate: boolean };
}> = ({ message: { body, side, showDate, date } }) => (
  <>
    <div className={`chat-bubble bubble-${side}`}>
      {typeof body === "string" ? <span>{body}</span> : body}
    </div>
    {showDate && (
      <div className="date-row">{formatDay(date ?? new Date())}</div>
    )}
  </>
);
