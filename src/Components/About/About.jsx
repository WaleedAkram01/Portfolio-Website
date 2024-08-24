import React from "react";
import "./About.css";
import themePattern from "/src/assets/theme_pattern.svg";
import about_profile from "/src/assets/about_profile.svg";
function About() {
  return (
    <div id="About Me" className="About">
      <div className="main_text">
        <h1>About me</h1>
        <img src={themePattern} alt="" />
      </div>
      {/* *********** */}
      <div className="expl_about">
        <div className="about_left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about_right">
          <div className="para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="skills">
            <div className="skills_main">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skills_main">
              <p>TAILWIND CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="skills_main">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="skills_main">
              <p>REACT</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="experience">
        <div className="main_experience">
          <h1>1+</h1>
          <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="main_experience">
          <h1>20+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="main_experience">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
