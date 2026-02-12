import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Areas from "./components/Areas";
import WhyUs from "./components/WhyUs";

import Footer from "./components/Footer";
import Banner from "./components/Banner";
import PortfolioSlider from "./components/PortfolioSlider";
import ScrollToHash from "./Utlys/ScrollToHash";

// ✅ City Pages (Make sure file names EXACTLY match these)
import Davanagere from "./Pages/Davanagere";
import Shivamogga from "./Pages/Shivamogga";
import Tumakuru from "./Pages/Tumakuru";
import Hospete from "./Pages/Hospete";
import Bellary from "./Pages/Bellary";
import Chitradurga from "./Pages/Chitradurga";


// ---------------- HOME COMPONENT ----------------
function Home() {
  return (
    <>
           <Helmet>
        <title>24/7 Towing Service in Karnataka | Emergency Roadside Help</title>

        <meta
          name="description"
          content="Fast towing & roadside assistance across Chitradurga, Davanagere, Shivamogga, Tumkur, Bellari & Hospet."
        />

        <meta
          name="keywords"
          content="towing service,24 hour towing service,emergency towing service,roadside assistance near me,tow truck service,car breakdown help,vehicle recovery service."
        />

        


        {/* ✅ Open Graph Tags */}
        {/* <meta property="og:title" content="24/7 Towing Service in Karnataka" />
        <meta
          property="og:description"
          content="Fast towing & roadside assistance across Karnataka. Call now for quick highway help!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/towing-service" />
        <meta property="og:image" content="https://yourdomain.com/images/towing-truck.jpg" /> */}

      </Helmet>
      <Navbar />
      <Banner />

      <div id="services">
        <Services />
      </div>

      <div id="areas">
        <Areas />
      </div>

      <div id="why">
        <WhyUs />
      </div>

      <PortfolioSlider />
      
      <Footer />
    </>
  );
}


// ---------------- APP COMPONENT ----------------
function App() {
  return (
    <Router>
      <ScrollToHash />

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* City Pages */}
        <Route path="/towing-service-chitradurga" element={<Chitradurga />} />
        <Route path="/towing-service-ballari" element={<Bellary />} />
        <Route path="/towing-service-davanagere" element={<Davanagere />} />
        <Route path="/towing-service-shivamogga" element={<Shivamogga />} />
        <Route path="/towing-service-tumakuru" element={<Tumakuru />} />
        <Route path="/towing-service-hospete" element={<Hospete />} />

      </Routes>
    </Router>
  );
}

export default App;
