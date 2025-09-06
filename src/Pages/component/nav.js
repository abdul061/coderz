import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import '../css/nav.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  // Function to toggle navbar visibility
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // Close navbar when location (route) changes
  useEffect(() => {
    setShowNavbar(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={`${process.env.REACT_APP_PUBLIC}/assests/img/Logo.jpeg`} height={50} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger toggled={showNavbar} toggle={setShowNavbar} />
        </div>
        <div className={`nav-elements ${showNavbar ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowNavbar(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setShowNavbar(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/course" onClick={() => setShowNavbar(false)}>Course</NavLink>
            </li>
            <li>
              <NavLink to="/internship" onClick={() => setShowNavbar(false)}>Certificate</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setShowNavbar(false)}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
