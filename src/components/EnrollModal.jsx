import React, { useState } from "react";
import "../css/EnrollModal.css";

const EnrollModal = ({ show, onClose }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [Submit, setSubmit] = useState(true)
  if (!show) return null;

const handleSubmit = async (e) => {
  e.preventDefault();
    setSubmit(false)
  try {

    const response = await fetch("http://localhost:5000/api/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone
      })
    });

    const data = await response.json();

    if (data.success) {
      alert("Enrollment submitted successfully!");
      setName("");
      setPhone("");
      onClose();
    } else {
      alert("Failed to send enrollment");
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
  }
  setSubmit(true)
};

  return (
    <div className="modal-overlay">

      <div className="modal-card">

        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>Enroll in Course</h2>
        <p className="modal-subtitle">
          Fill your details and our team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button className="submit-btn">
            {Submit ? "Submit Enrollment" : "Submitting"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default EnrollModal;