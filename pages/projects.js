import React, { Fragment } from "react";
import { VStack, Heading, Box, ScaleFade, Flex } from "@chakra-ui/react";
import { useRouteVisited } from "../hooks/useRouteVisited";
import { projectsData } from "../data/ProjectsData";
import { ProjectItem } from "../component/ProjectItem/ProjectItem";
import Meta from "../component/Meta/Meta";
import { FaArrowAltCircleUp } from "react-icons/fa";
import ScrollTop from "../component/ScrollTop/ScrollTop";

const Projects = () => {
  useRouteVisited("/projects");

  return (
    <VStack align="center" justifyContent="center" w="full" my={9}>
      <Meta title={"Jules Le Morvan | Portfolio"} />
      <ScaleFade
        initialScale={0.9}
        in
        transition={{ enter: { duration: 0.7, delay: 0.3 } }}
      >
        <Heading
          as="h1"
          mt={4}
          mb={{ base: "40px", lg: "100px" }}
          letterSpacing="4px"
          fontFamily="Roboto"
          fontWeight="100"
          textAlign="center"
          fontSize={{ base: "26px", sm: "40px", md: "40px" }}
        >
          Some projects I worked on
        </Heading>
      </ScaleFade>
      <VStack align="stretch">
        {projectsData.map((item) => (
          <Fragment key={item.title}>
            <ProjectItem {...item} />
            <Box h="100px" />
          </Fragment>
        ))}

        <Flex
          bg="#1A202C"
          boxShadow="dark-lg"
          w="50%"
          justify="center"
          rounded="3xl"
          alignSelf="center"
        >
          <Box
            fontWeight="bold"
            letterSpacing="3px"
            fontSize="20px"
            color="whiteAlpha.800"
            py="5"
            textAlign="center"
          >
            FullStack Project is coming soon 🧑‍💻​
          </Box>
        </Flex>
        <Flex
          bg="#1A202C"
          boxShadow="dark-lg"
          w="10%"
          justify="center"
          rounded="3xl"
          alignSelf="center"
          marginTop="65px"
          cursor="pointer"
        >
          <ScrollTop />
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Projects;
