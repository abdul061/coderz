import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">{"</>"} Coderz Academy</div>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li className={location.pathname === "/courses" ? "active" : ""}>
          <Link to="/courses">Courses</Link>
        </li>

        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About Us</Link>
        </li>

        <li className={location.pathname === "/internship" ? "active" : ""}>
          <Link to="/internship">Certificate</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>

        {/* Mobile Button */}
        <li className="mobile-btn">
          <Link to="/contact">
            <button className="btn-primary">Get in Touch</button>
          </Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <Link to="/contact" className="desktop-btn">
        <button className="btn-primary">Get in Touch</button>
      </Link>
    </nav>
  );
};

export default Navbar;
