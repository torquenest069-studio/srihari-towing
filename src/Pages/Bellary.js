import React from 'react'
import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DynamicBanner from '../Utlys/Dynamicbanner'
import FAQSection from '../components/FAQSection'
import Services from '../components/Services'


const Bellary = () => {
  return (
    <div>
         <Helmet>
        <title>Towing Service in Bellari | 24/7 Emergency Help | 30 mins</title>

        <meta
          name="description"
          content="24 hour towing service in Bellari with fast roadside assistance, tow truck support & emergency recovery across NH50, NH67, Mining Road & nearby areas."
        />

        <meta
          name="keywords"
          content="towing service in bellari, car towing service bellari, tow truck bellari, roadside assistance bellari, emergency towing bellari, 24 hour towing service bellari, highway towing service bellari, accident recovery bellari, breakdown assistance bellari, heavy duty towing bellari, towing near NH50, towing near NH67"
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
     
   
If your vehicle breaks down, our towing service in Bellari provides quick roadside assistance anytime. 
Our tow truck Bellari team handles car towing service Bellari requests, emergency towing and vehicle transport across city roads and highways.
 The 24 hour towing service Bellari unit reaches breakdown locations near NH-50, NH-67 and surrounding towns to safely move cars, bikes and commercial vehicles without damage.
 Whether stuck late night or during travel, trained operators ensure safe loading and fast response. 
 We focus on reducing waiting time and delivering reliable help so you can continue your journey smoothly.
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
      <strong>We provide towing across:</strong>Highways
 NH-50, NH-67, SH-19, SH-132
 
 Major Roads & Bypasses
 Bellari Bypass Road, Cantonment area, Infantrypass Road, Moka Road, Hospet Road
 
 Towns Around Tumkur
 Siruguppa, Kampli, Kurugodu, Sandur, Toranagallu
 
 Accident-Prone / Heavy Traffic Zones
 JSW Steel Plant road (Toranagallu), Mining belt roads, Toll plazas & truck routes, Bus stand & railway station road
    </p>
  </div>
</div>
     <Services/>
     <FAQSection pageKey="bellari" />
     
     <Footer/>
    </div>
   
  )
}

export default Bellary
