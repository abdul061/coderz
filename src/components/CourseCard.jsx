import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaShieldAlt,
  FaUser,
  FaCog,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import { SiMongodb, SiJavascript, SiDjango } from "react-icons/si";

import { ReactComponent as PythonIcon } from "../assets/image/python.svg";
import { ReactComponent as JavaIcon } from "../assets/image/java.svg";

import FullStack from "../assets/image/fullstack.png";
import VSCode from "../assets/image/vscode.jpeg";
import Cprogram from "../assets/image/c-program.png";
import CPP from "../assets/image/cpp.png";
import DSA from "../assets/image/DSA.png";
import SQL from "../assets/image/SQL.png";
import PowerBI from "../assets/image/powerbi.png";
import ML from "../assets/image/ML.png";

/* ===============================
   TECH ICON MAP
================================ */

const techIcons = {
  HTML: <FaHtml5 size={20} color="#e34c26" />,
  CSS: <FaCss3Alt size={20} color="#264de4" />,
  JS: <SiJavascript size={20} color="#f0db4f" />,
  React: <FaReact size={20} color="#61dbfb" />,
  Node: <FaNodeJs size={20} color="#68a063" />,
  MongoDB: <SiMongodb size={20} color="#4db33d" />,
  Django: <SiDjango size={20} color="#0c4b33" />,
  Python: <PythonIcon width={22} height={22} />,
  Java: <JavaIcon width={22} height={22} />,
  VScode: <img src={VSCode} alt="VS Code" className="main-course-img" />,
  C: <img src={Cprogram} alt="C Programming" className="main-course-img" />,
  CPP: <img src={CPP} alt="C++ Programming" className="main-course-img" />,
  DSA: <img src={DSA} alt="DSA" className="main-course-img" />,
  SQL: <img src={SQL} alt="SQL" className="main-course-img" />,
  PowerBI: <img src={PowerBI} alt="PowerBI" className="main-course-img" />
};

/* ===============================
   MAIN COURSE ICON MAP
================================ */

const mainIcons = {
  laptop: <img src={FullStack} alt="Full Stack" className="main-course-img" />,
  python: <PythonIcon width={40} height={40} />,
  java: <JavaIcon width={40} height={40} />,
  DSA: <img src={DSA} alt="DSA" className="main-course-img" />,
  Cprogram: <img src={Cprogram} alt="C Programming" className="main-course-img" />,
  ML: <img src={ML} alt="Machine Learning" className="main-course-img" />
};

/* ===============================
   COMPONENT
================================ */

const CourseCard = ({ course, variant = "course" }) => {
  const navigate = useNavigate();

  return (
<div className={`course-card ${variant === "category" ? "category-card" : ""}`}>

      {/* HEADER */}
      <div className="course-header">

        <div className="icon-wrapper">
          {mainIcons[course.icon]}
        </div>

<div className={`course-info ${variant === "category" ? "category-info" : ""}`}>
  <h3 className={variant === "category" ? "category-title" : ""}>
    {course.title}
  </h3>
          <div className="tech-icons">
            {course.tools?.map((tool, index) => (
              <div key={index} className="tech-icon-box">
                {techIcons[tool]}
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="divider"></div>

      {/* WHO CAN JOIN */}
      <div className="section">
        <div className="section-title">
          <FaUser className="section-icon-cc" />
          <h4>Who Can Join</h4>
        </div>

        <p className="section-content">
          {course.whoCanJoin}
        </p>
      </div>

      <div className="divider"></div>

      {/* WHAT YOU WILL BUILD */}
      <div className="section">
        <div className="section-title">
          <FaCog className="section-icon-cc" />
          <h4>What You Will Build</h4>
        </div>

        <p className="section-content">
          {course.build}
        </p>
      </div>

      {/* ONLY SHOW FOR COURSE PAGE */}
      {variant === "course" && (
        <>
          <div className="divider"></div>

          <div className="section">
            <div className="section-title">
              <FaShieldAlt className="section-icon-cc" />
              <h4>Tools / Technologies</h4>
            </div>

            <p className="section-content">
              {course.tools?.join(", ")}
            </p>
          </div>
        </>
      )}

      {/* BUTTONS */}
      <div className="btn-group">

        {variant === "course" ? (
          <>
            <button className="btn-primary">
              Enroll Now
            </button>

            <button
              className="btn-outline"
              onClick={() => navigate(`/courses/${course.category}/${course.id}`)}
            >
              Syllabus
            </button>
          </>
        ) : (
          <button
            className="btn-primary"
            onClick={() => navigate(`/courses/${course.slug}`)}
          >
            Explore Programs
          </button>
        )}

      </div>

    </div>
  );
};

export default CourseCard;