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
        { icon: <FaHotel />, label: "Hotels", path: "/hotel-managment" },
        { icon: <FaUserTie />, label: "Employees", path: "/master-data/Employees"},
        { icon: <FaUsers />, label: "Clients", path: "/master-data/Clients" },
        { icon: <FaUsers />, label: "Customers", path: "/master-data/Customers" },
        { icon: <FaIdCard />, label: "Suppliers", path: "/master-data/Suppliers" },
        { icon: <FaBus />, label: "Transportation Category", path: "/master-data/TransportationCategory" },
        { icon: <FaTruck />, label: "Drivers", path: "/master-data/Drivers" },
        { icon: <FaBuilding />, label: "Company", path: "/master-data/company" },
        { icon: <FaThList />, label: "Room Types", path: "/master-data/Room-type" },
        { icon: < FaUserCog  />, label: "Roles", path: "/master-data/Roles" },
        { icon: < FaUsers />, label: "Teams", path: "/master-data/Teams" },
        { icon: <  FaMoneyBillWave />, label: "Compensation", path: "/master-data/Compensation" },
        { icon: <FaThList />, label: "Room Category", path: "/master-data/RoomCategory" },
        { icon: <FaThList />, label: "Room View", path: "/master-data/RoomView" },
        { icon: < FaUtensils />, label: "Meal Plan", path: "/master-data/MealPlan" },
        { icon: <  FaCity  />, label: "Country & City", path: "/master-data/Country&City" },
        { icon: <  FaBed  />, label: "Room Daily Inventory", path: "/master-data/RoomDailyInventory" },
        { icon: <FaBus />, label: "Vehicle", path: "/master-data/Vehicle" },
        { icon: <FaRoute />, label: "Trip", path: "/master-data/Trip" },
        { icon: <FaBus />, label: "Trip Vehicle Requirement", path: "/master-data/TripVehicleRequirement" },
        { icon: <FaRoute />, label: "Trip Leg", path: "/master-data/TripLeg" },
        { icon: <FaBus />, label: "Trip Vehicle Assignment", path: "/master-data/TripVehicleAssignment" },
        { icon: <  FaCity  />, label: "Activity Type", path: "/master-data/ActivityType" },
        { icon: <FaHotel />, label: "Booking", path: "/master-data/Booking" },
        { icon: <FaHotel />, label: "Visa Booking", path: "/master-data/VisaBooking" },
        { icon: <FaHotel />, label: "Day Use Booking", path: "/master-data/DayUseBooking" },
        { icon: <  FaMoneyBillWave />, label: "Payment Method", path: "/master-data/PaymentMethod" },
        { icon: <  FaMoneyBillWave />, label: "Payment", path: "/master-data/Payment" },
        { icon: <FaHotel />, label: "Booking Participant", path: "/master-data/BookingParticipant" },
        { icon: <FaHotel />, label: "Accommodation Booking", path: "/master-data/AccommodationBooking" },
        { icon: <FaBus />, label: "Transportation Booking", path: "/master-data/TransportationBooking" },
        { icon: <FaHotel />, label: "Booked Leg", path: "/master-data/BookedLeg" },
        { icon: <FaBus />, label: "AdHoc Transportation Booking", path: "/master-data/AdHocTransportationBooking" },
        { icon: <FaBus />, label: "Activity Booking", path: "/master-data/ActivityBooking" },
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
