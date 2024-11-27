import { Container, Grid, GridItem } from "@chakra-ui/react";
import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <Container maxW="8xl">
      <Grid
        p={4}
        templateAreas={`"navbar navbar navbar"
                  "leftsidebar main rightsidebar"
                  "leftsidebar footer rightsidebar"`}
        gridTemplateColumns={"15% 55% 30%"}
        gap={8}
      >
        <GridItem area={"navbar"}>
          <NavBar />
        </GridItem>
        <GridItem area={"leftsidebar"}>
          <LeftSideBar />
        </GridItem>
        <GridItem area={"main"}>{children}</GridItem>
        <GridItem area={"rightsidebar"}>
          <RightSideBar />
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </Container>
  );
};
