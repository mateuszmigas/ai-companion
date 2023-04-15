import * as React from "react";
import { Code } from "./code";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { getProvider } from "../api-provider";
import { isMock } from "../utils/settings";

export const PromptViewer = (props: { prompt: string }) => {
  const [completion, setCompletion] = useState(`Searching for: ${prompt}`);

  useEffect(() => {
    setCompletion("");
    getProvider().then((provider) => {
      provider.readCompletionStream(props.prompt, (chunk, done) => {
        if (done) return;
        setCompletion((accumulated) => accumulated + chunk);
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-skin-fill-background text-skin-base p-4 w-[457px] border border-px border-skin-secondary rounded-[8px]">
      <span className="text-xl font-bold">
        {isMock ? "Mock Prompt" : "AI Prompt"}
      </span>
      <ReactMarkdown
        children={completion}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <Code
                code={String(children).replace(/\n$/, "")}
                language={match[1]}
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};
