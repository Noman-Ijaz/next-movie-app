import { Box, Grid, GridItem, Input } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getMultiSearch } from "../pages/api/movie";

export const NavBar = () => {
  const [value, setValue] = React.useState("");
  // const { data, isLoading } = useQuery({
  //   queryKey: ["multi-search"],
  //   queryFn: (queryFn) => getMultiSearch(value),
  //   initialData: getMultiSearch(value),
  // });

  // if (isLoading) {
  //   return "loading";
  // }

  // const getFiltered = data?.results?.filter((el) => {
  //   return el.media_type == "movie";
  // });

  return (
    <Grid templateColumns="repeat(5, 4fr)" gap={6} alignItems="center">
      <GridItem colSpan={1}>
        <Link href="/" className="App-logo">
          <Image
            src="/assets/images/logo-2.png"
            width="50"
            height="50"
            alt="logo"
          />
        </Link>
      </GridItem>
      <GridItem colStart={5} colEnd={6} position="relative">
        <Input
          placeholder="Search"
          size="sm"
          borderRadius="8px"
          borderColor="themePrimary"
          color="themePrimary"
          _placeholder={{ color: "themePrimary" }}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <Box position="absolute" top="50px" width="100%" bg="#fff" zIndex={11}>
          {data
            ? data.results?.map((data, i) => (
                <Link
                  href={`"/detail[/detail]"`}
                  as={`/detail/${data.id}`}
                  key={i}
                >
                  <p style={{ background: "teal", color: "#fff" }}>
                    {data.title} in {data.media_type}
                  </p>
                </Link>
              ))
            : ""}
        </Box> */}
      </GridItem>
    </Grid>
  );
};
