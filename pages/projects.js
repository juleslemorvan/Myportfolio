import React, { Fragment } from "react";
import {
  VStack,
  Heading,
  Text,
  Box,
  SlideFade,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useRouteVisited } from "../hooks/useRouteVisited";
import { projectsData } from "../data/ProjectsData";
import { ProjectItem } from "../component/ProjectItem/ProjectItem";
import Meta from "../component/Meta/Meta";
import AnimationPages from "../component/AnimationPages/AnimationPages";

const Projects = () => {
  useRouteVisited("/projects");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Flex flex="1" direction="column" align="center" py="40px" overflowX="hidden" w="full">
      <Meta
        title="Jules Le Morvan | Projets"
        description="Projets web réalisés par Jules Le Morvan — applications full-stack, sites vitrines et dashboards."
        path="/projects"
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
              Portfolio
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
              Quelques projets qui parlent{" "}
              <Box as="span" color="teal.400">
                d&apos;eux-mêmes.
              </Box>
            </Heading>
          </SlideFade>

          <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.4 } }}>
            <Text
              color="gray.500"
              textAlign="center"
              maxW="700px"
              mb={10}
              fontSize="16px"
              lineHeight="1.8"
            >
              Une sélection de projets — apps web, sites vitrines et outils interactifs.
            </Text>
          </SlideFade>

          {/* Projects list */}
          <SlideFade in offsetY="20px" transition={{ enter: { duration: 0.6, delay: 0.5 } }}>
            <VStack align="stretch" w="full" spacing={0}>
              {projectsData.map((item) => (
                <Fragment key={item.title}>
                  <ProjectItem {...item} />
                  <Box h="80px" />
                </Fragment>
              ))}
            </VStack>
          </SlideFade>

          {/* Scroll to top */}
          <IconButton
            onClick={scrollToTop}
            icon={<ArrowUpIcon />}
            aria-label="Retour en haut"
            variant="outline"
            colorScheme="teal"
            borderRadius="full"
            size="md"
            mt={4}
            _hover={{ bg: "teal.400", color: "white", borderColor: "teal.400", transform: "scale(1.08)" }}
            transition="0.2s ease"
          />

        </Flex>
      </AnimationPages>
    </Flex>
  );
};

export default Projects;
