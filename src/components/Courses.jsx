import React from "react";
import { FaCode, FaPython, FaRobot, FaJava } from "react-icons/fa";
import "../css/CoursesSection.css";
import { useNavigate } from "react-router-dom";

const CoursesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="courses-section">
      <div className="courses-container">

        <h2 className="section-title-course">Our Popular Courses</h2>
        <p className="section-subtitle">
          Upgrade your skills with our most in-demand programs.
        </p>

        <div className="courses-grid">

          <div className="course-card">
            <div className="course-icon">
              <FaCode size={50} color="#2563eb"/>
            </div>
            <h4>Full Stack Web Development</h4>
            <p>Build robust web applications.</p>
            <button className="course-btn" onClick={() => navigate("/courses/WebDevelopment")}>Learn More</button>
          </div>

          <div className="course-card">
            <div className="course-icon">
             <FaPython size={50} color="#3776AB" />
            </div>
            <h4>Python Programming</h4>
            <p>Master Python from basics to advanced.</p>
            <button className="course-btn" onClick={() => navigate("/courses/Python")}>Learn More</button>
          </div>

          <div className="course-card">
            <div className="course-icon">
             <FaRobot size={50} color="#f59e0b" />

            </div>
            <h4>Data Science & AI</h4>
            <p>Learn Machine Learning & Data Analytics.</p>
            <button className="course-btn" onClick={() => navigate("/courses/DataScience")}>Learn More</button>
          </div>

          <div className="course-card">
            <div className="course-icon">
              <FaJava size={50} color="#f89820" />

            </div>
            <h4>Java with Spring Boot</h4>
            <p>Develop powerful Java applications.</p>
            <button className="course-btn" onClick={() => navigate("/courses/Java")}>Learn More</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
