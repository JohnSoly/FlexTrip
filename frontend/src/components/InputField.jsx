import React from 'react';
// Removed: import { TextInput, Select, Label } from 'flowbite-react';

/**
 * A dynamic input field component that can render either a standard HTML input or a select (dropdown).
 * It handles its own internal state and passes changes up via the onChange prop.
 *
 * @param {object} props - The component props.
 * @param {'text' | 'email' | 'number' | 'password' | 'select'} props.type - The type of input field to render.
 * @param {string} props.id - The unique ID for the input field.
 * @param {string} props.label - The label text for the input field.
 * @param {string} [props.placeholder] - The placeholder text for text inputs.
 * @param {Array<{value: string, label: string}>} [props.options] - An array of options for select inputs.
 * @param {string} props.value - The current value of the input field.
 * @param {function(string): void} props.onChange - Callback function when the input value changes.
 * @param {React.ReactNode} [props.icon] - Icon to display inside the TextInput.
 * @param {boolean} [props.showClearButton] - Whether to show a clear button for text inputs.
 * @param {boolean} [props.required] - Whether the input is required.
 * @param {string} [props.className] - Additional CSS classes for the container div.
 */
const DynamicInputField = ({
  type,
  id,
  label,
  placeholder,
  options = [],
  value,
  onChange,
  icon,
  showClearButton = false,
  required = false,
  className = '',
}) => {
  const handleClear = () => {
    onChange('');
  };

  // Base classes for input and select elements to mimic Flowbite styling
  const inputBaseClasses = "block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500";
  const selectBaseClasses = "block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500";
  const labelBaseClasses = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className={labelBaseClasses}> {/* Using standard HTML label */}
        {label}
      </label>
      {type === 'select' ? (
        <select
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={selectBaseClasses}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* Corrected: Render the icon as a component if it's a function, otherwise render directly */}
              {typeof icon === 'function' ? React.createElement(icon) : icon}
            </div>
          )}
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${inputBaseClasses} ${icon ? 'pl-10' : ''}`} // Add padding for icon
          />
          {showClearButton && value && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Clear input"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicInputField;
