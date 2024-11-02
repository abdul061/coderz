import React from "react";
import '../css/course.css'
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
        <a href="#" className="spark-brand-logo-2 w-nav-brand">
          <img
            loading="lazy"
            height="50"
            alt=""
            src="/assests/img/Logo.jpeg" // Corrected path here
          />
        </a>
        <nav role="navigation" className="spark-nav-menu-2 w-nav-menu">
          <a href="/" className="spark-nav-link-2 w-nav-link">
            Home
          </a>
          <a href="/about" className="spark-nav-link-2 w-nav-link">
            About
          </a>
          <a href="/course" className="spark-nav-link-2 w-nav-link">
            Course
          </a>
          <a href="/contact" className="spark-nav-link-2 w-nav-link">
            Contact
          </a>
          <a href="/contact" className="spark-nav-link-2 spark-button w-nav-link">
            Contact Us
          </a>
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
