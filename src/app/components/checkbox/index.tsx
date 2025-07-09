"user client";
import React, { useState } from "react";

type CheckboxProps = {
  options: CheckBoxOption[];
};

export type CheckBoxOption = {
  label: string;
  value: string;
  disable?: boolean;
};

export const CustomCheckbox = ({ options }: CheckboxProps) => {
  const [CheckedList, setCheckedList] = useState<string[]>([]);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    // the most important event.target.checked
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
    } else {
      setCheckedList((prev) => prev.filter((item) => item !== value));
    }
  };
  return (
    <>
      
      {options.map((option, index) => {
        return (
          <div className="flex gap-2" key={index}>
            <input
              type="checkbox"
              id={index.toString()}
              value={option.value}
              onChange={(e) => handleOnChange(e)}
              disabled={option.disable}
            />
            <p className="text-slate-900">{option.label}</p>
          </div>
        );
      })}
      <p>{CheckedList}</p>
    </>
  );
};
