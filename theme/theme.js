import { extendTheme } from "@chakra-ui/react";
import defaultTheme from "@chakra-ui/theme";

export const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  colors: {
    ...defaultTheme,
    white: "aliceblue",
  },
  shadows: {
    purple: "0 0 0 3px rgba(159, 122, 234, 0.6)",
  },
});
