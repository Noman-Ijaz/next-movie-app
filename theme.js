import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    themePrimary: "teal",
    themeSecondary: "#1d1b1b",
    themeInfo: "#3b3b3b2b",
    themeWhite: "#fff",
    themeBlack: "#000",
    themeTitle: "#b6bc75",
  },
  styles: {
    global: {
      body: {
        bg: "themeBlack",
      },
      ".detai_header_card": {
        borderRadius: "8px",
        borderLeft: "4px solid",
        borderColor: "themePrimary",
      },
      ".circle": {
        stroke: "themePrimary",
      },
      ".swiper-slide": {
        backgroundColor: "themeSecondary",
        textAlign: "center",
        fontSize: "18px",
        display: "flex",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "themePrimary",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "themeSecondary",
      },
    },
  },
  components: {
    Tabs: {
      baseStyle: {
        _selected: {
          color: "red",
        },
      },
    },
  },
});
export default theme;
