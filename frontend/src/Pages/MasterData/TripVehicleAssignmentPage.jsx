import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const TripVehicleAssignmentPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['TripVehicleAssignmentID', 'TripID', 'VehicleID','DriverID','GuideEmployeeID'];
  const tableData = [
    {
        "TripVehicleAssignmentID": "TVA001",
        "TripID": "TRP001", // Nile Cruise Adventure
        "VehicleID": "V003", // Van
        "DriverID": "DRV001", // Dummy Driver ID
        "GuideEmployeeID": "EMP001" // Dummy Employee ID for a guide
      },
      {
        "TripVehicleAssignmentID": "TVA002",
        "TripID": "TRP002", // Sahara Desert Safari
        "VehicleID": "V002", // SUV
        "DriverID": "DRV002",
        "GuideEmployeeID": "EMP002"
      },
      {
        "TripVehicleAssignmentID": "TVA003",
        "TripID": "TRP003", // Pyramids & Sphinx Tour
        "VehicleID": "V001", // Sedan
        "DriverID": "DRV003",
        "GuideEmployeeID": "EMP003"
      },
      {
        "TripVehicleAssignmentID": "TVA004",
        "TripID": "TRP004", // Red Sea Diving Expedition
        "VehicleID": "V003", // Van
        "DriverID": "DRV004",
        "GuideEmployeeID": "EMP004"
      },
      {
        "TripVehicleAssignmentID": "TVA005",
        "TripID": "TRP005", // Alexandria Historical Walk
        "VehicleID": "V005", // Sedan
        "DriverID": "DRV005",
        "GuideEmployeeID": "EMP005"
      },
      {
        "TripVehicleAssignmentID": "TVA006",
        "TripID": "TRP006", // Aswan Relaxation Getaway
        "VehicleID": "V001", // Sedan
        "DriverID": "DRV006",
        "GuideEmployeeID": "EMP006"
      },
      {
        "TripVehicleAssignmentID": "TVA007",
        "TripID": "TRP007", // Business Conference Cairo
        "VehicleID": "V004", // Minibus
        "DriverID": "DRV007",
        "GuideEmployeeID": "EMP007"
      },
      {
        "TripVehicleAssignmentID": "TVA008",
        "TripID": "TRP008", // Oasis Oasis Camping
        "VehicleID": "V008", // SUV
        "DriverID": "DRV008",
        "GuideEmployeeID": "EMP008"
      },
      {
        "TripVehicleAssignmentID": "TVA009",
        "TripID": "TRP009", // Luxor Temple Exploration
        "VehicleID": "V003", // Van
        "DriverID": "DRV009",
        "GuideEmployeeID": "EMP009"
      },
      {
        "TripVehicleAssignmentID": "TVA010",
        "TripID": "TRP010", // Valley of the Kings Visit
        "VehicleID": "V001", // Sedan
        "DriverID": "DRV010",
        "GuideEmployeeID": "EMP010"
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
        <h1 className="text-2xl font-bold text-gray-800">Trip Vehicle Assignment</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Trip Vehicle Assignment' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Trip Vehicle Assignment"
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

export default TripVehicleAssignmentPage;
