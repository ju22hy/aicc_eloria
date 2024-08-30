// components/Basket.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { basketState } from '../../recoil/atom';

const Basket = () => {
  const basket = useRecoilValue(basketState);

  return (
    <div>
      <h1>장바구니</h1>
      {basket.length > 0 ? (
        basket.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p>Your basket is empty</p>
      )}
    </div>
  );
};

export default Basket;
