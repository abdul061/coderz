import React, { useState } from "react";
import axios from "axios";
import TestimonialSlider from "./component/TestimonialSlider";
import './css/merge.css'
const Home = () => {
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
    <div className="body">
      <div className="spark-section-2">
        <div className="spark-container-2 spark-primary-with-rounded-corners ">
          <div className="spark-flex-row-2 spark-5-spacing">
            <div className="spark-hero-section-left-side-2">
              <h1>ClearLearning Starts at Coderz.</h1>
              <p className="uui-text-size-xlarge" style={{ color: "white" }}>
                Welcome to our coding academy, where students starting from 6th
                grade dive into the exciting world of programming! Discover fun,
                interactive lessons that spark creativity and build essential
                tech skills.
              </p>
              <div className="w-form">
                <form
                  id="wf-form-Hero-Section---5-Email"
                  name="wf-form-Hero-Section---5-Email"
                  data-name="Hero Section - 5 Email"
                  method="post"
                  action="post"
                  onSubmit={handleSubmit}
                  className="spark-flexed-form-2"
                  data-wf-page-id="66dd11c818ffc46b3daef51b"
                  data-wf-element-id="a41f962e-0b96-56ad-ab87-213b026450c9"
                >
                  <div className="spark-form-label-and-input-2">
                    <label
                      htmlFor="Hero-Section---2-Email-2"
                      className="spark-field-label-2"
                    >
                      Email Address
                    </label>
                    <input
                      className="spark-input-2 spark-with-a-inner-shadow w-input"
                      maxLength="256"
                      name="Hero-Section---2-Email"
                      data-name="Hero Section - 2 Email"
                      placeholder="Your Email Address"
                      type="email"
                      id="Hero-Section---2-Email-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="spark-button-2 spark-dark-button w-button"
                    value="Get Started"
                  />
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
            <img
              src="https://cdn.prod.website-files.com/66dd11c818ffc46b3daef514/6720d78d1eec9f136279ff50_Lap-removebg-preview.png"
              loading="eager"
              width="640"
              height="auto"
              alt=""
              className="spark-hero-section-image-2"
            />
          </div>
        </div>
      </div>

      <div className="spark-container-2 ">
        <div className="spark-flex-row-2 spark-5-spacing">
          <div className="spark-max-width-600">
            <p>Get Started Today</p>
            <h1>Building a foundation for future tech leaders.</h1>
            <p className="uui-text-size-xlarge" style={{ color: "Black" }}>
              This foundation for future tech leaders requires equipping
              students with essential skills and knowledge, as well as building
              their confidence and creativity to succeed in careers in
              technology.
            </p>
          </div>
          <div width="276" className="w-layout-grid spark-three-image-grid">
            <img
              src="https://cdn.prod.website-files.com/66dd11c818ffc46b3daef514/671ce43daf377813fe4f128b_Media-Ratios.webp"
              loading="lazy"
              width="311"
              id="w-node-_44ff2d27-0db4-4330-41ae-3070ef7c5fda-3daef51b"
              alt=""
              className="spark-grid-image"
            />
            <img
              src="https://cdn.prod.website-files.com/66dd11c818ffc46b3daef514/6720d921623d1e7710786484_hero4.jpg"
              loading="lazy"
              id="w-node-_44ff2d27-0db4-4330-41ae-3070ef7c5fdb-3daef51b"
              sizes="(max-width: 479px) 73vw, (max-width: 767px) 83vw, (max-width: 991px) 87vw, 45vw"
              alt=""
              className="spark-grid-image"
            />
            <img
              src="https://cdn.prod.website-files.com/66dd11c818ffc46b3daef514/6720d8b20c5521b8396e95c0_hero3.png"
              loading="lazy"
              id="w-node-_44ff2d27-0db4-4330-41ae-3070ef7c5fdc-3daef51b"
              sizes="(max-width: 479px) 73vw, (max-width: 767px) 83vw, (max-width: 991px) 87vw, 45vw"
              alt=""
              className="spark-grid-image"
            />
          </div>
        </div>
      </div>

      <div className="spark-section-3">
        <div className="spark-container-3 w-container">
          <div className="spark-centered-900">
            <h2>
              <strong>Amazing Capabilities</strong>
            </h2>
            <p className="uui-text-size-xlarge" style={{ color: "Black" }}>
              Coderz Academy has well-rounded training for great students under
              the guidance of qualified professionals. Its environment is richly
              interactive in practical implementation, and valuable expertise a
              learner achieves for professional success within the field.
            </p>
          </div>
          <div
            data-current="Tab 1"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="spark-tabs-parent w-tabs"
          >
            <div className="spark-tabs-content w-tab-content">
              <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                <div className="spark-three-column-grid">
                  <div className="spark-wrapped-card spark-stacked">
                    <a href="#" className="w-inline-block">
                      <img
                        width="80"
                        alt=""
                        src="https://cdn.prod.website-files.com/66dd11c818ffc46b3daef514/6723811852f88e4d3d3170d0_meeting4-removebg-preview.png"
                        loading="eager"
                        className="spark-square-image-card"
                      />
                    </a>
                    <div className="spark-card-details">
                      <p className="spark-bold-heading spark-card-title">
                        Hands-on Training
                      </p>
                      <p className="spark-small-sub-paragraph">
                        Students are engaged through hands-on coding projects
                        and are immersed into learning from this. Such an
                        approach develops critical thinking, creativity, and
                        problem-solving capabilities - let's prepare for future
                        challenges in technology.
                      </p>
                    </div>
                  </div>
                  <div className="spark-wrapped-card spark-stacked">
                    <a href="#" className="w-inline-block">
                      <img
                        width="80"
                        sizes="(max-width: 767px) 92vw, (max-width: 991px) 42vw, 27vw"
                        src="https://cdn.prod.website-files.com/66dd11c818ffc46b3daef514/67237ef7603a54d375813b8f_meeting2.png"
                        loading="eager"
                        alt=""
                        className="spark-square-image-card"
                      />
                    </a>
                    <div className="spark-card-details">
                      <p className="spark-bold-heading spark-card-title">
                        Real-World Applications
                      </p>
                      <p className="spark-small-sub-paragraph">
                        Students learn to use their coding skills in practical
                        ways. This practical applicability improves their
                        problem-solving abilities, allowing them to handle
                        challenges in technology with creative solutions.
                      </p>
                    </div>
                  </div>
                  <div className="spark-wrapped-card spark-stacked">
                    <a href="#" className="w-inline-block">
                      <img
                        width="80"
                        alt=""
                        src="https://cdn.prod.website-files.com/66dd11c818ffc46b3daef514/672382da08d09398feffd29c_app.jpg"
                        loading="eager"
                        className="spark-square-image-card"
                      />
                    </a>
                    <div className="spark-card-details">
                      <p className="spark-bold-heading spark-card-title">
                        Flexible Learning Paths
                      </p>
                      <p className="spark-small-sub-paragraph">
                        Customized curricula options meet diverse skill levels
                        and career goals. This results in individual success for
                        everyone, taking into consideration the diverse skills
                        and aspirations of learners.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialSlider />
    </div>
  );
};

export default Home;
