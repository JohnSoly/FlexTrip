import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const TripLegPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['TripLegID', 'TripID', 'LegOrder','OriginCityID','DestinationCityID','DepartureDateTime','ArrivalDateTime','AvailableSeats'];
  const tableData = [
    {
      "TripLegID": "TL001",
      "TripID": "TRP001", // Nile Cruise Adventure
      "LegOrder": 1,
      "OriginCityID": "CAI", // Cairo
      "DestinationCityID": "LUX", // Luxor
      "DepartureDateTime": "2024-09-10T08:00:00Z",
      "ArrivalDateTime": "2024-09-10T11:00:00Z",
      "AvailableSeats": 40
    },
    {
      "TripLegID": "TL002",
      "TripID": "TRP001", // Nile Cruise Adventure
      "LegOrder": 2,
      "OriginCityID": "LUX", // Luxor
      "DestinationCityID": "ASW", // Aswan (assuming ASW for Aswan)
      "DepartureDateTime": "2024-09-12T09:00:00Z",
      "ArrivalDateTime": "2024-09-12T13:00:00Z",
      "AvailableSeats": 35
    },
    {
      "TripLegID": "TL003",
      "TripID": "TRP002", // Sahara Desert Safari
      "LegOrder": 1,
      "OriginCityID": "CAI", // Cairo
      "DestinationCityID": "BAH", // Bahariya Oasis (dummy ID)
      "DepartureDateTime": "2024-10-05T06:00:00Z",
      "ArrivalDateTime": "2024-10-05T10:00:00Z",
      "AvailableSeats": 10
    },
    {
      "TripLegID": "TL004",
      "TripID": "TRP003", // Pyramids & Sphinx Tour (paired with TRP002)
      "LegOrder": 1,
      "OriginCityID": "CAI", // Cairo
      "DestinationCityID": "GIZ", // Giza
      "DepartureDateTime": "2024-10-07T09:30:00Z",
      "ArrivalDateTime": "2024-10-07T10:30:00Z",
      "AvailableSeats": 25
    },
    {
      "TripLegID": "TL005",
      "TripID": "TRP004", // Red Sea Diving Expedition
      "LegOrder": 1,
      "OriginCityID": "CAI", // Cairo
      "DestinationCityID": "HUR", // Hurghada
      "DepartureDateTime": "2024-11-15T07:00:00Z",
      "ArrivalDateTime": "2024-11-15T12:00:00Z",
      "AvailableSeats": 18
    },
    {
      "TripLegID": "TL006",
      "TripID": "TRP005", // Alexandria Historical Walk
      "LegOrder": 1,
      "OriginCityID": "CAI", // Cairo
      "DestinationCityID": "ALX", // Alexandria
      "DepartureDateTime": "2024-12-01T08:30:00Z",
      "ArrivalDateTime": "2024-12-01T11:00:00Z",
      "AvailableSeats": 30
    },
    {
      "TripLegID": "TL007",
      "TripID": "TRP006", // Aswan Relaxation Getaway
      "LegOrder": 1,
      "OriginCityID": "CAI", // Cairo
      "DestinationCityID": "ASW", // Aswan
      "DepartureDateTime": "2025-01-20T10:00:00Z",
      "ArrivalDateTime": "2025-01-20T14:00:00Z",
      "AvailableSeats": 15
    },
    {
      "TripLegID": "TL008",
      "TripID": "TRP007", // Business Conference Cairo
      "LegOrder": 1,
      "OriginCityID": "ALX", // Alexandria
      "DestinationCityID": "CAI", // Cairo
      "DepartureDateTime": "2025-02-10T07:00:00Z",
      "ArrivalDateTime": "2025-02-10T09:30:00Z",
      "AvailableSeats": 50
    },
    {
      "TripLegID": "TL009",
      "TripID": "TRP009", // Luxor Temple Exploration
      "LegOrder": 1,
      "OriginCityID": "LUX", // Luxor
      "DestinationCityID": "LUX", // Same city for local tour
      "DepartureDateTime": "2025-04-12T09:00:00Z",
      "ArrivalDateTime": "2025-04-12T12:00:00Z",
      "AvailableSeats": 20
    },
    {
      "TripLegID": "TL010",
      "TripID": "TRP010", // Valley of the Kings Visit (paired with TRP009)
      "LegOrder": 1,
      "OriginCityID": "LUX", // Luxor
      "DestinationCityID": "LUX", // Same city for local tour
      "DepartureDateTime": "2025-04-13T08:30:00Z",
      "ArrivalDateTime": "2025-04-13T11:30:00Z",
      "AvailableSeats": 20
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
        <h1 className="text-2xl font-bold text-gray-800">Trip Leg</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Trip Leg' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Trip Legs"
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

export default TripLegPage;
