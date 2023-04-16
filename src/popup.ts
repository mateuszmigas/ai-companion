import "./styles.css";
import { createRoot } from "react-dom/client";
import { createElement } from "react";
import { PopupViewer } from "./components/popupViewer";

const findHost = () => {
  return document.getElementById("popup_root")!;
};

const host = findHost();
const root = createRoot(host);
root.render(createElement(PopupViewer));
