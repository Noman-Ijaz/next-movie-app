import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const ReviewCard = ({ data }) => {
  const ratingStars = data?.author_details.rating * 10;
  return (
    <Card alignItems="center" justifyContent="center" width="100%" mb={4}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        px={2}
        mb={3}
      >
        <Flex alignItems="center">
          <Image
            width="60"
            height="60"
            src={`https://image.tmdb.org/t/p/original/${data?.author_details.avatar_path}`}
            alt={data?.author_details.username}
            style={{
              borderRadius: "50%",
              marginRight: "5px",
              width: "60px",
              height: "60px",
            }}
          />
          <Heading as="h5" size="sm" color="teal">
            {data?.author_details.username == ""
              ? "none"
              : data.author_details.username}
          </Heading>
        </Flex>
        <Flex>
          <Heading as="h5" size="sm" color="themePrimary" mr={1}>
            Created at:
          </Heading>
          <Text fontSize="sm" color="themeTitle">
            {data?.created_at}
          </Text>
        </Flex>
      </Flex>
      <Text
        fontSize="xs"
        mb={3}
        color="themeTitle"
        maxH={35}
        px={4}
        overflow="hidden"
      >
        {data?.content}
      </Text>
      <Text fontSize="xs" mb={3} color="themeTitle">
        {data?.author_details.rating == null ? (
          "none"
        ) : (
          <Box
            color="#ccc"
            fontSize="18px"
            position="relative"
            margin={0}
            padding={0}
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
        )}
      </Text>
    </Card>
  );
};
