import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const DriverPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['FirstName', 'LastName', 'LicenseNumber','PhoneNumber'];
  const tableData = [
    {
        "FirstName": "Ahmed",
        "LastName": "Zaki",
        "LicenseNumber": "DRV1234567",
        "PhoneNumber": "01011223344"
      },
      {
        "FirstName": "Layla",
        "LastName": "Mansour",
        "LicenseNumber": "DRV9876543",
        "PhoneNumber": "01155667788"
      },
      {
        "FirstName": "Tarek",
        "LastName": "El-Sayed",
        "LicenseNumber": "DRV1122334",
        "PhoneNumber": "01200112233"
      },
      {
        "FirstName": "Salma",
        "LastName": "Sherif",
        "LicenseNumber": "DRV5566778",
        "PhoneNumber": "01599887766"
      },
      {
        "FirstName": "Omar",
        "LastName": "Farouk",
        "LicenseNumber": "DRV2233445",
        "PhoneNumber": "01033445566"
      },
      {
        "FirstName": "Hoda",
        "LastName": "Kamal",
        "LicenseNumber": "DRV7788990",
        "PhoneNumber": "01177889900"
      },
      {
        "FirstName": "Mostafa",
        "LastName": "Adel",
        "LicenseNumber": "DRV3344556",
        "PhoneNumber": "01244556677"
      },
      {
        "FirstName": "Nadia",
        "LastName": "Fouad",
        "LicenseNumber": "DRV8899001",
        "PhoneNumber": "01511223344"
      },
      {
        "FirstName": "Gamal",
        "LastName": "Salem",
        "LicenseNumber": "DRV4455667",
        "PhoneNumber": "01066778899"
      },
      {
        "FirstName": "Dalia",
        "LastName": "Amin",
        "LicenseNumber": "DRV0011223",
        "PhoneNumber": "01199001122"
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
        <h1 className="text-2xl font-bold text-gray-800">Drivers</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Drivers' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Drivers"
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

export default DriverPage;
