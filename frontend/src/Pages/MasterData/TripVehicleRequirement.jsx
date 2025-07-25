import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const TripVehicleRequirementPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['TripVehicleRequirementID', 'TripID', 'TransportationCategoryID','Quantity'];
  const tableData = [
    {
        "TripVehicleRequirementID": "TVR001",
        "TripID": "TRP001", // Nile Cruise Adventure
        "TransportationCategoryID": "TC003", // Van
        "Quantity": 2
      },
      {
        "TripVehicleRequirementID": "TVR002",
        "TripID": "TRP002", // Sahara Desert Safari
        "TransportationCategoryID": "TC002", // SUV
        "Quantity": 5
      },
      {
        "TripVehicleRequirementID": "TVR003",
        "TripID": "TRP003", // Pyramids & Sphinx Tour
        "TransportationCategoryID": "TC001", // Sedan
        "Quantity": 3
      },
      {
        "TripVehicleRequirementID": "TVR004",
        "TripID": "TRP004", // Red Sea Diving Expedition
        "TransportationCategoryID": "TC003", // Van
        "Quantity": 1
      },
      {
        "TripVehicleRequirementID": "TVR005",
        "TripID": "TRP005", // Alexandria Historical Walk
        "TransportationCategoryID": "TC001", // Sedan
        "Quantity": 2
      },
      {
        "TripVehicleRequirementID": "TVR006",
        "TripID": "TRP006", // Aswan Relaxation Getaway
        "TransportationCategoryID": "TC001", // Sedan
        "Quantity": 1
      },
      {
        "TripVehicleRequirementID": "TVR007",
        "TripID": "TRP007", // Business Conference Cairo
        "TransportationCategoryID": "TC004", // Minibus
        "Quantity": 2
      },
      {
        "TripVehicleRequirementID": "TVR008",
        "TripID": "TRP008", // Oasis Oasis Camping
        "TransportationCategoryID": "TC002", // SUV
        "Quantity": 3
      },
      {
        "TripVehicleRequirementID": "TVR009",
        "TripID": "TRP009", // Luxor Temple Exploration
        "TransportationCategoryID": "TC003", // Van
        "Quantity": 1
      },
      {
        "TripVehicleRequirementID": "TVR010",
        "TripID": "TRP010", // Valley of the Kings Visit
        "TransportationCategoryID": "TC001", // Sedan
        "Quantity":2
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
        <h1 className="text-2xl font-bold text-gray-800">Trip Vehicle Requirements</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Trip Vehicle Requirements' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Trip Vehicle Requirements"
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

export default TripVehicleRequirementPage;
