import React from "react";
import "./Celeb.css";
import Weekly1 from "../Weekly_image_sample/weekly-image.jpg";
import Weekly2 from "../Weekly_image_sample/weeklyimg_ring1.jpg";

const CelebSection = () => {
  return (
    <section>
      <div className="celeb-section">
        <div className="title">
          <h1>CELEB'S PICK</h1>
        </div>
      </div>

      <div className="celeb-images">
        <div className="celeb-img 1">
          <img src={Weekly2} alt="사진1"></img>
          <h2>상품명</h2>
          <p>상품 설명 상품 설명</p>
        </div>
        <div className="celeb-img 2">
          <img src={Weekly1} alt="사진2"></img>
          <h2>상품명</h2>
          <p>상품 설명 상품 설명</p>
        </div>
        <div className="celeb-img 3">
          <img src={Weekly2} alt="사진3"></img>
          <h2>상품명</h2>
          <p>상품 설명 상품 설명</p>
        </div>
        <div className="celeb-img 4">
          <img src={Weekly1} alt="사진4"></img>
          <h2>상품명</h2>
          <p>상품 설명 상품 설명</p>
        </div>
      </div>
    </section>
  );
};

export default CelebSection;
