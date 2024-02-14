import { FC, ReactNode, useState } from "react";

export interface ChatMessage {
  id?: string | number;
  body: string | ReactNode;
  side: "left" | "right";
}

export interface ChatProps {
  messages: ChatMessage[];
  onNewMessage?: (text: string) => void;
}

export const ChatBubble: FC<{ message: ChatMessage }> = ({
  message: { body, side },
}) => (
  <div className={`chat-bubble bubble-${side}`}>
    {typeof body === "string" ? <span>{body}</span> : body}
  </div>
);

export const Chat: FC<ChatProps> = ({ messages, onNewMessage }: ChatProps) => {
  const [input, setInput] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const send = () => {
    if (!input) return;
    onNewMessage?.(input);
    setInput("");
  };
  return (
    <div className={`drawer-container ${drawerOpen ? "drawer-open" : ""}`}>
      <div className={`drawer`}>drawer</div>
      <div className="chat-container">
        <div
          className="header-container"
          onClick={() => setDrawerOpen((v) => !v)}
        >
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
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 48 60"
                // style="enable-background:new 0 0 48 48;"
                // xml:space="preserve"
              >
                <path d="M9.8022461,42.6152344c-0.9379883,0-1.855957-0.3818359-2.5375977-1.1083984  c-1.0712891-1.1416016-1.2563477-2.8154297-0.4609375-4.1640625l7.6381836-12.9448242  c0.1450195-0.2456055,0.1450195-0.550293,0-0.7958984L6.8037109,10.6577148  C6.0083008,9.3085938,6.1933594,7.6352539,7.2646484,6.4936523c1.0708008-1.1430664,2.7280273-1.4331055,4.1259766-0.7260742  l29.8183594,15.1176758C42.3886719,21.4833984,43.1220703,22.6772461,43.1220703,24  c0,1.3232422-0.7333984,2.5166016-1.9130859,3.1152344L11.390625,42.2324219  C10.8823242,42.4902344,10.3388672,42.6152344,9.8022461,42.6152344z M10.2490234,39.3759766L10.2490234,39.3759766  L10.2490234,39.3759766z M11.1318359,10.121582l6.7553711,11.4477539c0.8842773,1.4995117,0.8842773,3.3618164,0,4.8603516  l-6.7548828,11.4482422L38.5068359,24L11.1318359,10.121582z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
