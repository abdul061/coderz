import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import About from "./pages/About.js";
import Footer from "./components/Footer";
import FooterLinks from "./components/FooterLinks";
import { Fragment } from "react";
import ContactPage from "./pages/ContactPage";
import Internship from "./pages/Intern";
import StudentDetails from "./pages/StudentDetails";
import ScrollToTop from "./components/ScrollToTop";
import CategoryCourses from "./components/CategoryCourses";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";

function App() {
  return (
    <Router>
      <WhatsAppFloat />
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:category/:id" element={<CourseDetailsPage />} />
        <Route path="/courses/:category" element={<CategoryCourses />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/internship/:id" element={<StudentDetails />} />
      </Routes>

      {location.pathname !== "/contact" && <Footer />}
      <FooterLinks />
    </Fragment>
  );
}

export default App;