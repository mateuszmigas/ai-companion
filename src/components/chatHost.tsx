import * as React from "react";
import { Code } from "./code";
import ReactMarkdown from "react-markdown";
import { openApi } from "../api-provider/openai";
import { mockApi } from "../api-provider/mock";
import { useEffect, useLayoutEffect, useState } from "react";
import { CopyIcon } from "./icons/copy";

const provider = openApi;

export const ChatHost = (props: { prompt: string }) => {
  const [completion, setCompletion] = useState(`Searching for: ${prompt}`);

  useEffect(() => {
    setCompletion("");

    provider.readCompletionStream(props.prompt, (chunk, done) => {
      if (done) return;
      setCompletion((accumulated) => accumulated + chunk);
    });
  }, []);

  return (
    <div className="rounded-lg flex flex-col gap-2 border border-zinc-500 min-h-[200px] bg-zinc-800 text-white p-2">
      <div className="flex flex-row justify-between items-center px-1">
        <span className="text-xl font-bold">{provider.getName()}</span>
        <button
          className="w-6 h-6"
          onClick={() => window.navigator.clipboard.writeText(completion)}
        >
          <CopyIcon></CopyIcon>
        </button>
      </div>
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
