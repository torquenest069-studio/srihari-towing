import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { handleCall, handleWhatsApp } from '../Utlys/contactUtils';

export default function Emergency() {
  return (
    <section className="emergency">
      <h1>Need Immediate Help?</h1>
      <p>Our team is standing by 24/7 to assist you</p>

      <div className="btns">
  <button className="banner-btn-call" onClick={handleCall}>
  <FaPhoneAlt /> Call Sri Hari Towing Service
</button>
<button className="banner-btn-whatsapp" onClick={handleWhatsApp}>
  <FaWhatsapp /> WhatsApp Us Now
</button>
      </div>
    </section>
  );
}
