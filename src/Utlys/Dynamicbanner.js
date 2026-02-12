import React, { useState } from 'react'; // Added useState
import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { handleCall, handleWhatsApp } from '../Utlys/contactUtils';

const Banner = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");

  // --- State for Hover Effects ---
  const [isCallHovered, setIsCallHovered] = useState(false);
  const [isWhatsappHovered, setIsWhatsappHovered] = useState(false);

  let title = "24/7 Emergency Towing & Roadside Assistance You Can Trust";

  if (path) {
  const city = path.charAt(0).toUpperCase() + path.slice(1);
  title = `24/7 Towing Service in ${city} 
  20-30 Min Emergency Assistance`;
}

  // --- Inline CSS Objects ---

  const sectionStyle = {
    width: "100%",
    backgroundColor: "#1a1a1a",
    padding: "80px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#ffffff",
    boxSizing: "border-box"
  };

  const h1Style = {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: "800",
    maxWidth: "900px",
    lineHeight: "1.2",
    marginBottom: "15px",
    letterSpacing: "-1px"
  };

  const serviceTextStyle = {
    fontSize: "14px",
    color: "#bbbbbb",
    marginBottom: "35px",
    maxWidth: "600px",
    lineHeight: "1.5"
  };

  const actionsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
    maxWidth: "380px"
  };

  const commonBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "14px 0",
    borderRadius: "50px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease", // Smooth transition for colors and effects
    width: "100%",
    textDecoration: "none"
  };

  // Dynamic style for Call Button
  const callBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: isCallHovered ? "#ffffff" : "transparent",
    color: isCallHovered ? "#000000" : "#ffffff",
    border: "1px solid #ffffff", // White border to match the look
  };

  // Dynamic style for WhatsApp Button
  const whatsappBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: isWhatsappHovered ? "#25D366" : "#ffffff", // WhatsApp green on hover
    color: isWhatsappHovered ? "#ffffff" : "#000000",
    border: "none",
    boxShadow: isWhatsappHovered ? "0px 4px 15px rgba(37, 211, 102, 0.4)" : "none",
  };

  return (
    <section style={sectionStyle}>
      <h1 style={h1Style}>{title}</h1>
      
      <p style={serviceTextStyle}>
        {/* You can add text here if needed */}
      </p>

      <div style={actionsContainerStyle}>
        <button 
          style={callBtnStyle} 
          onClick={handleCall}
          onMouseEnter={() => setIsCallHovered(true)}
          onMouseLeave={() => setIsCallHovered(false)}
        >
          <FaPhoneAlt size={16} /> Call Now
        </button>

        <button 
          style={whatsappBtnStyle} 
          onClick={handleWhatsApp}
          onMouseEnter={() => setIsWhatsappHovered(true)}
          onMouseLeave={() => setIsWhatsappHovered(false)}
        >
          <FaWhatsapp size={20} /> WhatsApp Now
        </button>
      </div>
    </section>
  );
};

export default Banner;