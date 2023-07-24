import React, { useState } from 'react';

export default function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(true);

  const toggleSwitch = () => {
    setIsChecked(!isChecked)
  };

  return (
    <div className="flex items-center ml-[10px] mr-[10px]">
      <label
        className="relative inline-block w-[48px] h-[24px] rounded-full bg-color4 dark:bg-gray-600"
        htmlFor="toggleSwitch"
      >
        <input
          type="checkbox"
          id="toggleSwitch"
          className="absolute w-0 h-0 opacity-0 appearance-none cursor-pointer"
          checked={isChecked}
          onChange={toggleSwitch}
        />
        <span
          className={`absolute left-1 top-1 w-[14px] h-[14px] bg-color9 rounded-full transition-transform ${
            isChecked ? 'transform translate-x-[26px]' : ''
          }`}
        />
      </label>
    </div>
  );
}
