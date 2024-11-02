import React from "react";
import '../css/course.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-wid="d0f4f9a2-f940-5462-6e29-953966fc44c9"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="spark-square-menu-with-links-2 w-nav"
    >
      <div className="spark-square-menu-inner-2">
        <NavLink to="/" className="spark-brand-logo-2 w-nav-brand">
          <img
            loading="lazy"
            height="50"
            alt=""
            src="https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238b1eb19c1555668cadcc_M.jpeg"
          />
        </NavLink>
        <nav role="navigation" className="spark-nav-menu-2 w-nav-menu">
          <NavLink 
            to="/" 
            className="spark-nav-link-2 w-nav-link" 
            activeClassName="active" // This will add the 'active' class when matched
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className="spark-nav-link-2 w-nav-link" 
            activeClassName="active"
          >
            About
          </NavLink>
          <NavLink 
            to="/course" 
            className="spark-nav-link-2 w-nav-link" 
            activeClassName="active"
          >
            Course
          </NavLink>
          <NavLink 
            to="/contact" 
            className="spark-nav-link-2 w-nav-link" 
            activeClassName="active"
          >
            Contact
          </NavLink>
          <NavLink 
            to="/contact" 
            className="spark-nav-link spark-button w-nav-link" 
            activeClassName="active"
          >
            Connect Us
          </NavLink>
        </nav>
        <div
          data-ix="simple-menu-button"
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
