import React from "react";
import "../About.css";

import about1 from "../assets/image/about1.jpg";
import about2 from "../assets/image/about2.jpg";

const About = () => {
  return (
    <div className="about-page">

      {/* ================= HERO SECTION ================= */}
      <section className="about-hero container">

        <div className="about-text">
          <p className="breadcrumb">Home › About Us</p>

          <h1>About Coderz Academy</h1>

          <p>
            Coderz Academy is focused on making <b>students job-ready</b> 
            through <b>practical training, clear concepts,</b> and 
            <b> continuous mentorship.</b>
          </p>

          <p>
            We believe learning to code should be simple, structured, and hands-on.
            Our goal is not just to teach programming languages, but to help students
            truly understand how technology works and how it is used in real-world applications.
          </p>

          <p>
            At <b>Coderz Academy</b>, we focus on building strong fundamentals that help students
            succeed in academics, interviews, and industry projects.
          </p>
        </div>

        <div className="about-image">
          <img src={about1} alt="About Illustration" />
        </div>

      </section>


      {/* ================= WHAT WE DO ================= */}
      <section className="what-we-do container">

        <div className="what-text">
          <h2>What We Do</h2>

          <p>
            We provide professional training in the latest technologies through:
          </p>

          <ul>
            <li>✔ Live instructor-led classes</li>
            <li>✔ Step-by-step concept explanation</li>
            <li>✔ Hands-on coding practice</li>
            <li>✔ Real-time project development</li>
            <li>✔ Exam and interview-oriented preparation</li>
          </ul>

          <p>
            Our courses are designed to bridge the gap between 
            <b> theory and practical implementation.</b>
          </p>
        </div>

        <div className="what-image">
          <img src={about2} alt="Training Illustration" />
        </div>

      </section>


      {/* ================= APPROACH + MISSION ================= */}
      <section className="approach-section container">

        {/* LEFT CARD */}
        <div className="approach">
          <h2>Our Teaching Approach</h2>

          <ul>
            <li>✔ Live instructor-led classes</li>
            <li>✔ Step-by-step concept explanation</li>
            <li>✔ Hands-on coding practice</li>
            <li>✔ Real-time project development</li>
            <li>✔ Exam & interview-oriented preparation</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="mission">

          <h2>Our Mission</h2>

          <p>
            Our mission is to empower students with 
            <b> industry-relevant skills,</b> practical knowledge, 
            and the confidence needed to crack exams, interviews, 
            and real-world challenges.
          </p>

          <h3>Why Choose Coderz Academy?</h3>

          <ul>
            <li>✔ Experienced and supportive trainers</li>
            <li>✔ Exam & interview-oriented notes</li>
            <li>✔ Practical, real-time project exposure</li>
            <li>✔ Continuous doubt support and mentorship</li>
          </ul>

        </div>

      </section>

    </div>
  );
};

export default About;
