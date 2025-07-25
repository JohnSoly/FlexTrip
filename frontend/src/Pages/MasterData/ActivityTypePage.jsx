import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const ActivityTypePage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['ActivityTypeID', 'ActivityTypeName', 'Description'];
  const tableData = [
    {
        "ActivityTypeID": "AT001",
        "ActivityTypeName": "Sightseeing Tour",
        "Description": "Guided tours to historical sites and landmarks."
      },
      {
        "ActivityTypeID": "AT002",
        "ActivityTypeName": "Adventure Sports",
        "Description": "Activities like diving, snorkeling, desert safaris, and hiking."
      },
      {
        "ActivityTypeID": "AT003",
        "ActivityTypeName": "Cultural Experience",
        "Description": "Workshops, local performances, and traditional food tastings."
      },
      {
        "ActivityTypeID": "AT004",
        "ActivityTypeName": "Relaxation & Wellness",
        "Description": "Spa treatments, yoga sessions, and beach relaxation."
      },
      {
        "ActivityTypeID": "AT005",
        "ActivityTypeName": "Shopping Excursion",
        "Description": "Trips to local markets, bazaars, and modern shopping malls."
      },
      {
        "ActivityTypeID": "AT006",
        "ActivityTypeName": "Food & Culinary Tour",
        "Description": "Exploration of local cuisine, food markets, and cooking classes."
      },
      {
        "ActivityTypeID": "AT007",
        "ActivityTypeName": "Nature & Wildlife",
        "Description": "Visits to national parks, reserves, and wildlife observation points."
      },
      {
        "ActivityTypeID": "AT008",
        "ActivityTypeName": "Nightlife & Entertainment",
        "Description": "Evening activities including shows, concerts, and club visits."
      },
      {
        "ActivityTypeID": "AT009",
        "ActivityTypeName": "Educational Workshop",
        "Description": "Learning-focused sessions on history, art, or local crafts."
      },
      {
        "ActivityTypeID": "AT010",
        "ActivityTypeName": "Photography Tour",
        "Description": "Guided tours specifically designed for photography enthusiasts."
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
        <h1 className="text-2xl font-bold text-gray-800">Activity Type</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Activity Type' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Activity Types"
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

export default ActivityTypePage;
