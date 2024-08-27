import React from "react";
import './Celeb.css';

const CelebSection = () => {
  return (
    <div className='celeb-section'>
      <div className='title'>
        <h1>CELEB'S PICK</h1>
      </div>

      <div className='celeb-images'>
        <div className='celeb-img 1'>
          <img src='' alt='사진1'></img>
          <p>상품 설명 상품 설명</p>
        </div>
        <div className='celeb-img 2'>
          <img src='' alt='사진2'></img>
          <p>상품 설명 상품 설명</p>
        </div>
        <div className='celeb-img 3'>
          <img src='' alt='사진3'></img>
          <p>상품 설명 상품 설명</p>
        </div>
        <div className='celeb-img 4'>
          <img src='' alt='사진4'></img>
          <p>상품 설명 상품 설명</p>
        </div>
      </div>
    </div>
  );
};

export default CelebSection;