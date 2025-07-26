import React, { useState } from "react";
import {
  FaHotel,
  FaUserTie,
  FaUsers,
  FaTruck,
  FaBus,
  FaIdCard,
  FaEnvelope,
  FaCalendarAlt,
  FaFileAlt,
  FaFileInvoice,
  FaUserFriends,
  FaUserCircle,
  FaPuzzlePiece,
  FaThLarge,
  FaSearch,
  FaBars,
  FaBuilding,
  FaThList,
  FaUserCog ,
  FaMoneyBillWave,
  FaUtensils,
  FaCity ,
  FaBed,
  FaRoute,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    {
      section: "Master Data",
      items: [
        { icon: <FaHotel className="masterdata-icon"/>, label: "Hotels", path: "/hotel-managment" },
        { icon: <FaUserTie className="masterdata-icon"/>, label: "Employees", path: "/master-data/Employees"},
        { icon: <FaUsers className="masterdata-icon"/>, label: "Clients", path: "/master-data/Clients" },
        { icon: <FaUsers className="masterdata-icon"/>, label: "Customers", path: "/master-data/Customers" },
        { icon: <FaIdCard className="masterdata-icon"/>, label: "Suppliers", path: "/master-data/Suppliers" },
        { icon: <FaBus className="masterdata-icon"/>, label: "Transportation Category", path: "/master-data/TransportationCategory" },
        { icon: <FaTruck className="masterdata-icon"/>, label: "Drivers", path: "/master-data/Drivers" },
        { icon: <FaBuilding className="masterdata-icon"/>, label: "Company", path: "/master-data/company" },
        { icon: <FaThList className="masterdata-icon"/>, label: "Room Types", path: "/master-data/Room-type" },
        { icon: < FaUserCog  className="masterdata-icon"/>, label: "Roles", path: "/master-data/Roles" },
        { icon: < FaUsers className="masterdata-icon"/>, label: "Teams", path: "/master-data/Teams" },
        { icon: <  FaMoneyBillWave className="masterdata-icon" />, label: "Compensation", path: "/master-data/Compensation" },
        { icon: <FaThList className="masterdata-icon" />, label: "Room Category", path: "/master-data/RoomCategory" },
        { icon: <FaThList className="masterdata-icon"/>, label: "Room View", path: "/master-data/RoomView" },
        { icon: < FaUtensils className="masterdata-icon"/>, label: "Meal Plan", path: "/master-data/MealPlan" },
        { icon: <  FaCity  className="masterdata-icon"/>, label: "Country & City", path: "/master-data/Country&City" },
        { icon: <  FaBed  className="masterdata-icon"/>, label: "Room Daily Inventory", path: "/master-data/RoomDailyInventory" },
        { icon: <FaBus className="masterdata-icon"/>, label: "Vehicle", path: "/master-data/Vehicle" },
        { icon: <FaRoute className="masterdata-icon"/>, label: "Trip", path: "/master-data/Trip" },
        { icon: <FaBus className="masterdata-icon"/>, label: "Trip Vehicle Requirement", path: "/master-data/TripVehicleRequirement" },
        { icon: <FaRoute className="masterdata-icon"/>, label: "Trip Leg", path: "/master-data/TripLeg" },
        { icon: <FaBus className="masterdata-icon"/>, label: "Trip Vehicle Assignment", path: "/master-data/TripVehicleAssignment" },
        { icon: <  FaCity  className="masterdata-icon"/>, label: "Activity Type", path: "/master-data/ActivityType" },
        { icon: <FaHotel className="masterdata-icon"/>, label: "Booking", path: "/master-data/Booking" },
        { icon: <FaHotel className="masterdata-icon"/>, label: "Visa Booking", path: "/master-data/VisaBooking" },
        { icon: <FaHotel className="masterdata-icon"/>, label: "Day Use Booking", path: "/master-data/DayUseBooking" },
        { icon: <  FaMoneyBillWave className="masterdata-icon"/>, label: "Payment Method", path: "/master-data/PaymentMethod" },
        { icon: <  FaMoneyBillWave className="masterdata-icon"/>, label: "Payment", path: "/master-data/Payment" },
        { icon: <FaHotel className="masterdata-icon"/>, label: "Booking Participant", path: "/master-data/BookingParticipant" },
        { icon: <FaHotel className="masterdata-icon"/>, label: "Accommodation Booking", path: "/master-data/AccommodationBooking" },
        { icon: <FaBus className="masterdata-icon"/>, label: "Transportation Booking", path: "/master-data/TransportationBooking" },
        { icon: <FaHotel className="masterdata-icon"/>, label: "Booked Leg", path: "/master-data/BookedLeg" },
        { icon: <FaBus className="masterdata-icon"/>, label: "AdHoc Transportation Booking", path: "/master-data/AdHocTransportationBooking" },
        { icon: <FaBus className="masterdata-icon"/>, label: "Activity Booking", path: "/master-data/ActivityBooking" },
      ],
    },
    {
      section: "Tools",
      items: [
        { icon: <FaEnvelope />, label: "Messages", path: "/tools/messages" },
        { icon: <FaCalendarAlt />, label: "Calendar", path: "/tools/calendar" },
        { icon: <FaFileAlt />, label: "Files & Library", path: "/tools/files" },
        { icon: <FaFileInvoice />, label: "Invoice Manager", path: "/tools/invoices" },
      ],
    },
    {
      section: "Manage",
      items: [
        { icon: <FaUserFriends />, label: "Team", path: "/manage/team" },
        { icon: <FaUserCircle />, label: "Clients", path: "/manage/clients" },
        { icon: <FaPuzzlePiece />, label: "Integration", path: "/manage/integration" },
      ],
    },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Top section */}
      <div className="sidebar-top">
        <img src="/logo.png" alt="Logo" className="logo" />
        <button onClick={toggleSidebar} className="toggle-btn">
          <FaBars />
        </button>
      </div>

      {/* Sidebar content */}
      <div className="sidebar-content">
        {menuItems.map((section, index) => (
          <div key={index}>
            {!collapsed && <h3 className="section-title">{section.section}</h3>}
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className={location.pathname === item.path ? "active" : ""}>
                  <Link to={item.path} className="sidebar-link">
                    {item.icon}
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Sidebar footer */}
      <div className="sidebar-footer">
        <div className="footer-icons">
          <FaThLarge />
          <FaSearch />
        </div>
        <img src="/avatar.jpg" alt="Profile" className="avatar" />
      </div>
    </div>
  );
};

export default Sidebar;
