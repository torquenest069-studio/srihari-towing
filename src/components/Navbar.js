import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { handleCall, handleWhatsApp } from '../Utlys/contactUtils';
// 1. Import your logo file from the assets folder
import logoImg from '../assets/logo.png';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* 2. Replace the emoji with the img tag */}
        <img 
          src={logoImg} 
          alt="SHTL" 
          style={{ 
            width: '150px', 
            height: '75px', 
            objectFit: 'contain' 
          }} 
        />
       
      </div>

    <div className="menu">
  <Link to="/#services">Services</Link>
  <Link to="/#areas">Service Areas</Link>
  <Link to="/#why">Why Choose Us</Link>
</div>


      <div className="actions">
        <button className="call" onClick={handleCall}>
          <FaPhoneAlt size={14} /> Call Now
        </button>
        <button className="whatsapp" onClick={handleWhatsApp}>
          <FaWhatsapp size={18} /> WhatsApp
        </button>
      </div>
    </nav>
  );
}