import React from "react";
import "./Weekly.css";
import Weekly1 from "../Weekly_image_sample/top.jpg";
import Weekly2 from "../Weekly_image_sample/weeklyimg_ring1.jpg";
import Weekly3 from "../Weekly_image_sample/weeklyimg_neklace.jpg";
import Weekly4 from "../Weekly_image_sample/right.jpg";

const WeeklySection = () => {
  return (
    <section className="weekly-container">
      <div class="section section-top">
        <div class="section-left">
          <h1>WEEKLY BEST</h1>
          <h5>금주 베스트 셀러 상품</h5>
        </div>
        <div class="section-right">
          <img class="section-right-img" src={Weekly1} alt="베스트 상품" />
        </div>
      </div>

      <div class="section-weekly">
        <div class="best-item best-left">
          <img class="best-img" src={Weekly2} alt="상품 1" />
          <h3>상품 1</h3>
          <p class="description">상품설명 상품설명 상품설명</p>
          <p class="price">KRW 12,345</p>
        </div>
        <div class="best-item best-center">
          <img class="best-img" src={Weekly3} alt="상품 2" />
          <h3>상품 1</h3>
          <p class="description">상품설명 상품설명 상품설명</p>
          <p class="price">KRW 12,345</p>
        </div>
        <div class="best-item best-right">
          <img class="best-img" src={Weekly4} alt="상품 3" />
          <h3>상품 1</h3>
          <p class="description">상품설명 상품설명 상품설명</p>
          <p class="price">KRW 12,345</p>
        </div>
      </div>
    </section>
  );
};

export default WeeklySection;
