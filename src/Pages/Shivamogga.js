import React from 'react'
import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DynamicBanner from '../Utlys/Dynamicbanner'
import FAQSection from '../components/FAQSection'
import Services from '../components/Services'


const Shivmoga = () => {
  return (
    <div>
         <Helmet>
        <title>
          Towing Service in Shivamogga | 24/7 Emergency Help | 30 Mins
        </title>

        <meta
          name="description"
          content="24 hour towing service in Shivamogga with quick roadside assistance, tow truck support & emergency recovery across NH206, bypass roads & nearby Agumbe areas."
        />

        <meta
          name="keywords"
          content="towing service in Shivamogga, car towing service Shivamogga, tow truck Shivamogga, roadside assistance Shivamogga, emergency towing Shivamogga, 24 hour towing service Shivamogga, highway towing NH206, accident recovery Shivamogga"
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
      If your vehicle breaks down, our towing service in Shivamogga provides immediate roadside assistance anytime.
      Our tow truck Shivamogga team handles car towing service Shivamogga requests, emergency towing and vehicle transport across city roads, highways & ghats.
      The 24 hour towing service Shivamogga unit reaches breakdown locations near NH-206 and surrounding towns to safely move cars, bikes and SUVs without damage.
      Whether you are stuck during travel or late at night, trained operators ensure safe loading and quick response.
      Our team focuses on fast arrival and reliable service so you can continue your journey with minimal delay.
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
        <strong>We provide towing across:</strong> Highways
        NH-206, NH-169, NH-69 (towards Thirthahalli / Mangaluru route), SH-1 & SH-57
        
        Major Roads & Bypasses
        Shivamogga Bypass Road, Sagara Road, BH Road (Bangalore–Honnavar Road), Gadikoppa
        
        Towns Around Shivamogga
        Bhadravathi, Sagara, Thirthahalli, Soraba, Shikaripura, Hosanagara
        
        Accident-Prone / Heavy Traffic Zones
        Ghat road towards Agumbe & Hulikal ghat, Industrial area Bhadravathi, Bus stand & railway station roads, Toll / highway junction areas
    </p>
  </div>
</div>


   <Services/>
     
     <FAQSection pageKey="shivamogga"/>
     
     <Footer/>
    </div>
    
  )
}

export default Shivmoga
