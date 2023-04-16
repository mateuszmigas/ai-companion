import * as React from "react";
import "./styles.css";
import { createRoot } from "react-dom/client";
import { PromptContainer } from "./components/promptContainer";
import { PopupContainer } from "./components/popupViewer";

const root = createRoot(document.getElementById("app"));

root.render(
  <div className="flex flex-col p-12 gap-12">
    <PopupContainer></PopupContainer>
    <PromptContainer prompt="how to get dpi in electron"></PromptContainer>
  </div>
);
