import { Grid, GridItem, Heading, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getPersonActingRecords } from "../pages/api/movie";
import { ActingListingCard } from "../shared/ActingListingCard";
import { RightSideCard } from "../shared/RightSideCard";

export const PersonProfile = ({ id }) => {
  const { data: acting, isLoading } = useQuery({
    queryKey: ["person-acting-career"],
    queryFn: (queryFn) => getPersonActingRecords(id),
    initialData: getPersonActingRecords(id),
  });
  return (
    <Grid borderTop="1px solid" borderColor="themePrimary">
      <GridItem my={4}>
        <Heading as="h5" size="sm" color="themePrimary">
          Acting Career
        </Heading>
      </GridItem>
      <Skeleton isLoaded={!isLoading}>
        {acting?.cast?.map((data, i) => (
          <GridItem key={i}>
            <ActingListingCard data={data} />
          </GridItem>
        ))}
      </Skeleton>
    </Grid>
  );
};
