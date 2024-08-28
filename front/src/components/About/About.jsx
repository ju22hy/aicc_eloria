import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-text">
          <p>ABOUT US</p>
        </div>

        <div className="about-img-wrapper">
          <div className="about-img">
            <img src="./image" alt="대표 이미지" />
          </div>
          <div className="about-logo-text">
            <div className="about-logo">
              <img src="./LOGO" alt="로고" />
            </div>
            <div className="logo-text">
              <p>
                가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
                가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
                가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
                가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
                가나다라마바사아자차카타파하 가나다라마바사아자차카타파하{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
