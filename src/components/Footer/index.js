import React from "react";
import './style.css'
const Footer = () => {

  
  return (

    <div className="footer">
      <footer className=" footerText container-fluid footer bg-primary position-fixed bottom-100">

          <h6 className="footerText text-center">
            © 2021 Zakk Havok. Confidential and Proprietary. All Rights
            Reserved.
          
            <br></br>
            <br></br>
            <a
          className="footerLink link"
          href="https://github.com/zakklikeslamps">
          Checkout my Github
          </a>
        
          <a className="footerLink link"
          href="https://www.linkedin.com/in/zakk-haug-98b668200/">
          Find me on LinkedIn
          </a>
          
          <a className="footerLink link"
          href="mailto:zakklikeslamps@gmail.com">
          Email me
          </a>
          
          <a className="footerLink link"
          href="https://www.twitch.tv/zakk_havok">
          Follow me on Twitch
          </a>
          </h6>
        
      </footer>
    </div>

  );
};

export default Footer;