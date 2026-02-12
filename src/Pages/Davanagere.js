import React from 'react'
import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DynamicBanner from '../Utlys/Dynamicbanner'
import FAQSection from '../components/FAQSection'
import Services from '../components/Services'


const Davangere = () => {
  return (
   <div>
    <Helmet>
        <title>
          Towing Service in Davanagere | 24/7 Emergency Help | 30 Mins
        </title>
          {/* <meta
          name="title"
          content="2Towing Service in Davanagere | 24/7 Emergency Help | 30 Mins."
        /> */}
        <meta
          name="description"
          content="24 hour towing service in Davanagere with fast roadside assistance, tow truck support & emergency recovery across NH48, PB Road, Bypass & nearby areas."
        />

        <meta
          name="keywords"
          content="towing service in Davanagere, car towing service Davanagere, tow truck Davanagere, roadside assistance Davanagere, emergency towing Davanagere, 24 hour towing service Davanagere, highway towing Davanagere, accident recovery Davanagere, breakdown assistance Davanagere, towing near NH48"
        />

        <meta name="robots" content="index, follow" />

        {/* <link
          rel="canonical"
          href="https://yourdomain.com/towing-service-davanagere"
        /> */}

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="24/7 Towing Service in Davanagere | Fast Roadside Assistance"
        />

        <meta
          property="og:description"
          content="Emergency car towing & roadside assistance in Davanagere. Quick recovery across NH48, PB Road & bypass areas. 30 min response."
        />

        
      </Helmet>
     <Navbar/>

     <DynamicBanner/>
      
          
  <div

  style={{
  width: "100%",          // Full horizontal background
    backgroundColor: "#ffffff",
    padding: "25px 0",
    borderBottom: "1px solid #eee"
  }}
>
  <div
    style={{
  width: "100%",        // Content stretches to fill page
      margin: "0",          // Forces alignment to the far left
      padding: "0 15px",    // Minimal padding so text doesn't touch the screen edge
      boxSizing: "border-box"
    }}
  >
    <p
      style={{
      fontSize: "14px",
        lineHeight: "1.6",
        color: "#000000",   // Pure black text for high contrast
        marginBottom: "12px",
        textAlign: "left"
      }}
    >
  
     If your vehicle stops suddenly, our towing service in Davangere provides quick roadside assistance at any hour. Our tow truck Davangere team handles car towing service Davangere requests, 
	 emergency towing and vehicle recovery across city roads and highways. 
	 The 24 hour towing service Davangere unit reaches breakdown locations near highways, bypass roads and residential areas to safely move cars and bikes without damage.
	 Whether you are stuck late night or during travel, our trained operators ensure reliable help and proper vehicle handling. 
	 We aim to reach fast and reduce waiting time so you can continue your journey without stress.
    </p>

   
    <p
      style={{
     width: "100%",      // Gray box also fits to page
        marginTop: "15px",
        fontSize: "13px",
        color: "#000000",
        backgroundColor: "#f5f5f5",
        padding: "12px",
        borderLeft: "4px solid #d32f2f", // Red accent line
        lineHeight: "1.5",
        textAlign: "left",
        boxSizing: "border-box"
      }}
    >
      <strong>We provide towing across:</strong> Hiriyur • Holalkere •
     Highways
 NH-48 (Bangalore – Pune highway), NH-169, SH-76, SH-47
 
 Major Roads & Bypasses
 PB Road, Bypass Road, APMC Yard Road, Ring Road area
 
 Towns Around Davangere
 Harihar, Honnali, Jagalur, Channagiri, Nyamathi
 
 Accident-Prone / Heavy Traffic Zones
 Toll plaza areas (NH48), Industrial area / KIADB area, Bus stand area, Railway station road
    </p>
  </div>
</div>
     <Services/>    
     <FAQSection pageKey="davanagere"/>
     
     <Footer/>
    </div>
  )
}

export default Davangere
