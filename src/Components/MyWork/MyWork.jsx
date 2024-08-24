import React from "react";
import "./MyWork.css";
import Work from "/src/assets/mywork_data.js";
import themePattern from "/src/assets/theme_pattern.svg";
import Arrow from "/src/assets/arrow_icon.svg";
function MyWork() {
  return (
    <div id="Portfolio" className="work">
      <div className="work_header">
        <h1>My latest work</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="image_container">
        {Work.map((val, idx) => {
          return <img className="images" key={idx} src={val.w_img} alt="" />;
        })}
      </div>
      <div className="button">
        <p>Show More</p>
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
}

export default MyWork;
