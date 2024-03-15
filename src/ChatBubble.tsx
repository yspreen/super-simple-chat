import { FC } from "react";
import { ChatMessage } from "./ChatModels";
import { formatDay } from "./timeSince";
import { Interweave, MatcherInterface } from "interweave";

export const ChatBubble: FC<{
  message: ChatMessage & {
    showDate: boolean;
    topGap: boolean;
    name: string;
    showName: boolean;
  };
  matchers?: MatcherInterface<any>[];
}> = ({
  message: { body, side, showDate, date, topGap, showName, name },
  matchers,
}) => (
  <>
    <div className={`chat-bubble bubble-${side} ${topGap ? "top-gap" : ""}`}>
      {typeof body === "string" ? (
        <Interweave content={body} matchers={matchers} />
      ) : (
        body
      )}
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
