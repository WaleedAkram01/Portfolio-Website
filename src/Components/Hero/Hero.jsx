import React from "react";
import "./Hero.css";
import ProfilePic from "/src/assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="Home" className="hero">
      <img src={ProfilePic} alt="" />
      <div className="text">
        <h1>
          <span>I'm Waleed Akram,</span> frontend <br /> developer based in
          PAKISTAN.
        </h1>
        <p>
          I am Frontend Developer from Lahore,Pakistan with 1 year of
          experience.
        </p>
      </div>
      <div className="buttons">
        <button className="button1">
          <AnchorLink className="anchor-link " offset={50} href="#Contact">
            Connect To me
          </AnchorLink>
        </button>
        <button className="button2">My resume</button>
      </div>
    </div>
  );
}

export default Hero;
