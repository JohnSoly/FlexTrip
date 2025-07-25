import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const MealPlanPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['MealPlanID', 'MealPlanName'];
  const tableData = [
    {
      "MealPlanID": "R001",
      "MealPlanName": "Administrator",
    
    },
    {
      "MealPlanID": "R002",
      "MealPlanName": "Manager",
    
    },
    {
      "MealPlanID": "R003",
      "MealPlanName": "Editor",
      
    },
    {
      "MealPlanID": "R004",
      "MealPlanName": "Viewer",
      
    },
    {
      "MealPlanID": "R005",
      "MealPlanName": "Guest",

    },
    {
      "MealPlanID": "R006",
      "MealPlanName": "Developer",
 
    },
    {
      "MealPlanID": "R007",
      "MealPlanName": "Support Agent",
     
    },
    {
      "MealPlanID": "R008",
      "MealPlanName": "Data Analyst",
      
    },
    {
      "MealPlanID": "R009",
      "MealPlanName": "Marketing Specialist",
    
    },
    {
      "MealPlanID": "R010",
      "MealPlanName": "Finance Officer",
     
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
        <h1 className="text-2xl font-bold text-gray-800">MealPlans</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'MealPlans' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All MealPlans"
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

export default MealPlanPage;
