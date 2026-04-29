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
  Badge,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Meta from "../component/Meta/Meta";
import julesPic from "../public/julesPic.png";

const trustItems = [
  "À partir de 140€",
  "Livré en quelques jours",
  "Sans engagement",
];

const WhatYouGet = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
    style={{ width: "100%" }}
  >
    <Flex
      py={{ base: 7, md: 9 }}
      gap={{ base: 6, md: 12 }}
      align="flex-start"
      borderBottom="1px solid"
      borderColor="gray.100"
      role="group"
    >
      {/* Numéro */}
      <Text
        fontSize="11px"
        fontWeight="700"
        color="teal.400"
        letterSpacing="3px"
        pt="5px"
        minW={{ base: "24px", md: "32px" }}
        flexShrink={0}
      >
        {String(index + 1).padStart(2, "0")}
      </Text>

      {/* Contenu */}
      <Box flex="1">
        <Flex align="center" gap={3} mb={3}>
          <Text fontSize="20px" lineHeight="1" aria-hidden="true">
            {icon}
          </Text>
          <Heading
            fontFamily="Roboto"
            fontWeight="700"
            fontSize={{ base: "17px", md: "20px" }}
            letterSpacing="-0.3px"
            lineHeight="1.25"
            _groupHover={{ color: "teal.500" }}
            transition="color 0.2s ease"
          >
            {title}
          </Heading>
        </Flex>
        <Text
          fontSize={{ base: "15px", md: "16px" }}
          color="gray.600"
          _dark={{ color: "gray.300" }}
          lineHeight="1.85"
          maxW="580px"
          pl={{ base: "32px", md: "36px" }}
        >
          {description}
        </Text>
      </Box>
    </Flex>
  </motion.div>
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

const processSteps = [
  {
    number: "1",
    badge: "Échange",
    badgeColor: "blue",
    title: "On discute de votre activité",
    description:
      "Vous me décrivez votre métier, ce que vous voulez mettre en avant, vos préférences visuelles. Pas besoin de connaissances techniques — je m'occupe de tout.",
    highlight:
      "Un simple appel ou échange par message suffit. Je pose les bonnes questions pour vous.",
    time: "15 à 30 minutes",
  },
  {
    number: "2",
    badge: "Conception",
    badgeColor: "purple",
    title: "Je collecte et je crée",
    description:
      "Je rassemble vos informations, photos et contenus, puis je conçois votre site complet — design, textes et formulaire de contact.",
    highlight:
      "Je vous envoie une première version en 24 à 48h. Vous n'avez rien à préparer ni à fournir.",
    time: "24 à 48h",
  },
  {
    number: "3",
    badge: "Validation",
    badgeColor: "orange",
    title: "Vous donnez le feu vert",
    description:
      "Je vous présente le résultat. On affine ensemble si besoin — couleurs, textes, photos. Vous restez décideur à chaque étape.",
    highlight:
      "Les retouches sont incluses. Pas de frais cachés si vous changez d'avis.",
    time: "1 à 2 allers-retours",
  },
  {
    number: "4",
    badge: "En ligne",
    badgeColor: "teal",
    title: "Votre site est en ligne",
    description:
      "Je m'occupe de la mise en ligne, du nom de domaine et de l'hébergement. Votre site est visible sur Google dès le premier jour.",
    highlight:
      "Et si vous avez besoin de modifier quelque chose plus tard, je suis toujours là.",
    time: "En quelques minutes",
  },
];

