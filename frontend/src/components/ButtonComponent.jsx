import React from 'react';

/**
 * A reusable button component with customizable text, color, and click handler.
 * It uses Tailwind CSS classes for styling.
 *
 * @param {object} props - The component props.
 * @param {string} props.children - The text or content to display inside the button.
 * @param {'yellow' | 'gray' | 'black'} [props.color='yellow'] - The base color theme for the button.
 * @param {function(): void} [props.onClick] - The function to call when the button is clicked.
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The type attribute for the button.
 */
const ButtonComponent = ({
  children,
  color = 'yellow', // Default color changed to yellow
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  // Define base classes for all buttons
  const baseClasses = "focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-200";

  // Define color-specific classes for yellow, gray, and black
  const colorClasses = {
    yellow: "bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    gray: "bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
    black: "bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-950",
  };

  // Handle disabled state styling
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${colorClasses[color]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
