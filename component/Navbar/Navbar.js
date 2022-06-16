import React from "react";
import { Stack, Button, useColorMode, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const NavbarLink = ({ title, url }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <Link href={url}>
      {router.asPath === url ? (
        <Box
          as="a"
          position="relative"
          cursor="pointer"
          _before={{
            position: "absolute",
            content: '""',
            display: "block",
            width: "100%",
            height: "2px",
            bottom: "0px",
            left: "0px",
            backgroundColor: colorMode === "dark" ? "white" : "#1A202B",
            transform: "scaleX(1)",
          }}
        >
          {title}
        </Box>
      ) : (
        <Box
          as="a"
          position="relative"
          cursor="pointer"
          _before={{
            position: "absolute",
            content: '""',
            display: "block",
            width: "100%",
            height: "2px",
            bottom: "0px",
            left: "0px",
            backgroundColor: colorMode === "dark" ? "white" : "#1A202B",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease",
          }}
          sx={{
            "&:hover::before": {
              transform: "scaleX(1)",
            },
          }}
        >
          {title}
        </Box>
      )}
    </Link>
  );
};

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align="center"
      spacing="50px"
      isInline={false}
    >
      <Stack
        textAlign={{ base: "center" }}
        direction={{ base: "column", md: "row" }}
        spacing="20px"
        fontFamily="Roboto"
        letterSpacing="2px"
      >
        <NavbarLink url="/" title="Home" />
        <NavbarLink url="/about" title="About" />
        <NavbarLink url="/projects" title="Projects" />
        <NavbarLink url="/contact" title="Contact" />
      </Stack>

      <Button variant="ghost" onClick={() => toggleColorMode()}>
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Stack>
  );
};
