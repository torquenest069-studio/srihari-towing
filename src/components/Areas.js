import React from 'react';

const areas = ["Chitradurga", "Davanagere", "Tumakuru", "Hospete", "Ballari", "Shivamogga"];

// Webpack method to load all images from the Areas folder
const areaImages = require.context('../assets/Areas', false, /\.(png|jpe?g|svg)$/);

export default function Areas() {
  return (
    <section id="areas" className="section light">
      <h1 style={{ textAlign: 'center' }}>Service Areas</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>We provide towing across Karnataka</p>

      <div className="grid" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px', 
        justifyContent: 'center' 
      }}>
        {areas.map((city, i) => {
          let imgSrc;
          try {
            
            imgSrc = areaImages(`./${city}.jpeg`); 
          } catch (err) {
            // Fallback placeholder if an image is missing
            imgSrc = "https://via.placeholder.com/320x200?text=Service+Area";
          }

          return (
            <div className="card area" key={i} style={{ 
              width: '320px', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
              textAlign: 'center'
            }}>
              {/* Image forced to exactly 320x200px */}
              <img 
                src={imgSrc} 
                alt={city} 
                style={{ 
                  width: '320px', 
                  height: '200px', 
                  objectFit: 'cover', // Ensures the image fills the area without distortion
                  display: 'block'
                }} 
              />
              <div style={{ padding: '15px', fontWeight: 'bold' }}>
                📍 {city}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}