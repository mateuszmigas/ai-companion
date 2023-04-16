import { isMock } from "../utils/config";
import { stateProvider } from "../utils/state-provider";
import { MockProvider } from "./mockProvider";
import { OpenAIProvider } from "./openaiProvider";

export const getProvider = async () => {
  if (isMock) {
    return new MockProvider();
  } else {
    const { openai } = await stateProvider.getExtensionState();
    return new OpenAIProvider({ ...openai, model: "gpt-3.5-turbo-0301" });
  }
};
