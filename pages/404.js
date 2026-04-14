import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Meta from "../component/Meta/Meta";

export default function NotFound() {
  return (
    <Flex flex="1" align="center" justify="center" direction="column" gap={6}>
      <Meta title="Jules Le Morvan | Page introuvable" />
      <Heading
        fontSize={{ base: "80px", md: "120px" }}
        fontFamily="Roboto"
        fontWeight="100"
        letterSpacing="6px"
        opacity={0.15}
        lineHeight="1"
      >
        404
      </Heading>
      <Heading
        fontSize={{ base: "20px", md: "26px" }}
        fontFamily="Roboto"
        fontWeight="300"
        letterSpacing="3px"
        mt="-40px"
      >
        Page introuvable
      </Heading>
      <Text opacity={0.6} textAlign="center" maxW="400px">
        Cette page n&apos;existe pas ou a été déplacée.
      </Text>
      <Button
        as={Link}
        href="/"
        variant="outline"
        colorScheme="gray"
        letterSpacing="3px"
        _hover={{ transform: "scale(1.05)" }}
        transition="0.3s ease"
      >
        Retour à l&apos;accueil
      </Button>
    </Flex>
  );
}
