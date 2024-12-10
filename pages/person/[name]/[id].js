import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { PersonProfile } from "../../../components";
import { Loader } from "../../../shared/Loader";
import { getPersonDetail } from "../../api/movie";

export async function getServerSideProps(context) {
  const { params } = context;
  const personDetail = await getPersonDetail(params.id);

  return { props: { personDetail } };
}

export default function Person(props) {
  const params = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["person-detail"],
    queryFn: ({ queryKey }) => getPersonDetail(params.query.id),
    initialData: props.getPersonDetail,
  });

  if (isLoading) {
    return "loading";
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Grid gridTemplateColumns={"20% 80%"}>
          <GridItem>
            <Image
              src={`https://image.tmdb.org/t/p/original/${data?.profile_path}`}
              width="200"
              height="300"
              alt={`${data.name}`}
              style={{ borderRadius: "10px" }}
            />
          </GridItem>
          <GridItem px={4} pt={2}>
            <Heading as="h5" size="sm" mb={4} color="themePrimary">
              {data.name}
            </Heading>
            <Text fontSize="xs" color="themeTitle" mb={2}>
              {data.biography}
            </Text>
            <Box display="flex" alignItems="center" mb={3}>
              <Heading as="h5" size="xs" color="themePrimary">
                Dpartement:
              </Heading>
              <Text fontSize="xs" color="themeTitle" ml={2}>
                {data.known_for_department}
              </Text>
            </Box>
            <Box display="flex" alignItems="center" mb={3}>
              <Heading as="h5" size="xs" color="themePrimary">
                Birthday:
              </Heading>
              <Text fontSize="xs" color="themeTitle" ml={2}>
                {data.birthday}
              </Text>
            </Box>
            <Box display="flex" alignItems="center" mb={3}>
              <Heading as="h5" size="xs" color="themePrimary">
                Popularity:
              </Heading>
              <Text fontSize="xs" color="themeTitle" ml={2}>
                {data.popularity}
              </Text>
            </Box>
            <Box display="flex" alignItems="center" mb={3}>
              <Heading as="h5" size="xs" color="themePrimary">
                Place of birth:
              </Heading>
              <Text fontSize="xs" color="themeTitle" ml={2}>
                {data.place_of_birth}
              </Text>
            </Box>
            <Heading as="h5" size="xs" color="themePrimary" mb={3}>
              Also known for:
            </Heading>
            <Box
              display="flex"
              alignItems="center"
              flexWrap="wrap"
              gap={3}
              mb={3}
            >
              {data.also_known_as?.map((data, i) => (
                <Text key={i} fontSize="xs" color="themeTitle">
                  {data}
                </Text>
              ))}
            </Box>
            <PersonProfile id={data?.id} />
          </GridItem>
        </Grid>
      )}
    </>
  );
}
