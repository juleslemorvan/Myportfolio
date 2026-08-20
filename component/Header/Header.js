import React, { useEffect } from "react";
import {
  Heading,
  HStack,
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorMode,
  SlideFade,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Navbar } from "../Navbar/Navbar";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
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
        <HStack spacing={{ base: "10px", md: "20px" }}>
          <Box display={{ base: "none", md: "block" }}>
            <Navbar />
          </Box>
          <IconButton
            aria-label="Basculer le mode clair/obscur"
            onClick={toggleColorMode}
            icon={
              colorMode === "dark" ? (
                <SunIcon boxSize="18px" />
              ) : (
                <MoonIcon boxSize="18px" />
              )
            }
            variant="ghost"
            style={{ backgroundColor: "transparent" }}
          />
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              aria-label="Ouvrir le menu"
              onClick={onOpen}
              icon={<HamburgerIcon boxSize="22px" />}
              style={{ backgroundColor: "transparent" }}
            />
          </Box>
        </HStack>
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
