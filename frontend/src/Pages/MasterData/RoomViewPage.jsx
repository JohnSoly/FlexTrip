import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const RoomViewPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['RoomViewID', 'RoomViewName', 'RoomViewDescription'];
  const tableData = [
    {
      "RoomViewID": "R001",
      "RoomViewName": "Administrator",
      "RoomViewDescription": "Full access to all system features and settings."
    },
    {
      "RoomViewID": "R002",
      "RoomViewName": "Manager",
      "RoomViewDescription": "Manages RoomViews, views reports, and approves operations."
    },
    {
      "RoomViewID": "R003",
      "RoomViewName": "Editor",
      "RoomViewDescription": "Can create, edit, and publish content."
    },
    {
      "RoomViewID": "R004",
      "RoomViewName": "Viewer",
      "RoomViewDescription": "Can view content and reports, but cannot make changes."
    },
    {
      "RoomViewID": "R005",
      "RoomViewName": "Guest",
      "RoomViewDescription": "Limited access for temporary or unauthenticated users."
    },
    {
      "RoomViewID": "R006",
      "RoomViewName": "Developer",
      "RoomViewDescription": "Access to development tools and technical configurations."
    },
    {
      "RoomViewID": "R007",
      "RoomViewName": "Support Agent",
      "RoomViewDescription": "Handles customer inquiries and provides technical assistance."
    },
    {
      "RoomViewID": "R008",
      "RoomViewName": "Data Analyst",
      "RoomViewDescription": "Analyzes data and generates insights, read-only access to data."
    },
    {
      "RoomViewID": "R009",
      "RoomViewName": "Marketing Specialist",
      "RoomViewDescription": "Manages marketing campaigns and promotional content."
    },
    {
      "RoomViewID": "R010",
      "RoomViewName": "Finance Officer",
      "RoomViewDescription": "Manages financial transactions and generates financial reports."
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
        <h1 className="text-2xl font-bold text-gray-800">Room Views</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Room Views' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Room Views"
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

export default RoomViewPage;
