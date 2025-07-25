import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const RolePage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['RoleID', 'RoleName', 'RoleDescription'];
  const tableData = [
    {
      "RoleID": "R001",
      "RoleName": "Administrator",
      "RoleDescription": "Full access to all system features and settings."
    },
    {
      "RoleID": "R002",
      "RoleName": "Manager",
      "RoleDescription": "Manages teams, views reports, and approves operations."
    },
    {
      "RoleID": "R003",
      "RoleName": "Editor",
      "RoleDescription": "Can create, edit, and publish content."
    },
    {
      "RoleID": "R004",
      "RoleName": "Viewer",
      "RoleDescription": "Can view content and reports, but cannot make changes."
    },
    {
      "RoleID": "R005",
      "RoleName": "Guest",
      "RoleDescription": "Limited access for temporary or unauthenticated users."
    },
    {
      "RoleID": "R006",
      "RoleName": "Developer",
      "RoleDescription": "Access to development tools and technical configurations."
    },
    {
      "RoleID": "R007",
      "RoleName": "Support Agent",
      "RoleDescription": "Handles customer inquiries and provides technical assistance."
    },
    {
      "RoleID": "R008",
      "RoleName": "Data Analyst",
      "RoleDescription": "Analyzes data and generates insights, read-only access to data."
    },
    {
      "RoleID": "R009",
      "RoleName": "Marketing Specialist",
      "RoleDescription": "Manages marketing campaigns and promotional content."
    },
    {
      "RoleID": "R010",
      "RoleName": "Finance Officer",
      "RoleDescription": "Manages financial transactions and generates financial reports."
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
        <h1 className="text-2xl font-bold text-gray-800">Roles</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Roles' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Roles"
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

export default RolePage;
