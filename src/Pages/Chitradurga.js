import React from 'react'
import { Helmet } from "react-helmet-async";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DynamicBanner from '../Utlys/Dynamicbanner'
import FAQSection from '../components/FAQSection'
import Services from '../components/Services'


const Chitradurga = () => {


  
  return (
    
    <div>
       <Helmet>
        <title>
          Towing Service in Chitradurga | 24/7 Emergency Roadside Help | 30 Min
        </title>

        <meta
          name="description"
          content="24 hour towing service in Chitradurga with fast roadside assistance, tow truck support & highway recovery across NH48, Hiriyur, Holalkere & nearby areas. 20-30 min response."
        />

        <meta
          name="keywords"
          content="towing service in Chitradurga, car towing service Chitradurga, tow truck Chitradurga, roadside assistance Chitradurga, emergency towing Chitradurga, 24 hour towing service Chitradurga, highway towing NH48, accident recovery Chitradurga"
        />

        <meta name="robots" content="index, follow" />

        {/* <link
          rel="canonical"
          href="https://yourdomain.com/towing-service-chitradurga"
        /> */}

        {/* Open Graph for WhatsApp / Facebook */}
        <meta
          property="og:title"
          content="24/7 Towing Service in Chitradurga | 20-30 Min Emergency Help"
        />

        <meta
          property="og:description"
          content="Fast car towing & roadside assistance in Chitradurga. Highway recovery across NH48, Hiriyur & Holalkere. Call now for quick emergency support."
        />

        {/* <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://yourdomain.com/towing-service-chitradurga"
        />

        <meta
          property="og:image"
          content="https://yourdomain.com/images/chitradurga-towing.jpg"
        /> */}
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
      If your vehicle breaks down, our towing service in Chitradurga provides immediate roadside assistance day and night. We operate a fully equipped tow truck fleet handling car towing service Chitradurga requests, accident recovery and emergency towing across city roads and highways. Our 24 hour towing service Chitradurga team reaches quickly near NH-48, NH-50 and surrounding towns to safely transport cars, bikes and commercial vehicles. Whether you are stuck at home,
	  on the bypass road or stranded late at night, our highway towing service in Chitradurga ensures reliable help within minutes. 
	  Drivers are trained to manage automatic and damaged vehicles with proper lifting methods to prevent further damage.
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
      <strong>We provide towing across:</strong> Hiriyur • Holalkere • Challakere •Hosdurga
      Molakalmuru • Bharamasagara • NH-48 • NH-50 • Bus Stand Area • Bypass Road
    </p>
  </div>
</div>
<Services/>
 
     <FAQSection pageKey="chitradurga"/>
     
     
     <Footer/>
    </div>
  )
}

export default Chitradurga
