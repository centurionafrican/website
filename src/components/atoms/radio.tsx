"use client";

import type React from "react";
import { useState } from "react";

interface Option {
  id: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  defaultSelected?: string;
}

const Radio: React.FC<RadioGroupProps> = ({
  name,
  options,
  defaultSelected,
}) => {
  const [selected, setSelected] = useState<string | undefined>(defaultSelected);

  return (
    <div className="flex item-center justify-start space-x-4">
      {options.map((option) => (
        <label
          key={option.id}
          className="flex items-center justify-start gap-x-1 cursor-pointer m-0 p-0"
        >
          <input
            type="radio"
            name={name}
            value={option.id}
            checked={selected === option.id}
            onChange={() => setSelected(option.id)}
            className="hidden"
          />
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              selected === option.id ? "border-primary" : "border-gray-300"
            }`}
          >
            {selected === option.id && (
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            )}
          </div>
          <span className="text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
