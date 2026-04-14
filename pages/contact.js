import React from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  SlideFade,
  Badge,
  useToast,
} from "@chakra-ui/react";
import { BsFillTelephoneForwardFill, BsFillEnvelopeFill } from "react-icons/bs";
import { useRouteVisited } from "../hooks/useRouteVisited";
import Form from "../component/Form/Form";
import Meta from "../component/Meta/Meta";
import AnimationPages from "../component/AnimationPages/AnimationPages";

const ContactInfo = ({ icon, label, value, onClick }) => (
  <Flex
    align="center"
    gap={4}
    p="20px 24px"
    border="1px solid"
    borderColor="gray.200"
    borderRadius="10px"
    cursor="pointer"
    onClick={onClick}
    _hover={{ borderColor: "teal.300", transition: "border-color 0.25s ease" }}
    transition="border-color 0.25s ease"
  >
    <Box color="teal.400" flexShrink={0}>
      {icon}
    </Box>
    <Box>
      <Text fontSize="11px" color="gray.400" letterSpacing="1px" textTransform="uppercase" mb={1}>
        {label}
      </Text>
      <Text fontSize="14px" fontWeight="500">
        {value}
      </Text>
    </Box>
  </Flex>
);

const Contact = () => {
  useRouteVisited("/contact");
  const toast = useToast();

  const copy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${label} copié`,
      status: "success",
      duration: 2000,
      isClosable: false,
      position: "top",
    });
  };

  return (
    <Flex flex="1" direction="column" align="center" py="40px">
      <Meta
        title="Jules Le Morvan | Contact"
        description="Contactez Jules Le Morvan, développeur web freelance — par téléphone, email ou via le formulaire."
        path="/contact"
      />
      <AnimationPages>
        <Flex direction="column" align="center" w="full">

          {/* Hero */}
          <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.1 } }}>
            <Text
              fontSize="12px"
              letterSpacing="4px"
              color="teal.500"
              fontWeight="600"
              textTransform="uppercase"
              textAlign="center"
              mb={5}
            >
              Contact
            </Text>
          </SlideFade>

          <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.25 } }}>
            <Heading
              as="h1"
              fontFamily="Roboto"
              fontWeight="700"
              fontSize={{ base: "38px", md: "52px" }}
              lineHeight="1.15"
              letterSpacing="-0.5px"
              textAlign="center"
              maxW="700px"
              mb={5}
            >
              Parlons de votre{" "}
              <Box as="span" color="teal.400">
                projet.
              </Box>
            </Heading>
          </SlideFade>

          <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.4 } }}>
            <Text
              color="gray.500"
              textAlign="center"
              maxW="480px"
              mb={5}
              fontSize="16px"
              lineHeight="1.8"
            >
              Décrivez-moi votre activité et ce que vous souhaitez.
            </Text>
            <Flex justify="center" mb={14}>
              <Badge
                colorScheme="teal"
                variant="subtle"
                fontSize="13px"
                px={4}
                py={2}
                borderRadius="full"
                letterSpacing="0.5px"
              >
                ⚡ Je réponds sous 24h
              </Badge>
            </Flex>
          </SlideFade>

          {/* Content */}
          <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.5 } }}>
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing={10}
              align="flex-start"
              w="full"
              maxW="860px"
            >
              {/* Left — contact info */}
              <Flex direction="column" gap={4} w={{ base: "full", lg: "280px" }} flexShrink={0}>
                <Heading
                  fontFamily="Roboto"
                  fontWeight="600"
                  fontSize="15px"
                  letterSpacing="1px"
                  mb={2}
                >
                  Coordonnées
                </Heading>
                <ContactInfo
                  icon={<BsFillTelephoneForwardFill size="16px" />}
                  label="Téléphone"
                  value="07 83 12 18 55"
                  onClick={() => copy("07 83 12 18 55", "Numéro")}
                />
                <ContactInfo
                  icon={<BsFillEnvelopeFill size="16px" />}
                  label="Email"
                  value="jules.lemorvan01@gmail.com"
                  onClick={() => copy("jules.lemorvan01@gmail.com", "Email")}
                />
                <Text fontSize="13px" color="gray.400" mt={2} lineHeight="1.7">
                  Cliquez sur une coordonnée pour la copier dans le presse-papiers.
                </Text>
              </Flex>

              {/* Right — form */}
              <Box flex="1" w="full">
                <Heading
                  fontFamily="Roboto"
                  fontWeight="600"
                  fontSize="15px"
                  letterSpacing="1px"
                  mb={5}
                >
                  Formulaire de contact
                </Heading>
                <Form />
              </Box>
            </Stack>
          </SlideFade>

        </Flex>
      </AnimationPages>
    </Flex>
  );
};

export default Contact;
