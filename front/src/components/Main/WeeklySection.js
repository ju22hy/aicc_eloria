import React from "react";

const WeeklySection = () => {
  return (
    <div class="container">
      <section class="weekly_best">
        <h1>WEEKLY BEST</h1>
        <p>금주의 베스트 인기 상품</p>

        <div class="best-items">
          <div class="item_left">상품명</div>
          <div class="item_right">
            상품영상상품영상상품명
            <br />
            간단한 상품설명상품설명상품설명
          </div>
          <div class="item item-small">상품명</div>
        </div>
      </section>
    </div>
  );
};

export default WeeklySection;