const ProcessStepBox = ({ number, badge, badgeColor, title, description, highlight, time, animIndex, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: animIndex * 0.1 }}
    style={{ width: "100%" }}
  >
    <Flex gap={6} align="flex-start">
      {/* Numéro + ligne verticale */}
      <Flex direction="column" align="center" flexShrink={0}>
        <Flex
          w="40px"
          h="40px"
          borderRadius="full"
          border="2px solid"
          borderColor="gray.200"
          align="center"
          justify="center"
          bg="white"
          _dark={{ bg: "gray.800", borderColor: "gray.600" }}
          zIndex={1}
        >
          <Text fontSize="14px" fontWeight="700" color="gray.600"
            _dark={{ color: "gray.300" }}>
            {number}
          </Text>
        </Flex>
        {!isLast && (
          <Box w="1px" flex="1" bg="gray.200" mt={2} minH="120px" />
        )}
      </Flex>

      {/* Contenu */}
      <Box flex="1" pb={isLast ? 0 : 10}>
        <Badge
          colorScheme={badgeColor}
          fontSize="11px"
          px={3}
          py={1}
          borderRadius="full"
          letterSpacing="0.5px"
          mb={3}
        >
          {badge}
        </Badge>
        <Heading
          fontFamily="Roboto"
          fontWeight="700"
          fontSize={{ base: "18px", md: "20px" }}
          letterSpacing="-0.3px"
          lineHeight="1.3"
          mb={3}
        >
          {title}
        </Heading>
        <Text fontSize="14px" color="gray.600" _dark={{ color: "gray.300" }} lineHeight="1.85" mb={4}>
          {description}
        </Text>
        <Box
          border="1px solid"
          borderColor="gray.200"
          borderRadius="8px"
          p={4}
          bg="gray.50"
          _dark={{ bg: "gray.700", borderColor: "gray.600" }}
        >
          <Text fontSize="13px" color="gray.600" _dark={{ color: "gray.300" }} lineHeight="1.7">
            {highlight}
          </Text>
        </Box>
      </Box>
    </Flex>
  </motion.div>
);

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
            fontSize="13px"
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
            fontSize={{ base: "17px", md: "19px" }}
            color="gray.600"
            _dark={{ color: "gray.300" }}
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
                <CheckIcon color="teal.400" boxSize="11px" />
                <Text fontSize="15px" color="gray.600" _dark={{ color: "gray.300" }} letterSpacing="0.5px">
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
          fontSize="13px"
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
          color="gray.600"
          _dark={{ color: "gray.300" }}
          textAlign="center"
          maxW="500px"
          mb={16}
          fontSize="17px"
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
              fontSize="24px"
              letterSpacing="-0.3px"
              mb={5}
            >
              Bonjour, je suis Jules.
            </Heading>
            <Text lineHeight="1.9" fontSize="16px" color="gray.600"
            _dark={{ color: "gray.300" }}>
              Je suis développeur web freelance, spécialisé dans la création de sites
              vitrines pour les professionnels. Mon approche est simple : un site clair,
              rapide et bien référencé — sans complexité inutile.
            </Text>
            <Text lineHeight="1.9" fontSize="16px" color="gray.600"
            _dark={{ color: "gray.300" }} mt={4}>
              Je travaille avec des artisans, des commerçants et des indépendants — des
              personnes qui ont un vrai savoir-faire mais qui n&apos;ont pas le temps ou les
              connaissances pour gérer leur présence en ligne.
            </Text>
            <Text lineHeight="1.9" fontSize="16px" color="gray.600"
            _dark={{ color: "gray.300" }} mt={4}>
              Mon objectif : vous livrer un site que vous comprenez, qui vous ressemble, et
              qui travaille pour vous même quand vous dormez.
            </Text>
          </Box>
        </Stack>
      </SlideFade>

      {/* Comment je travaille */}
      <Divider borderColor="gray.200" mb={20} w="50%" />

      <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.1 } }}>
        <Text
          fontSize="13px"
          letterSpacing="4px"
          color="teal.500"
          fontWeight="600"
          textTransform="uppercase"
          textAlign="center"
          mb={5}
        >
          Le processus
        </Text>
        <Heading
          fontFamily="Roboto"
          fontWeight="700"
          fontSize={{ base: "34px", md: "48px" }}
          letterSpacing="-0.5px"
          textAlign="center"
          lineHeight="1.15"
          mb={5}
        >
          Comment ça se{" "}
          <Box as="span" color="teal.400">
            passe ?
          </Box>
        </Heading>
        <Text
          color="gray.600"
          _dark={{ color: "gray.300" }}
          textAlign="center"
          fontSize="17px"
          lineHeight="1.8"
          maxW="480px"
          mx="auto"
          mb={16}
        >
          De la première discussion à la mise en ligne — simple, rapide, sans
          effort de votre côté.
        </Text>
      </SlideFade>

      {/* Mobile : timeline verticale */}
      <Box display={{ base: "block", md: "none" }} w="full" maxW="540px" mb={28}>
        {processSteps.map((step, i) => (
          <ProcessStepBox
            key={step.number}
            {...step}
            animIndex={i}
            isLast={i === processSteps.length - 1}
          />
        ))}
      </Box>

      {/* Desktop : stepper horizontal */}
      <Box display={{ base: "none", md: "block" }} w="full" maxW="1200px" mb={28}>

        {/* Rangée des cercles + lignes animées */}
        <Flex align="center" mb={10}>
          {processSteps.flatMap((step, i) => [
            <motion.div
              key={`circle-${i}`}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.55 }}
              style={{ flexShrink: 0 }}
            >
              <Flex
                w="44px"
                h="44px"
                borderRadius="full"
                border="2px solid"
                borderColor="teal.300"
                align="center"
                justify="center"
                bg="white"
                _dark={{ bg: "gray.800" }}
              >
                <Text fontSize="14px" fontWeight="700" color="teal.500">
                  {step.number}
                </Text>
              </Flex>
            </motion.div>,
            i < processSteps.length - 1 && (
              <Box key={`line-${i}`} flex="1" h="2px" alignSelf="center" position="relative">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut", delay: i * 0.55 + 0.25 }}
                  style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "#81E6D9" }}
                />
              </Box>
            ),
          ]).filter(Boolean)}
        </Flex>

        {/* Rangée du contenu supérieur (badge + titre + description) */}
        <Flex align="stretch" mb={4}>
          {processSteps.map((step, i) => (
            <motion.div
              key={`top-${step.number}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.55 + 0.1 }}
              style={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
              <Flex direction="column" flex="1" pr={i < processSteps.length - 1 ? 8 : 0}>
                <Badge
                  colorScheme={step.badgeColor}
                  fontSize="12px"
                  px={3}
                  py={1}
                  borderRadius="full"
                  letterSpacing="0.5px"
                  mb={4}
                  alignSelf="flex-start"
                >
                  {step.badge}
                </Badge>
                <Heading
                  fontFamily="Roboto"
                  fontWeight="700"
                  fontSize="19px"
                  letterSpacing="-0.3px"
                  lineHeight="1.35"
                  mb={3}
                >
                  {step.title}
                </Heading>
                <Text fontSize="15px" color="gray.600" _dark={{ color: "gray.300" }} lineHeight="1.85">
                  {step.description}
                </Text>
              </Flex>
            </motion.div>
          ))}
        </Flex>

        {/* Rangée des cards highlight — toutes à la même hauteur */}
        <Flex align="stretch">
          {processSteps.map((step, i) => (
            <motion.div
              key={`highlight-${step.number}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.55 + 0.3 }}
              style={{ flex: 1, display: "flex" }}
            >
              <Box
                flex="1"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="8px"
                p={4}
                bg="gray.50"
                _dark={{ bg: "gray.700", borderColor: "gray.600" }}
                mr={i < processSteps.length - 1 ? 8 : 0}
                display="flex"
                alignItems="center"
              >
                <Text fontSize="14px" color="gray.600" _dark={{ color: "gray.300" }} lineHeight="1.75">
                  {step.highlight}
                </Text>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </Box>

      {/* Ce que vous obtenez */}
      <Divider borderColor="gray.200" mb={20} w="50%" />

      <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.1 } }}>
        <Text
          fontSize="13px"
          letterSpacing="4px"
          color="teal.500"
          fontWeight="600"
          textTransform="uppercase"
          textAlign="center"
          mb={5}
        >
          Pourquoi me choisir
        </Text>
        <Heading
          fontFamily="Roboto"
          fontWeight="700"
          fontSize={{ base: "34px", md: "48px" }}
          letterSpacing="-0.5px"
          textAlign="center"
          lineHeight="1.15"
          mb={5}
        >
          Ce que vous{" "}
          <Box as="span" color="teal.400">
            obtenez
          </Box>
        </Heading>
        <Text
          color="gray.600"
          _dark={{ color: "gray.300" }}
          textAlign="center"
          fontSize="17px"
          lineHeight="1.8"
          maxW="480px"
          mx="auto"
          mb={16}
        >
          Pas de jargon, pas de complexité inutile — juste un site qui fait le travail.
        </Text>
      </SlideFade>

      <Box
        w="full"
        maxW="780px"
        mb={28}
        borderTop="1px solid"
        borderColor="gray.100"
      >
        {whatYouGet.map((item, i) => (
          <WhatYouGet key={item.title} {...item} index={i} />
        ))}
      </Box>
    </Flex>
  );
}
