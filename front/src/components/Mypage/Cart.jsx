// components/Basket.js
import React from "react";
import { useRecoilValue } from "recoil";
import { basketState } from "../../recoil/atom";
import ProductInCart from "./ProductInCart";
import EmptyCart from "./EmptyCart";

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
      {/* <EmptyCart /> */}
    </div>
  );
};

export default Basket;
