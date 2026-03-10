import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EnrollModal from "../components/EnrollModal";

import {
  FaShieldAlt,
  FaUser,
  FaCog,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import { SiMongodb, SiJavascript, SiDjango } from "react-icons/si";

import { ReactComponent as PythonIcon } from "../assets/image/python.svg";
import { ReactComponent as JavaIcon } from "../assets/image/java.svg";

import FullStack from "../assets/image/fullstack.png";
import Cprogram from "../assets/image/c-program.png";
import DSA from "../assets/image/DSA.png";
import ML from "../assets/image/ML.png";
import kidz from '../assets/image/kidz.png'
import coreprogram from '../assets/image/coreprogram.png'
import officeandbusiness from '../assets/image/officeandbussiness.png'
import design from '../assets/image/design.png'
import mobile from '../assets/image/mobile.png'
import codeblock from '../assets/image/code-blockspng.webp'
import mysql from '../assets/image/SQL.png'
import chatgpt from '../assets/image/chtgpt.png'
import mspp from  "../assets/image/mspp.png"
import msxl from '../assets/image/msexcel.png'
import wifi from '../assets/image/inet.png'
import np from '../assets/image/Notepad.png'
import mspaint from '../assets/image/mspaint.png'
import tally from '../assets/image/tally.png'
import powerbi from '../assets/image/powerbi.png'

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
  CodeBlock:(<img src={codeblock} />),
  Idle:<PythonIcon width={40} height={40} />,
  Eclipse:<JavaIcon width={40} height={40} />,
  MySQL : (<img src={mysql} />),
  "Notepad" :(<img src={np} />),
  "MS Paint" :(<img src={mspaint} />),
  "MS Excel":(<img src={msxl} />),
  "MS Powerpoint":(<img src={mspp} />),
  "Chatgpt":(<img src={chatgpt} />),
  "Internet":(<img src={wifi} />),
  "Tally Prime":(<img src={tally} />),
  "PowerBI":(<img src={powerbi}/>)
};

/* ===============================
   CATEGORY ICON MAP
================================ */

const mainIcons = {
  laptop: <img src={FullStack} alt="Full Stack" className="main-course-img" />,
  Python: <PythonIcon width={40} height={40} />,
  java: <JavaIcon width={40} height={40} />,
  DSA: <img src={DSA} alt="DSA" className="main-course-img" />,
  Cprogram: (
    <img src={Cprogram} alt="C Programming" className="main-course-img" />
  ),
  kidz: (<img src={kidz}/>),
  coreprogram: (<img src={coreprogram} />),
  ML: <img src={ML} alt="Machine Learning" className="main-course-img" />,
  officeandbusiness:(<img src={officeandbusiness} />),
  design:(<img src={design} />),
  mobile:(<img src={mobile} />),


};

/* ===============================
   COMPONENT
================================ */

const CourseCard = ({ course, variant = "course" }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`course-card ${variant === "category" ? "category-card" : ""}`}
    >
      {/* HEADER */}
      <div className="course-header">
        {/* Show image ONLY for category cards */}
        {variant === "category" && (
          <div className="icon-wrapper">{mainIcons[course.icon]}</div>
        )}

        <div
          className={`course-info ${variant === "category" ? "category-info" : ""}`}
        >
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

        <p className="section-content">{course.whoCanJoin}</p>
      </div>

      <div className="divider"></div>

      {/* WHAT YOU WILL BUILD */}
      <div className="section">
        <div className="section-title">
          <FaCog className="section-icon-cc" />
          <h4>What You Will Build</h4>
        </div>

        <p className="section-content">{course.build}</p>
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

            <p className="section-content">{course.tools?.join(", ")}</p>
          </div>
        </>
      )}

      {/* BUTTONS */}
      <div className="btn-group">
        {variant === "course" ? (
          <>
            <button className="btn-primary" onClick={() => setShowModal(true)}>
              Enroll Now
            </button>

            <button
              className="btn-outline"
              onClick={() =>
                navigate(`/courses/${course.category}/${course.id}`)
              }
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
      <EnrollModal show={showModal} 
      onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default CourseCard;
