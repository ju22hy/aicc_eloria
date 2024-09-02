import React from "react";
import { useRecoilValue } from "recoil";
import { basketState } from "../../recoil/atom";
import ProductInCart from "./ProductInCart";
// import EmptyCart from "./EmptyCart";

const Cart = () => {
  const basket = useRecoilValue(basketState);

  // 장바구니에 상품이 있는지 확인
  const hasProductsInCart = basket && basket.length > 0;

  return (
    <div>
      <h1
        className="text-[48px] mt-[140px] pl-[80px]"
        style={{ fontWeight: "600" }}
      >
        MY CART
      </h1>
      <ProductInCart />
    </div>
  );
};

export default Cart;
