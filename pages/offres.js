import {
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  Divider,
  SlideFade,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
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

const ArgumentSection = ({ icon, eyebrow, title, body, reversed }) => (
  <Stack
    direction={{ base: "column", md: reversed ? "row-reverse" : "row" }}
    spacing={{ base: 8, md: 16 }}
    align="center"
    w="full"
    maxW="860px"
    mb={20}
  >
    <Flex
      flexShrink={0}
      w={{ base: "120px", md: "160px" }}
      h={{ base: "120px", md: "160px" }}
      bg="teal.50"
      borderRadius="20px"
      align="center"
      justify="center"
      fontSize={{ base: "48px", md: "64px" }}
    >
      {icon}
    </Flex>
    <Box>
      <Text
        fontSize="11px"
        letterSpacing="3px"
        color="teal.500"
        fontWeight="600"
        textTransform="uppercase"
        mb={3}
      >
        {eyebrow}
      </Text>
      <Heading
        fontFamily="Roboto"
        fontWeight="700"
        fontSize={{ base: "22px", md: "28px" }}
        lineHeight="1.3"
        letterSpacing="-0.3px"
        mb={4}
      >
        {title}
      </Heading>
      <Text color="gray.500" fontSize="15px" lineHeight="1.9">
        {body}
      </Text>
    </Box>
  </Stack>
);

const argumentsList = [
  {
    icon: "🔍",
    eyebrow: "Référencement naturel",
    title: "Soyez visible là où vos clients vous cherchent",
    body: "Quand quelqu'un tape « plombier à Lyon » ou « électricien pas cher » sur Google, les premiers résultats sont des sites web. Sans site, vous n'existez tout simplement pas pour lui. Un site bien construit remonte naturellement dans les résultats de recherche locale — sans payer de publicité, sans dépenser en communication.",
  },
  {
    icon: "📱",
    eyebrow: "Expérience mobile",
    title: "Plus de 60% de vos visiteurs sont sur téléphone",
    body: "La majorité des recherches locales se font depuis un smartphone, souvent en déplacement ou en urgence. Un site qui s'affiche mal sur mobile, c'est un client perdu. Tous les sites que je livre sont conçus pour fonctionner parfaitement sur tous les écrans, dès le départ — sans compromis.",
  },
  {
    icon: "🕐",
    eyebrow: "Disponibilité permanente",
    title: "Un commercial disponible 24h/24, même le dimanche",
    body: "Votre site présente vos services, vos réalisations et vos coordonnées à toute heure — même quand vous dormez. Un client potentiel qui cherche un professionnel à 22h le vendredi peut vous découvrir, consulter votre travail et vous envoyer un message directement. Sans que vous ayez quoi que ce soit à faire.",
  },
  {
    icon: "🤝",
    eyebrow: "Confiance et crédibilité",
    title: "Un site soigné, c'est un client rassuré avant le premier contact",
    body: "Avant d'appeler, les gens regardent. Un site professionnel avec des photos de vos réalisations et des informations claires inspire confiance et vous distingue immédiatement des concurrents qui n'ont qu'une fiche Google Maps. C'est souvent ce petit détail qui fait pencher la balance en votre faveur.",
  },
  {
    icon: "⚡",
    eyebrow: "Performance technique",
    title: "Un site rapide, c'est plus de clients qui restent",
    body: "53% des visiteurs quittent un site s'il met plus de 3 secondes à charger. Les sites que je livre sont optimisés pour s'afficher en moins de 2 secondes, sur tous les appareils. Résultat : moins d'abandons, meilleur positionnement sur Google, et une meilleure image de marque.",
  },
  {
    icon: "✉️",
    eyebrow: "Prise de contact directe",
    title: "Recevez des demandes sans décrocher le téléphone",
    body: "Chaque visiteur peut vous envoyer un message directement depuis le site — depuis son canapé, à n'importe quelle heure. Vous recevez la demande par email avec tous les détails. Pas d'intermédiaire, pas de frais, pas de plateforme tierce. Juste un contact direct avec un client potentiel.",
  },
];

export default function Offres() {
  return (
    <Flex flex="1" direction="column" align="center" py="40px" overflowX="hidden">
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

          {/* Arguments */}
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
              mb={16}
            >
              Un site bien fait, c&apos;est votre meilleur commercial — disponible à toute heure.
            </Text>
          </SlideFade>

          <Flex direction="column" align="center" w="full" px={{ base: 4, md: 0 }}>
            {argumentsList.map((arg, i) => (
              <motion.div
                key={arg.eyebrow}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <ArgumentSection {...arg} reversed={i % 2 !== 0} />
              </motion.div>
            ))}
          </Flex>

          {/* CTA */}
          <Divider borderColor="gray.200" mb={16} />

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
