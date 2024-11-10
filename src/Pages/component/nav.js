import React, { useState } from "react";
import "../css/course.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // State to handle menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-wid="d0f4f9a2-f940-5462-6e29-953966fc44c9"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={`spark-square-menu-with-links-2 w-nav ${menuOpen ? "open" : ""}`}
    >
      <div className="spark-square-menu-inner-2">
        <NavLink to="/" className="spark-brand-logo-2 w-nav-brand">
          <img
            loading="lazy"
            height="50"
            alt=""
            src={`${process.env.REACT_APP_PUBLIC}/assests/img/Logo.jpeg`}
          />
        </NavLink>
        <nav role="navigation" className={`spark-nav-menu-2 w-nav-menu ${menuOpen ? "show" : ""}`}>
          <NavLink to="/" className="spark-nav-link-2 w-nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" className="spark-nav-link-2 w-nav-link" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/course" className="spark-nav-link-2 w-nav-link" activeClassName="active">
            Course
          </NavLink>
          <NavLink to="/contact" className="spark-nav-link-2 w-nav-link" activeClassName="active">
            Contact
          </NavLink>
          <NavLink to="/contact" className="spark-nav-link spark-button w-nav-link" activeClassName="active">
            Contact Us
          </NavLink>
        </nav>
        <div
          onClick={toggleMenu}
          className="spark-simple-menu-button-2 w-nav-button"
        >
          <div className="spark-line-14 spark-simple-line"></div>
          <div className="spark-line-13 spark-simple-line"></div>
          <div className="spark-line-12 spark-simple-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
