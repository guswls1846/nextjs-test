import { FC, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface RadioButtonGroupProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  const handleOptionChange = (value: string) => {
    onChange(value);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleOptionChange(option.value)}
            className="form-radio h-5 w-5 text-blue-600"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
