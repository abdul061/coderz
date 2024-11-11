import React, { useState, Fragment } from 'react';
import axios from "axios";
import "./css/course.css";
import { Link } from "react-router-dom";
import METRICS from './component/metrics';
const Course = () => {
  const HeroHeader = () => {
    return (
      <header className="uui-section_heroheader21">
        <div className="w-layout-grid uui-heroheader21_component">
          <div className="uui-heroheader21_content">
            <div className="uui-button-row-2">
              <a href="#" className="uui-badge-group is-primary w-inline-block">
                <div className="badge-group_text-wrapper">
                  <div>Join our remote team</div>
                  <div className="uui-badge-group_icon text-color-primary500 w-embed">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33333M12.6667 8L8.00001 12.6667"
                        stroke="currentColor"
                        strokeWidth="1.3333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div className="uui-space-small-2"></div>
            <h1 className="uui-heading-xlarge-2">
              People who care about your growth
            </h1>
            <div className="uui-space-small-2"></div>
            <div className="uui-text-size-xlarge-2">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </div>
            <div className="uui-max-width-small"></div>
            <div className="uui-heroheader21_form w-form">
              <form
                id="email-form"
                name="email-form"
                method="post"
                action="post"
                className="uui-form_component-2"
              >
                <div className="uui-signup-form_wrapper-2">
                  <input
                    className="uui-form_input-2 w-input"
                    maxLength="256"
                    name="email-2"
                    placeholder="Enter your email"
                    type="email"
                    id="email-2"
                    required
                  />
                  <input
                    type="submit"
                    className="uui-button-2 w-button"
                    value="Get started"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="uui-heroheader21_image-wrapper">
            <img
              src="https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238486a0b77e78ba08faa1_coderz.jpg"
              loading="lazy"
              sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 50vw"
              srcSet="
              https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238486a0b77e78ba08faa1_coderz-p-500.jpg 500w,
              https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238486a0b77e78ba08faa1_coderz-p-800.jpg 800w,
              https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238486a0b77e78ba08faa1_coderz-p-1080.jpg 1080w,
              https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238486a0b77e78ba08faa1_coderz-p-1600.jpg 1600w,
              https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238486a0b77e78ba08faa1_coderz.jpg 2000w
            "
              alt=""
              className="uui-heroheader21_image"
            />
          </div>
        </div>
      </header>
    );
  };
  const FeaturesMetrics = () => {
    return (
      <section className="features-metrics">
        <div className="container">
          <div className="features-wrapper">
            <div className="features-block">
              <div className="features-title">
                500<span className="features-title-small">+</span>
              </div>
              <div>Enrolled Students</div>
            </div>
            <div className="features-block">
              <div className="features-title">
               90<span className="features-title-small">%</span>
              </div>
              <div>Success Rate</div>
            </div>
            <div className="features-block">
              <div className="features-title">20+</div>
              <div>Courses Offered</div>
            </div>
            <div className="features-block">
              <div className="features-title">
                2k<span className="features-title-small">+</span>
              </div>
              <div>Followers</div>
            </div>
          </div>
        </div>
        <section className="uui-section_cta01">
          <div className="uui-page-padding-8">
            <div className="uui-container-large-2"></div>
          </div>
        </section>
      </section>
    );
  };
  const Hero = () => {
      const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the email address to the backend
      const response = await axios.post(
        `https://cback-production.up.railway.app/subscribe`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Show success message

      setEmail(""); // Clear the email input field
      window.alert(response.data.message);
    } catch (error) {
      if (error.response && error.response.data.message) {
        window.alert(error.response.data.message); // Show backend error message
      } else {
        window.alert("Failed to subscribe. Please try again.");
      }
    }
  };
    return (
      <header className="uui-section_heroheader12">
        <div className="uui-page-padding-2">
          <div className="uui-container-large">
            <div className="uui-padding-vertical-xhuge-2">
              <div className="uui-text-align-center">
                <div className="uui-max-width-xlarge align-center">
                  <h1 className="uui-heading-xlarge">
                    Teaching smarter with clear insights
                  </h1>
                  <div className="uui-space-small"></div>
                  <div className="uui-max-width-large align-center">
                    <div className="uui-text-size-xlarge">
                      Over 300 students participated, gaining knowledge,
                      confidence, and skills, leading to improved academic
                      success and professional readiness in their fields.
                    </div>
                  </div>
                  <div className="uui-heroheader12_form w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      data-name="Email Form"
                      method="post"
                      action="post"
                      onSubmit={handleSubmit}
                      className="uui-form_component"
                    >
                      <div className="uui-signup-form_wrapper">
                        <input
                          className="uui-form_input w-input"
                          maxLength="256"
                          name="email"
                          data-name="Email 3"
                          placeholder="Enter your email"
                          type="email"
                          id="email-3"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <input
                          type="submit"
                          data-wait="Please wait..."
                          className="uui-button w-button"
                          value="Get started"
                        />
                      </div>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };


  const CoursePage = () => {
    const courses = [
      // (your courses data remains the same here)
      {
        id: "course1",
        title: "Computer Basics",
        description:
          "Our computer basics course gives one all the essential skills. Join us in developing our knowledge and realizing your goals.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720dc5639034bb74b428d2e_course1.png",
      },
      {
        id: "course2",
        title: "Full stack Web-devlopment",
        description:
          "Master front-end as well as back-end technologies in our full stack Development course.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720dd6bd29e6db132fe8169_appdev.png",
      },
      {
        id: "course3",
        title: "Tally Prime",
        description: "Learn Tally from scratch using our comprehensive course.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720df4cd5b183f3a62c2497_tax-tally.png",
      },
      {
        id: "course4",
        title: "MS Office",
        description:
          "Learn the basics with Excel and MS Word at Coderz Academy.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6723793ff7c81cf3dae38186_xcel.png",
      },
      {
        id: "course5",
        title: "JAVA",
        description:
          "Master Java programming at Coderz Academy from fundamentals to advanced.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67238666ed2c8423e3397ba7_Set_of_programmers_02_02.jpg",
      },
      {
        id: "course6",
        title: "Advanced JAVA",
        description:
          "Learn Advanced Java at Coderz Academy. It is a course that moves the use of frameworks beyond the use of APIs.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720e0c4d656af853629a5c5_web-development-removebg-preview.png",
      },
      {
        id: "course7",
        title: "Python",
        description:
          "Learn all the fundamentals concepts of programming, data structures, and libraries with Coderz.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67237a410c0637c540fc1a7b_pyI.jpg",
      },
      {
        id: "course8",
        title: "Advanced Python",
        description:
          "We also provide advanced Python skills to create a complex application and improve your code performance.",
        imgSrc:
          "https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/672385bfd650f17afa944ec5_python03.jpg",
      },
    ];
  
    return (
      <section className="uui-section_layout80">
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-padding-vertical-xhuge">
              <div className="uui-layout80_component">
                <div className="uui-heading-subheading">Course page</div>
                <div className="uui-max-width-large">
                  <h2 className="uui-heading-medium">
                    Check out our engaging courses.
                  </h2>
                  <div className="uui-space-xsmall"></div>
                  <div className="uui-text-size-large">
                    Take interesting courses that breathe life into creativity
                    and skills. <br />
                    Join us in developing our knowledge and realizing your
                    goals.
                  </div>
                </div>
                <div className="w-layout-grid uui-layout80_list">
                  {courses.map((course) => (
                    <Link to={`/course/${course.id}`} key={course.id}>
                      <div id={course.id} className="uui-layout80_item">
                        <div className="uui-layout80_image-wrapper">
                          <img
                            src={course.imgSrc}
                            loading="lazy"
                            alt={`Image for ${course.title}`}
                            className="uui-layout80_image"
                          />
                        </div>
                        <h3 className="uui-heading-xxsmall">{course.title}</h3>
                        <div className="uui-space-xxsmall"></div>
                        <div className="uui-text-size-medium">
                          {course.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

  
  const HeroSection = () => {
    return (
      <header className="uui-section_heroheader03">
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-padding-vertical-xhuge">
              <div className="w-layout-grid uui-heroheader03_component">
                <div className="uui-heroheader03_content">
                  <h1 className="uui-heading-xlarge">
                    Customer service software for customer-first teams
                  </h1>
                  <div className="uui-space-small"></div>
                  <div className="uui-max-width-medium">
                    <div className="uui-text-size-xlarge">
                      The best customer service software for customer-first
                      teams. Industry-leading email and live chat support.
                    </div>
                  </div>
                  <div className="uui-space-large"></div>
                  <div className="uui-button-row is-reverse-mobile-landscape">
                    <div className="uui-button-wrapper max-width-full-mobile-landscape">
                      <Link
                        to="/contact"
                        className="uui-button is-button-large w-inline-block"
                      >
                        Connect Us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="uui-heroheader03_image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67237b559b04361ff296dba5_course.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 42vw"
                    srcSet="
                    https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67237b559b04361ff296dba5_course-p-500.png 500w,
                    https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67237b559b04361ff296dba5_course-p-800.png 800w,
                    https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67237b559b04361ff296dba5_course-p-1080.png 1080w,
                    https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/67237b559b04361ff296dba5_course.png 1280w
                  "
                    alt="Header image"
                    className="uui-heroheader03_image"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/671cdc59e1dd19a8375837c8/6720b670072b2cfeb48143cb_arrow-01.svg"
                    loading="lazy"
                    alt="Arrow"
                    className="uui-heroheader03_arrow-image hide-tablet"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <Fragment>
      <HeroSection />
      <Hero />
      <METRICS />
      <CoursePage />
      <HeroHeader />
    </Fragment>
  );
};
export default Course;
