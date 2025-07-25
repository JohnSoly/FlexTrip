import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const SupplierPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['SupplierID', 'Name', 'ContactInfo'];
  const tableData = [
    {
        "SupplierID": "S001",
        "Name": "Global Tech Solutions",
        "ContactInfo": "Email: info@globaltech.com, Phone: +1-555-123-4567"
      },
      {
        "SupplierID": "S002",
        "Name": "Eco-Friendly Supplies",
        "ContactInfo": "Email: sales@ecofriendly.co, Phone: +44-20-7946-0123"
      },
      {
        "SupplierID": "S003",
        "Name": "Prime Manufacturing Inc.",
        "ContactInfo": "Email: contact@prime-mfg.net, Phone: +81-3-1234-5678"
      },
      {
        "SupplierID": "S004",
        "Name": "AgriHarvest Distributors",
        "ContactInfo": "Email: support@agriharvest.com, Phone: +61-2-9876-5432"
      },
      {
        "SupplierID": "S005",
        "Name": "MediCare Pharma",
        "ContactInfo": "Email: orders@medicare.org, Phone: +49-30-98765432"
      },
      {
        "SupplierID": "S006",
        "Name": "Fashion Forward Textiles",
        "ContactInfo": "Email: hello@fashionforward.com, Phone: +33-1-2345-6789"
      },
      {
        "SupplierID": "S007",
        "Name": "Digital Innovations Ltd.",
        "ContactInfo": "Email: sales@digitalinnovations.io, Phone: +971-4-555-1122"
      },
      {
        "SupplierID": "S008",
        "Name": "Construction Materials Co.",
        "ContactInfo": "Email: info@constructionmat.com, Phone: +20-2-2345-6789"
      },
      {
        "SupplierID": "S009",
        "Name": "Food & Beverage Wholesalers",
        "ContactInfo": "Email: contact@foodbev.net, Phone: +39-06-12345678"
      },
      {
        "SupplierID": "S010",
        "Name": "Artisan Crafts Studio",
        "ContactInfo": "Email: orders@artisan-crafts.com, Phone: +52-55-1234-5678"
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
        <h1 className="text-2xl font-bold text-gray-800">Suppliers</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Suppliers' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Suppliers"
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

export default SupplierPage;
