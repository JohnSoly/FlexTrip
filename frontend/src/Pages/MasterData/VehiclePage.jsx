import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const VehiclePage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['VehicleID', 'TransportationCategoryID', 'SupplierID' , 'LicensePlate','VehicleIdentifier'];
  const tableData = [
    {
        "VehicleID": "V001",
        "TransportationCategoryID": "TC001", 
        "SupplierID": "S001",
        "LicensePlate": "ABC-1234",
        "VehicleIdentifier": "Ford Focus 2022"
      },
      {
        "VehicleID": "V002",
        "TransportationCategoryID": "TC002", 
        "SupplierID": "S002", 
        "LicensePlate": "XYZ-5678",
        "VehicleIdentifier": "Toyota RAV4 2023"
      },
      {
        "VehicleID": "V003",
        "TransportationCategoryID": "TC003", 
        "SupplierID": "S001",
        "LicensePlate": "DEF-9012",
        "VehicleIdentifier": "Mercedes-Benz Sprinter"
      },
      {
        "VehicleID": "V004",
        "TransportationCategoryID": "TC004", 
        "SupplierID": "S003", 
        "LicensePlate": "GHI-3456",
        "VehicleIdentifier": "Coaster Minibus"
      },
      {
        "VehicleID": "V005",
        "TransportationCategoryID": "TC001", 
        "SupplierID": "S002",
        "LicensePlate": "JKL-7890",
        "VehicleIdentifier": "Honda Civic 2021"
      },
      {
        "VehicleID": "V006",
        "TransportationCategoryID": "TC005",
        "SupplierID": "S003",
        "LicensePlate": "MNO-1122",
        "VehicleIdentifier": "Volvo B8RLE Coach"
      },
      {
        "VehicleID": "V007",
        "TransportationCategoryID": "TC006", 
        "SupplierID": "S001",
        "LicensePlate": "PQR-3344",
        "VehicleIdentifier": "Lincoln Town Car Limo"
      },
      {
        "VehicleID": "V008",
        "TransportationCategoryID": "TC002", 
        "SupplierID": "S002",
        "LicensePlate": "STU-5566",
        "VehicleIdentifier": "Nissan X-Trail 2022"
      },
      {
        "VehicleID": "V009",
        "TransportationCategoryID": "TC007", 
        "SupplierID": "S004", 
        "LicensePlate": "VWX-7788",
        "VehicleIdentifier": "Yamaha MT-07"
      },
      {
        "VehicleID": "V010",
        "TransportationCategoryID": "TC008",
        "SupplierID": "S001",
        "LicensePlate": "YZA-9900",
        "VehicleIdentifier": "Tesla Model 3"
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
        <h1 className="text-2xl font-bold text-gray-800">Vehicles</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Vehicles' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Vehicles"
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

export default VehiclePage;
