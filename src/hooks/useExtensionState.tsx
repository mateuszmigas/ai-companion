import { ExtensionState } from "../utils/extensionState";
import { useCallback, useEffect, useState } from "react";
import { stateProvider } from "../utils/state-provider";

export const useExtensionState = () => {
  const [internalState, setInternalState] = useState<ExtensionState>(null);

  const setState = useCallback((state: ExtensionState) => {
    setInternalState(state);
    stateProvider.setExtensionState(state);
    console.log("setting", state);
  }, []);

  useEffect(() => {
    stateProvider.getExtensionState().then(setInternalState);
  }, []);

  return [internalState, setState] as const;
};
