import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import WhyChoose from "../components/FAQSection";
import Demo from "../components/Demo";
import ChatButton from "../components/ChatButton";
import "../App.css";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Courses />
      <WhyChoose />
      <Demo />
    </>
  );
}

export default Home;
