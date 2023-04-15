export type ExtensionState = {
  openai: {
    apiKey: string;
    model: string;
  };
};

export const defaultState: ExtensionState = {
  openai: {
    apiKey: "234",
    model: "davinci",
  },
};
