import React from 'react';

/**
 * SearchFilterAdd Component
 * Provides a search input, filter button, and add button.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title for the item count (e.g., "All Hotels").
 * @param {number} props.count - The total count of items.
 * @param {function} props.onSearch - Callback function for search input change.
 * @param {function} props.onFilter - Callback function for filter button click.
 * @param {function} props.onAdd - Callback function for add button click.
 * @param {string} [props.searchPlaceholder="Search"] - Placeholder text for the search input.
 *
 * Example Usage:
 * <SearchFilterAdd
 * title="All Hotels"
 * count={44}
 * onSearch={(e) => console.log(e.target.value)}
 * onFilter={() => console.log('Filter clicked')}
 * onAdd={() => console.log('Add clicked')}
 * />
 */
const SearchFilterAdd = ({ title, count, onSearch, onFilter, onAdd, searchPlaceholder = "Search" }) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-2">
        <span className="text-gray-600 text-lg font-medium">
          {title}
        </span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">
          {count}
        </span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-64 bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder={searchPlaceholder}
            onChange={onSearch}
          />
        </div>
        <button
        onClick={onFilter}
        className="flex items-center px-4 py-2 text-sm font-medium text-black bg-[#FFCC2A] border border-[#FFCC2A] rounded-lg hover:bg-[#e6b823] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFCC2A]"
        >
        <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01.293.707V19a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6h18"
            ></path>
        </svg>
        Filter
        </button>

        <button
        onClick={onAdd}
        className="flex items-center justify-center w-10 h-10 text-black bg-[#FFCC2A] rounded-lg hover:bg-[#e6b823] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFCC2A]"
        >
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m0 0H6"
            ></path>
        </svg>
        </button>

      </div>
    </div>
  );
};

export default SearchFilterAdd;
