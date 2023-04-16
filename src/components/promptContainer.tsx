import * as React from "react";
import { useExtensionState } from "../hooks/useExtensionState";
import { PromptViewer } from "./promptViewer";

export const PromptContainer = (props: { prompt: string }) => {
  const [extensionState] = useExtensionState();

  if (extensionState === null) {
    return null;
  }

  return (
    <PromptViewer
      trigger={extensionState.trigger}
      prompt={props.prompt}
    ></PromptViewer>
  );
};
