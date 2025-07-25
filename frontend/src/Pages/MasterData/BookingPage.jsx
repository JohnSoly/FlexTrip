import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const BookingPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['BookingID', 'CustomerID', 'EmployeeID','Bookingcreationid','lastmodifieddate','LastModifiedByEmployeeID ','bookingstatus','grandtotal','collectionamount'];
  const tableData = [
    {
        "BookingID": "B001",
        "CustomerID": "CU101",
        "EmployeeID": "EMP001",
        "Bookingcreationid": "BCID001",
        "lastmodifieddate": "2023-01-15",
        "LastModifiedByEmployeeID ": "EMP001",
        "bookingstatus": "Confirmed",
        "grandtotal": 1500.00,
        "collectionamount": 1500.00
      },
      {
        "BookingID": "B002",
        "CustomerID": "CU102",
        "EmployeeID": "EMP002",
        "Bookingcreationid": "BCID002",
        "lastmodifieddate": "2023-01-22",
        "LastModifiedByEmployeeID ": "EMP002",
        "bookingstatus": "Pending",
        "grandtotal": 2200.50,
        "collectionamount": 1000.00
      },
      {
        "BookingID": "B003",
        "CustomerID": "CU103",
        "EmployeeID": "EMP003",
        "Bookingcreationid": "BCID003",
        "lastmodifieddate": "2023-02-01",
        "LastModifiedByEmployeeID ": "EMP003",
        "bookingstatus": "Cancelled",
        "grandtotal": 800.00,
        "collectionamount": 0.00
      },
      {
        "BookingID": "B004",
        "CustomerID": "CU104",
        "EmployeeID": "EMP001",
        "Bookingcreationid": "BCID004",
        "lastmodifieddate": "2023-02-10",
        "LastModifiedByEmployeeID ": "EMP001",
        "bookingstatus": "Confirmed",
        "grandtotal": 3000.00,
        "collectionamount": 3000.00
      },
      {
        "BookingID": "B005",
        "CustomerID": "CU105",
        "EmployeeID": "EMP004",
        "Bookingcreationid": "BCID005",
        "lastmodifieddate": "2023-02-16",
        "LastModifiedByEmployeeID ": "EMP004",
        "bookingstatus": "Confirmed",
        "grandtotal": 1200.75,
        "collectionamount": 1200.75
      },
      {
        "BookingID": "B006",
        "CustomerID": "CU106",
        "EmployeeID": "EMP005",
        "Bookingcreationid": "BCID006",
        "lastmodifieddate": "2023-03-01",
        "LastModifiedByEmployeeID ": "EMP005",
        "bookingstatus": "Pending",
        "grandtotal": 1800.00,
        "collectionamount": 500.00
      },
      {
        "BookingID": "B007",
        "CustomerID": "CU107",
        "EmployeeID": "EMP006",
        "Bookingcreationid": "BCID007",
        "lastmodifieddate": "2023-03-05",
        "LastModifiedByEmployeeID ": "EMP006",
        "bookingstatus": "Confirmed",
        "grandtotal": 2500.00,
        "collectionamount": 2500.00
      },
      {
        "BookingID": "B008",
        "CustomerID": "CU108",
        "EmployeeID": "EMP007",
        "Bookingcreationid": "BCID008",
        "lastmodifieddate": "2023-03-10",
        "LastModifiedByEmployeeID ": "EMP007",
        "bookingstatus": "Confirmed",
        "grandtotal": 950.00,
        "collectionamount": 950.00
      },
      {
        "BookingID": "B009",
        "CustomerID": "CU109",
        "EmployeeID": "EMP008",
        "Bookingcreationid": "BCID009",
        "lastmodifieddate": "2023-03-17",
        "LastModifiedByEmployeeID ": "EMP008",
        "bookingstatus": "Pending",
        "grandtotal": 4000.00,
        "collectionamount": 2000.00
      },
      {
        "BookingID": "B010",
        "CustomerID": "CU110",
        "EmployeeID": "EMP009",
        "Bookingcreationid": "BCID010",
        "lastmodifieddate": "2023-03-20",
        "LastModifiedByEmployeeID ": "EMP009",
        "bookingstatus": "Confirmed",
        "grandtotal": 1750.00,
        "collectionamount": 1750.00
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
        <h1 className="text-2xl font-bold text-gray-800">Booking</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Booking' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Bookings"
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

export default BookingPage;
