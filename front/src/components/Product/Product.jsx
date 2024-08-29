import React, { useState } from "react";
import "./Product.css";
import Ring1 from "../SubImage/product-ring1.jpg";
import Earring1 from "../SubImage/product-earring1.jpg";
import Earring2 from "../SubImage/product-earring2.jpg";
import Bracelet1 from "../SubImage/product-bracelet1.jpg";

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
      <div>
        <div className="section product-images top">
          <div className="product-img 1">
            <a href="">
              <img src={Ring1} alt="사진1"></img>
            </a>
            <a href="" className="product-text">
              <h2>CLASSIC BOLD RING</h2>
              <p>KRW 74,000</p>
            </a>
          </div>
          <div className="product-img 2">
            <a href="">
              <img src={Earring1} alt="사진2"></img>
            </a>
            <a href="" className="product-text">
              <h2>CECILE GOLD EARRINGS</h2>
              <p>KRW 112,000</p>
            </a>
          </div>
          <div className="product-img 3">
            <a href="">
              <img src={Bracelet1} alt="사진3"></img>
            </a>
            <a href="" className="product-text">
              <h2>BOLD PLUMP BRACELET</h2>
              <p>KRW 118,000</p>
            </a>
          </div>
          <div className="product-img 4">
            <a href="">
              <img src={Earring2} alt="사진4"></img>
            </a>
            <a href="" className="product-text">
              <h2>HOOP EARRINGS</h2>
              <p>KRW 63,000</p>
            </a>
          </div>
        </div>

        <div className="section product-images bottom">
          <div className="product-img 5">
            <a href="">
              <img src={Bracelet1} alt="사진5"></img>
            </a>
            <a href="" className="product-text">
              <h2>BOLD PLUMP BRACELET</h2>
              <p>KRW 164,000</p>
            </a>
          </div>
          <div className="product-img 6">
            <a href="">
              <img src={Ring1} alt="사진6"></img>
            </a>
            <a href="" className="product-text">
              <h2>FLAT RING</h2>
              <p>KRW 43,000</p>
            </a>
          </div>
          <div className="product-img 7">
            <a href="">
              <img src={Earring2} alt="사진7"></img>
            </a>
            <a href="" className="product-text">
              <h2>QUARTZ HOUSE EARRINGS</h2>
              <p>KRW 178,000</p>
            </a>
          </div>
          <div className="product-img 8">
            <a href="">
              <img src={Earring1} alt="사진8"></img>
            </a>
            <a href="" className="product-text">
              <h2>NATURAL BEAN EARRINGS</h2>
              <p>KRW 55,000</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
