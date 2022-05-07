import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Meta from "../Meta/Meta";

export const Layout = ({ children }) => {
  return (
    <Flex direction="column" h="100vh">
      <Meta />
      <Header />
      <Flex flex={1} px={{ base: "20px", sm: "25px", md: "20px" }}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
