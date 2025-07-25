import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const BookedLegPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['BookedLegID', 'TransportationBookingID', 'TripLegID'];
  const tableData = [
    {
        "BookedLegID": "BL001",
        "TransportationBookingID": "TB001", // Linked to TransportationBooking
        "TripLegID": "TL001" // Linked to TripLeg
      },
      {
        "BookedLegID": "BL002",
        "TransportationBookingID": "TB002",
        "TripLegID": "TL005"
      },
      {
        "BookedLegID": "BL003",
        "TransportationBookingID": "TB003",
        "TripLegID": "TL004"
      },
      {
        "BookedLegID": "BL004",
        "TransportationBookingID": "TB004",
        "TripLegID": "TL002"
      },
      {
        "BookedLegID": "BL005",
        "TransportationBookingID": "TB005",
        "TripLegID": "TL006"
      },
      {
        "BookedLegID": "BL006",
        "TransportationBookingID": "TB006",
        "TripLegID": "TL007"
      },
      {
        "BookedLegID": "BL007",
        "TransportationBookingID": "TB007",
        "TripLegID": "TL001" // Reusing TL001 for a different transportation booking
      },
      {
        "BookedLegID": "BL008",
        "TransportationBookingID": "TB008",
        "TripLegID": "TL008"
      },
      {
        "BookedLegID": "BL009",
        "TransportationBookingID": "TB009",
        "TripLegID": "TL009"
      },
      {
        "BookedLegID": "BL010",
        "TransportationBookingID": "TB010",
        "TripLegID": "TL010"
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
        <h1 className="text-2xl font-bold text-gray-800">Booked Leg</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Booked Leg' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Booked Legs"
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

export default BookedLegPage;
