import { ChromeStorageStateProvider } from "./chromeStorageStateProvider";
import { LocalStorageStateProvider } from "./localStorageStateProvider";

const isDev = true;

export const stateProvider = isDev
  ? new LocalStorageStateProvider()
  : new ChromeStorageStateProvider();
