import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../css/whatsapp.css";

const WhatsAppFloat = () => {

  const phoneNumber = "918072387798"; // replace with your number

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hello%20I%20need%20information`,
  "_blank");
  };

  return (
    <div className="whatsapp-container" onClick={openWhatsApp}>
      <span className="wave"></span>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppFloat;