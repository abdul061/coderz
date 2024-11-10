import { Fragment } from "react";
import Home from "./Pages/Home";
import Navbar from "./Pages/component/nav";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Footer from "./Pages/component/footer";
import Course from "./Pages/Course";
import Contact from "./Pages/Contact";
import CourseDetails from './Pages/courseDetails'; 
import ScrollToTop from "./Pages/component/ScrollToTop";
import FooterLinks from "./Pages/component/FooterLinks";
function App() {
  const location = useLocation();
  return (
    <Router >
      <ScrollToTop />
      <Navbar/> {/* Navigation component */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {location.pathname !== "/contact" && <Footer />} {/* Show footer only if not on contact page */}
      <FooterLinks />
    </Router>
  );
}

export default App;
