import "./styles.css";
import { createRoot } from "react-dom/client";
import { PromptViewer } from "./components/promptViewer";
import { createElement } from "react";

const findHost = () => {
  //mock host
  const mockElement = document.getElementById("mock_chat_root");
  if (mockElement) {
    return mockElement;
  }

  //google 2nd column
  const centerColElement = document.getElementById("center_col");
  if (centerColElement) {
    const hostElement = document.createElement("div");
    hostElement.style.flex = "0 auto";
    hostElement.style.width = "var(--rhs-width)";
    hostElement.style.position = "relative";
    hostElement.style.paddingBottom = "15px";
    hostElement.style.transition = "opacity 0.3s";

    if (centerColElement.parentElement.children.length > 1) {
      centerColElement.parentElement.children[1].appendChild(hostElement);
      return hostElement;
    } else {
      hostElement.style.marginLeft = "var(--rhs-margin)";
      centerColElement.parentElement.appendChild(hostElement);
      return hostElement;
    }
  }
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
  if (host && prompt) {
    const root = createRoot(host);
    root.render(createElement(PromptViewer, { prompt }));
  }
};
