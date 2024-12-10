import { Box, Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const ActingListingCard = ({ data }) => {
  const { vote_average } = data;
  const rating = Math.round(vote_average);
  return (
    <Card
      backgroundColor={"themeInfo"}
      borderTopRightRadius={30}
      borderBottomRightRadius={30}
      borderLeft="4px solid"
      borderColor="themePrimary"
      color="themeWhite"
      mb={4}
    >
      <CardBody
        p={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Link href="/detail[/detail]" as={`/detail/${data.id}`}>
            <Heading as="h6" size="xs" color="themeWhite">
              {data.title}
            </Heading>
          </Link>
          <Text color="themePrimary">as</Text>
          <Text color="themeTitle">{data.character}</Text>
        </Box>

        <Flex justifyContent="center" alignItems="center">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle"
              strokeDasharray={`${rating * 10}, 100`}
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <Text fontSize="xs" color="themeTitle" position="absolute">
            {rating * 10}%
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
