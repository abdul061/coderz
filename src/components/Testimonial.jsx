import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../css/Testimonial.css";

const testimonials = [
  {
    name: "Soshanashree Soshana",
    role: "C,c++ and Java",
    time: "8 weeks ago",
    review:
      "The classes are so good and understandable. I truly enjoyed with the classes. And I hope that, I have learned some better knowledge about Programming languages. Thanks to coderz academy."
  },
  {
    name: "Poojashri",
    role: "Full Stack Web Development",
    time: "8 weeks ago",
    review:
      "I recently completed the Full Stack offered by the organization and it was an extremely valuable learning experience. The course provided well-structured module, hands-on projects and the clear explanations from the instructor helped me to upgrage my skills to gain practical exposure, and feel more confident in applying the concepts in real-time projects. Thank You."
  },
  {
    name: "AbdulRafic Rafic",
    role: "C,C++ and Python",
    time: "23 weeks ago",
    review:
    "I learned c, c++, python in this 12th leave at Coderz Academy. Coderz has been incredibly helpful in making coding concepts clear and practical. The explanations are simple yet detailed, and the examples make learning much easier. I appreciate the prompt responses and the supportive approach—it makes coding feel less intimidating and more enjoyable. Thank youfor such a wonderful learning journey!"
  },
  {
    name: "Priya S",
    role: "Software Engineer",
    time: "12 weeks ago",
    review:
      "Mentors were very supportive and helped me crack interviews confidently."
  },
  {
    name: "Sahana Ramasamy",
    role: "MS Office, C, C++, Python",
    time: "26 weeks ago",
    rating: 5,
    review:
      "I recently completed courses in MS Office, C, C++, and Python at Coderz Academy and was thoroughly impressed. The instructors provided practical, real-world examples beyond textbooks. The curriculum was well-structured, starting from foundational concepts and progressing to advanced topics. I highly recommend Coderz Academy to anyone looking to improve their programming skills."
  },
  {
    name: "Dharshan",
    role: "C, C++, Python & Java",
    time: "27 weeks ago",
    rating: 5,
    review:
      "As a biology student, I never imagined I could become confident in C, C++, Python, and Java. Coderz Academy provided placement-focused exercises and taught problem-solving techniques clearly and effectively. The teaching style is very easy to understand. Thank you, Coderz Academy!"
  },
  {
    name: "Ven Mathi",
    role: "C, C++, Python",
    time: "26 weeks ago",
    rating: 5,
    review:
      "Coming from a Bio-Maths background with no prior programming knowledge, I was nervous about learning coding. Coderz Academy made the journey easy with a friendly atmosphere and supportive instructors. The balance of theory and hands-on practice helped me gain confidence step by step. Choosing Coderz Academy was the right decision."
  },
  {
    name: "Subhiksha Shanmugam",
    role: "C, C++, Python",
    time: "26 weeks ago",
    rating: 5,
    review:
      "I had an excellent experience learning C, C++, and Python at Coderz Academy. The instructors were passionate and highly knowledgeable. The hands-on projects helped me understand complex concepts and build confidence. I strongly recommend Coderz Academy for anyone seeking quality programming education."
  },
  {
    name: "Durga Lakshmi",
    role: "Full Stack Web Development",
    time: "26 weeks ago",
    rating: 5,
    review:
      "This course helped me build a strong foundation in web development and prepared me for interviews. The hands-on practice and live projects improved my coding and problem-solving skills. Concepts were explained in a simple and practical manner, making even complex topics easy to understand."
  },
  {
    name: "Sudharsan Rajan",
    role: "C, C++, Java, Python",
    time: "27 weeks ago",
    rating: 5,
    review:
      "I learned C, C++, Java, and Python during my 12th leave at Coderz Academy. It helped me cope with my college syllabus confidently. I also learned Excel and interview preparation techniques. The course will definitely be useful for my future. Thank you!"
  }
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth"
    });
  };

  return (
    <section className="testimonial-section">
      <h2>What Our Learners Are Saying!</h2>

      <div className="slider-wrapper">

        <button className="arrow left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="testimonial-slider" ref={sliderRef}>
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="card-header">
                <div>
                  <h3>{item.name}</h3>
                  <p className="role">{item.role}</p>
                </div>
                <span className="time">{item.time}</span>
              </div>

              <p className="review">{item.review}</p>

            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          <FaChevronRight />
        </button>

      </div>
    </section>
  );
};

export default Testimonial;
