import React from "react";
import "./Weekly.css";

const WeeklySection = () => {
  return (
    <body>
      <div class="section section-top">
        <div class="section-left">
          <h1>WEEKLY BEST</h1>
          <h5>금주 베스트 셀러 상품</h5>
        </div>
        <div class="section-right">
          <img class="section-right-img" src="" alt="쇼핑몰 로고" />
        </div>
      </div>

      <div class="section-weekly">
        <div class="product-item product-left">
          <img class="product-img" src="" alt="상품 1" />
          <h3>상품 1</h3>
          <p>상품 설명 상품 설명 가격</p>
        </div>
        <div class="product-item product-center">
          <img class="product-img" src="" alt="상품 2" />
          <h3>상품 2</h3>
          <p>상품 설명 상품 설명 가격</p>
        </div>
        <div class="product-item product-right">
          <img class="product-img" src="" alt="상품 3" />
          <h3>상품 3</h3>
          <p>상품 설명 상품 설명 가격</p>
        </div>
      </div>
    </body>
  );
};

export default WeeklySection;
