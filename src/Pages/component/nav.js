import React from "react";
import '../css/course.css'
import { Link } from "react-router-dom";
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
        <Link href="#" className="spark-brand-logo-2 w-nav-brand">
          <img
            loading="lazy"
            height="50"
            alt=""
            src="https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238b1eb19c1555668cadcc_M.jpeg" // Corrected path here
          />
        </Link>
        <nav role="navigation" className="spark-nav-menu-2 w-nav-menu">
          <Link href="/" className="spark-nav-link-2 w-nav-link">
            Home
          </Link>
          <Link href="/about" className="spark-nav-link-2 w-nav-link">
            About
          </Link>
          <Link href="/course" className="spark-nav-link-2 w-nav-link">
            Course
          </Link>
          <Link href="/contact" className="spark-nav-link-2 w-nav-link">
            Contact
          </Link>
          <Link href="/contact" className="spark-nav-link-2 spark-button w-nav-link">
            Contact Us
          </Link>
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
