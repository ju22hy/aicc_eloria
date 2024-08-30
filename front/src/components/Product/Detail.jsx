import React, { useEffect, useRef, useState } from "react";
import "./detail.css";
import { LuPlus, LuMinus } from "react-icons/lu";
import Detail1 from "../SubImage/product-ring1.jpg";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const stickyRef = useRef(null);
  const staticRef = useRef(null);
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const unitPrice = 12345; // 단가 설정

  // 총 가격 계산 함수
  const calculateTotalPrice = () => {
    return unitPrice * quantity;
  };

  // 수량 증가 함수
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // 수량 감소 함수
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // BUY NOW 버튼 클릭 핸들러
  const handleBuyNow = () => {
    console.log("BUY NOW 버튼이 클릭되었습니다.");
    navigate("/");
  };

  // ADD TO CART 버튼 클릭 핸들러
  const handleAddToCart = () => {
    const userConfirmed = window.confirm(
      "장바구니에 상품이 담겼습니다. 장바구니 페이지로 이동하시겠습니까?"
    );

    if (userConfirmed) {
      navigate("/cart");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const anchor = staticRef.current;
      const sticky = stickyRef.current;

      if (anchor && sticky) {
        const staticRect = anchor.getBoundingClientRect();
        // check if the element is above the client's viewport
        if (staticRect.top < 0) {
          const ratio = (staticRect.top / staticRect.height) * -1;
          const stickyRect = sticky.getBoundingClientRect();
          if (window.innerHeight < stickyRect.height) {
            const relativeHeight = stickyRect.height - window.innerHeight;
            const offset = ratio * relativeHeight;
            sticky.style.top = `-${offset}px`;
          } else {
            sticky.style.top = "0";
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="detail-container">
      <div className="image-container" ref={stickyRef}>
        <div className="image-gallery">
          <img className="main-p-img" src={Detail1} alt="제품 이미지" />
          <img className="concept-img" src={Detail1} alt="제품 추가 이미지 1" />
        </div>
      </div>
      <div className="product-details" ref={staticRef}>
        <div className="details-text-container">
          <h1 className="details-product-title">상품명상품명상품명</h1>
          <p className="details-product-price">
            KRW {unitPrice.toLocaleString()}
          </p>
          <p className="details-product-description">
            이 반지는 세련된 디자인과 우아한 매력을 겸비한 완벽한
            액세서리입니다.
            <br />
            고급스러운 스털링 실버로 제작되어 피부에 부드럽게 감기며, 내구성이
            뛰어나 일상적인 착용에도 적합합니다. <br />
            <br />
            중앙에 자리한 화려한 큐빅 지르코니아 스톤이 반짝이는 빛을 발산하여
            손끝에서부터 우아함을 더해줍니다. <br />
            미니멀한 디자인으로 어떤 스타일에도 자연스럽게 어울리며, 단독으로
            착용해도 충분히 돋보입니다. 심플한 라인과 정교한 세공은 트렌드를
            타지 않는 클래식한 아름다움을 선사합니다.
            <br />
            <br />
            일상에서도 착용 가능한 최고의 선택입니다.
          </p>
          <div className="quantity-selector">
            <div className="quantity-input">
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                min="1"
                readOnly
              />
              <LuPlus className="plus-icon" onClick={handleIncreaseQuantity} />
              <LuMinus
                className="minus-icon"
                onClick={handleDecreaseQuantity}
              />
            </div>
          </div>
          <p className="total-price">
            TOTAL: KRW {calculateTotalPrice().toLocaleString()}
          </p>
          <div className="button-container">
            <button className="buy-now" onClick={handleBuyNow}>
              BUY NOW
            </button>
            <button className="add-to-cart" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
