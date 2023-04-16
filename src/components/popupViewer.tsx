import * as React from "react";
import { useExtensionState } from "../hooks/useExtensionState";
import { Settings } from "./settings";

export const PopupViewer = () => {
  const [extensionState, setExtensionState] = useExtensionState();

  if (extensionState === null) {
    return null;
  }

  return (
    <Settings state={extensionState} setState={setExtensionState}></Settings>
  );
};
