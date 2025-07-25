import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const TransportationBookingPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['TransportationBookingID',
  'BookingID',
  'NumberOfSeatsBooked',
  'Comments'];
  const tableData = [
    {
        "TransportationBookingID": "TB001",
        "BookingID": "B001", // Linked to a main booking
        "NumberOfSeatsBooked": 2,
        "Comments": "Airport transfer for arrival."
      },
      {
        "TransportationBookingID": "TB002",
        "BookingID": "B002",
        "NumberOfSeatsBooked": 1,
        "Comments": "Inter-city bus ticket."
      },
      {
        "TransportationBookingID": "TB003",
        "BookingID": "B003",
        "NumberOfSeatsBooked": 4,
        "Comments": "Private car for city tour."
      },
      {
        "TransportationBookingID": "TB004",
        "BookingID": "B004",
        "NumberOfSeatsBooked": 3,
        "Comments": "Train tickets to Luxor."
      },
      {
        "TransportationBookingID": "TB005",
        "BookingID": "B005",
        "NumberOfSeatsBooked": 1,
        "Comments": "Taxi service to hotel."
      },
      {
        "TransportationBookingID": "TB006",
        "BookingID": "B006",
        "NumberOfSeatsBooked": 5,
        "Comments": "Minibus for group excursion."
      },
      {
        "TransportationBookingID": "TB007",
        "BookingID": "B007",
        "NumberOfSeatsBooked": 2,
        "Comments": "Flight booking from Cairo to Aswan."
      },
      {
        "TransportationBookingID": "TB008",
        "BookingID": "B008",
        "NumberOfSeatsBooked": 1,
        "Comments": "Rental car for 3 days."
      },
      {
        "TransportationBookingID": "TB009",
        "BookingID": "B009",
        "NumberOfSeatsBooked": 2,
        "Comments": "Ferry tickets for island hopping."
      },
      {
        "TransportationBookingID": "TB010",
        "BookingID": "B010",
        "NumberOfSeatsBooked": 3,
        "Comments": "Shuttle service to resort."
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
        <h1 className="text-2xl font-bold text-gray-800">Transportation Booking</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Transportation Booking' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Transportation Bookings"
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

export default TransportationBookingPage;
