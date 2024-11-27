import { Card, Heading } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <Card
      backgroundColor="themeSecondary"
      p={4}
      height="100%"
      alignItems="center"
      justifyContent="center"
      color="themeWhite"
      flexDirection="row"
    >
      Powered by
      <Link
        href="https://github.com/Noman-Ijaz"
        style={{ marginLeft: "5px", fontWeight: 500 }}
      >
        <Heading as="h5" size="sm" textAlign="center" color="themePrimary">
          Noman Ijaz
        </Heading>
      </Link>
    </Card>
  );
};
