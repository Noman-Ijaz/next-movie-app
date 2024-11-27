import { Grid } from "@chakra-ui/react";
import { PopularMoviesWidget } from "./PopularMoviesWidget";
import { UpcomingMoviesWidget } from "./UpcomingMoviesWidget";

export const RightSideBar = () => {
  return (
    <Grid>
      <PopularMoviesWidget />
      <UpcomingMoviesWidget />
    </Grid>
  );
};
