import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-section">
        <div className="about-text">
          <p>ABOUT US</p>
        </div>
      </div>

      <div className="about-img">
        <img src=".logo" alt="대표 이미지" />
      </div>
    </div>
  );
};

export default About;
