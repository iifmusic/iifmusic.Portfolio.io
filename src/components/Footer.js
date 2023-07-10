import React from 'react'
import iif from '/Users/iif/Code/Portfolio/src/assets/iifBlank.png'
import facebook from '/Users/iif/Code/Portfolio/src/assets/facebook.png'
import tiktok from '/Users/iif/Code/Portfolio/src/assets/tiktok.png'
import instagram from '/Users/iif/Code/Portfolio/src/assets/instagram.png'
import twitter from '/Users/iif/Code/Portfolio/src/assets/twitter.png'


const socialMediaLinks = [
  { name: 'TikTok', url: 'https://www.tiktok.com/@iifmusic', icon: tiktok  },
  { name: 'Facebook', url: 'https://www.facebook.com/iif.officialmusic', icon: facebook },
  { name: 'Instagram', url: 'https://www.instagram.com/iif_officialmusic/', icon: instagram },
  { name: 'Twitter', url: 'https://twitter.com/iif_officialmsc', icon: twitter },
];

const iconStyle = {
  width: '24px',
  height: '24px',
  marginRight: '8px',
};

export const Footer = () => {
  return (
    <div id='footer__container'>
      <span>
        <img src={iif} alt="iif"/>
      </span>
      <span className='links'>
        {socialMediaLinks.map((link) => (
          <a href={link.url} key={link.name}>
          <img src={link.icon} alt={link.name} style={iconStyle} />        </a>
        ))}
      </span>
      <div className='foot'>
        <footer className="footer">
          &copy; 2023 iif All rights reserved |
          <a className='footer__back' href='#top'> Back To top</a>
        </footer>
        </div>
    </div>
  )
}
