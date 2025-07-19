import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const HotelManagment = () => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Example data for the table with hotels in Egypt
  const tableHeaders = ['HOTEL NAME', 'PROVIDER', 'RATING', 'COUNTRY', 'CITY', 'DATE'];
  const tableData = [
    {
      'HOTEL NAME': { value: 'Grand Nile Tower', highlight: 'Grand Nile Tower', type: 'link' },
      'PROVIDER': 'Mar 10,2023', 'RATING': '$150', 'COUNTRY': 'Egypt', 'CITY': 'Cairo', 'DATE': 'Mar 10,2023'
    },
    {
      'HOTEL NAME': { value: 'Sofitel Winter Palace Luxor', highlight: 'Sofitel Winter Palace Luxor', type: 'link' },
      'PROVIDER': 'Feb 01,2023', 'RATING': '$220', 'COUNTRY': 'Egypt', 'CITY': 'Luxor', 'DATE': 'Feb 01,2023'
    },
    {
      'HOTEL NAME': { value: 'Steigenberger Al Dau Beach Hotel', highlight: 'Steigenberger Al Dau Beach Hotel', type: 'link' },
      'PROVIDER': 'Jan 20,2023', 'RATING': '$180', 'COUNTRY': 'Egypt', 'CITY': 'Hurghada', 'DATE': 'Jan 20,2023'
    },
    {
      'HOTEL NAME': { value: 'Four Seasons Hotel Cairo at Nile Plaza', highlight: 'Four Seasons Hotel Cairo', type: 'link' },
      'PROVIDER': 'Dec 05,2022', 'RATING': '$300', 'COUNTRY': 'Egypt', 'CITY': 'Cairo', 'DATE': 'Dec 05,2022'
    },
    {
      'HOTEL NAME': { value: 'Hilton Alexandria Green Plaza', highlight: 'Hilton Alexandria', type: 'link' },
      'PROVIDER': 'Nov 15,2022', 'RATING': '$120', 'COUNTRY': 'Egypt', 'CITY': 'Alexandria', 'DATE': 'Nov 15,2022'
    },
    {
      'HOTEL NAME': { value: 'Mövenpick Resort Aswan', highlight: 'Mövenpick Resort Aswan', type: 'link' },
      'PROVIDER': 'Oct 28,2022', 'RATING': '$160', 'COUNTRY': 'Egypt', 'CITY': 'Aswan', 'DATE': 'Oct 28,2022'
    },
    {
      'HOTEL NAME': { value: 'Rixos Sharm El Sheikh', highlight: 'Rixos Sharm El Sheikh', type: 'link' },
      'PROVIDER': 'Sep 01,2022', 'RATING': '$250', 'COUNTRY': 'Egypt', 'CITY': 'Sharm El Sheikh', 'DATE': 'Sep 01,2022'
    },
    {
      'HOTEL NAME': { value: 'Marriott Mena House, Cairo', highlight: 'Marriott Mena House', type: 'link' },
      'PROVIDER': 'Aug 12,2022', 'RATING': '$280', 'COUNTRY': 'Egypt', 'CITY': 'Giza', 'DATE': 'Aug 12,2022'
    },
    {
      'HOTEL NAME': { value: 'Jaz Aquamarine Resort', highlight: 'Jaz Aquamarine Resort', type: 'link' },
      'PROVIDER': 'Jul 05,2022', 'RATING': '$170', 'COUNTRY': 'Egypt', 'CITY': 'Hurghada', 'DATE': 'Jul 05,2022'
    },
    {
      'HOTEL NAME': { value: 'The Oberoi Sahl Hasheesh', highlight: 'The Oberoi Sahl Hasheesh', type: 'link' },
      'PROVIDER': 'Jun 20,2022', 'RATING': '$350', 'COUNTRY': 'Egypt', 'CITY': 'Hurghada', 'DATE': 'Jun 20,2022'
    },
    
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
    console.log("Add button clicked");
    // add button logic
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Changing to page:", page);
    //  fetch data for the new page here
  };

  return (
    <div className="flex h-screen font-inter">
      <Sidebar />

      <div className="flex-1 p-8 bg-white">
        <h1 className="text-2xl font-bold text-gray-800">Hotel Management</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Hotels' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Hotels"
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

export default HotelManagment;
