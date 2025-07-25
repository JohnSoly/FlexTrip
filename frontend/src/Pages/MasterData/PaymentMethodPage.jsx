import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const PaymentMethodPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['PaymentMethodID', 'MethodName'];
  const tableData = [
    {
        "PaymentMethodID": "PM001",
        "MethodName": "Credit Card"
      },
      {
        "PaymentMethodID": "PM002",
        "MethodName": "Debit Card"
      },
      {
        "PaymentMethodID": "PM003",
        "MethodName": "Bank Transfer"
      },
      {
        "PaymentMethodID": "PM004",
        "MethodName": "Cash"
      },
      {
        "PaymentMethodID": "PM005",
        "MethodName": "PayPal"
      },
      {
        "PaymentMethodID": "PM006",
        "MethodName": "Mobile Wallet"
      },
      {
        "PaymentMethodID": "PM007",
        "MethodName": "Cheque"
      },
      {
        "PaymentMethodID": "PM008",
        "MethodName": "Gift Card"
      },
      {
        "PaymentMethodID": "PM009",
        "MethodName": "Cryptocurrency"
      },
      {
        "PaymentMethodID": "PM010",
        "MethodName": "Direct Debit"
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
        <h1 className="text-2xl font-bold text-gray-800">Payment Method</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Payment Method' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Payment Methods"
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

export default PaymentMethodPage;
