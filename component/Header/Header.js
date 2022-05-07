import React from "react";
import {
  Heading,
  HStack,
  Show,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  SlideFade,
} from "@chakra-ui/react";
import { Navbar } from "../Navbar/Navbar";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SlideFade
      offsetY="-20px"
      in
      transition={{ enter: { duration: 1, delay: 1.5 } }}
    >
      <HStack
        justify="space-between"
        align="center"
        p={{ base: "30px", xl: "20px" }}
      >
        <Heading
          ml={{ base: "Opx", lg: "50px" }}
          fontSize="xl"
          flex
          fontFamily="Roboto"
          justifyContent="center"
          alignItems="center"
        >
          JLM
        </Heading>
        <Show above="md">
          <Navbar />
        </Show>
        <Show below="md">
          <IconButton
            onClick={onOpen}
            icon={<HamburgerIcon />}
            style={{ backgroundColor: "transparent" }}
          />
        </Show>
        <Drawer isOpen={isOpen} onClose={onClose} size="full">
          <DrawerOverlay />
          <DrawerContent justifyContent="center" fontSize="30px">
            <DrawerCloseButton margin="30px" padding="15px" />
            <Navbar />
          </DrawerContent>
        </Drawer>
      </HStack>
    </SlideFade>
  );
};
