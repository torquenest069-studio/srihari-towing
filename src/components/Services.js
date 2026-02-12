const images = require.context('../assets/Services', false, /\.(png|jpe?g|svg)$/);

const getImageUrl = (name) => {
  try {
    return images(`./${name}`);
  } catch (err) {
    console.error(`Image ${name} not found in assets/Services`);
    return ""; 
  }
};

const services = [
  {
    title: "Emergency Towing",
    text: "Fast 24/7 emergency tow truck service for breakdowns and accidents. Reliable vehicle recovery for all car models.",
    image: getImageUrl('emergency.jpg')
  },
  {
    title: "Flatbed Towing",
    text: "Safe and secure flatbed towing for long distances, 4WD vehicles, and luxury cars to prevent transmission damage.",
    image: getImageUrl('Flatbed Towing.jpeg')
  },
  {
    title: "Two-Wheeler Towing",
    text: "Specialized motorcycle and scooter towing using secure tie-down equipment for damage-free transport.",
    image: getImageUrl('Two-Wheeler.jpeg')
  },
  {
    title: "Roadside Assistance",
    text: "Comprehensive on-site support including minor mechanical repairs and electrical troubleshooting to get you moving.",
    image: getImageUrl('Roadside Assistance.jpeg')
  },
  {
    title: "Battery Jump-Start",
    text: "Quick-response dead battery assistance. We use professional-grade jump starters to safely revive your engine.",
    image: getImageUrl('Battery Jump-Start.jpeg')
  },
  {
    title: "Flat Tire Change",
    text: "On-the-spot flat tire replacement using your spare wheel. Efficient service for cars, SUVs, and light trucks.",
     image: getImageUrl('Flat Tire Change.jpeg')
  },
  {
    title: "Car Lockout Service",
    text: "Professional car door unlocking service for when keys are lost or locked inside, using non-destructive tools.",
     image: getImageUrl('Car Lockout Service.jpeg')
  },
  {
    title: "Fuel Delivery",
    text: "Emergency fuel delivery (Gas/Petrol/Diesel) directly to your location when you've run out of gas.",
     image: getImageUrl('Fuel Delivery.jpeg')
  },
  {
    title: "Accident Recovery",
     image: getImageUrl('Accident Recovery.jpeg')
  }
];



export default function Services() {
  return (
    <section id="services" className="section light">
      <h1>Our Services</h1>
      <p>Comprehensive emergency and roadside assistance services</p>

      <div className="grid">
        {services.map((service, i) => (
          <div className="card" key={i}>
            <div className="card-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}