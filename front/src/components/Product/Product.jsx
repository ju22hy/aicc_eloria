import React, { useEffect, useState } from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    // 데이터 가져오기
    fetch('http://localhost:8080/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleProductClick = (productid) => {
    console.log(productid);
    // 상품을 클릭했을 때 productid를 URL에 포함하여 디테일 페이지로 이동
    navigate(`/product/${productid}`);
  };

  // 필터링된 제품 목록 생성 (카테고리에 따라)
  const filteredProducts = products.filter((product) => {
    if (activeCategory === 'ALL') return true;
    return product.productcategory === activeCategory;
  });

  return (
    <div className="Product-Page">
      <div className="product-section">
        <div className="gender">
          <h1>WOMANS</h1>
        </div>
        <div className="item-menu">
          <button
            className={`menu-button ${
              activeCategory === 'ALL' ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick('ALL')}
          >
            ALL
          </button>
          <button
            className={`menu-button ${
              activeCategory === 'RING' ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick('RING')}
          >
            RING
          </button>
          <button
            className={`menu-button ${
              activeCategory === 'EARRING' ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick('EARRING')}
          >
            EARRING
          </button>
          <button
            className={`menu-button ${
              activeCategory === 'BRACELET' ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick('BRACELET')}
          >
            BRACELET
          </button>
        </div>
      </div>

      {/* 상품 이미지 섹션 */}
      <div className="section product-images">
        {filteredProducts.map((product, index) => (
          <div
            key={product.productid}
            onClick={() => handleProductClick(product.productid)}
            className={`product-img ${index + 1}`}
          >
            <img
              src={`http://localhost:8080/img/${product.productimage}`}
              alt={product.product_name}
            />

            <div href="" className="product-text">
              <h2>{product.productname}</h2>
              <p>KRW {product.productprice.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
