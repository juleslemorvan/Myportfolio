import { Flex, Text, Stack, SlideFade } from "@chakra-ui/react";
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
      align="center"
      gap={4}
    >
      <Text fontSize="12px" color="gray.500" letterSpacing="1px">
        © 2025 Jules Le Morvan
      </Text>
      <Stack direction="row" spacing={6}>
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
