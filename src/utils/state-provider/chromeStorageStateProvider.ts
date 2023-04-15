import { ExtensionState, defaultState } from "../extensionState";
import { StateProvider } from "./stateProvider";

export class ChromeStorageStateProvider implements StateProvider {
  getExtensionState() {
    return new Promise<ExtensionState>((res) =>
      chrome.storage.sync.get("state", ({ state }) =>
        res({ ...defaultState, ...(state as ExtensionState) })
      )
    );
  }
  setExtensionState(state: ExtensionState) {
    chrome.storage.sync.set({ state });
  }
}
