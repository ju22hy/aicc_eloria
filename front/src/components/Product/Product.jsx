import React, { useState } from "react";
import "./Product.css";
import Weekly1 from "../Weekly_image_sample/weekly-image.jpg";
import Weekly3 from "../Weekly_image_sample/weeklyimg_neklace.jpg";

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="Product-Page">
      <div className="product-section">
        <div className="gender">
          <h1>WOMANS</h1>
        </div>
        <div className="item-menu">
          <button
            className={`menu-button ${
              activeCategory === "ALL" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("ALL")}
          >
            ALL
          </button>
          <button
            className={`menu-button ${
              activeCategory === "RING" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("RING")}
          >
            RING
          </button>
          <button
            className={`menu-button ${
              activeCategory === "EARRING" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("EARRING")}
          >
            EARRING
          </button>
          <button
            className={`menu-button ${
              activeCategory === "BRACELET" ? "active" : ""
            }`}
            onClick={() => handleCategoryClick("BRACELET")}
          >
            BRACELET
          </button>
        </div>
      </div>

      {/* 상품 이미지 섹션 */}
      <div className="section product-images top">
        <div className="product-img 1">
          <img src={Weekly1} alt="사진1"></img>
          <h2>상품명</h2>
          <p>KRW 00,000</p>
        </div>
        <div className="product-img 2">
          <img src={Weekly1} alt="사진2"></img>
          <h2>상품명</h2>
          <p>KRW 00,000</p>
        </div>
        <div className="product-img 3">
          <img src={Weekly3} alt="사진3"></img>
          <h2>상품명</h2>
          <p>KRW 00,000</p>
        </div>
        <div className="product-img 4">
          <img src={Weekly3} alt="사진4"></img>
          <h2>상품명</h2>
          <p>KRW 00,000</p>
        </div>
      </div>

      <div className="section product-images bottom">
        <div className="product-img 5">
          <img src={Weekly3} alt="사진5"></img>
          <h2>상품명</h2>
          <p>KRW 00,000</p>
        </div>
        <div className="product-img 6">
          <img src={Weekly3} alt="사진6"></img>
          <h2>상품명</h2>
          <p>KRW 00,000</p>
        </div>
        <div className="product-img 7">
          <img src={Weekly1} alt="사진7"></img>
          <h2>상품명</h2>
          <p>KRW 00,000</p>
        </div>
        <div className="product-img 8">
          <img src={Weekly1} alt="사진8"></img>
          <h2>상품명</h2>
          <p>KRW 00,000</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
