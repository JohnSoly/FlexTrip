import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const BookingParticipantPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['BookingParticipantID', 'BookingID', 'FirstName','LastName','NationalID','CityOfResidenceID ','Age'];
  const tableData = [
    {
        "BookingParticipantID": "BP001",
        "BookingID": "B001", // Linked to a main booking
        "FirstName": "Ahmed",
        "LastName": "Kamal",
        "NationalID": "29010101010101",
        "CityOfResidenceID ": "CAI", // Cairo
        "Age": 30
      },
      {
        "BookingParticipantID": "BP002",
        "BookingID": "B001",
        "FirstName": "Nour",
        "LastName": "Kamal",
        "NationalID": "29202020202020",
        "CityOfResidenceID ": "CAI", // Cairo
        "Age": 28
      },
      {
        "BookingParticipantID": "BP003",
        "BookingID": "B002",
        "FirstName": "Fatma",
        "LastName": "El-Sayed",
        "NationalID": "28503030303030",
        "CityOfResidenceID ": "ALX", // Alexandria
        "Age": 45
      },
      {
        "BookingParticipantID": "BP004",
        "BookingID": "B004",
        "FirstName": "David",
        "LastName": "Jones",
        "NationalID": "USA123456789",
        "CityOfResidenceID ": "NYC", // New York (dummy ID)
        "Age": 35
      },
      {
        "BookingParticipantID": "BP005",
        "BookingID": "B004",
        "FirstName": "Sarah",
        "LastName": "Jones",
        "NationalID": "USA987654321",
        "CityOfResidenceID ": "NYC", // New York (dummy ID)
        "Age": 33
      },
      {
        "BookingParticipantID": "BP006",
        "BookingID": "B005",
        "FirstName": "Omar",
        "LastName": "Hassan",
        "NationalID": "29804040404040",
        "CityOfResidenceID ": "LUX", // Luxor
        "Age": 22
      },
      {
        "BookingParticipantID": "BP007",
        "BookingID": "B007",
        "FirstName": "Maria",
        "LastName": "Gonzales",
        "NationalID": "ESP112233445",
        "CityOfResidenceID ": "MAD", // Madrid (dummy ID)
        "Age": 40
      },
      {
        "BookingParticipantID": "BP008",
        "BookingID": "B007",
        "FirstName": "Carlos",
        "LastName": "Gonzales",
        "NationalID": "ESP556677889",
        "CityOfResidenceID ": "MAD", // Madrid (dummy ID)
        "Age": 42
      },
      {
        "BookingParticipantID": "BP009",
        "BookingID": "B009",
        "FirstName": "Mona",
        "LastName": "Mansour",
        "NationalID": "27505050505050",
        "CityOfResidenceID ": "GIZ", // Giza
        "Age": 55
      },
      {
        "BookingParticipantID": "BP010",
        "BookingID": "B010",
        "FirstName": "Karim",
        "LastName": "Ali",
        "NationalID": "29206060606060",
        "CityOfResidenceID ": "SHR", // Sharm El Sheikh
        "Age": 29
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
        <h1 className="text-2xl font-bold text-gray-800">Booking Participants</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Booking Participants' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Booking Participants"
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

export default BookingParticipantPage;
