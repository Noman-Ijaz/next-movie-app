import { CustomSwiper } from "../shared/CustomSwiper";
import { getSmilarMovies } from "../pages/api/movie";
import { useQuery } from "@tanstack/react-query";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import { ListingCard } from "../shared/ListingCard";
import { Grid, GridItem, Heading } from "@chakra-ui/react";

export const SimilarMovies = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["similar-movie"],
    queryFn: ({ queryKey }) => getSmilarMovies(id),
    initialData: getSmilarMovies(id),
  });

  if (isLoading) {
    return "loading";
  }

  return (
    <Grid>
      <GridItem>
        <Heading size="md" mb={4} color="themePrimary">
          Similar Movies
        </Heading>
      </GridItem>
      <GridItem overflow="hidden">
        <CustomSwiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {data?.results?.map((data, i) => (
            <SwiperSlide key={i} style={{ borderRadius: "8px" }}>
              <Link
                href="/detail[/detail]"
                as={`/detail/${data.id}`}
                style={{ width: "100%", height: "100%" }}
              >
                <ListingCard data={data} />
              </Link>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </GridItem>
    </Grid>
  );
};
