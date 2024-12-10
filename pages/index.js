import {
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { TopRated, TrendingMovies, TrendingShow } from "../components";

function Home() {
  return (
    <Grid overflow="hidden">
      <Tabs overflow="hidden">
        <TabList border="none" color="themePrimary" gap="10px">
          <Tab
            _selected={{
              color: "white",
              backgroundColor: "themePrimary",
              borderRadius: "10px",
            }}
          >
            Movies
          </Tab>
          <Tab
            _selected={{
              color: "white",
              backgroundColor: "themePrimary",
              borderRadius: "10px",
            }}
          >
            Shows
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TrendingMovies />
          </TabPanel>
          <TabPanel>
            <TrendingShow />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <TopRated />
    </Grid>
  );
}
export default Home;
