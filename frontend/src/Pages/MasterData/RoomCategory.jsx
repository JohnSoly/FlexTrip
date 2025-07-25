import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const RoomCategoryPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['RoomCategoryID', 'RoomCategoryName', 'RoomCategoryDescription'];
  const tableData = [
    {
      "RoomCategoryID": "R001",
      "RoomCategoryName": "Administrator",
      "RoomCategoryDescription": "Full access to all system features and settings."
    },
    {
      "RoomCategoryID": "R002",
      "RoomCategoryName": "Manager",
      "RoomCategoryDescription": "Manages RoomCategorys, views reports, and approves operations."
    },
    {
      "RoomCategoryID": "R003",
      "RoomCategoryName": "Editor",
      "RoomCategoryDescription": "Can create, edit, and publish content."
    },
    {
      "RoomCategoryID": "R004",
      "RoomCategoryName": "Viewer",
      "RoomCategoryDescription": "Can view content and reports, but cannot make changes."
    },
    {
      "RoomCategoryID": "R005",
      "RoomCategoryName": "Guest",
      "RoomCategoryDescription": "Limited access for temporary or unauthenticated users."
    },
    {
      "RoomCategoryID": "R006",
      "RoomCategoryName": "Developer",
      "RoomCategoryDescription": "Access to development tools and technical configurations."
    },
    {
      "RoomCategoryID": "R007",
      "RoomCategoryName": "Support Agent",
      "RoomCategoryDescription": "Handles customer inquiries and provides technical assistance."
    },
    {
      "RoomCategoryID": "R008",
      "RoomCategoryName": "Data Analyst",
      "RoomCategoryDescription": "Analyzes data and generates insights, read-only access to data."
    },
    {
      "RoomCategoryID": "R009",
      "RoomCategoryName": "Marketing Specialist",
      "RoomCategoryDescription": "Manages marketing campaigns and promotional content."
    },
    {
      "RoomCategoryID": "R010",
      "RoomCategoryName": "Finance Officer",
      "RoomCategoryDescription": "Manages financial transactions and generates financial reports."
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
        <h1 className="text-2xl font-bold text-gray-800">Room Category</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Room Category' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Room Categories"
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

export default RoomCategoryPage;
