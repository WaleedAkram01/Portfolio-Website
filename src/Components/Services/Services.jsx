import React from "react";
import "./Services.css";
import themePattern from "/src/assets/theme_pattern.svg";
import Services_Data from "/src/assets/services_data.js";
import Arrow from "/src/assets/arrow_icon.svg";
function Services() {
  return (
    <div id="Services" className="services">
      <div className="services_header">
        <h1>My Services</h1>
        <img src={themePattern} />
      </div>

      <div className="services_container">
        {Services_Data.map((val, idx) => {
          return (
            <div key={idx} className="containers">
              <p className="heading">{val.s_no}</p>
              <h1>{val.s_name}</h1>
              <p className="description">{val.s_desc}</p>
              <div className="footer_container">
                <p>Read more</p>
                <img src={Arrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
