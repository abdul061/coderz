import { Fragment } from "react";
import Home from "./Pages/Home";
import Navbar from "./Pages/component/nav";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./Pages/About";
import Footer from "./Pages/component/footer";
import Course from "./Pages/Course";
import Contact from "./Pages/Contact";
import CourseDetails from './Pages/courseDetails'; 
import ScrollToTop from "./Pages/component/ScrollToTop";
import FooterLinks from "./Pages/component/FooterLinks";
import ChatIcon from "./Pages/component/Chat";
import Internship from "./Pages/Intern"
import StudentDetails from "./Pages/StudentDetails";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/internship/:id" element={<StudentDetails />} />
      </Routes>

      {/* Conditionally render Footer based on the current route */}
      {location.pathname !== '/contact' && <Footer />}
      <FooterLinks />
      <ChatIcon />
    </Fragment>
  );
}

export default App;
