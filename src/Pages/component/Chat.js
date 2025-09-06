import React from 'react';
import '../css/ChatIcon.css'; // Link to your custom CSS file

const ChatIcon = () => {
  return (
    <a
      href="https://wa.me/+918072387798" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="chat-icon"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
        alt="Chat on WhatsApp"
        className="chat-icon-img"
      />
    </a>
  );
};

export default ChatIcon;
