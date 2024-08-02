import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Autoplay, Pagination } from "swiper/modules";
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.png";
import m4 from "../../assets/m4.png";

export default function Slider() {
  return (
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[Autoplay, EffectCube, Pagination]}
        className="mySwiper w-52"
      >
        <SwiperSlide>
          <img src={m1} className="w-40 sm:w-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m2} className="w-40 sm:w-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m3} className="w-40 sm:w-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m4} className="w-40 sm:w-80" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
