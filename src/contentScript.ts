import "./styles.css";
import { createRoot } from "react-dom/client";
import { PromptContainer } from "./components/promptContainer";
import { createElement } from "react";

const findHost = () => {
  //google 2nd column
  const centerColElement = document.getElementById("center_col");
  if (centerColElement) {
    const newColElement = document.createElement("div");
    newColElement.style.flex = "0 auto";
    newColElement.style.width = "var(--rhs-width)";
    newColElement.style.position = "relative";
    newColElement.style.paddingBottom = "15px";
    newColElement.style.transition = "opacity 0.3s";
    const hostElement = document.createElement("div");
    hostElement.style.width = "457px";
    newColElement.appendChild(hostElement);

    if (centerColElement.parentElement.children.length > 1) {
      centerColElement.parentElement.children[1].appendChild(newColElement);
      return hostElement;
    } else {
      newColElement.style.marginLeft = "var(--rhs-margin)";
      centerColElement.parentElement.appendChild(newColElement);
      return hostElement;
    }
  }

  return null;
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
    root.render(createElement(PromptContainer, { prompt }));
  }
};
