

import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { handleCall, handleWhatsApp } from '../Utlys/contactUtils';
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-container">
        <h1>
          24/7 Emergency Towing & Roadside Assistance You Can Trust
        </h1>

        <p className="bannerhype">
          We service across :   {" "}
          <Link to="/towing-service-chitradurga" className="city-link">Chitradurga</Link>,{" "}
          <Link to="/towing-service-davanagere" className="city-link">Davanagere</Link>,{" "}
          <Link to="/towing-service-ballari" className="city-link">Bellary</Link>,{" "}
          <Link to="/towing-service-tumakuru" className="city-link">Tumakuru</Link>,{" "}
          <Link to="/towing-service-shivamogga" className="city-link">Shivamogga</Link>,{" "}
          <Link to="/towing-service-hospete" className="city-link">Hospete</Link>
        </p>

        <div className="banner-actions">
          <button className="banner-btn-call" onClick={handleCall}>
            <FaPhoneAlt size={18} /> Call Now
          </button>

          <button className="banner-btn-whatsapp" onClick={handleWhatsApp}>
            <FaWhatsapp size={22} /> WhatsApp Now
          </button>
        </div>
      </div>
    </section>
  );
}
