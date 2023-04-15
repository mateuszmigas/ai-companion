declare const OPENAI_API_KEY: string;

export type ExtensionState = {
  openai: {
    apiKey: string;
    model: string;
    prePrompt: string;
  };
};

export const defaultState: ExtensionState = {
  openai: {
    apiKey: OPENAI_API_KEY ?? "",
    model: "gpt-3.5-turbo",
    prePrompt: `If you use any code, please wrap them with triple backtick and language name in format that matches highlight.js`,
  },
};
