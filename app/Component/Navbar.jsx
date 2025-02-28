"use client";

import { useState } from "react";
import "../styles/navbar.css"; // Custom styles

const Navbar = () => {
  // State for each dropdown
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to handle dropdown state
  const handleDropdown = (index) => {
    setOpenDropdown(index);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm position-fixed top-0 w-100 py-3 mb-5 z-3">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1733818437/logo_-_sx2_aiasw2.png"
            alt="Sixthstar Technologies"
            className="brand-logo"
          />
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mx-3">
            <li className="nav-item px-3">
              <a className="nav-link" href="#">Domain</a>
            </li>

            {[
              { name: "Servers", links: ["Zimbra Mail", "Carbonio Mail", "G Suite", "Office 365", "cPanel Hosting in Chennai"] },
              { name: "Mail Services", links: ["Zimbra Mail", "Carbonio Mail", "G Suite", "Office 365", "cPanel Hosting in Chennai"] },
              { name: "Security", links: ["SSL Certificates", "Firewall Protection", "DDoS Protection"] },
              { name: "Services", links: ["Web Hosting", "Cloud Hosting", "VPS Servers"] },
              { name: "Products", links: ["Dedicated Servers", "Reseller Hosting", "Email Hosting"] },
            ].map((menu, index) => (
              <li
                key={index}
                className="nav-item dropdown px-3"
                onMouseEnter={() => handleDropdown(index)}
                onMouseLeave={() => handleDropdown(null)}
              >
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  {menu.name}
                </a>
                {openDropdown === index && (
                  <ul className="dropdown-menu show">
                    {menu.links.map((link, i) => (
                      <li key={i}>
                        <a className="dropdown-item" href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="nav-item px-3">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
