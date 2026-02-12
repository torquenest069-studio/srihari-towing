import { FaClock, FaCheckCircle, FaRupeeSign, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaClock />,
    title: "24/7 Availability",
    desc: "Day or night, we are ready to assist you. Our team is always on standby for emergencies."
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure",
    desc: "We use modern equipment to ensure your vehicle is transported without a single scratch."
  },
  {
    icon: <FaRupeeSign />,
    title: "Transparent Pricing",
    desc: "No hidden charges. Get fair and honest upfront pricing before we start the job."
  },
  {
    icon: <FaCheckCircle />,
    title: "Expert Drivers",
    desc: "Our certified professionals have years of experience in recovery and roadside assistance."
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="section">
      <h1>Why Choose Us</h1>
      <p>Professional and reliable towing service you can trust</p>

      <div className="grid">
        {features.map((f, i) => (
          <div className="card feature-card" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}