import { extendTheme } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";

export const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  colors: {
    ...defaultTheme,
    white: "#D8CBC7",
  },
});
