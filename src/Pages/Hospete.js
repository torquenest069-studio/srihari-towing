import React from 'react'
import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DynamicBanner from '../Utlys/Dynamicbanner'
import FAQSection from '../components/FAQSection'
import Services from '../components/Services'

const Hospete = () => {
  return (
        <div>
        <Helmet>
        <title>Towing Service in Hospet | 24/7 Emergency Help | 30 mins</title>

        <meta
          name="description"
          content="24 hour towing service in Hospet with quick roadside assistance, tow truck support & emergency recovery near Hampi, TB Dam Road, NH50 & nearby areas."
        />

        <meta
          name="keywords"
          content="towing service in hospet, car towing service hospet, tow truck hospet, roadside assistance hospet, emergency towing hospet, 24 hour towing service hospet, highway towing service hospet, accident recovery hospet, towing service near hampi, breakdown assistance hospet, heavy duty towing hospet, roadside service hospet"
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
    >If your vehicle breaks down, our towing service in Hospet provides immediate roadside assistance anytime. 
	Our tow truck Hospet team handles car towing service Hospet requests, emergency towing and safe vehicle transport across city roads and highways.
	The 24 hour towing service Hospet unit reaches breakdown locations near NH-50, Hampi road and surrounding towns to move cars, bikes and SUVs without damage.
	Whether stranded late night or during travel, trained operators ensure safe loading and quick response. 
	We focus on reducing waiting time and delivering reliable help so you can continue your journey safely.
     
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
 NH-50, SH-49, SH-132
 
 Major Roads & Bypasses
 Hospet Bypass Road, Station Road, College Road, Dam Road (towards Tungabhadra dam)
 
 Towns Around Tumkur
 Hampi, Kamalapur, Koppal, Munirabad, Gangavathi
 
 Accident-Prone / Heavy Traffic Zones
 Hampi tourist road, Tungabhadra dam road, Mining transport routes, Bus stand & railway station road
    </p>
  </div>
</div>
   <Services/>




        <FAQSection pageKey="hospet"/>
     
     <Footer/>
    </div>
  )
}

export default Hospete

