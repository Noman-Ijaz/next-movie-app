import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import React from "react";

export const MovieDetail = ({ data }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <AccordionButton
          borderRadius="10px"
          backgroundColor="themeSecondary"
          color="themePrimary"
          mb={4}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          fontWeight="bold"
          _expanded={{ backgroundColor: "themePrimary", color: "white" }}
          _hover={{ backgroundColor: "themePrimary", color: "white" }}
        >
          Production Companies
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <List spacing={3}>
            {data?.production_companies?.map((data, i) => (
              <ListItem key={i} color="themeWhite">
                <ListIcon color="green.500" />
                {data.name}
              </ListItem>
            ))}
          </List>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem border="none">
        <AccordionButton
          borderRadius="10px"
          backgroundColor="themeSecondary"
          color="themePrimary"
          fontWeight="bold"
          mb={4}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          _expanded={{ backgroundColor: "themePrimary", color: "white" }}
          _hover={{ backgroundColor: "themePrimary", color: "white" }}
        >
          Production Countries
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <List spacing={3}>
            {data?.production_countries?.map((data, i) => (
              <ListItem key={i} color="themeWhite">
                <ListIcon color="green.500" />
                {data.name}
              </ListItem>
            ))}
          </List>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem border="none">
        <AccordionButton
          borderRadius="10px"
          backgroundColor="themeSecondary"
          color="themePrimary"
          fontWeight="bold"
          mb={4}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          _expanded={{ backgroundColor: "themePrimary", color: "white" }}
          _hover={{ backgroundColor: "themePrimary", color: "white" }}
        >
          Spoken Languages
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <List spacing={3}>
            {data?.spoken_languages?.map((data, i) => (
              <ListItem key={i} color="themeWhite">
                <ListIcon color="green.500" />
                {data.name}
              </ListItem>
            ))}
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
