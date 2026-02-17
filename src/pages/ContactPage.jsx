import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "../Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">

        {/* LEFT PANEL */}
        <div className="contact-info">

          <div className="info-card">
            <div className="icon-wrap orange">
              <FaPhoneAlt />
            </div>
            <div>
              <h4>+91 98765 43210</h4>
              <p>Call Us</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-wrap orange">
              <FaEnvelope />
            </div>
            <div>
              <h4>info@coderzacademy.tech</h4>
              <p>Email Us</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-wrap blue">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4>28 Sg Devanathan Street</h4>
              <p>Panruti – 607106, Tamil Nadu</p>
            </div>
          </div>

          <button className="whatsapp-btn">
            <BsWhatsapp style={{ marginRight: "8px" }} />
            Chat with Us on WhatsApp →
          </button>

        </div>

        {/* RIGHT PANEL */}
        <div className="contact-form-box">
          <h2>Send Us a Message</h2>

          <form>

            <div className="input-group">
              <label>Your Name *</label>
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="input-group">
              <label>Your Email *</label>
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="input-group">
              <label>Your Phone Number</label>
              <input type="text" placeholder="Your Phone" />
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea placeholder="Write your message..." rows="4"></textarea>
            </div>

            <button className="submit-btn">
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
