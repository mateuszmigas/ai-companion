import "./styles.css";
import * as React from "react";
import { createRoot } from "react-dom/client";

const findHost = () => {
  return (
    document.getElementById("mock_popup_root") ??
    document.getElementById("popup_root")!
  );
};

const Popup = () => {
  return <div className="bg-green-500">Some popup here</div>;
};

const host = findHost();
const root = createRoot(host);
root.render(<Popup></Popup>);
