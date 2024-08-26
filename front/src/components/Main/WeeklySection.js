import React from "react";
import "./Weekly.css";

const WeeklySection = () => {
  return (
    <div class="weekly_container">
      <section class="weekly_best">
        <div class="weekly_banners">
          <div class="best_img"></div>
        </div>

        <div class="best_items">
          <div class="item_left">
            왼쪽 이미지<a href=""></a>
          </div>
          <div class="item_center">메인 이미지</div>
          <div class="item-right">오른쪽 이미지</div>
        </div>
      </section>
    </div>
  );
};

export default WeeklySection;
