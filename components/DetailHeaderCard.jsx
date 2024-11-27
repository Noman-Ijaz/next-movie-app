import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
export const DetailHeaderCard = ({ data }) => {
  return (
    <Card
      bgImage={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      color="themeWhite"
      height="100%"
      width="100%"
      justifyContent="center"
      position="relative"
      zIndex="1"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgColor: "themeBlack",
        opacity: 0.8,
        zIndex: "-1",
      }}
    >
      <CardBody textAlign="start" flex="0 0 0%">
        <Flex>
          <Image
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
            width="200"
            height="400"
            alt="movie-poster"
            className="detai_header_card"
          />
          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="flex-start"
            p={4}
          >
            <Heading as="h5" size="sm" mb={2} color="themePrimary">
              {data?.original_title}
            </Heading>
            <Text fontSize="md" mb={3} color="themeTitle">
              {data?.overview}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
