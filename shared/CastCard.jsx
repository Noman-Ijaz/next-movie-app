import { Heading, Text, Card, Flex } from "@chakra-ui/react";
import Image from "next/image";

export const CastCard = ({ data }) => {
  return (
    <Card
      width="100%"
      backgroundColor="themeSecondary"
      height="100%"
      overflow="hidden"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${data?.profile_path}`}
        width="200"
        height="300"
        alt={`${data?.name}`}
      />
      <Flex flexDirection="column" p={2}>
        <Heading as="h5" size="sm" mb={2} color="themePrimary">
          {data?.name}
        </Heading>
        <Text fontSize="xs" mb={3} color="themeTitle">
          {data?.character}
        </Text>
      </Flex>
    </Card>
  );
};
