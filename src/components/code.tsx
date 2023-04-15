import highlight from "highlight.js";
import React, { useLayoutEffect } from "react";
import { CopyIcon } from "./icons/copy";

export const Code = (props: { code: string; language: string }) => {
  const { code, language } = props;

  useLayoutEffect(() => {
    highlight.getLanguage(language) && highlight.highlightAll();
  }, [code]);

  return (
    <div className="rounded-lg overflow-hidden bg-skin-fill-code">
      <div className=" p-1 w-full flex justify-between items-center flex-row">
        <span>{language}</span>
        <button
          className="w-6 h-6"
          onClick={() => window.navigator.clipboard.writeText(code)}
        >
          <CopyIcon></CopyIcon>
        </button>
      </div>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
