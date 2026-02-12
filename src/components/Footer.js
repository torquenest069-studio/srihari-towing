import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { handleCall, handleWhatsApp } from "../Utlys/contactUtils";

export default function Footer() {
  return (
    <footer className="footer">
      
      {/* Company Info */}
      <div className="footer-column">
        <h3>Sri Hari Towing Service</h3>
        <p>24/7 emergency towing across Karnataka</p>
      </div>

      {/* Service Areas */}
      <div className="footer-column">
        <h4>Service Areas</h4>
        <p>Chitradurga</p>
        <p>Davanagere</p>
        <p>Tumakuru</p>
        <p>Hospete</p>
        <p>Shivamogga</p>
        <p>Bellary</p>
      </div>

      {/* Emergency Contact */}
      <div className="footer-column">
        <h4>Emergency Contact</h4>

        <p className="contact-item" onClick={handleCall}>
          <FaPhoneAlt className="footer-icon" /> Call Now
        </p>

        <p className="contact-item" onClick={handleWhatsApp}>
          <FaWhatsapp className="footer-icon" /> WhatsApp
        </p>

        {/* Social Media Section */}
        <div className="social-section">
          <h4>Find Us in Social Media</h4>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>

            <a href="https://www.instagram.com/sriharitowingservices" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sri Hari Towing Service. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by{" "}
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noreferrer"
            className="developer-name"
          >
            Your Company Name
          </a>
        </p>
      </div>
    </footer>
  );
}
