import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/BreadCrumb";
import SearchFilterAdd from "../../components/SearchFilterAdd";
import DynamicTable from "../../components/Table";
import Pagination from "../../components/Pagination";

const PaymentPage = () => {
  const navigate = useNavigate();
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 1000;
  const itemsPerPage = 9;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const tableHeaders = ['PaymentID', 'BookingID', 'PaymentDate','Amount','PaymentMethodID ','Currency','AttachmentURL'];
  const tableData = [
    {
        "PaymentID": "PAY001",
        "BookingID": "B001", // Linked to a main booking
        "PaymentDate": "2023-01-15",
        "Amount": 1500.00,
        "PaymentMethodID ": "PM001", // Credit Card
        "Currency": "USD",
        "AttachmentURL": "https://example.com/attachments/pay001.pdf"
      },
      {
        "PaymentID": "PAY002",
        "BookingID": "B002",
        "PaymentDate": "2023-01-20",
        "Amount": 1000.00,
        "PaymentMethodID ": "PM003", // Bank Transfer
        "Currency": "EUR",
        "AttachmentURL": null // No attachment for this one
      },
      {
        "PaymentID": "PAY003",
        "BookingID": "B003",
        "PaymentDate": "2023-02-01",
        "Amount": 800.00,
        "PaymentMethodID ": "PM004", // Cash
        "Currency": "EGP",
        "AttachmentURL": "https://example.com/attachments/pay003_receipt.jpg"
      },
      {
        "PaymentID": "PAY004",
        "BookingID": "B004",
        "PaymentDate": "2023-02-10",
        "Amount": 3000.00,
        "PaymentMethodID ": "PM001", // Credit Card
        "Currency": "USD",
        "AttachmentURL": "https://example.com/attachments/pay004.pdf"
      },
      {
        "PaymentID": "PAY005",
        "BookingID": "B005",
        "PaymentDate": "2023-02-15",
        "Amount": 1200.75,
        "PaymentMethodID ": "PM002", // Debit Card
        "Currency": "GBP",
        "AttachmentURL": null
      },
      {
        "PaymentID": "PAY006",
        "BookingID": "B006",
        "PaymentDate": "2023-03-01",
        "Amount": 500.00,
        "PaymentMethodID ": "PM005", // PayPal
        "Currency": "USD",
        "AttachmentURL": "https://example.com/attachments/pay006_paypal.pdf"
      },
      {
        "PaymentID": "PAY007",
        "BookingID": "B007",
        "PaymentDate": "2023-03-05",
        "Amount": 2500.00,
        "PaymentMethodID ": "PM003", // Bank Transfer
        "Currency": "EUR",
        "AttachmentURL": null
      },
      {
        "PaymentID": "PAY008",
        "BookingID": "B008",
        "PaymentDate": "2023-03-10",
        "Amount": 950.00,
        "PaymentMethodID ": "PM001", // Credit Card
        "Currency": "EGP",
        "AttachmentURL": "https://example.com/attachments/pay008.pdf"
      },
      {
        "PaymentID": "PAY009",
        "BookingID": "B009",
        "PaymentDate": "2023-03-15",
        "Amount": 2000.00,
        "PaymentMethodID ": "PM006", // Mobile Wallet
        "Currency": "USD",
        "AttachmentURL": null
      },
      {
        "PaymentID": "PAY010",
        "BookingID": "B010",
        "PaymentDate": "2023-03-20",
        "Amount": 1750.00,
        "PaymentMethodID ": "PM002", // Debit Card
        "Currency": "GBP",
        "AttachmentURL": "https://example.com/attachments/pay010.jpg"
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
        <h1 className="text-2xl font-bold text-gray-800">Payment</h1>

    
        <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: 'Payment' }]} />
        <div className="bg-white p-4 rounded-lg shadow-md">
       
        <SearchFilterAdd
          title="All Payments"
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

export default PaymentPage;
