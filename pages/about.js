import {
  Box,
  Flex,
  Heading,
  ScaleFade,
  Stack,
  Divider,
  useMediaQuery,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import AnimationPages from "../component/AnimationPages/AnimationPages";
import Meta from "../component/Meta/Meta";
import { logoSkillz, getLogoSkillzRows } from "../data/logoData";
import { useRouteVisited } from "../hooks/useRouteVisited";
import ProfilPic from "../public/ProfilPic.jpg";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export const breakpoints = createBreakpoints({
  sm: "481px",
  md: "769px",
  lg: "1025px",
  xl: "1281px",
});

const deviceBreakpoint = {
  mobile: "sm",
  tabletS: "md",
  tabletL: "lg",
  desktop: "xl",
};

const useDevice = (device) =>
  useMediaQuery([`(min-width : ${breakpoints[deviceBreakpoint[device]]})`])[0];

const about = () => {
  useRouteVisited("/about");

  const myRef = useRef();
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);

  const isMobile = useDevice("mobile");
  const isTablet = useDevice("tabletS");

  const logosRows = getLogoSkillzRows();

  return (
    <Flex flex="1 1 auto" direction="column">
      <Meta title={"Jules Le Morvan | Présentation"} />
      <AnimationPages>
        <Stack
          direction={{ base: "column", lg: "row" }}
          flex="1 1 auto"
          my={10}
          px={{ base: "0px", md: "30px" }}
          h={{ base: "unset", lg: "90vh" }}
          spacing="30px"
          justify="center"
          align="center"
        >
          <Flex flex={4} justify="center" align="center">
            <Image
              src={ProfilPic}
              quality={100}
              width={isMobile ? "100" : isTablet ? "200" : "350"}
              height={isMobile ? "100" : isTablet ? "200" : "350"}
              style={{ borderRadius: "6px" }}
            />
          </Flex>
          <Box flex={6} textAlign={{ base: "center", xl: "start" }}>
            <Flex mb="20px" justify="center" align="center">
              <Heading textAlign="center">À-propos de moi</Heading>
            </Flex>
            <Box px={{ base: "0px", md: "20px" }}>
              Apres des études en Marketing et développement commercial, j'ai
              décidé de me reconvertir dans le developpement Web.
              <br />
              <br />
              En 2020 j'ai décidé de me lancer dans l'apprentissage du code en
              effectuant un bootcamp, le Wagon.
              <br />
              Durant ces 2 mois intensifs j'ai pu concevoir une application Web
              de bout en bout et acquérir une vision global de son achitecture.
              <br />
              Face à cette premiere experience ou j'ai utilisé majoritairement
              le language Back "Ruby" avec son framework "Rails", j'ai pu
              constater mon attirance vers le front avec le language Javascript.
              <br />
              <br />
              Fort de ce constat, je me suis lancé par la suite dans une
              formation Front-end React avec l'organisme OpenclassRoom que je
              devrai terminer durant les prochaines semaines.
            </Box>
          </Box>
        </Stack>
      </AnimationPages>
      <Flex justify="center">
        <Divider width="70%" borderColor="teal" my="20px" />
      </Flex>
      <Flex
        justify="center"
        mt="60px"
        direction="column"
        align="center"
        flex="1 1 auto"
      >
        <Heading>Technologies utilisées</Heading>
        <Stack
          w="full"
          direction="column"
          align="center"
          justify="center"
          flexWrap="wrap"
          spacing="50px"
          alignSelf="center"
          my="200px"
          ref={myRef}
        >
          {logosRows.map((logosRow, index) => (
            <HStack
              key={index}
              spacing="20px"
              justify="center"
              shouldWrapChildren
              wrap="wrap"
            >
              {logosRow.map((logo) => {
                return (
                  <ScaleFade
                    initialScale={0.5}
                    in={inViewport || enterCount > 0}
                    transition={{
                      enter: { duration: 0.6, delay: Math.random() },
                    }}
                  >
                    <Flex
                      h="100px"
                      w="100px"
                      key={logo.titre}
                      marginInlineEnd="20px"
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
                            <Image src={logo.image} />
                          </Box>
                        </Tooltip>
                      ) : (
                        <Image src={logo.image} />
                      )}
                    </Flex>
                  </ScaleFade>
                );
              })}
            </HStack>
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default about;
