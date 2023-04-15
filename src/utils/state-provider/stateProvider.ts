import { ExtensionState } from "../extensionState";

export interface StateProvider {
  getExtensionState(): Promise<ExtensionState>;
  setExtensionState(state: ExtensionState): void;
}
