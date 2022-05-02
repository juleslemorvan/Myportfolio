import React, { Fragment } from "react";
import { VStack, Heading, Box, ScaleFade } from "@chakra-ui/react";
import { useRouteVisited } from "../hooks/useRouteVisited";
import { projectsData } from "../data/ProjectsData";
import { ProjectItem } from "../component/ProjectItem/ProjectItem";
import Meta from "../component/Meta/Meta";

const projects = () => {
  useRouteVisited("/projects");

  return (
    <VStack align="center" w="full" my={9} mx={20}>
      <Meta title={"Jules Le Morvan | Portfolio"} />
      <ScaleFade
        initialScale={0.9}
        in
        transition={{ enter: { duration: 0.7, delay: 0.3 } }}
      >
        <Heading
          as="h1"
          mt={4}
          mb="100px"
          letterSpacing="4px"
          fontFamily="Roboto"
          fontWeight="100"
        >
          Mes différents projets
        </Heading>
      </ScaleFade>
      {projectsData.map((item) => (
        <Fragment key={item.title}>
          <ProjectItem {...item} />
          <Box h="100px" />
        </Fragment>
      ))}
    </VStack>
  );
};

export default projects;
