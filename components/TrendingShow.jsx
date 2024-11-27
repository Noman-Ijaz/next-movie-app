import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, FreeMode } from "swiper";
import { Trending } from "../shared/Trending";
import { getShows } from "../pages/api/movie";

export const TrendingShow = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["shows"],
    queryFn: getShows,
    initialData: getShows,
  });

  if (isLoading) {
    return "loading";
  }

  return (
    <Swiper
      slidesPerView={1}
      freeMode={true}
      autoplay={{
        delay: 100,
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
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
    >
      {data?.results?.map((data, i) => (
        <SwiperSlide key={i} style={{ borderRadius: "8px" }}>
          <Trending data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
