import { isMock } from "../settings";
import { ChromeStorageStateProvider } from "./chromeStorageStateProvider";
import { MockStorageStateProvider } from "./mockStorageStateProvider";

export const stateProvider = isMock
  ? new MockStorageStateProvider()
  : new ChromeStorageStateProvider();
