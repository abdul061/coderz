import React, { useState } from "react";
import axios from "axios";
import "./css/course.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitText, setSubmitText] = useState("Send message");
  const [statusMessage, setStatusMessage] = useState("");

  const publicUrl = process.env.REACT_APP_PUBLIC_URL;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitText("Sending...");
    try {
      // Send form data to backend using the API URL from environment variables
      await axios.post(`${publicUrl}contact`, formData);
      setSubmitText("Sent");
      // Clear the form after successful submission
      setFormData({ name: "", email: "", message: "" });

      // Set a success message
      window.alert(
        "Thank you for contacting Adiz Codez! Kindly check your mail for more information!"
      );
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatusMessage(
        "There was an error submitting your form. Please try again."
      );
    } finally {
      // After a short delay, reset the submit button text to 'Submit'
      setTimeout(() => {
        setSubmitText("Submit");
      }, 2000);
    }
  };
  return (
    <div>
      <section className="uui-section_contact05">
        <div className="uui-page-padding-4">
          <div className="uui-container-large">
            <div className="uui-padding-vertical-xhuge-4">
              <div className="w-layout-grid uui-contact05_component">
                <div className="uui-contact05_content">
                  <h2 className="uui-heading-medium">Contact us</h2>
                  <div className="uui-space-xsmall"></div>
                  <div className="uui-text-size-large">
                    You can reach us anytime via  
                    <Link
                      to="mailto:contactcoderzacademy@gmail.com"
                      className="uui-text-style-link-02"
                    >
                       contactcoderzacademy@gmail.com
                    </Link>
                  </div>
                  <div className="uui-contact05_form-wrapper w-form">
                    <form
                      id="wf-form-Contact-05-form"
                      
                      method="post"
                      action="post"
                      onSubmit={handleSubmit}
                      className="uui-contact05_form"
                    >
                      <div className="uui-form-field-wrapper">
                        <label
                          htmlFor="Contact-05-name"
                          className="uui-field-label"
                        >
                          Name
                        </label>
                        <input
                          className="uui-form_input w-input"
                          maxLength="256"
                          name="name"
                          data-name="Contact 05 name"
                          placeholder="Your name"
                          type="text"
                          id="Contact-05-name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="uui-form-field-wrapper">
                        <label
                          htmlFor="Contact-05-email"
                          className="uui-field-label"
                        >
                          Email
                        </label>
                        <input
                          className="uui-form_input w-input"
                          maxLength="256"
                          name="email"
                          data-name="Contact 05 email"
                          placeholder="you@company.com"
                          type="email"
                          id="Contact-05-email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="uui-form-field-wrapper">
                        <label
                          htmlFor="Contact-05-message"
                          className="uui-field-label"
                        >
                          Message
                        </label>
                        <textarea
                          id="Contact-05-message"
                          name="message"
                          maxLength="5000"
                          data-name="Contact 05 message"
                          placeholder="Type your message..."
                          required
                          className="uui-form_input text-area w-input"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      
                      <div
                        
                        className="uui-form-button-wrapper"
                      >
                        <input
                          type="submit"
                          data-wait="Please wait..."
                          value={submitText}
                          disabled={submitText === 'Sending...'}
                          className="uui-button w-button"
                        />
                      </div>
                    </form>
                    <div className="success-message w-form-done">
                      <div className="success-text">
                        Thank you! Your submission has been received!
                      </div>
                    </div>
                    <div className="error-message w-form-fail">
                      <div className="error-text">
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uui-contact05_image-wrapper">
                  <img
                    src="assests/img/home-hero.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 44vw, 45vw"
                    alt="Contact image"
                    className="uui-contact05_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="uui-banner16_component">
        <div className="uui-page-padding-7">
          <div className="uui-container-large">
            <div className="uui-banner16_content-wrapper">
              <div className="uui-banner16_content">
                <div className="uui-banner16_icon-wrapper">
                  <div className="icon-featured-square-large">
                    <div className="uui-icon-1x1-xsmall w-embed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="uui-banner16_text-wrapper">
                  <div className="uui-banner16_text">
                    Enjoy innovative tech learning
                  </div>
                  <div className="uui-banner16_supporting-text">
                    through a site designed by Adiz Codez.
                  </div>
                </div>
              </div>
              <div className="uui-banner16_button-wrapper">
                <a
                  href="www.adizcodez.com"
                  className="uui-button-secondary is-button-small w-inline-block"
                >
                  <div>Read update</div>
                </a>
              </div>
              <a
                data-w-id="79288bd7-8679-a6b2-6db1-c649fd6c99f8"
                href="#"
                className="uui-banner16_close-button w-inline-block"
              >
                <div className="uui-icon-1x1-xxsmall w-embed">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5L5 15M5 5L15 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="uui-section_contact07">
        <div className="uui-page-padding-7">
          <div className="uui-container-large">
            <div className="uui-padding-vertical-xhuge-6">
              <div className="w-layout-grid uui-contact07_component">
                <div className="uui-contact07_content-left">
                  <div className="uui-max-width-large-2">
                    <div className="uui-heading-subheading-2">Contact us</div>
                    <h2 className="uui-heading-medium-2">Get in touch</h2>
                    <div className="uui-space-xsmall-2" />
                    <div className="uui-text-size-large-3">
                      Our friendly team would love to hear from you.
                    </div>
                  </div>
                </div>
                <div className="uui-contact07_content-right">
                  <div className="w-layout-grid uui-contact07_contact-list">
                    <div
                      id="w-node-_0e492a64-adc7-7314-f5dd-f74ee67bc833-2c246cd1"
                      className="uui-contact07_item"
                    >
                      <div className="uui-contact07_item-icon-wrapper">
                        <div className="icon-featured-large">
                          <div className="uui-icon-1x1-xsmall-2 w-embed">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="uui-contact07_item-text-wrapper">
                        <h3 className="uui-heading-xxsmall-2">Email</h3>
                        <div className="uui-space-xxsmall-2" />
                        <a href="#" className="uui-text-style-link-02-3">
                          contactcoderzacademy@gmail.com
                        </a>
                      </div>
                    </div>
                    <div
                      id="w-node-_0e492a64-adc7-7314-f5dd-f74ee67bc83d-2c246cd1"
                      className="uui-contact07_item"
                    >
                      <div className="uui-contact07_item-icon-wrapper">
                        <div className="icon-featured-large">
                          <div className="uui-icon-1x1-xsmall-2 w-embed">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.38028 8.85323C9.07627 10.3028 10.0251 11.6615 11.2266 12.8631C12.4282 14.0646 13.7869 15.0134 15.2365 15.7094C15.3612 15.7693 15.4235 15.7992 15.5024 15.8222C15.7828 15.904 16.127 15.8453 16.3644 15.6752C16.4313 15.6274 16.4884 15.5702 16.6027 15.4559C16.9523 15.1063 17.1271 14.9315 17.3029 14.8172C17.9658 14.3862 18.8204 14.3862 19.4833 14.8172C19.6591 14.9315 19.8339 15.1063 20.1835 15.4559L20.3783 15.6508C20.9098 16.1822 21.1755 16.448 21.3198 16.7333C21.6069 17.3009 21.6069 17.9712 21.3198 18.5387C21.1755 18.8241 20.9098 19.0898 20.3783 19.6213L20.2207 19.7789C19.6911 20.3085 19.4263 20.5733 19.0662 20.7756C18.6667 21 18.0462 21.1614 17.588 21.16C17.1751 21.1588 16.8928 21.0787 16.3284 20.9185C13.295 20.0575 10.4326 18.433 8.04466 16.045C5.65668 13.6571 4.03221 10.7947 3.17124 7.76131C3.01103 7.19687 2.93092 6.91464 2.9297 6.5017C2.92833 6.04347 3.08969 5.42298 3.31411 5.02348C3.51636 4.66345 3.78117 4.39863 4.3108 3.86901L4.46843 3.71138C4.99987 3.17993 5.2656 2.91421 5.55098 2.76987C6.11854 2.4828 6.7888 2.4828 7.35636 2.76987C7.64174 2.91421 7.90747 3.17993 8.43891 3.71138L8.63378 3.90625C8.98338 4.25585 9.15819 4.43065 9.27247 4.60643C9.70347 5.26932 9.70347 6.1239 9.27247 6.78679C9.15819 6.96257 8.98338 7.13738 8.63378 7.48698C8.51947 7.60129 8.46231 7.65845 8.41447 7.72526C8.24446 7.96269 8.18576 8.30695 8.26748 8.5873C8.29048 8.6662 8.32041 8.72854 8.38028 8.85323Z"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="uui-contact07_item-text-wrapper">
                        <h3 className="uui-heading-xxsmall-2">Phone</h3>
                        <div className="uui-space-xxsmall-2" />
                        <a href="#" className="uui-text-style-link-02-2">
                      +91  8072387798
                        </a>
                      </div>
                    </div>
                    <div
                      id="w-node-_0e492a64-adc7-7314-f5dd-f74ee67bc847-2c246cd1"
                      className="uui-contact07_item"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="uui-contact07_map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.8486429398263!2d79.54503591142941!3d11.775705839917862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54af7dfe505a71%3A0x3cdc3e0f9456f76b!2sCODERZ%20ACADEMY!5e0!3m2!1sen!2sin!4v1730527846533!5m2!1sen!2sin"
                  width="100%"
                  height="700"
                  style={{ border: "none" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
