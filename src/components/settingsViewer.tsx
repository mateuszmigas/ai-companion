import * as React from "react";
import { useEffect, useState } from "react";
import { useExtensionState } from "../hooks/useExtensionState";

export const SettingsViewer = () => {
  const [extensionState, setExtensionState] = useExtensionState();
  const [apiKey, setApiKey] = useState("");

  if (extensionState === null) {
    return null;
  }

  return (
    <div className="text-skin-base bg-skin-fill-background p-4">
      Settings
      <div>
        <div>
          <label htmlFor="cars">Language Model</label>
          <select
            className="bg-skin-fill-background border-blue-400 border-2"
            name="cars"
            id="cars"
          >
            <option value="volvo">gpt-3.5-turbo</option>
            <option value="saab">gpt-3.5-turbo2</option>
          </select>
        </div>
        <div>
          <label htmlFor="cars">Api key</label>
          <input
            className="bg-skin-fill-background border-blue-400 border-2"
            type="password"
            id="fname"
            name="fname"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button
            disabled={!apiKey}
            className={`${
              !!apiKey ? "bg-blue-400 disabled:bg-blue-200" : "bg-blue-200"
            }`}
            onClick={() => {
              setExtensionState({
                ...extensionState,
                openai: {
                  ...extensionState.openai,
                  apiKey,
                },
              });
              setApiKey("");
            }}
          >
            Apply
          </button>
        </div>
        {extensionState.openai.apiKey}
      </div>
    </div>
  );
};
