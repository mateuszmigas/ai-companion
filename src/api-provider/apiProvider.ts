export interface ApiProvider {
  readCompletionStream(
    prompt: string,
    onData: (chunk: string, isLast: boolean) => void
  ): void;
  getName(): string;
}
