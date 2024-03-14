import { CSSProperties, useEffect, useState } from "react";
import { ChatComponent } from "./ChatComponent";
import { Chat, ChatMessage } from "./ChatModels";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function App() {
  const [messages, setMessages] = useState([] as ChatMessage[]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setMessages((messages) => [
      ...messages,
      {
        body: "Hey Bob! Got any plans for the weekend? 😊",
        side: "left",
        date: new Date(new Date().getTime() - 60 * 60 * 24 * 1000),
        authorId: "a",
      },
    ]);
    setMessages((messages) => [
      ...messages,
      {
        body: "Hey! Not really, was thinking about maybe catching a movie or something. You?",
        authorId: "b",
        side: "right",
      },
    ]);
    setMessages((messages) => [
      ...messages,
      {
        body: "I was actually thinking the same! Have you heard about that new sci-fi movie that just came out? 🎬",
        authorId: "a",
        side: "left",
      },
    ]);
    setMessages((messages) => [
      ...messages,
      {
        body: 'Oh, "Galaxy Quest"? Yeah, I\'ve heard great things about it. Wanted to check it out.',
        authorId: "b",
        side: "right",
      },
    ]);
    setMessages((messages) => [
      ...messages,
      {
        body: "That's the one! How about we watch it together? Saturday afternoon?",
        authorId: "a",
        side: "left",
      },
    ]);
    setMessages((messages) => [
      ...messages,
      {
        body: "Sounds like a plan! Which cinema?",
        authorId: "b",
        side: "right",
      },
    ]);
    setMessages((messages) => [
      ...messages,
      {
        body: "How about the Downtown Cineplex? They have a 3D showing at 2 PM.",
        authorId: "a",
        side: "left",
      },
    ]);
    setMessages((messages) => [
      ...messages,
      {
        body: "Perfect! I'll book the tickets. Do you want to grab lunch before the movie?",
        authorId: "b",
        side: "right",
      },
    ]);
    setMessages((messages) => [
      ...messages,
      {
        body: "Definitely! Let's meet at that new burger place next to the cinema at noon. I've been wanting to try it.",
        authorId: "a",
        side: "left",
      },
    ]);
    setMessages((messages) => [
      ...messages,
      {
        body: "Awesome! It's a date. See you Saturday then! 😄",
        authorId: "b",
        side: "right",
      },
    ]);
  }, []);
  const chats: Chat[] = [
    {
      name: "Chat With Alice",
      lastMessageDate: new Date(),
      lastMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
      authorNames: {
        a: "Alice",
        b: "Bob",
      },
    },
    {
      name: "Chat With Alice",
      lastMessageDate: new Date(new Date().getTime() - 65 * 1000),
      lastMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
      authorNames: {
        a: "Alice",
        b: "Bob",
      },
    },
    {
      name: "Chat With Alice",
      lastMessageDate: new Date(new Date().getTime() - 65 * 60 * 1000),
      lastMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
      authorNames: {
        a: "Alice",
        b: "Bob",
      },
    },
    {
      name: "Chat With Alice",
      lastMessageDate: new Date(new Date().getTime() - 25 * 60 * 60 * 1000),
      lastMessageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill",
      authorNames: {
        a: "Alice",
        b: "Bob",
      },
    },
  ];
  const newMessage = (text: string) =>
    setMessages((messages) => [
      ...messages,
      { body: text, side: "right", authorId: "b" },
    ]);
  const widget = (
    <AttachFileIcon style={$widget} onClick={() => console.log("attach")} />
  );
  return (
    <ChatComponent
      chats={chats}
      messages={messages}
      onInputSubmit={newMessage}
      selectedChatIdx={index}
      onSelectedIndexChange={setIndex}
      onDoSearch={(val) => console.log("search:", val)}
      inputWidgets={widget}
    />
  );
}

const $widget: CSSProperties = {
  width: 28,
  height: 28,
  margin: "0.6em",
  marginRight: 0,
  opacity: 0.6,
  fill: "var(--text)",
  cursor: "pointer",
};
