import React from 'react'
import image from '/Users/iif/Code/Portfolio/src/assets/certificate.png'

export const Certification = () => {
  return (
    <>
      <div id='certification'>
          <h2>Certifications</h2>
          <div>

              <img src={ image } alt='Google IT Certificaiton'/>
              <a href='https://www.credly.com/badges/90891639-516e-4320-bc78-d0e3ae502cac'> Google IT Certification Verification</a>
          </div>
        </div>
    </>
  )
}
