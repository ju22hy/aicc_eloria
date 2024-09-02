import React, { useState } from "react";
import "./productincart.css";

const EmptyCart = () => {
  return (
    <div className="cart-container">
      <div className="cart-top">
        <table className="cart-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>상품명</th>
              <th>수량 변경</th>
              <th>결제금액</th>
              <th>선택</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="cart-buttons">
        <button className="delete-selected">선택상품 삭제</button>
        <div className="order-buttons">
          <button className="order-selected">선택상품 주문</button>
          <button className="order-all">전체상품 주문</button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
