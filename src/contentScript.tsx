import "./styles.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { ChatHost } from "./components/chatHost";

const findHost = () => {
  const mockElement = document.getElementById("mock_chat-root");
  if (mockElement) {
    return mockElement;
  }

  const host = document.createElement("div");
  host.className = "absolute right-0 top-48 w-96 mr-12";
  host.style.zIndex = "10000";
  window.document.body.appendChild(host);
  return host;
};

const getPrompt = () => {
  return (
    document.getElementsByTagName("textarea")[0]?.innerHTML ??
    "how to get dpi in electron"
  );
};

window.onload = () => {
  const host = findHost();
  const prompt = getPrompt();
  const root = createRoot(host);
  prompt && root.render(<ChatHost prompt={prompt}></ChatHost>);
};
