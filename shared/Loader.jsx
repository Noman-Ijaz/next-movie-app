import { Spinner, Box } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Box
      height="300px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="themePrimary"
        size="xl"
      />
    </Box>
  );
};
