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
  FaBars
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    {
      section: "Master Data",
      items: [
        { icon: <FaHotel />, label: "Hotels" },
        { icon: <FaUserTie />, label: "Employees" },
        { icon: <FaUsers />, label: "Users" },
        { icon: <FaIdCard />, label: "Suppliers" },
        { icon: <FaBus />, label: "Transportation" },
        { icon: <FaTruck />, label: "Drivers" },
      ],
    },
    {
      section: "Tools",
      items: [
        { icon: <FaEnvelope />, label: "Messages" },
        { icon: <FaCalendarAlt />, label: "Calendar" },
        { icon: <FaFileAlt />, label: "Files & Library" },
        { icon: <FaFileInvoice />, label: "Invoice Manager" },
      ],
    },
    {
      section: "Manage",
      items: [
        { icon: <FaUserFriends />, label: "Team" },
        { icon: <FaUserCircle />, label: "Clients" },
        { icon: <FaPuzzlePiece />, label: "Integration" },
      ],
    },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
     
      <div className="sidebar-top">
        <img src="/logo.png" alt="Logo" className="logo" />
        <button onClick={toggleSidebar} className="toggle-btn">
          <FaBars />
        </button>
      </div>

    
      <div className="sidebar-content">
        {menuItems.map((section, index) => (
          <div key={index}>
            {!collapsed && <h3 className="section-title">{section.section}</h3>}
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>
                  {item.icon}
                  {!collapsed && <span>{item.label}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
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
