import React from "react";
import "./Footer.css";
import logo from "/src/assets/logo.svg";
import User from "/src/assets/user_icon.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="upper_footer">
        <div className="left">
          <img src={logo} alt="" />
          <p>
            I am a frontend developer from, USA with 10 years of experience in
            companies like Microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="right">
          <div className="right_input">
            <img src={User} alt="" />
            <input type="email" placeholder="Enter your email" name="" id="" />
          </div>
          <div>
            <button>Suscribe</button>
          </div>
        </div>
      </div>
      {/* Below Horizontal Rule */}
      <hr />
      <div className="divs_lower">
        <div className="left_lower">
          <p>© 2023 Alex Bennett. All rights reserved. </p>
        </div>
        <div className="right_lower">
          <ul>
            <li>Term of Services</li>
            <li>Privacy Policy</li>
            <li> Connect with me</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
