import React from 'react';

/**
 * DynamicTable Component
 * Renders a dynamic table with customizable headers and data.
 *
 * @param {Object} props - The component props.
 * @param {Array<string>} props.headers - An array of strings for table headers.
 * @param {Array<Object>} props.data - An array of objects, where each object represents a row.
 * The keys in each object should match the header names (case-sensitive) or a predefined mapping.
 *
 * Example Usage:
 * <DynamicTable
 * headers={['HOTEL NAME', 'PROVIDER', 'RATING', 'COUNTRY', 'CITY', 'DATE']}
 * data={[
 * { 'HOTEL NAME': { value: 'Payment from Bonnie Green', highlight: 'Bonnie Green', type: 'link' },
 * 'PROVIDER': 'Apr 23,2021', 'RATING': '$2300', 'COUNTRY': 'Completed', 'CITY': 'Completed', 'DATE': 'Completed' },
 * { 'HOTEL NAME': { value: 'Payment refund to #00910', highlight: '#00910', type: 'text' },
 * 'PROVIDER': 'Apr 23,2021', 'RATING': '-$670', 'COUNTRY': 'Cancelled', 'CITY': 'Cancelled', 'DATE': 'Cancelled' },
 * ]}
 * />
 */
const DynamicTable = ({ headers, data }) => {

    const renderCellContent = (header, row) => {
        const cellData = row[header];
      
        if (typeof cellData === 'object' && cellData !== null && cellData.value) {
          const parts = cellData.value.split(cellData.highlight);
          return (
            <>
              {parts[0]}
              {cellData.type === 'link' ? (
                <a href="#" className="text-[#2C2C2C] hover:underline">
                  {cellData.highlight}
                </a>
              ) : (
                <span className="text-gray-600">
                  {cellData.highlight}
                </span>
              )}
              {parts[1]}
            </>
          );
        }
      
        return cellData;
      };
      

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white border-b hover:bg-gray-50">
              {headers.map((header, colIndex) => (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className={`px-6 py-4 ${colIndex === 0 ? 'font-medium text-gray-900 whitespace-nowrap' : ''}`}
                >
                  {renderCellContent(header, row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
