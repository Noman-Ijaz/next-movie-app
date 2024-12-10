import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getMoviesCollection } from "../api/movie";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { ListingCard } from "../../shared/ListingCard";
import { Loader } from "../../shared/Loader";

export async function getServerSideProps(context) {
  const { params } = context;
  const collection = await getMoviesCollection(params.name);
  return { props: { collection } };
}

export default function MovieCollection(props) {
  const params = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie-collection"],
    queryFn: ({ queryKey }) => getMoviesCollection(params.query.name),
    initialData: props.collection,
  });

  if (isLoading) {
    return "loading";
  }

  return (
    <Grid>
      <GridItem
        borderRadius={30}
        p={4}
        color="white"
        backgroundColor="themePrimary"
        mb={8}
      >
        <Heading as="h5" size="sm" textAlign="center">
          {params.query.name == "popular" ? "Popular " : "Upcoming "}Movies
        </Heading>
      </GridItem>
      {isLoading ? (
        <Loader />
      ) : (
        <GridItem overflow="hidden">
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            {data?.results?.map((data, i) => (
              <GridItem key={i}>
                <Link href="/detail[/detail]" as={`/detail/${data.id}`}>
                  <ListingCard data={data} />
                </Link>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      )}
    </Grid>
  );
}
