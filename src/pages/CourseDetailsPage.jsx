import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/coursesData";
import {
  FaCode,
  FaLaptopCode,
  FaBookOpen,
  FaLayerGroup
} from "react-icons/fa";
import "../CourseDetails.css";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === id);

  if (!course) return <h2 style={{ padding: "100px" }}>Course Not Found</h2>;

  return (
    <div className="details-wrapper">

      {/* LEFT SIDEBAR */}
      <div className="details-sidebar">

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="sidebar-title">
          <FaLaptopCode className="sidebar-icon" />
          <h2>{course.title}</h2>
        </div>

        <p className="duration">{course.duration}</p>

        <div className="info-box">
          <h4>
            <FaBookOpen /> Who Can Join
          </h4>
          <p>{course.whoCanJoin}</p>
        </div>

        <div className="info-box">
          <h4>
            <FaCode /> What You Will Build
          </h4>
          <p>{course.build}</p>
        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="details-content">

        <h2 className="curriculum-title">Course Curriculum</h2>

        {course.syllabus.map((module, index) => (
          <div key={index} className="timeline-item">

            <div className="timeline-number">
              {index + 1}
            </div>

            <div className="timeline-content">
              <h3>
                <FaLayerGroup className="module-icon" />
                {module.title}
              </h3>

              <ul>
                {module.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default CourseDetailsPage;
