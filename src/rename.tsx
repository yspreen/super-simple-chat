import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import Demo from "./DemoComponent";
import "./reset.css";
import "./demo.css";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(
  <StrictMode>
    <Demo />
  </StrictMode>
);
