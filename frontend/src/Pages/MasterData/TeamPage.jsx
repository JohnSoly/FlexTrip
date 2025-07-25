import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const TeamPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['TeamID', 'TeamName', 'TeamDescription'];
  const tableData = [
    {
      "TeamID": "R001",
      "TeamName": "Administrator",
      "TeamDescription": "Full access to all system features and settings."
    },
    {
      "TeamID": "R002",
      "TeamName": "Manager",
      "TeamDescription": "Manages teams, views reports, and approves operations."
    },
    {
      "TeamID": "R003",
      "TeamName": "Editor",
      "TeamDescription": "Can create, edit, and publish content."
    },
    {
      "TeamID": "R004",
      "TeamName": "Viewer",
      "TeamDescription": "Can view content and reports, but cannot make changes."
    },
    {
      "TeamID": "R005",
      "TeamName": "Guest",
      "TeamDescription": "Limited access for temporary or unauthenticated users."
    },
    {
      "TeamID": "R006",
      "TeamName": "Developer",
      "TeamDescription": "Access to development tools and technical configurations."
    },
    {
      "TeamID": "R007",
      "TeamName": "Support Agent",
      "TeamDescription": "Handles customer inquiries and provides technical assistance."
    },
    {
      "TeamID": "R008",
      "TeamName": "Data Analyst",
      "TeamDescription": "Analyzes data and generates insights, read-only access to data."
    },
    {
      "TeamID": "R009",
      "TeamName": "Marketing Specialist",
      "TeamDescription": "Manages marketing campaigns and promotional content."
    },
    {
      "TeamID": "R010",
      "TeamName": "Finance Officer",
      "TeamDescription": "Manages financial transactions and generates financial reports."
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
        <h1 className="text-2xl font-bold text-gray-800">Teams</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Teams' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Teams"
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

export default TeamPage;
