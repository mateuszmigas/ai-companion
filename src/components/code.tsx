import highlight from "highlight.js";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { CopyIcon } from "./icons/copy";

export const Code = (props: { code: string; language: string }) => {
  const { code, language } = props;

  useLayoutEffect(() => {
    highlight.getLanguage(language) && highlight.highlightAll();
  }, [code]);

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="bg-gray-900 p-1 w-full flex justify-between items-center flex-row">
        <span className="block">{language}</span>
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
