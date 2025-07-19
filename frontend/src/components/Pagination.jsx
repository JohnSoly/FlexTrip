import React from 'react';

/**
 * Pagination Component
 * Renders a dynamic pagination control.
 *
 * @param {Object} props - The component props.
 * @param {number} props.currentPage - The current active page number (1-indexed).
 * @param {number} props.totalPages - The total number of pages.
 * @param {number} props.totalItems - The total number of items across all pages.
 * @param {number} props.itemsPerPage - The number of items displayed per page.
 * @param {function} props.onPageChange - Callback function when a page is clicked.
 *
 * Example Usage:
 * <Pagination
 * currentPage={3}
 * totalPages={100}
 * totalItems={1000}
 * itemsPerPage={10}
 * onPageChange={(page) => console.log('Go to page:', page)}
 * />
 */
const Pagination = ({ currentPage, totalPages, totalItems, itemsPerPage, onPageChange }) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  
    const pages = [];
    if (totalPages > 0) pages.push(1);
    if (currentPage > 3 && totalPages > 4) pages.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }
    if (currentPage < totalPages - 2 && totalPages > 4) pages.push('...');
    if (totalPages > 1 && !pages.includes(totalPages)) pages.push(totalPages);
  
    return (
      <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {startItem}-{endItem}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">
            {totalItems}
          </span>
        </span>
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-700 bg-white border border-gray-300 rounded-s-lg hover:bg-[#fff4c2] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Previous</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
            </button>
          </li>
          {pages.map((page, index) => (
            <li key={index}>
              {page === '...' ? (
                <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => onPageChange(page)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    currentPage === page
                      ? 'text-black bg-[#FFCC2A] border border-[#FFCC2A] hover:bg-[#e6b823] hover:border-[#e6b823]'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-[#fff4c2] hover:text-black'
                  }`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border border-gray-300 rounded-e-lg hover:bg-[#fff4c2] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Next</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Pagination;