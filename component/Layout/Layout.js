import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex flex={1} px={{ base: "30px", md: "70px" }}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
