import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const ClientPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['ClientID', 'CustomerID', 'FullName', 'PhoneNumber1', 'PhoneNumber2', 'Email','NationalID','CityOfResidenceID','Age','NationalityCountryID'];
  const tableData = [
    {
      "ClientID": "C001",
      "CustomerID": "CU101", 
      "FullName": "Ahmed Hassan",
      "PhoneNumber1": "01234567890",
      "PhoneNumber2": "01098765432",
      "Email": "ahmed.hassan@example.com",
      "NationalID": "29012345678901", 
      "CityOfResidenceID": "CAI", 
      "Age": 35,
      "NationalityCountryID": "EGY" 
    },
    {
      "ClientID": "C002",
      "CustomerID": "CU102",
      "FullName": "Fatma Mahmoud",
      "PhoneNumber1": "01123456789",
      "PhoneNumber2": null, 
      "Email": "fatma.mahmoud@example.com",
      "NationalID": "28567890123456",
      "CityOfResidenceID": "ALX", 
      "Age": 28,
      "NationalityCountryID": "EGY"
    },
    {
      "ClientID": "C003",
      "CustomerID": "CU103",
      "FullName": "Omar Ali",
      "PhoneNumber1": "01598765432",
      "PhoneNumber2": "01012345678",
      "Email": "omar.ali@example.com",
      "NationalID": "30012345678901",
      "CityOfResidenceID": "LUX", 
      "Age": 42,
      "NationalityCountryID": "EGY"
    },
    {
      "ClientID": "C004",
      "CustomerID": "CU104",
      "FullName": "Nour El-Din",
      "PhoneNumber1": "01023456789",
      "PhoneNumber2": null,
      "Email": "nour.eldin@example.com",
      "NationalID": "29567890123456",
      "CityOfResidenceID": "SHR", 
      "Age": 22,
      "NationalityCountryID": "EGY"
    },
    {
      "ClientID": "C005",
      "CustomerID": "CU105",
      "FullName": "Mona Samir",
      "PhoneNumber1": "01201234567",
      "PhoneNumber2": "01198765432",
      "Email": "mona.samir@example.com",
      "NationalID": "27512345678901",
      "CityOfResidenceID": "CAI",
      "Age": 50,
      "NationalityCountryID": "EGY"
    },
    {
      "ClientID": "C006",
      "CustomerID": "CU106",
      "FullName": "David Smith",
      "PhoneNumber1": "+447123456789",
      "PhoneNumber2": null,
      "Email": "david.smith@example.com",
      "NationalID": "FRG123456789",
      "CityOfResidenceID": "CAI",
      "Age": 38,
      "NationalityCountryID": "GBR" 
    },
    {
      "ClientID": "C007",
      "CustomerID": "CU107",
      "FullName": "Maria Garcia",
      "PhoneNumber1": "+34601234567",
      "PhoneNumber2": null,
      "Email": "maria.garcia@example.com",
      "NationalID": "ESP987654321",
      "CityOfResidenceID": "ALX",
      "Age": 31,
      "NationalityCountryID": "ESP" 
    },
    {
      "ClientID": "C008",
      "CustomerID": "CU108",
      "FullName": "Mohammed Salah",
      "PhoneNumber1": "01055554444",
      "PhoneNumber2": null,
      "Email": "mohamed.salah@example.com",
      "NationalID": "29876543210987",
      "CityOfResidenceID": "GIZ", 
      "Age": 32,
      "NationalityCountryID": "EGY"
    },
    {
      "ClientID": "C009",
      "CustomerID": "CU109",
      "FullName": "Sarah Johnson",
      "PhoneNumber1": "+12025550123",
      "PhoneNumber2": null,
      "Email": "sarah.j@example.com",
      "NationalID": "USA543210987",
      "CityOfResidenceID": "HUR", 
      "Age": 29,
      "NationalityCountryID": "USA"
    },
    {
      "ClientID": "C010",
      "CustomerID": "CU110",
      "FullName": "Karim Fahmy",
      "PhoneNumber1": "01270001111",
      "PhoneNumber2": "01066667777",
      "Email": "karim.fahmy@example.com",
      "NationalID": "29212345678901",
      "CityOfResidenceID": "CAI",
      "Age": 45,
      "NationalityCountryID": "EGY"
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
        <h1 className="text-2xl font-bold text-gray-800">Clients</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Clients' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <div className="p-4">
  <SearchFilterAdd
    title="All Clients"
    count={tableData.length}
    onSearch={handleSearch}
    onFilter={handleFilter}
    onAdd={handleAdd}
  />

<div className="overflow-x-auto">
  <DynamicTable headers={tableHeaders} data={currentTableData} />
</div>


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
    </div>
  );
};

export default ClientPage;
