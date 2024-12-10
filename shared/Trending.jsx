import { Button, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Trending = ({ data, action, movieId }) => {
  return (
    <>
      <Link
        href="/detail[/detail]"
        as={`/detail/${data.id}`}
        style={{ height: "400px", width: "100%" }}
      >
        <Card
          bgImage={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          color="themeWhite"
          height="100%"
          width="100%"
          justifyContent="flex-end"
          position="relative"
          zIndex="1"
          pb={8}
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
          <CardBody width="50%" textAlign="start" flex="0 0 0%">
            <Heading as="h5" size="sm" mb={2} color="themePrimary">
              {data?.title}
              {data?.original_name}
            </Heading>
            <Text
              fontSize="md"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              mb={3}
              color="themeTitle"
            >
              {data?.overview}
            </Text>
          </CardBody>
        </Card>
      </Link>
      <Button
        onClick={() => {
          action(), movieId(data?.id);
        }}
        backgroundColor="themePrimary"
        color="themeWhite"
        size="sm"
        position="absolute"
        left={5}
        bottom={5}
        zIndex={1111}
      >
        Watch
      </Button>
    </>
  );
};
