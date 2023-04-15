import { ApiProvider } from "./apiProvider";

type OpenAIProviderOptions = {
  userPrePrompt: string;
  model: string;
  apiKey: string;
};

export class OpenAIProvider implements ApiProvider {
  private completionsUrl = "https://api.openai.com/v1/chat/completions";
  constructor(private options: OpenAIProviderOptions) {}

  async readCompletionStream(
    prompt: string,
    onData: (chunk: string, isLast: boolean) => void
  ) {
    const response = await fetch(this.completionsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.options.apiKey}`,
      },
      body: JSON.stringify({
        stream: true,
        model: this.options.model,
        messages: [
          {
            role: "user",
            content: `Answer the following question: ${prompt}\n${this.options.userPrePrompt}`,
          },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    if (!response.body) {
      throw new Error("Response body is empty");
    }

    const reader = response.body
      .pipeThrough(new TextDecoderStream())
      .getReader();

    while (true) {
      const { value, done } = await reader.read();

      if (done) {
        onData("", true);
        break;
      }

      const lines = value
        .toString()
        .split("\n")
        .filter((line) => line.trim() !== "");

      for (const line of lines) {
        const message = line.replace(/^data: /, "");
        if (message === "[DONE]") {
          onData("", true);
          return;
        }
        try {
          const parsed = JSON.parse(message);
          const text = parsed.choices[0].delta.content;
          text && onData(text, false);
        } catch (error) {
          console.error("Could not JSON parse stream message", message, error);
        }
      }
    }
  }

  getName() {
    return "OpenAI";
  }
}
