import * as React from "react";
import { useState } from "react";
import {
  ExtensionState,
  TriggerType,
  triggerTypes,
} from "../utils/extensionState";
import { Select } from "./select";

const models = [
  "text-davinci-003",
  "gpt-3.5-turbo",
  "gpt-3.5-turbo-0301",
] as const;

export const Settings = (props: {
  state: ExtensionState;
  setState: (state: ExtensionState) => void;
}) => {
  const { state: extensionState, setState: setExtensionState } = props;
  const [apiKey, setApiKey] = useState("");
  const [prePrompt, setPrePrompt] = useState(extensionState?.openai?.prePrompt);

  return (
    <div className="w-96 text-skin-base bg-skin-fill-background p-4 flex flex-col gap-4 border border-skin-secondary">
      <span className="font-bold text-xl">Settings</span>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-1 grow overflow-auto">
          <label htmlFor="trigger">Trigger</label>
          <Select
            name="trigger"
            selectedOptionId={extensionState.trigger}
            onChange={(id: TriggerType) => {
              setExtensionState({
                ...extensionState,
                trigger: id,
              });
            }}
            options={triggerTypes.map((triggerType) => ({
              id: triggerType,
              display: triggerType,
            }))}
          ></Select>
        </div>
        <div className="flex flex-col gap-1 grow overflow-auto">
          <label htmlFor="model">Model</label>
          <Select
            name="model"
            selectedOptionId="1"
            onChange={(id) => {
              setExtensionState({
                ...extensionState,
                openai: {
                  ...extensionState.openai,
                  model: id,
                },
              });
            }}
            options={models.map((model) => ({ id: model, display: model }))}
          ></Select>
        </div>
      </div>
      <div className="flex flex-col gap-1 grow overflow-auto">
        <label htmlFor="apikey">Api key</label>
        <div className="grow flex flex-row">
          <input
            className={`px-1 grow bg-skin-fill-background border-skin-inactive focus:border-skin-focus outline-none border`}
            type="password"
            name="apikey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            onBlur={() => {
              apiKey &&
                setExtensionState({
                  ...extensionState,
                  openai: {
                    ...extensionState.openai,
                    apiKey,
                  },
                });
              setApiKey("");
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 overflow-auto">
        <label htmlFor="prePrompt">Pre prompt</label>
        <textarea
          className={`px-1 bg-skin-fill-background border-skin-inactive focus:border-skin-focus outline-none border`}
          name="prePrompt"
          value={prePrompt}
          onChange={(e) => setPrePrompt(e.target.value)}
          onBlur={() =>
            setExtensionState({
              ...extensionState,
              openai: {
                ...extensionState.openai,
                prePrompt,
              },
            })
          }
        />
      </div>
    </div>
  );
};
