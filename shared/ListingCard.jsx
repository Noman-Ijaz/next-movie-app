import {
  Card,
  CardBody,
  Text,
  Heading,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";

export const ListingCard = ({ data }) => {
  const ratingStars = data?.vote_average * 10;
  return (
    <Card
      backgroundColor="themeSecondary"
      height="100%"
      width="100%"
      alignItems="center"
      color="themePrimary"
    >
      <CardBody
        textAlign="center"
        p={0}
        pb={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          width="200"
          height="250"
          alt="movie"
          style={{ borderRadius: "8px", marginBottom: "8px" }}
        />
        <Heading as="h5" size="sm" mb={2}>
          {data?.title}
        </Heading>
        <Box
          color="#ccc"
          fontSize="18px"
          position="relative"
          margin={0}
          padding={0}
          marginTop="auto"
        >
          <Box
            style={{ width: `${ratingStars + "%"}` }}
            color="#e7711b"
            padding="0"
            position="absolute"
            zIndex={1}
            display="block"
            top={0}
            left={0}
            overflow="hidden"
          >
            <Text display="inline-block">★★★★★</Text>
          </Box>
          <Box padding={0} display="block" zIndex={0}>
            <Text>★★★★★</Text>
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};
