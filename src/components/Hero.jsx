import React from "react";
import {useState} from'react';
import "../css/Hero.css";
import HeroImage from "../assets/image/21429.png";
import { useNavigate } from "react-router-dom";
import EnrollModal from "./EnrollModal";

const Hero = () => {
  const navigate = useNavigate();
  const [showModal , setShowModal] = useState(false);
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Kickstart Your Tech Career <br />
          with Coderz Academy
        </h1>
        <p>Learn the Skills to Code Your Future.</p>

        <div className="hero-buttons">
          <button className="btn-primary-hero" onClick={() => setShowModal(true)}>Get Started</button>
          <button className="btn-outline-hero" onClick={() => navigate("/courses")}>View Courses</button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={HeroImage}
          alt="student"
        />
      </div>
          <EnrollModal show={showModal}
      onClose={()=>setShowModal(false)}
      />
    </section>
  );
};

export default Hero;
