import { Button, Card, CardBody, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { RightSideCard } from "../shared/RightSideCard";
import { getUpcoming } from "../pages/api/movie";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../shared/Loader";

export const UpcomingMoviesWidget = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["upcoming-movies"],
    queryFn: getUpcoming,
    initialData: [],
  });

  const { results } = data;

  const onlyThree = results?.slice(0, 3);

  return (
    <Card mb={8} backgroundColor="themeSecondary" borderRadius={20}>
      <CardBody>
        <Heading
          as="h5"
          size="sm"
          mb={2}
          textAlign="center"
          color="themePrimary"
        >
          Upcoming Movies
        </Heading>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {onlyThree?.map((data, i) => (
              <Link
                href="/detail[/detail]"
                as={`/detail/${data.id}`}
                key={i}
                style={{ marginBottom: "8px", display: "block" }}
              >
                <RightSideCard data={data} />
              </Link>
            ))}
          </>
        )}
        <Link href="/movie-collection[/name]" as={`/movie-collection/upcoming`}>
          <Button
            backgroundColor="themePrimary"
            color="themeWhite"
            size="sm"
            display="block"
            mx="auto   "
          >
            More
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};
