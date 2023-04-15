import { stateProvider } from "../utils/state-provider";
import { MockProvider } from "./mockProvider";
import { OpenAIProvider } from "./openaiProvider";
declare const OPENAI_API_KEY: string;
const isDev = true;

export const getProvider = async () => {
  if (isDev) {
    return new MockProvider();
  } else {
    const extensionState = await stateProvider.getExtensionState();
    return new OpenAIProvider({
      userPrePrompt:
        "If you use any code, please wrap them with triple backtick and language name in format that matches highlight.js",
      model: "gpt-3.5-turbo",
      apiKey: OPENAI_API_KEY,
    });
  }
};
