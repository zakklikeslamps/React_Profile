import React from "react";

const Footer = () => {

  
  return (

    <div>
      <footer className="footer container-fluid footer bg-primary position-fixed bottom-100">

          <h6 className="text-center">
            © 2021 Zakk Havok. Confidential and Proprietary. All Rights
            Reserved.
          
            <br></br>
            <a
          className="link"
          href="https://github.com/zakklikeslamps">
          Checkout my Github
          </a>
        
          <a className="link"
          href="https://www.linkedin.com/in/zakk-haug-98b668200/">
          Find me on LinkedIn
          </a>
          
          <a className="link"
          href="mailto:zakklikeslamps@gmail.com">
          Email me
          </a>
          
          <a className="link"
          href="https://www.twitch.tv/zakk_havok">
          Follow me on Twitch
          </a>
          </h6>
        
      </footer>
    </div>

  );
};

export default Footer;