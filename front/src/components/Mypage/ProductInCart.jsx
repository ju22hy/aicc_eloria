import React, { useState } from "react";
import "./productincart.css";
import { LuPlus, LuMinus } from "react-icons/lu";
import Ring1 from "../SubImage/product-ring1.jpg";

const ProductInCart = () => {
  const initialProducts = [
    {
      id: 1,
      image: Ring1,
      name: "SQUARE TANZ R. II",
      price: 109000,
      quantity: 1,
      checked: false,
    },
    {
      id: 2,
      image: Ring1,
      name: "SQUARE TANZ R. I",
      price: 63000,
      quantity: 1,
      checked: false,
    },
    // 추가되는 상품 데이터는 여기에 추가
  ];

  const [products, setProducts] = useState(initialProducts);
  const [allChecked, setAllChecked] = useState(false);

  // 개별 체크박스 상태 변경
  const handleCheckboxChange = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(updatedProducts);
    setAllChecked(updatedProducts.every((product) => product.checked));
  };

  // 전체 선택 체크박스 상태 변경
  const handleAllCheckboxChange = () => {
    const newAllCheckedStatus = !allChecked;
    const updatedProducts = products.map((product) => ({
      ...product,
      checked: newAllCheckedStatus,
    }));
    setProducts(updatedProducts);
    setAllChecked(newAllCheckedStatus);
  };

  // 수량 증가 함수
  const handleIncreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  // 수량 감소 함수
  const handleDecreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  // 총 결제금액 계산 함수
  const calculateTotalPrice = () => {
    return products.reduce(
      (total, product) =>
        total + (product.checked ? product.price * product.quantity : 0),
      0
    );
  };

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allChecked}
                onChange={handleAllCheckboxChange}
              />
            </th>
            <th>상품명</th>
            <th>수량 변경</th>
            <th>결제금액</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="checkbox-td">
                <input
                  type="checkbox"
                  checked={product.checked}
                  onChange={() => handleCheckboxChange(product.id)}
                />
              </td>
              <td className="product-info">
                <img src={product.image} alt={product.name} />
                <span>{product.name}</span>
              </td>
              <td>
                <div className="quantity-td">
                  <input
                    type="number"
                    value={product.quantity}
                    min="1"
                    readOnly
                  />
                  <LuPlus
                    className="plus-icon"
                    onClick={() => handleIncreaseQuantity(product.id)}
                  />
                  <LuMinus
                    className="minus-icon"
                    onClick={() => handleDecreaseQuantity(product.id)}
                  />
                </div>
              </td>
              <td className="price-td">
                KRW {(product.price * product.quantity).toLocaleString()}
              </td>
              <td>
                <div className="option-td">
                  <button
                    className="cart-delete"
                    onClick={() => {
                      console.log(`${product.name} removed`); //기능 현재는 없음 버튼 핸들러만 구현
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    className="cart-order"
                    onClick={() => {
                      console.log(`${product.name} removed`); //기능 현재는 없음 버튼 핸들러만 구현
                    }}
                  >
                    주문하기
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">
        <div className="cart-caution">
          <p>* 장바구니에 담긴 상품은 최대 90일간 유지됩니다.</p>
          <p>* ELORIA의 회원이라면, 무조건 배송비 무료입니다.</p>
        </div>
        <div className="c-total-price">
          <p>TOTAL:</p>
          <p>KRW {calculateTotalPrice().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
