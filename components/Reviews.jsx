import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { SwiperSlide } from "swiper/react";
import { getMovieReviews } from "../pages/api/movie";
import { ReviewCard } from "../shared/ReviewCard";
import { CustomSwiper } from "../shared/CustomSwiper";

export const Reviews = ({ id }) => {
  const { data } = useQuery({
    queryKey: ["movie-review"],
    queryFn: ({ queryKey }) => getMovieReviews(id),
    initialData: getMovieReviews(id),
  });
  return (
    <Grid my={8}>
      <GridItem>
        <Heading size="md" mb={4} color="themePrimary">
          Reviews
        </Heading>
      </GridItem>
      <GridItem overflow="hidden">
        {data?.results >= "1" ? (
          <CustomSwiper>
            {data?.results.map((data, i) => (
              <SwiperSlide key={i} style={{ borderRadius: "8px" }}>
                <ReviewCard data={data} />
              </SwiperSlide>
            ))}
          </CustomSwiper>
        ) : (
          <Box
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading size="md" mb={4} color="themePrimary">
              No Review
            </Heading>
          </Box>
        )}
      </GridItem>
    </Grid>
  );
};
