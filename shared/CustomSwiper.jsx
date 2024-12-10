import { Swiper } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const CustomSwiper = ({ children, ...props }) => {
  return (
    <Swiper
      slidesPerView={1}
      freeMode={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop={false}
      modules={[FreeMode, Autoplay, Pagination]}
      className="mySwiper"
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      {...props}
    >
      {children}
    </Swiper>
  );
};
