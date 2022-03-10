import React from 'react';
import "./contact1.css"

export default function Contact1() {
  return (<><section class="contact">
  <div class="logo_contact">
      <h1 class="logo_name">
          vDigBiz
      </h1>
     <div class="icons">
    <i class="fa fa-facebook"></i> 
    <i class="fa fa-instagram"></i> 
     </div> 
    </div>
    <div class="mainlink">
    <div class="quicklinks">

      <h1 class="about_heading">Quick Links
          <p class="line link"></p></h1>
       
     
     <ul class="links">
         <li>Home</li>
         <li>About us</li>
         <li>Our Team</li>
         <li>Contact Us</li>
         <li>Services</li>
     </ul>   
      </div>
      <div class="touch">
          <h1 class="about_heading">Get in Touch
              <p class="line link"></p></h1>
        <p>15 WEST SQUARE DRIVE APT 6, ROCHESTER, NEW YORK, 14623</p>
        <p> +1 585 360 2434</p>
         <p> info@vdigbiz.com</p>  
      </div>
  </div>
</section>
<footer class="footer">
  <p>
      © 2022 vDigBiz | Meiiporul
  </p>
</footer></>);
}
