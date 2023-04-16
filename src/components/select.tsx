import * as React from "react";

export const Select = (props: {
  name: string;
  selectedOptionId: string;
  options: { id: string; display: string }[];
  onChange: (id: string) => void;
}) => {
  const { name, selectedOptionId, options, onChange } = props;
  return (
    <select
      className={
        "bg-skin-fill-background border-skin-inactive focus:border-skin-focus outline-none border"
      }
      name={name}
      id={name}
      value={selectedOptionId}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => {
        return (
          <option key={option.id} value={option.id}>
            {option.display}
          </option>
        );
      })}
    </select>
  );
};
