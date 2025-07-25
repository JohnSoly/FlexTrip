import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const CompensationPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['CompensationID', 'EmployeeID', 'BasicSalary','ComissionRate'];
  const tableData = [
    {
        "CompensationID": "COMP001",
        "EmployeeID": "EMP001",
        "BasicSalary": 50000,
        "ComissionRate": 0.05
      },
      {
        "CompensationID": "COMP002",
        "EmployeeID": "EMP002",
        "BasicSalary": 60000,
        "ComissionRate": 0.07
      },
      {
        "CompensationID": "COMP003",
        "EmployeeID": "EMP003",
        "BasicSalary": 45000,
        "ComissionRate": 0.03
      },
      {
        "CompensationID": "COMP004",
        "EmployeeID": "EMP004",
        "BasicSalary": 75000,
        "ComissionRate": 0.10
      },
      {
        "CompensationID": "COMP005",
        "EmployeeID": "EMP005",
        "BasicSalary": 52000,
        "ComissionRate": 0.06
      },
      {
        "CompensationID": "COMP006",
        "EmployeeID": "EMP006",
        "BasicSalary": 68000,
        "ComissionRate": 0.08
      },
      {
        "CompensationID": "COMP007",
        "EmployeeID": "EMP007",
        "BasicSalary": 48000,
        "ComissionRate": 0.04
      },
      {
        "CompensationID": "COMP008",
        "EmployeeID": "EMP008",
        "BasicSalary": 80000,
        "ComissionRate": 0.12
      },
      {
        "CompensationID": "COMP009",
        "EmployeeID": "EMP009",
        "BasicSalary": 55000,
        "ComissionRate": 0.055
      },
      {
        "CompensationID": "COMP010",
        "EmployeeID": "EMP010",
        "BasicSalary": 70000,
        "ComissionRate": 0.09
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
        <h1 className="text-2xl font-bold text-gray-800">Compensation</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Compensation' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Compensations"
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

export default CompensationPage;
