import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "../Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("Error sending message");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          {" "}
          <div className="info-card">
            {" "}
            <div className="icon-wrap orange">
              {" "}
              <FaPhoneAlt />{" "}
            </div>{" "}
            <div>
              {" "}
              <h4>+91 80723 87798</h4> <p>Call Us</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="info-card">
            {" "}
            <div className="icon-wrap orange">
              {" "}
              <FaEnvelope />{" "}
            </div>{" "}
            <div>
              {" "}
              <h4>info@coderzacademy.tech</h4> <p>Email Us</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="info-card">
            {" "}
            <div className="icon-wrap blue">
              {" "}
              <FaMapMarkerAlt />{" "}
            </div>{" "}
            <div>
              {" "}
              <h4>44B st devanand street</h4>{" "}
              <p>Panruti – 607106, Tamil Nadu</p>{" "}
            </div>{" "}
          </div>{" "}
          <a
            href="https://wa.me/918072387798"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <BsWhatsapp style={{ marginRight: "8px" }} />
            Chat with Us on WhatsApp →
          </a>{" "}
          {/* (Left panel same as before) */}
        </div>

        <div className="contact-form-box">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Your Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Your Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>

            {status && <p style={{ marginTop: "10px" }}>{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
