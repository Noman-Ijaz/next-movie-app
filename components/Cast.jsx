import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper";
import { getMovieCredit } from "../pages/api/movie";
import { CastCard } from "../shared/CastCard";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

export const Cast = ({ id }) => {
  const { data: credit, isLoading } = useQuery({
    queryKey: ["movie-credit"],
    queryFn: ({ queryKey }) => getMovieCredit(id),
    initialData: getMovieCredit(id),
  });

  if (isLoading) {
    return "loading";
  }

  return (
    <Grid mt={8}>
      <GridItem>
        <Heading size="md" mb={4} color="themePrimary">
          Cast
        </Heading>
      </GridItem>
      <GridItem overflow="hidden">
        <Swiper
          slidesPerView={1}
          freeMode={true}
          autoplay={{
            delay: 2500,
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {credit?.cast?.map((data, i) => (
            <SwiperSlide key={i} style={{ borderRadius: "8px" }}>
              <Link
                href="/person[/name][/id]"
                as={`/person/${data.name}/${data.id}`}
                style={{ width: "100%", height: "100%" }}
              >
                <CastCard data={data} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </GridItem>
    </Grid>
  );
};
