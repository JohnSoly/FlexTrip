import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const RoomDailyInventoryPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['RoomDailyInventoryID', 'InventoryID', 'InventoryDate','AvailableQuantity'];
  const tableData = [
    {
        "RoomDailyInventoryID": "RDI001",
        "InventoryID": "INV001",
        "InventoryDate": "2023-07-20",
        "AvailableQuantity": 15
      },
      {
        "RoomDailyInventoryID": "RDI002",
        "InventoryID": "INV002",
        "InventoryDate": "2023-07-20",
        "AvailableQuantity": 8
      },
      {
        "RoomDailyInventoryID": "RDI003",
        "InventoryID": "INV003",
        "InventoryDate": "2023-07-20",
        "AvailableQuantity": 22
      },
      {
        "RoomDailyInventoryID": "RDI004",
        "InventoryID": "INV001",
        "InventoryDate": "2023-07-21",
        "AvailableQuantity": 12
      },
      {
        "RoomDailyInventoryID": "RDI005",
        "InventoryID": "INV002",
        "InventoryDate": "2023-07-21",
        "AvailableQuantity": 10
      },
      {
        "RoomDailyInventoryID": "RDI006",
        "InventoryID": "INV003",
        "InventoryDate": "2023-07-21",
        "AvailableQuantity": 20
      },
      {
        "RoomDailyInventoryID": "RDI007",
        "InventoryID": "INV004",
        "InventoryDate": "2023-07-20",
        "AvailableQuantity": 5
      },
      {
        "RoomDailyInventoryID": "RDI008",
        "InventoryID": "INV004",
        "InventoryDate": "2023-07-21",
        "AvailableQuantity": 7
      },
      {
        "RoomDailyInventoryID": "RDI009",
        "InventoryID": "INV005",
        "InventoryDate": "2023-07-20",
        "AvailableQuantity": 30
      },
      {
        "RoomDailyInventoryID": "RDI010",
        "InventoryID": "INV005",
        "InventoryDate": "2023-07-21",
        "AvailableQuantity": 28
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
        <h1 className="text-2xl font-bold text-gray-800">Room Daily Inventory</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Room Daily Inventory' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Room Daily Inventory"
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

export default RoomDailyInventoryPage;
