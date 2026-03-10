import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";   
import LOGO from "../assets/image/Logo.jpeg";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="spark-brand w-inline-block">
                   <img
                   className="logo"
                    loading="lazy"
                    src={LOGO}
                    alt="Coderz Academy Logo"
                  /></div>

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

        <li className="mobile-btn">
          <Link to="/contact">
            <button className="btn-primary">Get in Touch</button>
          </Link>
        </li>
      </ul>

      <Link to="/contact" className="desktop-btn">
        <button className="btn-primary">Get in Touch</button>
      </Link>
    </nav>
  );
};

export default Navbar;
