import { ExtensionState, defaultState } from "../extensionState";
import { StateProvider } from "./stateProvider";

export class LocalStorageStateProvider implements StateProvider {
  private localState: ExtensionState = defaultState;

  getExtensionState() {
    return new Promise<ExtensionState>((res) => res(this.localState));
  }
  setExtensionState(state: ExtensionState) {
    this.localState = state;
  }
}
