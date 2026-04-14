import React, { useEffect } from "react";
import {
  Heading,
  HStack,
  Show,
  Hide,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  SlideFade,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Navbar } from "../Navbar/Navbar";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    onClose();
  }, [router]);

  return (
    <SlideFade
      offsetY="-20px"
      in
      transition={{ enter: { duration: 0.6, delay: 1.0 } }}
    >
      <HStack
        justify="space-between"
        align="center"
        p={{ base: "30px", xl: "20px" }}
      >
        <Heading
          ml={{ base: "0px", lg: "50px" }}
          fontSize="xl"
          flex
          fontFamily="Roboto"
          justifyContent="center"
          alignItems="center"
        >
          JLM
        </Heading>
        <Hide below="md">
          <Navbar />
        </Hide>
        <Show below="md">
          <IconButton
            onClick={onOpen}
            icon={<HamburgerIcon boxSize="22px" />}
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
