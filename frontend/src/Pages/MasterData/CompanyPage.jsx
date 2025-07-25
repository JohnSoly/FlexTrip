import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const CompanyPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['CompanyID', 'CustomerID', 'SupplierID ', 'ContactName', 'ContactPhone'];
  const tableData = [
    {
      CompanyID: 'Egypt',
      CustomerID: 'Cairo',
      SupplierID: 'Mar 10,2023',
      ContactName: { value: 'Grand Nile Tower', highlight: 'Grand Nile Tower', type: 'link' },
      ContactPhone: '$150',
    },
    {
      CompanyID: 'Egypt',
      CustomerID: 'Luxor',
      SupplierID: 'Feb 01,2023',
      ContactName: { value: 'Sofitel Winter Palace Luxor', highlight: 'Sofitel Winter Palace Luxor', type: 'link' },
      ContactPhone: '$220',
    },
    {
      CompanyID: 'Egypt',
      CustomerID: 'Hurghada',
      SupplierID: 'Jan 20,2023',
      ContactName: { value: 'Steigenberger Al Dau Beach Hotel', highlight: 'Steigenberger Al Dau Beach Hotel', type: 'link' },
      ContactPhone: '$180',
    },
    {
      CompanyID: 'Egypt',
      CustomerID: 'Cairo',
      SupplierID: 'Dec 05,2022',
      ContactName: { value: 'Four Seasons Hotel Cairo at Nile Plaza', highlight: 'Four Seasons Hotel Cairo', type: 'link' },
      ContactPhone: '$300',
    },
    {
      CompanyID: 'Egypt',
      CustomerID: 'Alexandria',
      SupplierID: 'Nov 15,2022',
      ContactName: { value: 'Hilton Alexandria Green Plaza', highlight: 'Hilton Alexandria', type: 'link' },
      ContactPhone: '$120',
    },
    {
      CompanyID: 'Egypt',
      CustomerID: 'Aswan',
      SupplierID: 'Oct 28,2022',
      ContactName: { value: 'Mövenpick Resort Aswan', highlight: 'Mövenpick Resort Aswan', type: 'link' },
      ContactPhone: '$160',
    },
    {
      CompanyID: 'Egypt',
      CustomerID: 'Sharm El Sheikh',
      SupplierID: 'Sep 01,2022',
      ContactName: { value: 'Rixos Sharm El Sheikh', highlight: 'Rixos Sharm El Sheikh', type: 'link' },
      ContactPhone: '$250',
    },
    {
      CompanyID: 'Egypt',
      CustomerID: 'Giza',
      SupplierID: 'Aug 12,2022',
      ContactName: { value: 'Marriott Mena House, Cairo', highlight: 'Marriott Mena House', type: 'link' },
      ContactPhone: '$280',
    },
    {
      CompanyID: 'Egypt',
      CustomerID: 'Hurghada',
      SupplierID: 'Jul 05,2022',
      ContactName: { value: 'Jaz Aquamarine Resort', highlight: 'Jaz Aquamarine Resort', type: 'link' },
      ContactPhone: '$170',
    },
    {
      CompanyID: 'Egypt',
      CustomerID: 'Hurghada',
      SupplierID: 'Jun 20,2022',
      ContactName: { value: 'The Oberoi Sahl Hasheesh', highlight: 'The Oberoi Sahl Hasheesh', type: 'link' },
      ContactPhone: '$350',
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
        <h1 className="text-2xl font-bold text-gray-800">Companies</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Company' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Companies"
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

export default CompanyPage;
