import { useEffect, useRef, useState } from "react";
import { Chat, ChatComponent, ChatMessage } from "./Chat";

export default function App() {
  const [messages, setMessages] = useState([] as ChatMessage[]);
  const [index, setIndex] = useState(0);
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
  const chats: Chat[] = [
    {
      name: "John Doe",
      lastMessageDate: new Date(),
      lastMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    },
    {
      name: "John Doe",
      lastMessageDate: new Date(new Date().getTime() - 65 * 1000),
      lastMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    },
    {
      name: "John Doe",
      lastMessageDate: new Date(new Date().getTime() - 65 * 60 * 1000),
      lastMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    },
    {
      name: "John Doe",
      lastMessageDate: new Date(new Date().getTime() - 25 * 60 * 60 * 1000),
      lastMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
    },
  ];
  const newMessage = (text: string) =>
    setMessages((messages) => [...messages, { body: text, side: "right" }]);
  return (
    <ChatComponent
      chats={chats}
      messages={messages}
      onNewMessage={newMessage}
      selectedChatIdx={index}
      setSelectedChatIdx={setIndex}
    />
  );
}
