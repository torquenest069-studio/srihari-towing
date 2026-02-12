import React from 'react';
import FAQSection from '../components/FAQSection'

// Webpack way to import all images from your src/assets/review folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/review', false, /\.(png|jpe?g|svg)$/));

const PortfolioSlider = () => {
  // Double the images for a seamless loop
  const loopImages = [...images, ...images];

  return (
    <section className="portfolio-section">
      {/* The content-boundary centers the slider within your "green lines" */}
      <div className="content-boundary">
        <div className="header-text">
          <p className="subtitle">Proven on the Road, Praised on Google</p>
          <h2 className="title">Turning breakdowns into breakthroughs every day</h2>
        </div>

        <div className="slider-viewport">
          <div className="slider-track">
            {loopImages.map((src, index) => (
              <div key={index} className="portfolio-card">
                <img src={src} alt={`Review ${index + 1}`} />
                
              </div>
            ))}
          </div>
        </div>

        <div className="pagination-container">
          <div className="white-progress-bar">
            <div className="white-progress-fill">
          </div>
        </div>
      </div>
      <FAQSection pageKey="home"/></div>
    </section>
  );
};

export default PortfolioSlider;