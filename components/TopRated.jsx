import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ListingCard } from "../shared/ListingCard";
import { getTopRated } from "../pages/api/movie";
import { CustomSwiper } from "../shared/CustomSwiper";
import { Loader } from "../shared/Loader";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";

export const TopRated = () => {
  const [page, setPage] = useState(2);
  const { data, isLoading } = useQuery({
    queryKey: ["rated"],
    queryFn: (queryFn) => getTopRated(page),
    initialData: getTopRated(page),
  });
  return (
    <Grid>
      <GridItem>
        <Heading size="md" mb={4} color="themePrimary">
          Top Rated
        </Heading>
      </GridItem>
      <GridItem overflow="hidden">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CustomSwiper
              autoplay={{
                delay: 2000,
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
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                "@1.50": {
                  slidesPerView: 5,
                  spaceBetween: 20,
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
            <button onClick={() => setPage(page + 1)}>Load</button>
          </>
        )}
      </GridItem>
    </Grid>
  );
};
