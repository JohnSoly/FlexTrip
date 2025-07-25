import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const TripPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['TripID', 'TripName', 'TripDate','TripType','PairedTrip'];
  const tableData = [
    {
        "TripID": "TRP001",
        "TripName": "Nile Cruise Adventure",
        "TripDate": "2024-09-10",
        "TripType": "Cultural",
        "PairedTrip": null // Not paired
      },
      {
        "TripID": "TRP002",
        "TripName": "Sahara Desert Safari",
        "TripDate": "2024-10-05",
        "TripType": "Adventure",
        "PairedTrip": "TRP003" // Paired with another trip
      },
      {
        "TripID": "TRP003",
        "TripName": "Pyramids & Sphinx Tour",
        "TripDate": "2024-10-07",
        "TripType": "Cultural",
        "PairedTrip": "TRP002" // Paired with TRP002
      },
      {
        "TripID": "TRP004",
        "TripName": "Red Sea Diving Expedition",
        "TripDate": "2024-11-15",
        "TripType": "Adventure",
        "PairedTrip": null
      },
      {
        "TripID": "TRP005",
        "TripName": "Alexandria Historical Walk",
        "TripDate": "2024-12-01",
        "TripType": "Educational",
        "PairedTrip": null
      },
      {
        "TripID": "TRP006",
        "TripName": "Aswan Relaxation Getaway",
        "TripDate": "2025-01-20",
        "TripType": "Relaxation",
        "PairedTrip": null
      },
      {
        "TripID": "TRP007",
        "TripName": "Business Conference Cairo",
        "TripDate": "2025-02-10",
        "TripType": "Business",
        "PairedTrip": null
      },
      {
        "TripID": "TRP008",
        "TripName": "Oasis Oasis Camping",
        "TripDate": "2025-03-01",
        "TripType": "Adventure",
        "PairedTrip": null
      },
      {
        "TripID": "TRP009",
        "TripName": "Luxor Temple Exploration",
        "TripDate": "2025-04-12",
        "TripType": "Cultural",
        "PairedTrip": "TRP010"
      },
      {
        "TripID": "TRP010",
        "TripName": "Valley of the Kings Visit",
        "TripDate": "2025-04-13",
        "TripType": "Cultural",
        "PairedTrip": "TRP009"
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
        <h1 className="text-2xl font-bold text-gray-800">Trips</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Trips' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Trips"
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

export default TripPage;
