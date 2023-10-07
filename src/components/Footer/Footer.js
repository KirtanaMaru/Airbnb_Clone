import React from 'react'
import './Footer.css';
import browser from '../../images/browser.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter-sign.png';
import instagram from '../../images/instagram.png';


function Footer() {
 
  return (
    <div className='footer'>
      <p style={{fontSize:'21px',fontWeight:'600',lineHeight:'25px'}}>Inspiration for future getaways</p>
      <div className="footer-item1">
        <p>Popular</p>
        <p>Art Culture</p>
        <p>Outdoor</p>
        <p>Mountains</p>
        <p>Beach</p>
        <p>Outdoor</p>
        <p>Mountains</p>
        <p>Beach</p>
      </div>
      <div className='support'>
        <div style={{fontSize:'15px'}}>
          <p style={{fontWeight:'600'}}>Support</p>
          <p>Help Centre</p>
          <p>AirCover</p>
          <p>Anti-discrimination</p>
          <p>Disability support</p>
          <p>Cancellation options</p>
          <p>Report neightbourhood concern</p>
        </div>
        <div>
            <p style={{fontWeight:'600'}}>Hosting</p>
            <p>Airbnb your home</p>
            <p>AirCover for Hosts</p>
            <p>Hosting resources</p>
            <p>Community forum</p>
            <p>Hosting responsibly</p>
        </div>
        <div>
            <p style={{fontWeight:'600'}}>Airbnb</p>
            <p>Newsroom</p>
            <p>New features</p>
            <p>Careers</p>
            <p>Investor</p>
            <p>Airbnb.org emergency stays</p>
        </div>
      </div>
      <div className='copyright'>
        <p>© 2023 Airbnb, Inc. <span>
        <ul style={{display:'flex',gap:'50px',marginTop:'-20px',marginLeft:'120px'}}>
          <li>Privacy</li> 
          <li>Terms</li>
          <li>Site</li>
          <li>Map</li>
          <li>Company Details</li>
        </ul>
        </span>
        </p>
        <div className='socialmedia'>
            <img src={browser} alt='browser' className='browser'></img>
            <div>English(IN) </div>
            <div>&#8377;INR </div>
            <img src={facebook} alt='facebookimg' className='facebook'></img>
            <img src={twitter} alt='twitterimg' className='twitter'></img>
            <img src={instagram} alt='instagramimg' className='instagram'></img>
        </div>
        
        
        </div>
    </div>
  )
}

export default Footer
