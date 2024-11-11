import React from 'react';
import { Link } from 'react-router-dom';
import './css/merge.css'
import METRICS from './component/metrics';

const About = () => {
  return (
    <div>


      <section className="spark-section-5">
        <div className="spark-container-4 spark-primary-background w-container">
          <div className="spark-flex-row-3 spark-split-and-wrapped">
            <div>
              <p>Get Started Now</p>
              <h2>Start your journey</h2>
              <p className="spark-hero-sub-paragraph-3 spark-secondary-font-color">
                We believe that every student has the potential to become a great
                coder. Our coding program is designed specifically for students
                starting in 6th grade, combining fun with essential skills in
                programming, problem-solving, and creativity.
              </p>
            </div>
            <div className="spark-flex-row-3 spark-right">
              <Link to="/course" className="spark-lightbox-button w-inline-block w-lightbox">
                Courses
              </Link>
              <Link to="/contact" className="spark-button-3 spark-dark-button w-button">Get Started</Link>
            </div>
          </div>
        </div>
        <div className="spark-absolute-dark-background"></div>
      </section>

{/* metrics goes here */}
    <METRICS />
      <div className="udesly-container">
      <section className="udesly-title-wrapper-2">
        <header className="udesly-overline-large">About Me</header>
        <h2
          className="udesly-text-extrabold"
          style={{
            transform: 'translate3d(0, 15px, 0) scale3d(1, 1, 1)',
            opacity: 0,
          }}
        >
          What made me pop into design?
        </h2>
      </section>

      <section className="udesly-information">
        <article className="udesly-info-block">
          <p className="udesly-paragraph-large">
            Coderz Academy is dedicated to ensuring a strong foundation in computer education for students of all ages. Located in Panruti, we offer courses from basic computer skills to advanced programming languages like Python and Java. Our experienced instructors nurture future tech leaders by equipping students with practical skills for today’s digital landscape.
          </p>
          <ul role="list" className="udesly-list-info">
            <li className="list-item-privacy">
              <span className="udesly-span-black udesly-text-medium">
                Empowering students with essential tech skills through courses in programming, web development, and computer basics to create future leaders.
              </span>
            </li>
            <li className="list-item-privacy">
              <span className="udesly-span-black udesly-text-medium">
                Fostering creativity and critical thinking in an innovative learning environment at Coderz Academy, equipping students with essential coding and technology skills.
              </span>
            </li>
            <li className="list-item-privacy">
              <span className="udesly-span-black udesly-text-medium">
                Emphasizing customized learning based on individual needs, allowing each student to develop at their own pace.
              </span>
            </li>
          </ul>
          <p className="udesly-paragraph-large">
            Coderz Academy’s courses are tailored to each student, supporting them in developing skills at their own pace and proficiency.
          </p>
        </article>

        <article className="udesly-info-block">
          <p className="udesly-paragraph-large">
            Located in Panruti, Cuddalore district, Coderz Academy teaches computing and programming from basics to advanced levels. Our classes cover Microsoft Office, C, C++, Python, Java, HTML, CSS, JavaScript, Tally Prime, and more, focusing on building skills for high-tech careers.
          </p>
          <p className="udesly-paragraph-large">
            We support students through interactive coding opportunities and personalized tutoring. Our dedicated teachers encourage creativity and critical thinking, providing learners with a strong foundation for tech careers.
          </p>
        </article>
      </section>
    </div>
    </div>
  );
};

export default About;
