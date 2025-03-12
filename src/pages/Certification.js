import React from 'react'
import image from '/Users/iif/Code/iifmusic.Portfolio.io/src/assets/google it.png'
import image2 from '/Users/iif/Code/iifmusic.Portfolio.io/src/assets/google marketing .png'

export const Certification = () => {
  return (
    <div id='certification'>
      <h2>Certifications</h2>
      <div className="certification-container">
        <div className="certification-item">
          <img src={image} alt="Google IT Certification" />
          <a href="https://www.credly.com/badges/90891639-516e-4320-bc78-d0e3ae502cac">
            Google IT Certificate Verification
          </a>
        </div>
        <div className="certification-item">
          <img src={image2} alt="Google Marketing Certification" />
          <a href="https://coursera.org/share/14c583fc68e25dbb1bfe826eaa4dc3c0">
            Google Marketing & E-Commerce Verification
          </a>
        </div>
      </div>
    </div>
  );
};

