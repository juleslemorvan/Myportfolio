import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  ButtonGroup,
  SlideFade,
  Stack,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Meta from "../component/Meta/Meta";
import julesPic from "../public/julesPic.png";

const trustItems = [
  "À partir de 140€",
  "Livré en quelques jours",
  "Sans engagement",
];

const WhatYouGet = ({ icon, title, description }) => (
  <Box
    p="24px"
    border="1px solid"
    borderColor="gray.200"
    borderRadius="10px"
    _hover={{ borderColor: "teal.300", transition: "border-color 0.25s ease" }}
    transition="border-color 0.25s ease"
  >
    <Text fontSize="26px" mb={3}>{icon}</Text>
    <Heading
      fontFamily="Roboto"
      fontWeight="600"
      fontSize="14px"
      letterSpacing="1px"
      mb={2}
    >
      {title}
    </Heading>
    <Text fontSize="14px" color="gray.500" lineHeight="1.7">
      {description}
    </Text>
  </Box>
);

const whatYouGet = [
  {
    icon: "💬",
    title: "Un interlocuteur unique",
    description:
      "Pas de coordination entre un designer, un dev et un chef de projet. Je gère tout, de la conception à la mise en ligne.",
  },
  {
    icon: "⏱️",
    title: "Livré rapidement",
    description:
      "Pas de délais de 3 mois. Un site simple et professionnel, livré en quelques jours.",
  },
  {
    icon: "📞",
    title: "Disponible et réactif",
    description:
      "Une question, un changement à faire ? Je réponds rapidement et m'adapte à vos besoins.",
  },
  {
    icon: "💰",
    title: "Tarif transparent",
    description:
      "140€ pour la création, 40€/mois pour la maintenance. Sans engagement, sans mauvaise surprise.",
  },
];

