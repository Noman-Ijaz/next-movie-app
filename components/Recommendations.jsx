import { Flex, Tag } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getRecommendation } from "../pages/api/movie";
export const Recommendations = ({ id }) => {
  const { data } = useQuery({
    queryKey: ["recommended-movies"],
    queryFn: (queryFn) => getRecommendation(id),
    initialData: getRecommendation(id),
  });

  const recommend = data?.results?.slice(0, 8);
  return (
    <Flex flexWrap="wrap" gap={2} mt={3}>
      {recommend?.map((data, i) => (
        <Link href="/detail[/detail]" as={`/detail/${data.id}`} key={i}>
          <Tag
            size="sm"
            variant="solid"
            backgroundColor="themePrimary"
            colorScheme="themeWhite"
          >
            {data.title}
          </Tag>
        </Link>
      ))}
    </Flex>
  );
};
