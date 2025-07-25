import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const AccommodationBookingPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = [
    'AccommodationBookingID',
    'BookingID',
    'InventoryID',
    'SupplierID',
    'CheckInDate',
    'CheckOutDate',
    'NumberOfRoomsBooked',
    'NumberOfAdults',
    'NumberOfChildren',
    'MealPlanID',
    'Status',
    'LeadParticipantNationalityCountryID'
  ];
  
  const tableData = [
    {
      "AccommodationBookingID": "AB001",
      "BookingID": "B001", // Example Booking ID
      "InventoryID": "INV001", // Example RoomInventory ID
      "SupplierID": "S001", // Example Supplier ID
      "CheckInDate": "2024-09-10",
      "CheckOutDate": "2024-09-15",
      "NumberOfRoomsBooked": 2,
      "NumberOfAdults": 4,
      "NumberOfChildren": 0,
      "MealPlanID": "MP001", // Example MealPlan ID (e.g., "Breakfast Only")
      "Status": "Confirmed",
      "LeadParticipantNationalityCountryID": "EGY" // Example Country ID
    },
    {
      "AccommodationBookingID": "AB002",
      "BookingID": "B002",
      "InventoryID": "INV002",
      "SupplierID": "S002",
      "CheckInDate": "2024-10-01",
      "CheckOutDate": "2024-10-07",
      "NumberOfRoomsBooked": 1,
      "NumberOfAdults": 2,
      "NumberOfChildren": 1,
      "MealPlanID": "MP002", // Example MealPlan ID (e.g., "Half Board")
      "Status": "Pending",
      "LeadParticipantNationalityCountryID": "GBR"
    },
    {
      "AccommodationBookingID": "AB003",
      "BookingID": "B003",
      "InventoryID": "INV003",
      "SupplierID": "S003",
      "CheckInDate": "2024-11-05",
      "CheckOutDate": "2024-11-08",
      "NumberOfRoomsBooked": 3,
      "NumberOfAdults": 6,
      "NumberOfChildren": 2,
      "MealPlanID": "MP003", // Example MealPlan ID (e.g., "Full Board")
      "Status": "Confirmed",
      "LeadParticipantNationalityCountryID": "USA"
    },
    {
      "AccommodationBookingID": "AB004",
      "BookingID": "B004",
      "InventoryID": "INV001",
      "SupplierID": "S001",
      "CheckInDate": "2024-12-20",
      "CheckOutDate": "2024-12-27",
      "NumberOfRoomsBooked": 1,
      "NumberOfAdults": 2,
      "NumberOfChildren": 0,
      "MealPlanID": "MP001",
      "Status": "Confirmed",
      "LeadParticipantNationalityCountryID": "EGY"
    },
    {
      "AccommodationBookingID": "AB005",
      "BookingID": "B005",
      "InventoryID": "INV002",
      "SupplierID": "S002",
      "CheckInDate": "2025-01-10",
      "CheckOutDate": "2025-01-12",
      "NumberOfRoomsBooked": 1,
      "NumberOfAdults": 1,
      "NumberOfChildren": 0,
      "MealPlanID": "MP004", // Example MealPlan ID (e.g., "All Inclusive")
      "Status": "Cancelled",
      "LeadParticipantNationalityCountryID": "DEU"
    },
    {
      "AccommodationBookingID": "AB006",
      "BookingID": "B006",
      "InventoryID": "INV003",
      "SupplierID": "S003",
      "CheckInDate": "2025-02-14",
      "CheckOutDate": "2025-02-16",
      "NumberOfRoomsBooked": 2,
      "NumberOfAdults": 4,
      "NumberOfChildren": 0,
      "MealPlanID": "MP002",
      "Status": "Confirmed",
      "LeadParticipantNationalityCountryID": "FRA"
    },
    {
      "AccommodationBookingID": "AB007",
      "BookingID": "B007",
      "InventoryID": "INV001",
      "SupplierID": "S001",
      "CheckInDate": "2025-03-01",
      "CheckOutDate": "2025-03-05",
      "NumberOfRoomsBooked": 1,
      "NumberOfAdults": 2,
      "NumberOfChildren": 1,
      "MealPlanID": "MP001",
      "Status": "Pending",
      "LeadParticipantNationalityCountryID": "JPN"
    },
    {
      "AccommodationBookingID": "AB008",
      "BookingID": "B008",
      "InventoryID": "INV002",
      "SupplierID": "S002",
      "CheckInDate": "2025-04-20",
      "CheckOutDate": "2025-04-25",
      "NumberOfRoomsBooked": 1,
      "NumberOfAdults": 1,
      "NumberOfChildren": 0,
      "MealPlanID": "MP003",
      "Status": "Confirmed",
      "LeadParticipantNationalityCountryID": "AUS"
    },
    {
      "AccommodationBookingID": "AB009",
      "BookingID": "B009",
      "InventoryID": "INV003",
      "SupplierID": "S003",
      "CheckInDate": "2025-05-10",
      "CheckOutDate": "2025-05-12",
      "NumberOfRoomsBooked": 2,
      "NumberOfAdults": 3,
      "NumberOfChildren": 2,
      "MealPlanID": "MP004",
      "Status": "Confirmed",
      "LeadParticipantNationalityCountryID": "CHN"
    },
    {
      "AccommodationBookingID": "AB010",
      "BookingID": "B010",
      "InventoryID": "INV001",
      "SupplierID": "S001",
      "CheckInDate": "2025-06-01",
      "CheckOutDate": "2025-06-03",
      "NumberOfRoomsBooked": 1,
      "NumberOfAdults": 2,
      "NumberOfChildren": 0,
      "MealPlanID": "MP001",
      "Status": "Confirmed",
      "LeadParticipantNationalityCountryID": "ITA"
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
        <h1 className="text-2xl font-bold text-gray-800">Accommodation Booking</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Accommodation Booking' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Accommodation Bookings"
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

export default AccommodationBookingPage;
