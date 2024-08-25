import React, { useRef, useState, useEffect } from "react";
import Slide1 from "../SlideImage/Slide1.jpg";
import Slide2 from "../SlideImage/Slide5.jpg";
import Slide3 from "../SlideImage/Slide4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./herosection.css";

const HeroSection = () => {
  // Swiper 인스턴스를 저장하기 위한 useRef
  const swiperRef = useRef(null);

  // 현재 마우스가 왼쪽이나 오른쪽에 있는지 저장
  const [hoverSide, setHoverSide] = useState("");

  useEffect(() => {
    // Swiper 인스턴스를 가져와서 네비게이션 업데이트
    if (swiperRef.current) {
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  // 마우스가 버튼 위에 있을 때 함수 호출
  const handleMouseEnter = (side) => {
    setHoverSide(side);
  };

  // 마우스가 버튼 밖에 있을 때 함수
  const handleMouseLeave = () => {
    setHoverSide(""); // 상태 초기화 버튼 숨기기
  };

  return (
    <div
      // 클래스 이름을 상태에 따라 동적으로 변경
      className={`swiper-container ${
        hoverSide === "left"
          ? "hover-left"
          : hoverSide === "right"
          ? "hover-right"
          : ""
      }`}
      // 마우스 움직임 이벤트 핸들러
      onMouseMove={(e) => {
        const { clientX } = e; // 마우스 x 좌표
        const { offsetWidth, offsetLeft } = e.currentTarget; // 컨테이너의 너비와 왼쪽 오프셋을 가져옴
        const center = offsetWidth / 2; // 컨테이너의 중앙 x 좌표를 계산

        // 마우스가 컨테이너의 중앙보다 왼쪽에 있으면 왼쪽 버튼을 보이게 함
        if (clientX < center + offsetLeft) {
          setHoverSide("left");
        } else {
          // 그렇지 않으면 오른쪽 버튼을 보이게 함
          setHoverSide("right");
        }
      }}
      // 마우스가 컨테이너에서 벗어났을 때 호출되는 이벤트 핸들러
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={300}
        loop={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slide3} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="img3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
