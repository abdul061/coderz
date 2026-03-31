import React from "react";
import "../css/Demo.css";

const Demo = () => {

  const phoneNumber = "918072387798";

  const openWhatsApp = () => {
    window.location.href = `https://wa.me/${phoneNumber}?text=Hello%20I%20need%20information`;
  };

  return (
    <section className="demo">
      <h2>Book Your Free Demo Class Today!</h2>
      <p>Start Your Coding Journey with Us.</p>

      <button className="btn-primary large" onClick={openWhatsApp}>
        Schedule a Free Session
      </button>

    </section>
  );
};

export default Demo;