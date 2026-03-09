import React from "react";
import CourseCard from "../components/CourseCard";
import { categories } from "../data/categoriesData";
import '../Courses.css'

const CoursesPage = () => {
  return (
    <>
      {/* ===== TOP HERO SECTION ===== */}
      <div className="courses-hero">
        <div className="hero-content">
          <div className="breadcrumb">
            Home <span>›</span> Courses
          </div>

          <h1>Our Courses</h1>
          <p>
            Explore Our Range of Tech Courses Designed to Make You Job-Ready.
          </p>
        </div>

        <div className="hero-wave"></div>
      </div>

      {/* ===== COURSES GRID SECTION ===== */}
      <div className="courses-page">
        <div className="courses-grid">
          {categories.map((category)=>(
            <CourseCard
              key={category.slug}
              course={category}
              variant="category"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
