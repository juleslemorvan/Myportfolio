import {
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  Divider,
  SlideFade,
  SimpleGrid,
  Badge,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Meta from "../component/Meta/Meta";
import AnimationPages from "../component/AnimationPages/AnimationPages";

const IncludedItem = ({ text }) => (
  <Flex align="center" gap={3} mb={3}>
    <CheckIcon color="teal.400" flexShrink={0} boxSize="11px" />
    <Text fontSize="14px" color="gray.600">
      {text}
    </Text>
  </Flex>
);

const BenefitCard = ({ icon, title, description }) => (
  <Box
    border="1px solid"
    borderColor="gray.200"
    borderRadius="10px"
    p="28px"
    _hover={{ borderColor: "teal.300", transition: "border-color 0.25s ease" }}
    transition="border-color 0.25s ease"
  >
    <Text fontSize="26px" mb={3}>
      {icon}
    </Text>
    <Heading fontFamily="Roboto" fontWeight="600" fontSize="14px" letterSpacing="1px" mb={2} color="gray.800">
      {title}
    </Heading>
    <Text color="gray.500" fontSize="14px" lineHeight="1.7">
      {description}
    </Text>
  </Box>
);

const OfferCard = ({ title, price, subtitle, items, note, featured }) => (
  <Box
    border="2px solid"
    borderColor={featured ? "teal.400" : "gray.200"}
    borderRadius="12px"
    p={{ base: "30px", md: "40px" }}
    w={{ base: "full", md: "340px" }}
    position="relative"
    bg={featured ? "teal.50" : "white"}
  >
    <Heading
      fontFamily="Roboto"
      fontWeight="600"
      letterSpacing="2px"
      fontSize="13px"
      color={featured ? "teal.600" : "gray.500"}
      textTransform="uppercase"
      mb={4}
    >
      {title}
    </Heading>

    <Flex align="baseline" gap={2} mb={2}>
      <Heading fontFamily="Roboto" fontWeight="700" fontSize="48px" lineHeight="1" color="gray.800">
        {price}
      </Heading>
      <Text color="gray.500" fontSize="14px">
        {subtitle}
      </Text>
    </Flex>

    {note && (
      <Text color="gray.500" fontSize="12px" letterSpacing="0.5px" mb={5}>
        {note}
      </Text>
    )}

    <Divider mb={6} borderColor={featured ? "teal.200" : "gray.200"} />

    <Flex direction="column">
      {items.map((item) => (
        <IncludedItem key={item} text={item} />
      ))}
    </Flex>
  </Box>
);

const benefits = [
  {
    icon: "📱",
    title: "100% mobile",
    description:
      "Plus de 60% des visites se font depuis un téléphone. Votre site s'adapte parfaitement à tous les écrans, sans effort de votre part.",
  },
  {
    icon: "🔍",
    title: "Visible sur Google",
    description:
      "Un site bien construit remonte naturellement dans les résultats de recherche. Vos futurs clients vous trouvent quand ils en ont besoin.",
  },
  {
    icon: "⚡",
    title: "Rapide à charger",
    description:
      "Un site lent fait fuir les visiteurs. Les sites que je livre sont optimisés pour s'afficher en moins de 2 secondes.",
  },
  {
    icon: "🕐",
    title: "Disponible 24h/24",
    description:
      "Votre vitrine est en ligne en permanence — même le dimanche à 23h, un client potentiel peut vous découvrir et vous contacter.",
  },
  {
    icon: "✉️",
    title: "Formulaire de contact",
    description:
      "Chaque visiteur peut vous envoyer un message directement depuis le site. Vous recevez les demandes par email, sans intermédiaire.",
  },
  {
    icon: "🎨",
    title: "Image professionnelle",
    description:
      "Un site soigné inspire confiance. Il vous distingue des concurrents qui n'en ont pas et rassure les clients avant même le premier contact.",
  },
];

export default function Offres() {
  return (
    <Flex flex="1" direction="column" align="center" py="40px">
      <Meta
        title="Jules Le Morvan | Offres"
        description="Création de site web professionnel à partir de 140€ — nom de domaine, déploiement et maintenance sans engagement."
        path="/offres"
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
              Tarifs
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
              Simple.{" "}
              <Box as="span" color="teal.400">
                Transparent.
              </Box>{" "}
              Sans surprise.
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
              Un site professionnel, livré clé en main — pas de jargon technique,
              pas de mauvaise surprise.
            </Text>
          </SlideFade>

          {/* Pricing cards */}
          <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.5 } }}>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={8}
              align={{ base: "center", md: "stretch" }}
              mb={24}
            >
              <OfferCard
                title="Création"
                price="140€"
                subtitle="paiement unique"
                items={[
                  "Conception du site sur mesure",
                  "Nom de domaine inclus (1 an)",
                  "Mise en ligne et déploiement",
                  "Design soigné et responsive",
                  "Formulaire de contact",
                ]}
              />
              <OfferCard
                title="Maintenance"
                price="40€"
                subtitle="/ mois"
                note="Sans engagement — résiliable à tout moment"
                featured
                items={[
                  "Modifications et mises à jour",
                  "Ajout de photos et contenus",
                  "Renouvellement du nom de domaine",
                  "Hébergement inclus",
                  "Interlocuteur unique et disponible",
                ]}
              />
            </Stack>
          </SlideFade>

          {/* Benefits */}
          <Divider borderColor="gray.200" mb={20} />

          <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.1 } }}>
            <Heading
              fontFamily="Roboto"
              fontWeight="700"
              fontSize={{ base: "26px", md: "34px" }}
              letterSpacing="-0.5px"
              textAlign="center"
              mb={4}
            >
              Pourquoi avoir un site web{" "}
              <Box as="span" color="teal.400">
                en 2025 ?
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
              Un site bien fait, c&apos;est votre meilleur commercial — disponible à toute heure.
            </Text>
          </SlideFade>

          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={5}
            w="full"
            maxW="900px"
            mb={20}
          >
            {benefits.map((b) => (
              <BenefitCard key={b.title} {...b} />
            ))}
          </SimpleGrid>

          {/* CTA */}
          <SlideFade in offsetY="10px" transition={{ enter: { duration: 0.6, delay: 0.2 } }}>
            <Flex
              direction="column"
              align="center"
              gap={4}
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="12px"
              px={{ base: "30px", md: "60px" }}
              py="40px"
              maxW="560px"
              w="full"
            >
              <Heading
                fontFamily="Roboto"
                fontWeight="700"
                fontSize="22px"
                textAlign="center"
                color="gray.800"
              >
                Un projet en tête ?
              </Heading>
              <Text color="gray.500" fontSize="14px" textAlign="center" lineHeight="1.7">
                Décrivez-moi votre activité et ce que vous souhaitez — je vous réponds sous 24h.
              </Text>
              <Button
                as={Link}
                href="/contact"
                colorScheme="teal"
                size="lg"
                letterSpacing="1px"
                px={8}
                mt={2}
                _hover={{ transform: "scale(1.04)" }}
                transition="0.2s ease"
              >
                Me contacter
              </Button>
            </Flex>
          </SlideFade>

        </Flex>
      </AnimationPages>
    </Flex>
  );
}
