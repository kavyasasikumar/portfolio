import React from 'react';
import "./about.css";
import Div from './div';
// import analytics from "./images/analytics.jpeg";


export default function About() {
    
  return(<><Div className="about_h1">
    <h1>about</h1>
  </Div>
  <div className="about">
        <div className="clip-path">
            <div class="curves"></div>
            <img src ={require('./images/analytics.jpeg')} className='clip' />
        </div>
        <p class="about_content">At Vdigbiz, our aim is to work at the intersection of health care and information technology to connect people and systems around the globe. We use the latest technology to create solutions that let healthcare communities engage in significant outcomes and improvements. It is our quest to relentlessly seek breakthrough innovation that will outline healthcare of the future. And we believe that what we do does not just impact the healthcare community – it impacts the world.</p>
            
    </div>
  </> );
}
