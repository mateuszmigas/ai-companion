import * as React from "react";
import { Code } from "./code";
import ReactMarkdown from "react-markdown";
import { useCallback, useLayoutEffect, useState } from "react";
import { getProvider } from "../api-provider";
import { isMock } from "../utils/config";
import { CopyIcon } from "./icons/copy";
import { PlayIcon } from "./icons/play";
import { TriggerType } from "../utils/extensionState";

export const PromptViewer = (props: {
  trigger: TriggerType;
  prompt: string;
}) => {
  const { trigger, prompt } = props;
  const [completion, setCompletion] = useState(``);
  const [fetchingState, setFetchingState] = useState<
    "waiting" | "fetching" | "finished"
  >("waiting");

  const fetchCompletion = useCallback(async () => {
    setFetchingState("fetching");
    try {
      const provider = await getProvider();
      await provider.readCompletionStream(props.prompt, (chunk, done) => {
        if (done) {
          setFetchingState("finished");
          return;
        }
        setCompletion((accumulated) => accumulated + chunk);
      });
    } catch {
      setCompletion(`Unable to fetch completion`);
    }
  }, [prompt]);

  useLayoutEffect(() => {
    if (
      trigger === "auto" ||
      (trigger === "auto-question" && prompt.endsWith("?"))
    ) {
      fetchCompletion();
    }
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-skin-fill-background text-skin-base p-4 border border-px border-skin-secondary rounded-[8px]">
      <div className="flex flex-row justify-between items-center px-1">
        <span className="text-xl font-bold">
          {isMock ? "Mock Prompt" : "AI Prompt"}
        </span>
        {trigger !== "auto" && fetchingState === "waiting" && (
          <button className="w-6 h-6" onClick={() => fetchCompletion()}>
            <PlayIcon></PlayIcon>
          </button>
        )}
        {fetchingState === "finished" && (
          <button
            className="w-6 h-6"
            onClick={() => window.navigator.clipboard.writeText(completion)}
          >
            <CopyIcon></CopyIcon>
          </button>
        )}
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
