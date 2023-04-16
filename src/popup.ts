import "./styles.css";
import { createRoot } from "react-dom/client";
import { SettingsViewer } from "./components/settingsViewer";
import { createElement } from "react";

const findHost = () => {
  return document.getElementById("popup_root")!;
};

const host = findHost();
const root = createRoot(host);
root.render(createElement(SettingsViewer));
