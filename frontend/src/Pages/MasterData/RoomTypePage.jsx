import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const RoomTypePage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  
  const tableHeaders = ['RoomTypeID', 'TypeName', 'TypeDescription'];
  const tableData = [
    {
      'RoomTypeID': 'RT001',
      'TypeName': 'Standard Single',
      'TypeDescription': 'A cozy room with one single bed, suitable for a solo traveler.'
    },
    {
      'RoomTypeID': 'RT002',
      'TypeName': 'Standard Double',
      'TypeDescription': 'A comfortable room with one double bed, ideal for couples.'
    },
    {
      'RoomTypeID': 'RT003',
      'TypeName': 'Twin Room',
      'TypeDescription': 'A spacious room with two single beds, perfect for friends or colleagues.'
    },
    {
      'RoomTypeID': 'RT004',
      'TypeName': 'Deluxe King',
      'TypeDescription': 'An elegant room featuring a king-size bed and premium amenities.'
    },
    {
      'RoomTypeID': 'RT005',
      'TypeName': 'Executive Suite',
      'TypeDescription': 'A luxurious suite with a separate living area, perfect for business travelers or extended stays.'
    },
    {
      'RoomTypeID': 'RT006',
      'TypeName': 'Family Room',
      'TypeDescription': 'A large room designed to accommodate families, often with multiple beds or a sofa bed.'
    },
    {
      'RoomTypeID': 'RT007',
      'TypeName': 'Presidential Suite',
      'TypeDescription': 'The most exclusive accommodation with multiple rooms, lavish furnishings, and panoramic views.'
    },
    {
      'RoomTypeID': 'RT008',
      'TypeName': 'Accessible Room',
      'TypeDescription': 'A room equipped with features for guests with disabilities, including wider doorways and grab bars.'
    },
    {
      'RoomTypeID': 'RT009',
      'TypeName': 'Studio Apartment',
      'TypeDescription': 'A self-contained unit with a combined living/sleeping area and a kitchenette.'
    },
    {
      'RoomTypeID': 'RT010',
      'TypeName': 'Penthouse Suite',
      'TypeDescription': 'A top-floor suite offering expansive space, premium amenities, and stunning views.'
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
        <h1 className="text-2xl font-bold text-gray-800">Room Types</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Room Types' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Room Types"
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

export default RoomTypePage;
