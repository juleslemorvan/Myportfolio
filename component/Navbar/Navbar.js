import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarLink = ({ title, url }) => {
  const router = useRouter();

  return (
    <Link href={url} style={{ textDecoration: "none" }}>
      <Box
        as="span"
        position="relative"
        cursor="pointer"
        _before={{
          position: "absolute",
          content: '""',
          display: "block",
          width: "100%",
          height: "2px",
          bottom: "-4px",
          left: "0px",
          backgroundColor: "white",
          transform: router.asPath === url ? "scaleX(1)" : "scaleX(0)",
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
    </Link>
  );
};

export const Navbar = () => {
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
        <NavbarLink url="/" title="Accueil" />
        <NavbarLink url="/offres" title="Offres" />
<NavbarLink url="/projects" title="Projets" />
        <NavbarLink url="/contact" title="Contact" />
      </Stack>
    </Stack>
  );
};
