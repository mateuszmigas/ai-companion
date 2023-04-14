import "./styles.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { ChatHost } from "./components/chatHost";

window.onload = () => {
  console.log("loaded");

  const host = document.createElement("div");
  host.className = "absolute right-0 top-48 w-96 mr-12";
  host.style.zIndex = "10000";
  window.document.body.appendChild(host);
  const root = createRoot(host);
  const prompt =
    document.getElementsByTagName("textarea")[0]?.innerHTML ??
    "how to get dpi in electron";
  prompt && root.render(<ChatHost prompt={prompt}></ChatHost>);
};
