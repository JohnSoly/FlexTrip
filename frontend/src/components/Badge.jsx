import React from 'react';
import { Badge, Label } from 'flowbite-react';
import { HiX } from 'react-icons/hi';

/**
 * A component for multi-selecting items displayed as badges.
 *
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the selection group.
 * @param {string} props.helpText - Additional help text for the user.
 * @param {Array<string>} props.options - An array of all available options.
 * @param {Array<string>} props.selectedOptions - An array of currently selected options.
 * @param {function(Array<string>): void} props.onSelectionChange - Callback function when selections change.
 */
const MultiSelectBadges = ({ label, helpText, options, selectedOptions, onSelectionChange }) => {
  const handleToggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      // If already selected, remove it
      onSelectionChange(selectedOptions.filter((item) => item !== option));
    } else {
      // If not selected, add it
      onSelectionChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="mb-6">
      <div className="mb-2 block">
        <Label value={label} />
      </div>
      <p className="text-sm text-gray-500 mb-3">{helpText}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <Badge
              key={option}
              // When selected (isSelected is true), color is 'warning' (Flowbite's yellow).
              // When not selected, color is 'gray'.
              color={isSelected ? 'warning' : 'gray'}
              // When selected, the HiX icon is shown. Otherwise, no icon.
              icon={isSelected ? HiX : undefined}
              onClick={() => handleToggleOption(option)}
              className="cursor-pointer px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors duration-200"
            >
              {option}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default MultiSelectBadges;
