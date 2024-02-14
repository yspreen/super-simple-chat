import { useEffect, useRef, useState } from "react";
import { Chat, ChatMessage } from "./Chat";

export default function App() {
  const [messages, setMessages] = useState([] as ChatMessage[]);
  useEffect(() => {
    setMessages((messages) => [...messages, { body: "Hello", side: "left" }]);
    setMessages((messages) => [...messages, { body: "Hey", side: "right" }]);
    setMessages((messages) => [...messages, { body: ".", side: "right" }]);
    setMessages((messages) => [...messages, { body: "Hello", side: "left" }]);
    setMessages((messages) => [...messages, { body: "Hey", side: "right" }]);
    setMessages((messages) => [...messages, { body: ".", side: "right" }]);
    setMessages((messages) => [...messages, { body: "Hello", side: "left" }]);
    setMessages((messages) => [...messages, { body: "Hey", side: "right" }]);
    setMessages((messages) => [...messages, { body: ".", side: "right" }]);
  }, []);
  const newMessage = (text: string) =>
    setMessages((messages) => [...messages, { body: text, side: "right" }]);
  return <Chat messages={messages} onNewMessage={newMessage} />;
}
