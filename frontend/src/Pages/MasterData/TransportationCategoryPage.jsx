import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const TransportationCategoryPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['TransportationCategoryID', 'VechileType', 'SeatCapacity'];
  const tableData = [
    {
        "TransportationCategoryID": "TC001",
        "VechileType": "Sedan",
        "SeatCapacity": 4
      },
      {
        "TransportationCategoryID": "TC002",
        "VechileType": "SUV",
        "SeatCapacity": 7
      },
      {
        "TransportationCategoryID": "TC003",
        "VechileType": "Van",
        "SeatCapacity": 12
      },
      {
        "TransportationCategoryID": "TC004",
        "VechileType": "Minibus",
        "SeatCapacity": 25
      },
      {
        "TransportationCategoryID": "TC005",
        "VechileType": "Coach Bus",
        "SeatCapacity": 50
      },
      {
        "TransportationCategoryID": "TC006",
        "VechileType": "Limousine",
        "SeatCapacity": 6
      },
      {
        "TransportationCategoryID": "TC007",
        "VechileType": "Motorcycle",
        "SeatCapacity": 2
      },
      {
        "TransportationCategoryID": "TC008",
        "VechileType": "Electric Car",
        "SeatCapacity": 4
      },
      {
        "TransportationCategoryID": "TC009",
        "VechileType": "Luxury Van",
        "SeatCapacity": 8
      },
      {
        "TransportationCategoryID": "TC010",
        "VechileType": "Double-Decker Bus",
        "SeatCapacity": 80
      }
  ];

  // Logic to slice data for current page 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTableData = tableData.slice(startIndex, endIndex);

  
  const handleSearch = (e) => {
    console.log("Searching for:", e.target.value);
    // search logic
  };

  const handleFilter = () => {
    console.log("Filter button clicked");
    // filter logic
  };

  const handleAdd = () => {
    console.log("Add button clicked, navigating to /hotels/add");
    navigate("/hotels/add"); 
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Changing to page:", page);
    //  fetch data for the new page here
  };

  return (
    <div className="flex h-screen font-inter">
      <Sidebar />

      <div className="flex-1 p-8 bg-white overflow-auto">
        <h1 className="text-2xl font-bold text-gray-800">Transportation Category</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Transportation Category' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Transportation Categories"
          count={tableData.length} 
          onSearch={handleSearch}
          onFilter={handleFilter}
          onAdd={handleAdd}
        />

       
        <DynamicTable headers={tableHeaders} data={currentTableData} />

       
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
        </div>
      </div>
    </div>
  );
};

export default TransportationCategoryPage;
