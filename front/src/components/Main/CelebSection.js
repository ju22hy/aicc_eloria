import React, { useEffect } from "react";
import $ from "jquery"; // jQuery 임포트
import "./Celeb.css";
import Weekly1 from "../Weekly_image_sample/weekly-image.jpg";
import Weekly2 from "../Weekly_image_sample/weeklyimg_ring1.jpg";

const CelebSection = () => {
  useEffect(() => {
    // jQuery를 사용하여 .celeb-img에 마우스 효과 추가
    $(".celeb-img").hover(
      function () {
        $(this).addClass("hover");
      },
      function () {
        $(this).removeClass("hover");
      }
    );
  }, []);

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
          <p className="text">상품 설명 상품 설명</p>
          <p className="celeb-price">KRW 00,000</p>
        </div>
        <div className="celeb-img 2">
          <img src={Weekly1} alt="사진2"></img>
          <h2>상품명</h2>
          <p className="text">상품 설명 상품 설명</p>
          <p className="celeb-price">KRW 00,000</p>
        </div>
        <div className="celeb-img 3">
          <img src={Weekly2} alt="사진3"></img>
          <h2>상품명</h2>
          <p className="text">상품 설명 상품 설명</p>
          <p className="celeb-price">KRW 00,000</p>
        </div>
        <div className="celeb-img 4">
          <img src={Weekly1} alt="사진4"></img>
          <h2>상품명</h2>
          <p className="text">상품 설명 상품 설명</p>
          <p className="celeb-price">KRW 00,000</p>
        </div>
      </div>
    </section>
  );
};

export default CelebSection;
