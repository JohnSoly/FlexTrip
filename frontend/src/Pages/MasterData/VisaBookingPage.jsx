import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const VisaBookingPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['VisaBookingID', 'BookingID', 'DestinationCountryID','VisaType','No.ofpeople','Comments ','status'];
  const tableData = [
    {
        "VisaBookingID": "VB001",
        "BookingID": "B001", // Linked to a main booking
        "DestinationCountryID": "USA", // Example: United States
        "VisaType": "Tourist",
        "No.ofpeople": 2,
        "Comments ": "Urgent processing requested.",
        "status": "Approved"
      },
      {
        "VisaBookingID": "VB002",
        "BookingID": "B002",
        "DestinationCountryID": "GBR", // Example: United Kingdom
        "VisaType": "Business",
        "No.ofpeople": 1,
        "Comments ": "Conference in London.",
        "status": "Pending"
      },
      {
        "VisaBookingID": "VB003",
        "BookingID": "B003",
        "DestinationCountryID": "DEU", // Example: Germany
        "VisaType": "Schengen",
        "No.ofpeople": 3,
        "Comments ": "Family holiday.",
        "status": "Rejected"
      },
      {
        "VisaBookingID": "VB004",
        "BookingID": "B004",
        "DestinationCountryID": "ARE", // Example: UAE
        "VisaType": "Transit",
        "No.ofpeople": 1,
        "Comments ": "Layover in Dubai.",
        "status": "Approved"
      },
      {
        "VisaBookingID": "VB005",
        "BookingID": "B005",
        "DestinationCountryID": "CAN", // Example: Canada
        "VisaType": "Study",
        "No.ofpeople": 1,
        "Comments ": "University admission letter attached.",
        "status": "Pending"
      },
      {
        "VisaBookingID": "VB006",
        "BookingID": "B006",
        "DestinationCountryID": "FRA", // Example: France
        "VisaType": "Tourist",
        "No.ofpeople": 4,
        "Comments ": "Group tour.",
        "status": "Approved"
      },
      {
        "VisaBookingID": "VB007",
        "BookingID": "B007",
        "DestinationCountryID": "JPN", // Example: Japan
        "VisaType": "Work",
        "No.ofpeople": 1,
        "Comments ": "Employment contract provided.",
        "status": "Pending"
      },
      {
        "VisaBookingID": "VB008",
        "BookingID": "B008",
        "DestinationCountryID": "AUS", // Example: Australia
        "VisaType": "Visitor",
        "No.ofpeople": 2,
        "Comments ": "Visiting relatives.",
        "status": "Approved"
      },
      {
        "VisaBookingID": "VB009",
        "BookingID": "B009",
        "DestinationCountryID": "CHN", // Example: China
        "VisaType": "Business",
        "No.ofpeople": 1,
        "Comments ": "Trade fair attendance.",
        "status": "Pending"
      },
      {
        "VisaBookingID": "VB010",
        "BookingID": "B010",
        "DestinationCountryID": "ITA", // Example: Italy
        "VisaType": "Schengen",
        "No.ofpeople": 2,
        "Comments ": "Honeymoon trip.",
        "status": "Approved"
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
        <h1 className="text-2xl font-bold text-gray-800">Visa Booking</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Visa Booking' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Visa Booking"
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

export default VisaBookingPage;
