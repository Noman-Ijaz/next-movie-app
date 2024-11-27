import { useQuery } from "@tanstack/react-query";
import { Trending } from "../shared/Trending";
import { getMovies } from "../pages/api/movie";
import { YTModal } from "./YTModal";
import { Skeleton, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { CustomSwiper } from "../shared/CustomSwiper";
import { SwiperSlide } from "swiper/react";

export const TrendingMovies = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [movieId, setMovieId] = useState();
  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
    initialData: getMovies,
  });

  return (
    <Skeleton isLoaded={!isLoading}>
      <CustomSwiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
            <Trending
              data={data}
              action={onOpen}
              movieId={(id) => setMovieId(id)}
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
      {movieId && (
        <YTModal isOpen={isOpen} onClose={onClose} movieId={movieId} />
      )}
    </Skeleton>
  );
};
