import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const EmployeePage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['FirstName', 'LastName', 'PhoneNumber', 'NationalId', 'JoinedDate'];
  const tableData = [
    {
      "FirstName": "Mohamed",
      "LastName": "Ahmed",
      "PhoneNumber": "01012345678",
      "NationalId": "29501010101010",
      "JoinedDate": "2022-03-15"
    },
    {
      "FirstName": "Sara",
      "LastName": "Ali",
      "PhoneNumber": "01123456789",
      "NationalId": "28802020202020",
      "JoinedDate": "2021-07-22"
    },
    {
      "FirstName": "Khaled",
      "LastName": "Mahmoud",
      "PhoneNumber": "01234567890",
      "NationalId": "29003030303030",
      "JoinedDate": "2023-01-10"
    },
    {
      "FirstName": "Nour",
      "LastName": "Hassan",
      "PhoneNumber": "01545678901",
      "NationalId": "29204040404040",
      "JoinedDate": "2022-11-05"
    },
    {
      "FirstName": "Youssef",
      "LastName": "Fathy",
      "PhoneNumber": "01098765432",
      "NationalId": "29805050505050",
      "JoinedDate": "2023-06-18"
    },
    {
      "FirstName": "Laila",
      "LastName": "Kamal",
      "PhoneNumber": "01187654321",
      "NationalId": "28506060606060",
      "JoinedDate": "2021-09-01"
    },
    {
      "FirstName": "Amr",
      "LastName": "Gaber",
      "PhoneNumber": "01276543210",
      "NationalId": "29107070707070",
      "JoinedDate": "2022-04-25"
    },
    {
      "FirstName": "Hana",
      "LastName": "Tarek",
      "PhoneNumber": "01532109876",
      "NationalId": "29308080808080",
      "JoinedDate": "2023-02-28"
    },
    {
      "FirstName": "Mostafa",
      "LastName": "Saad",
      "PhoneNumber": "01043210987",
      "NationalId": "29709090909090",
      "JoinedDate": "2022-08-12"
    },
    {
      "FirstName": "Dina",
      "LastName": "Adel",
      "PhoneNumber": "01154321098",
      "NationalId": "28910101010101",
      "JoinedDatee": "2021-11-19"
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
        <h1 className="text-2xl font-bold text-gray-800">Employees</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Employees' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Employees"
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

export default EmployeePage;
