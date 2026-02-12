import React from 'react'
import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DynamicBanner from '../Utlys/Dynamicbanner'
import FAQSection from '../components/FAQSection'
import Services from '../components/Services'


const Tumkur = () => {
  return (
    <div>
        <Helmet>
        <title>Towing Service in Tumkur | 24/7 Emergency Help | 30 mins</title>

        <meta
          name="description"
          content="24 hour towing service in Tumkur with fast roadside assistance, tow truck support & emergency recovery across NH48, bypass roads & nearby areas."
        />

        <meta
          name="keywords"
          content="towing service in tumkur, car towing service tumkur, tow truck tumkur, roadside assistance tumkur, emergency towing tumkur, 24 hour towing service tumkur, highway towing service in tumkur, accident recovery tumkur, towing service near tumkur, breakdown assistance tumkur, towing company tumkur, heavy duty towing tumkur, roadside service tumkur, towing near NH48"
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
  fontSize: "14px",
        lineHeight: "1.6",
        color: "#000000",   // Pure black text for high contrast
        marginBottom: "12px",
        textAlign: "left"
    }}
  >
    <p
      style={{
        fontSize: "14px",
        lineHeight: "1.6",
        color: "#1a1a1a",
        marginBottom: "12px"
      }}
    >If your vehicle breaks down, our towing service in Tumkur provides quick roadside assistance at any hour. 
	Our tow truck Tumkur team handles car towing service Tumkur requests, emergency towing and safe vehicle transport across city roads and highways. 
	The 24 hour towing service Tumkur unit reaches breakdown locations near NH-48 and surrounding towns to move cars, bikes and SUVs without damage. Whether stranded late night or during travel, 
	trained operators ensure proper loading and fast response. We aim to reduce waiting time and provide reliable help so you can continue your journey safely!
     
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
 NH-48 (Bangalore–Pune highway), NH-73, SH-33, SH-84
 
 Major Roads & Bypasses
 Tumkur Ring Road, Bypass Road, Kyathsandra area, Sira Gate
 
 Towns Around Tumkur
 Sira, Tiptur, Gubbi, Kunigal, Pavagada, Madhugiri
 
 Accident-Prone / Heavy Traffic Zones
 Toll plaza areas (NH48), Industrial area (KIADB), Bus stand & railway station roads, Highway junctions near Sira & Kunigal, KB Cross
    </p>
  </div>
</div>
<Services/>
      <FAQSection pageKey="tumkur"/>
     
     <Footer/>
    </div>
)}

export default Tumkur