export default function Home() {
  return (
    <Flex flex="1" direction="column" align="center" px={4}>
      <Meta title="Jules Le Morvan | Développeur web freelance" />

      {/* Hero */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        minH="calc(100vh - 80px)"
        w="full"
      >
        <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.1 } }}>
          <Text
            fontSize="12px"
            letterSpacing="4px"
            color="teal.500"
            fontWeight="600"
            textTransform="uppercase"
            mb={6}
          >
            Développeur web freelance
          </Text>
        </SlideFade>

        <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.25 } }}>
          <Heading
            as="h1"
            fontFamily="Roboto"
            fontWeight="700"
            fontSize={{ base: "38px", md: "56px", lg: "64px" }}
            lineHeight="1.15"
            letterSpacing="-1px"
            maxW="800px"
            mb={6}
          >
            Votre site web,{" "}
            <Box as="span" color="teal.400">
              livré clé en main.
            </Box>
          </Heading>
        </SlideFade>

        <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.4 } }}>
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            color="gray.500"
            maxW="500px"
            lineHeight="1.8"
            mb={10}
          >
            Je crée des sites professionnels pour les artisans et indépendants —
            visibles sur Google, rapides à charger, sans engagement.
          </Text>
        </SlideFade>

        <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.55 } }}>
          <ButtonGroup spacing={4} flexWrap="wrap" justifyContent="center">
            <Button
              as={Link}
              href="/offres"
              colorScheme="teal"
              size="lg"
              letterSpacing="1px"
              px={8}
              _hover={{ transform: "scale(1.04)" }}
              transition="0.2s ease"
            >
              Voir les offres
            </Button>
            <Button
              as={Link}
              href="/contact"
              variant="outline"
              colorScheme="gray"
              size="lg"
              letterSpacing="1px"
              px={8}
              _hover={{ transform: "scale(1.04)" }}
              transition="0.2s ease"
            >
              Me contacter
            </Button>
          </ButtonGroup>
        </SlideFade>

        <SlideFade in offsetY="10px" transition={{ enter: { duration: 0.6, delay: 0.7 } }}>
          <Flex mt={12} gap={{ base: 5, md: 10 }} flexWrap="wrap" justify="center">
            {trustItems.map((item) => (
              <Flex key={item} align="center" gap={2}>
                <CheckIcon color="teal.400" boxSize="10px" />
                <Text fontSize="13px" color="gray.500" letterSpacing="0.5px">
                  {item}
                </Text>
              </Flex>
            ))}
          </Flex>
        </SlideFade>

        {/* Social links */}
        <Flex mt={10} gap={4}>
          <Box
            as="button"
            onClick={() => window.open("https://github.com/juleslemorvan")}
            color="gray.400"
            _hover={{ color: "gray.600" }}
            transition="color 0.2s ease"
          >
            <FaGithub size="20px" />
          </Box>
          <Box
            as="button"
            onClick={() =>
              window.open("https://www.linkedin.com/in/jules-le-morvan-126b8b177/")
            }
            color="gray.400"
            _hover={{ color: "gray.600" }}
            transition="color 0.2s ease"
          >
            <FaLinkedin size="20px" />
          </Box>
        </Flex>
      </Flex>

      <Divider borderColor="gray.200" mb={16} w="50%" />

      {/* À propos — intro */}
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
          À propos
        </Text>
      </SlideFade>

      <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.25 } }}>
        <Heading
          as="h2"
          fontFamily="Roboto"
          fontWeight="700"
          fontSize={{ base: "38px", md: "52px" }}
          lineHeight="1.15"
          letterSpacing="-0.5px"
          textAlign="center"
          maxW="700px"
          mb={5}
        >
          Un{" "}
          <Box as="span" color="teal.400">
            développeur
          </Box>{" "}
          à votre service.
        </Heading>
      </SlideFade>

      <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.4 } }}>
        <Text
          color="gray.500"
          textAlign="center"
          maxW="500px"
          mb={16}
          fontSize="16px"
          lineHeight="1.8"
        >
          Je crée des sites professionnels pour les artisans, commerçants et
          indépendants qui veulent être visibles en ligne.
        </Text>
      </SlideFade>

      {/* Bio + photo */}
      <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.5 } }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 10, lg: 16 }}
          align={{ base: "center", lg: "flex-start" }}
          maxW="860px"
          w="full"
          mb={20}
        >
          <Image
            alt="Jules Le Morvan, développeur web freelance"
            src={julesPic}
            quality={100}
            width={260}
            height={260}
            style={{ borderRadius: "8px", objectFit: "cover", flexShrink: 0 }}
          />
          <Box>
            <Heading
              fontFamily="Roboto"
              fontWeight="700"
              fontSize="22px"
              letterSpacing="-0.3px"
              mb={5}
            >
              Bonjour, je suis Jules.
            </Heading>
            <Text lineHeight="1.9" fontSize="15px">
              Je suis développeur web freelance, spécialisé dans la création de sites
              vitrines pour les professionnels. Mon approche est simple : un site clair,
              rapide et bien référencé — sans complexité inutile.
            </Text>
            <Text lineHeight="1.9" fontSize="15px" mt={4}>
              Je travaille avec des artisans, des commerçants et des indépendants — des
              personnes qui ont un vrai savoir-faire mais qui n&apos;ont pas le temps ou les
              connaissances pour gérer leur présence en ligne.
            </Text>
            <Text lineHeight="1.9" fontSize="15px" mt={4}>
              Mon objectif : vous livrer un site que vous comprenez, qui vous ressemble, et
              qui travaille pour vous même quand vous dormez.
            </Text>
          </Box>
        </Stack>
      </SlideFade>

      {/* Ce que vous obtenez */}
      <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.1 } }}>
        <Heading
          fontFamily="Roboto"
          fontWeight="700"
          fontSize={{ base: "26px", md: "34px" }}
          letterSpacing="-0.5px"
          textAlign="center"
          mb={4}
        >
          Ce que vous{" "}
          <Box as="span" color="teal.400">
            obtenez
          </Box>
        </Heading>
        <Text
          color="gray.500"
          textAlign="center"
          fontSize="15px"
          lineHeight="1.8"
          maxW="500px"
          mx="auto"
          mb={12}
        >
          Pas de jargon, pas de complexité inutile — juste un site qui fait le travail.
        </Text>
      </SlideFade>

      <SimpleGrid
        columns={{ base: 1, sm: 2 }}
        spacing={5}
        w="full"
        maxW="700px"
        mb={20}
      >
        {whatYouGet.map((item) => (
          <WhatYouGet key={item.title} {...item} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
