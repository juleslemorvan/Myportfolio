import { Flex, Text, Stack, Box, SlideFade } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <SlideFade in offsetY="10px" transition={{ enter: { duration: 0.6, delay: 1.8 } }}>
      <Flex
        borderTop="1px solid"
        borderColor="gray.700"
        py={6}
        px={{ base: "20px", md: "40px" }}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "center", md: "flex-start" }}
        gap={6}
      >
        {/* Left — identité + contact */}
        <Box textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="12px" color="gray.500" letterSpacing="1px" mb={2}>
            © 2025 Jules Le Morvan
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={{ base: 1, sm: 4 }} align={{ base: "center", md: "flex-start" }}>
            <Text
              as="a"
              href="tel:0783121855"
              fontSize="12px"
              color="gray.500"
              letterSpacing="0.5px"
              _hover={{ color: "teal.400" }}
              transition="color 0.2s ease"
            >
              07 83 12 18 55
            </Text>
            <Text fontSize="12px" color="gray.600" display={{ base: "none", sm: "block" }}>·</Text>
            <Text
              as="a"
              href="mailto:jules.lemorvan01@gmail.com"
              fontSize="12px"
              color="gray.500"
              letterSpacing="0.5px"
              _hover={{ color: "teal.400" }}
              transition="color 0.2s ease"
            >
              jules.lemorvan01@gmail.com
            </Text>
          </Stack>
        </Box>

        {/* Right — nav */}
        <Stack direction="row" spacing={6} align="center">
          {[
            { label: "Offres", href: "/offres" },
            { label: "Projets", href: "/projects" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{ fontSize: "13px", color: "inherit", opacity: 0.5, letterSpacing: "1px" }}
            >
              {label}
            </Link>
          ))}
        </Stack>
      </Flex>
    </SlideFade>
  );
};
