// components/Basket.js
import React from "react";
import { useRecoilValue } from "recoil";
import { basketState } from "../../recoil/atom";
import ProductInCart from "./ProductInCart";

const Basket = () => {
  const basket = useRecoilValue(basketState);

  return (
    <div>
      <h1
        className="text-[48px] mt-[140px] pl-[80px]"
        style={{ fontWeight: "600" }}
      >
        MY CART
      </h1>
      <ProductInCart />
      {/* {basket.length > 0 ? (
        basket.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p>Your basket is empty</p>
      )} */}
    </div>
  );
};

export default Basket;
