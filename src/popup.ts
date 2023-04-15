import "./styles.css";
import { createRoot } from "react-dom/client";
import { SettingsViewer } from "./components/settingsViewer";
import { createElement } from "react";

const findHost = () => {
  return (
    document.getElementById("mock_popup_root") ??
    document.getElementById("popup_root")!
  );
};

const x = "bg-blue-200";

const host = findHost();
const root = createRoot(host);
root.render(createElement(SettingsViewer));
