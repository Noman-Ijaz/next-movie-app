import { Grid, Card, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const LeftSideBar = () => {
  const router = useRouter();

  return (
    <Grid pr={8}>
      <Link href="/" style={{ marginBottom: "8px", display: "block" }}>
        <Box maxW={"100%"} w={200}>
          <Card
            sx={{
              ...(!router.query.name
                ? {
                    backgroundColor: "themePrimary",
                  }
                : {
                    backgroundColor: "themeSecondary",
                  }),
            }}
            borderRadius={30}
            p={4}
            color="themeWhite"
          >
            Home
          </Card>
        </Box>
      </Link>
      <Link
        href="/movie-collection[/name]"
        as={`/movie-collection/popular`}
        style={{ marginBottom: "8px", display: "block" }}
      >
        <Box maxW={"100%"} w={200}>
          <Card
            sx={{
              ...(router.query.name == "popular"
                ? {
                    backgroundColor: "themePrimary",
                  }
                : {
                    backgroundColor: "themeSecondary",
                  }),
            }}
            borderRadius={30}
            p={4}
            color="themeWhite"
          >
            Popular
          </Card>
        </Box>
      </Link>
      <Link
        href="/movie-collection[/name]"
        as={`/movie-collection/upcoming`}
        style={{ marginBottom: "8px", display: "block" }}
      >
        <Box maxW={"100%"} w={200}>
          <Card
            sx={{
              ...(router.query.name == "upcoming"
                ? {
                    backgroundColor: "themePrimary",
                  }
                : {
                    backgroundColor: "themeSecondary",
                  }),
            }}
            borderRadius={30}
            p={4}
            color="themeWhite"
          >
            Upcoming
          </Card>
        </Box>
      </Link>
    </Grid>
  );
};
