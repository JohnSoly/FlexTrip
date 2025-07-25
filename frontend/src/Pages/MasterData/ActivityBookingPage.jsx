import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const ActivityBookingPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['ActivityBookingID',
  'BookingID',
  'ActivityTypeID',
  'SupplierID',
  'ActivityDate',
  'PlaceOfActivityCityID',
  'NumberOfAdults',
  'NumberOfChildren',
  'Comments',
  'Status'];
  const tableData = [
    {
        "ActivityBookingID": "ACTB001",
        "BookingID": "B001", // Linked to a main booking
        "ActivityTypeID": "AT001", // Sightseeing Tour
        "SupplierID": "S001", // Global Tech Solutions (or a tour operator supplier)
        "ActivityDate": "2024-09-11",
        "PlaceOfActivityCityID": "CAI", // Cairo
        "NumberOfAdults": 2,
        "NumberOfChildren": 0,
        "Comments": "Pyramids and Sphinx tour.",
        "Status": "Confirmed"
      },
      {
        "ActivityBookingID": "ACTB002",
        "BookingID": "B002",
        "ActivityTypeID": "AT002", // Adventure Sports
        "SupplierID": "S002", // Eco-Friendly Supplies (or an adventure supplier)
        "ActivityDate": "2024-10-06",
        "PlaceOfActivityCityID": "SHR", // Sharm El Sheikh
        "NumberOfAdults": 1,
        "NumberOfChildren": 0,
        "Comments": "Scuba diving experience.",
        "Status": "Confirmed"
      },
      {
        "ActivityBookingID": "ACTB003",
        "BookingID": "B003",
        "ActivityTypeID": "AT003", // Cultural Experience
        "SupplierID": "S003", // Prime Manufacturing Inc. (or a cultural experience supplier)
        "ActivityDate": "2024-11-06",
        "PlaceOfActivityCityID": "LUX", // Luxor
        "NumberOfAdults": 3,
        "NumberOfChildren": 1,
        "Comments": "Nile felucca ride and local village visit.",
        "Status": "Pending"
      },
      {
        "ActivityBookingID": "ACTB004",
        "BookingID": "B004",
        "ActivityTypeID": "AT004", // Relaxation & Wellness
        "SupplierID": "S001",
        "ActivityDate": "2024-12-22",
        "PlaceOfActivityCityID": "HUR", // Hurghada
        "NumberOfAdults": 2,
        "NumberOfChildren": 0,
        "Comments": "Spa day at resort.",
        "Status": "Confirmed"
      },
      {
        "ActivityBookingID": "ACTB005",
        "BookingID": "B005",
        "ActivityTypeID": "AT005", // Shopping Excursion
        "SupplierID": "S002",
        "ActivityDate": "2025-01-11",
        "PlaceOfActivityCityID": "ALX", // Alexandria
        "NumberOfAdults": 1,
        "NumberOfChildren": 0,
        "Comments": "Souk tour and local crafts shopping.",
        "Status": "Confirmed"
      },
      {
        "ActivityBookingID": "ACTB006",
        "BookingID": "B006",
        "ActivityTypeID": "AT006", // Food & Culinary Tour
        "SupplierID": "S003",
        "ActivityDate": "2025-02-15",
        "PlaceOfActivityCityID": "CAI",
        "NumberOfAdults": 4,
        "NumberOfChildren": 0,
        "Comments": "Street food tour in Old Cairo.",
        "Status": "Confirmed"
      },
      {
        "ActivityBookingID": "ACTB007",
        "BookingID": "B007",
        "ActivityTypeID": "AT007", // Nature & Wildlife
        "SupplierID": "S001",
        "ActivityDate": "2025-03-02",
        "PlaceOfActivityCityID": "ASW", // Aswan
        "NumberOfAdults": 2,
        "NumberOfChildren": 1,
        "Comments": "Abu Simbel day trip.",
        "Status": "Confirmed"
      },
      {
        "ActivityBookingID": "ACTB008",
        "BookingID": "B008",
        "ActivityTypeID": "AT008", // Nightlife & Entertainment
        "SupplierID": "S002",
        "ActivityDate": "2025-04-21",
        "PlaceOfActivityCityID": "CAI",
        "NumberOfAdults": 2,
        "NumberOfChildren": 0,
        "Comments": "Dinner cruise on the Nile.",
        "Status": "Confirmed"
      },
      {
        "ActivityBookingID": "ACTB009",
        "BookingID": "B009",
        "ActivityTypeID": "AT009", // Educational Workshop
        "SupplierID": "S003",
        "ActivityDate": "2025-05-11",
        "PlaceOfActivityCityID": "LUX",
        "NumberOfAdults": 3,
        "NumberOfChildren": 2,
        "Comments": "Hieroglyphics writing workshop.",
        "Status": "Pending"
      },
      {
        "ActivityBookingID": "ACTB010",
        "BookingID": "B010",
        "ActivityTypeID": "AT010", // Photography Tour
        "SupplierID": "S001",
        "ActivityDate": "2025-06-02",
        "PlaceOfActivityCityID": "GIZ", // Giza
        "NumberOfAdults": 1,
        "NumberOfChildren": 0,
        "Comments": "Sunrise photography at the Pyramids.",
        "Status": "Confirmed"
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
        <h1 className="text-2xl font-bold text-gray-800">Activity Booking</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Activity Booking' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Activity Bookings"
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

export default ActivityBookingPage;
