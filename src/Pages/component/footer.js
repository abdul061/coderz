import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="spark-footer">
      <div className="spark-section-4 spark-shortened">
        <div className="spark-container-3 spark-centered-content">
          <Link
            to="#"
            className="spark-brand spark-margin-bottom-32px w-inline-block"
          >
            <img
              loading="lazy"
              src={`${process.env.REACT_APP_PUBLIC}/assests/img/Logo.jpeg`} // Corrected 'assests' to 'assets'
              alt="Coderz Academy Logo"
            />
          </Link>
          <div className="spark-flexed-row-of-links spark-centered-row">
            <Link to="/" className="spark-button-2 spark-light-button w-button">
              Home
            </Link>
            <Link to="/about" className="spark-button-2 spark-light-button w-button">
              About
            </Link>
            <Link to="/course" className="spark-button-2 spark-light-button w-button">
              Course
            </Link>
            <Link to="/contact" className="spark-button-2 spark-light-button w-button">
              Contact
            </Link>
            <Link to="/contact" className="spark-button-2 spark-light-button w-button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
