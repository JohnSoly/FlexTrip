import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const DayUseBookingPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['DayUseBookingID', 'BookingID', 'HotelID','CheckINdate','No.ofAdults','No.ofchildren ','Comments'];
  const tableData = [
    {
        "DayUseBookingID": "DU001",
        "BookingID": "B001", // Linked to a main booking
        "HotelID": "H005", // Example Hotel ID
        "CheckINdate": "2024-08-01",
        "No.ofAdults": 2,
        "No.ofchildren ": 0,
        "Comments": "Couple's day out, quiet room preferred."
      },
      {
        "DayUseBookingID": "DU002",
        "BookingID": "B002",
        "HotelID": "H002",
        "CheckINdate": "2024-08-05",
        "No.ofAdults": 1,
        "No.ofchildren ": 0,
        "Comments": "Business meeting, need strong Wi-Fi."
      },
      {
        "DayUseBookingID": "DU003",
        "BookingID": "B003",
        "HotelID": "H008",
        "CheckINdate": "2024-08-10",
        "No.ofAdults": 2,
        "No.ofchildren ": 2,
        "Comments": "Family with young kids, access to pool needed."
      },
      {
        "DayUseBookingID": "DU004",
        "BookingID": "B004",
        "HotelID": "H001",
        "CheckINdate": "2024-08-15",
        "No.ofAdults": 3,
        "No.ofchildren ": 0,
        "Comments": "Small group gathering, need a spacious lounge area."
      },
      {
        "DayUseBookingID": "DU005",
        "BookingID": "B005",
        "HotelID": "H003",
        "CheckINdate": "2024-08-20",
        "No.ofAdults": 1,
        "No.ofchildren ": 0,
        "Comments": "Solo traveler, looking for a quiet workspace."
      },
      {
        "DayUseBookingID": "DU006",
        "BookingID": "B006",
        "HotelID": "H006",
        "CheckINdate": "2024-08-25",
        "No.ofAdults": 2,
        "No.ofchildren ": 1,
        "Comments": "Parents with one child, need extra bed/cot."
      },
      {
        "DayUseBookingID": "DU007",
        "BookingID": "B007",
        "HotelID": "H009",
        "CheckINdate": "2024-09-01",
        "No.ofAdults": 4,
        "No.ofchildren ": 0,
        "Comments": "Friends reunion, prefer connecting rooms if possible."
      },
      {
        "DayUseBookingID": "DU008",
        "BookingID": "B008",
        "HotelID": "H004",
        "CheckINdate": "2024-09-05",
        "No.ofAdults": 2,
        "No.ofchildren ": 0,
        "Comments": "Anniversary celebration, special amenities requested."
      },
      {
        "DayUseBookingID": "DU009",
        "BookingID": "B009",
        "HotelID": "H007",
        "CheckINdate": "2024-09-10",
        "No.ofAdults": 1,
        "No.ofchildren ": 1,
        "Comments": "Single parent with child, need child-friendly facilities."
      },
      {
        "DayUseBookingID": "DU010",
        "BookingID": "B010",
        "HotelID": "H010",
        "CheckINdate": "2024-09-15",
        "No.ofAdults": 2,
        "No.ofchildren ": 0,
        "Comments": "Photoshoot location, good natural light needed."
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
        <h1 className="text-2xl font-bold text-gray-800">Day Use Booking</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Day Use Booking' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Day Use Bookings"
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

export default DayUseBookingPage;
