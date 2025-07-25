import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const AdHocTransportationBookingPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = [  'AdHocTransportBookingID',
  'BookingID',
  'SupplierID',
  'TransportationCategoryID',
  'NumberOfSeats',
  'OriginCityID',
  'DestinationCityID',
  'TravelDateTime',
  'Status'];
  const tableData = [
    {
        "AdHocTransportBookingID": "AHTB001",
        "BookingID": "B001", // Linked to a main booking
        "SupplierID": "S001", // Example Supplier ID
        "TransportationCategoryID": "TC001", // Sedan
        "NumberOfSeats": 3,
        "OriginCityID": "CAI", // Cairo
        "DestinationCityID": "GIZ", // Giza
        "TravelDateTime": "2024-07-28T10:00:00Z",
        "Status": "Confirmed"
      },
      {
        "AdHocTransportBookingID": "AHTB002",
        "BookingID": "B002",
        "SupplierID": "S002",
        "TransportationCategoryID": "TC002", // SUV
        "NumberOfSeats": 5,
        "OriginCityID": "ALX", // Alexandria
        "DestinationCityID": "CAI", // Cairo
        "TravelDateTime": "2024-08-01T14:30:00Z",
        "Status": "Pending"
      },
      {
        "AdHocTransportBookingID": "AHTB003",
        "BookingID": "B003",
        "SupplierID": "S001",
        "TransportationCategoryID": "TC003", // Van
        "NumberOfSeats": 8,
        "OriginCityID": "LUX", // Luxor
        "DestinationCityID": "ASW", // Aswan
        "TravelDateTime": "2024-08-05T07:00:00Z",
        "Status": "Confirmed"
      },
      {
        "AdHocTransportBookingID": "AHTB004",
        "BookingID": "B004",
        "SupplierID": "S003",
        "TransportationCategoryID": "TC001", // Sedan
        "NumberOfSeats": 2,
        "OriginCityID": "SHR", // Sharm El Sheikh
        "DestinationCityID": "SHR", // Local transfer
        "TravelDateTime": "2024-08-10T19:00:00Z",
        "Status": "Confirmed"
      },
      {
        "AdHocTransportBookingID": "AHTB005",
        "BookingID": "B005",
        "SupplierID": "S002",
        "TransportationCategoryID": "TC004", // Minibus
        "NumberOfSeats": 15,
        "OriginCityID": "HUR", // Hurghada
        "DestinationCityID": "HUR", // Local transfer
        "TravelDateTime": "2024-08-12T09:00:00Z",
        "Status": "Confirmed"
      },
      {
        "AdHocTransportBookingID": "AHTB006",
        "BookingID": "B006",
        "SupplierID": "S001",
        "TransportationCategoryID": "TC001",
        "NumberOfSeats": 1,
        "OriginCityID": "CAI",
        "DestinationCityID": "CAI", // Local transfer
        "TravelDateTime": "2024-08-15T11:00:00Z",
        "Status": "Cancelled"
      },
      {
        "AdHocTransportBookingID": "AHTB007",
        "BookingID": "B007",
        "SupplierID": "S003",
        "TransportationCategoryID": "TC002",
        "NumberOfSeats": 4,
        "OriginCityID": "ASW",
        "DestinationCityID": "LUX",
        "TravelDateTime": "2024-08-20T16:00:00Z",
        "Status": "Confirmed"
      },
      {
        "AdHocTransportBookingID": "AHTB008",
        "BookingID": "B008",
        "SupplierID": "S002",
        "TransportationCategoryID": "TC003",
        "NumberOfSeats": 6,
        "OriginCityID": "GIZ",
        "DestinationCityID": "CAI",
        "TravelDateTime": "2024-08-25T08:30:00Z",
        "Status": "Pending"
      },
      {
        "AdHocTransportBookingID": "AHTB009",
        "BookingID": "B009",
        "SupplierID": "S001",
        "TransportationCategoryID": "TC005", // Coach Bus
        "NumberOfSeats": 30,
        "OriginCityID": "CAI",
        "DestinationCityID": "HUR",
        "TravelDateTime": "2024-09-01T05:00:00Z",
        "Status": "Confirmed"
      },
      {
        "AdHocTransportBookingID": "AHTB010",
        "BookingID": "B010",
        "SupplierID": "S003",
        "TransportationCategoryID": "TC001",
        "NumberOfSeats": 2,
        "OriginCityID": "ALX",
        "DestinationCityID": "ALX", // Local transfer
        "TravelDateTime": "2024-09-05T13:00:00Z",
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
        <h1 className="text-2xl font-bold text-gray-800">Ad Hoc Transportation Booking</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Ad Hoc Transportation Booking' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Ad Hoc Transportation Bookings"
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

export default AdHocTransportationBookingPage;
