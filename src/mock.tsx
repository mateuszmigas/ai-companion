import * as React from "react";
import "./styles.css";
import { createRoot } from "react-dom/client";
import { PromptViewer } from "./components/promptViewer";
import { PopupViewer } from "./components/popupViewer";

const root = createRoot(document.getElementById("app"));

root.render(
  <div className="flex flex-col p-12 gap-12">
    <PopupViewer></PopupViewer>
    <PromptViewer prompt="how to get dpi in electron"></PromptViewer>
  </div>
);
