import React, { useEffect, useRef, useState } from "react";
import "./detail.css";
import { LuPlus, LuMinus } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const stickyRef = useRef(null);
  const staticRef = useRef(null);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { productid } = useParams();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // 데이터 가져오기
    fetch(`http://localhost:8080/api/products/${productid}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [productid]);
  // console.log(product.productname);

  // 총 가격 계산 함수
  const calculateTotalPrice = () => {
    const priceString = product?.productprice || "0";
    const price = parseFloat(priceString.replace(/,/g, ""));
    return price * quantity;
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
    const userConfirmed = window.confirm(
      "상품 구입이 완료되었습니다. 목록으로 이동하시겠습니까?"
    );

    if (userConfirmed) {
      navigate("/category1");
    }
  };

  // ADD TO CART 버튼 클릭 핸들러
  const handleAddToCart = () => {
    const userConfirmed = window.confirm(
      "장바구니에 상품이 담겼습니다. 장바구니 페이지로 이동하시겠습니까?"
    );

    // 장바구니에 상품 추가 요청
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

  if (!product) {
    console.log(product);
    return <div>Loading...</div>; // 데이터를 로드하는 동안 로딩 메시지를 표시
  }

  return (
    <div className="detail-container">
      <div className="image-container" ref={stickyRef}>
        <div className="image-gallery">
          <img
            className="main-p-img"
            src={`http://localhost:8080/img/${product.productimage}`}
            alt="메인 이미지"
          />
          <img
            className="concept-img"
            src={product.productimage2}
            alt="컨셉 이미지"
          />
        </div>
      </div>
      <div className="product-details" ref={staticRef}>
        <div className="details-text-container">
          <h1 className="details-product-title">{product.productname}</h1>
          <p className="details-product-price">
            KRW {product.productprice?.toLocaleString()}
          </p>
          <p className="details-product-description">
            {product.productdescription}
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
