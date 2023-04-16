declare const OPENAI_API_KEY: string;

export const triggerTypes = ["manual", "auto", "auto-question"] as const;
export type TriggerType = typeof triggerTypes[number];

export type ExtensionState = {
  trigger: TriggerType;
  openai: {
    apiKey: string;
    model: string;
    prePrompt: string;
  };
};

export const defaultState: ExtensionState = {
  trigger: "auto",
  openai: {
    apiKey: OPENAI_API_KEY ?? "",
    model: "gpt-3.5-turbo",
    prePrompt: `If you use any code, please wrap them with triple backtick and language name in format that matches highlight.js`,
  },
};
