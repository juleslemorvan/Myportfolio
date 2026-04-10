import {
  Box,
  Flex,
  Heading,
  ScaleFade,
  Stack,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import AnimationPages from "../component/AnimationPages/AnimationPages";
import Meta from "../component/Meta/Meta";
import { getLogoSkillzRows } from "../data/logoData";
import { useRouteVisited } from "../hooks/useRouteVisited";
import julesPic from "../public/julesPic.png";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export const breakpoints = createBreakpoints({
  sm: "481px",
  md: "769px",
  lg: "1025px",
  xl: "1281px",
});

const About = () => {
  useRouteVisited("/about");

  const myRef = useRef();
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);

  const logosRows = getLogoSkillzRows();

  return (
    <Flex flex="1 1 auto" direction="column">
      <Meta title={"Jules Le Morvan | À propos"} description="Découvrez le parcours de Jules Le Morvan, développeur Front-end React basé en France — reconversion, formation et projets." path="/about" />
      <AnimationPages>
        <Flex justify="center" pt={{base: "0px", md:"40px"}}>
            <Heading as='h1' letterSpacing="4px"
          fontFamily="Roboto"
          fontWeight="100"
          textAlign="center" fontSize={{ base: "40px", sm: "40px", md: "40px" }}>
                {`À propos`}
              </Heading>
          </Flex>
        <Stack
          direction={{ base: "column", lg: "row" }}
          flex="1 1 auto"
          mt={{base: "40px", lg:"0px"}}
          px={{ base: "0px", md: "30px" }}
          h={{ base: "unset", lg: "90vh" }}
          spacing="30px"
          justify="center"
          align="center"
        >
          
          <Flex flex={4} justify="center" align="center">
            <Image
              alt="Jules Le Morvan - Développeur Front-end React"
              src={julesPic}
              quality={100}
              width={350}
              height={350}
              style={{ borderRadius: "6px", objectFit: "cover" }}
            />
          </Flex>
          <Box flex={6} textAlign={{ base: "center", xl: "start" }}>
            <Flex mb="20px" justify="center" align="center">
              
            </Flex>
            <Box px={{ base: "0px", md: "20px" }}>
              {`Après des études en Marketing et Développement Commercial, j'ai décidé de me reconvertir dans le développement web.`}
              <br />
              <br />
              {`En 2020, j'ai commencé à apprendre le code en intégrant un bootcamp intensif : Le Wagon.`}
              <br />
              {`En l'espace de 2 mois, j'ai conçu une application web de A à Z et acquis une vision globale de son architecture.`}
              <br />
              {`Cette première expérience, principalement axée sur Ruby et Rails, m'a révélé mon attrait pour le front-end et le JavaScript.`}
              <br />
              <br />
              {`Fort de ce constat, je me suis lancé dans une formation Front-end React avec OpenClassRooms, que j'ai menée jusqu'à son terme.`}
              <br />
              <br />
              {`Au fil des projets et des technologies explorées, j'ai choisi de me spécialiser dans le développement front-end, avec React comme expertise principale.`}
            </Box>
          </Box>
        </Stack>
      </AnimationPages>
      <Flex justify="center">
        <Divider width="70%" borderColor="teal" mt={{base:"20px", md:"100px", xl:"0px"}} />
      </Flex>
      <Flex mt="60px" direction="column">
        <Heading letterSpacing="4px"
          fontFamily="Roboto"
          fontWeight="100"
          textAlign="center">
          Technologies maîtrisées
        </Heading>
        <Flex
          direction="column"
          align="center"
          justify="center"
          flexWrap="wrap"
          ref={myRef}
          flex="1 1 auto"
          py={{ base: "40px", sm: "60px", md: "80px", lg: "100px" }}
          gap={{ base: "0px", lg: "100px" }}
        >
          {logosRows.map((logosRow, index) => (
            <Flex key={index} shouldWrapChildren wrap="wrap" justify="center">
              {logosRow.map((logo) => {
                return (
                  <ScaleFade
                    key={logo.titre}
                    initialScale={0.5}
                    in={inViewport || enterCount > 0}
                    transition={{
                      enter: { duration: 0.6, delay: Math.random() },
                    }}
                  >
                    <Flex
                      p="10px"
                      h="100px"
                      w="100px"
                      boxShadow="dark-lg"
                      margin={{ base: "opx", lg: "20px" }}
                      alignItems="center"
                      justifyContent="center"
                      _hover={{ transform: "scale(1.3)" }}
                      transition=" 400ms ease-in-out"
                    >
                      {logo.label ? (
                        <Tooltip label={logo.label}>
                          <Box
                            cursor={logo.link ? "pointer" : "default"}
                            onClick={
                              logo.link
                                ? () => window.open(logo.link)
                                : undefined
                            }
                          >
                            <Image src={logo.image} alt={logo.titre} />
                          </Box>
                        </Tooltip>
                      ) : (
                        <Image src={logo.image} alt={logo.titre}/>
                      )}
                    </Flex>
                  </ScaleFade>
                );
              })}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
