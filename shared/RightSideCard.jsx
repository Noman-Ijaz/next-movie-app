import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const RightSideCard = ({ data }) => {
  const { vote_average } = data;
  const rating = vote_average * 10;
  return (
    <Card backgroundColor={"themeInfo"} borderRadius={30} color="themeWhite">
      <CardBody display="flex" alignItems="center" p={3}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
          width="50"
          height="50"
          alt="mini-card"
          style={{ borderRadius: "10px", height: "50px", width: "50px" }}
        />
        <Flex flexDirection="column" ml={2} mr={12} flexGrow="1">
          <Text fontSize="md">{data?.title}</Text>
          <Text fontSize="xs" color="themeTitle">
            {data?.release_date}
          </Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path
              className="circle"
              strokeDasharray={`${rating}, 100`}
              d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <Text fontSize="xs" color="themeTitle" position="absolute">
            {rating}%
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
