import { Box, Flex, Heading, ScaleFade, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import AnimationPages from "../component/AnimationPages/AnimationPages";
import Meta from "../component/Meta/Meta";
import { logoSkillz } from "../data/logoData";
import { useRouteVisited } from "../hooks/useRouteVisited";
import ProfilPic from "../public/ProfilPic.jpg";

const about = () => {
  useRouteVisited("/about");
  console.log(logoSkillz);

  const myRef = useRef();
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);

  console.log({ inViewport, enterCount, leaveCount });

  return (
    <Box>
      <Meta title={"Jules Le Morvan | About-me"} />
      <AnimationPages>
        <Stack
          direction={{ base: "column", xl: "row" }}
          h="80vh"
          flex="1"
          justify="center"
          align="center"
          m={6}
        >
          <Box
            flex={4}
            mt={{ base: "100px" }}
            boxSize={{ base: "300px", xl: "450px" }}
          >
            <Image src={ProfilPic} />
          </Box>

          <Box flex={6} textAlign={{ base: "center", xl: "start" }}>
            <Flex
              justify={{ base: "center", xl: "flex-start" }}
              align="center"
              py="20px"
            >
              <Heading textAlign={{ base: "center", xl: "center" }}>
                À-propos de moi
              </Heading>
            </Flex>
            <Box>
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
      <Flex justify="center" align="center" w="100%" mt="100px">
        <Box
          borderBottom="4px solid "
          w="50%"
          h="2px"
          borderLeftRadius="50%"
          borderRightRadius="50%"
          my={{ sm: "100px", md: "0px" }}
        ></Box>
      </Flex>
      <Box h="80vh">
        <Flex justify="center" mt="60px" direction="column" align="center">
          <Heading fontSize="25px">Les Technologies que j'utilise :</Heading>
          <Stack
            h="60vh"
            w="full"
            spacing={"100px"}
            mb="30px"
            direction="row"
            align="center"
            justify="center"
            flexWrap="wrap"
            ref={myRef}
          >
            {logoSkillz.map((logo) => {
              return (
                <ScaleFade
                  initialScale={0.9}
                  in={inViewport || enterCount > 0}
                  transition={{ enter: { duration: 0.5, delay: 0.5 } }}
                >
                  <Flex
                    maxH="100px"
                    maxW="150px"
                    flexWrap="wrap"
                    direction={{ base: "column" }}
                    key={logo.titre}
                  >
                    <Image src={logo.image} />
                  </Flex>
                </ScaleFade>
              );
            })}
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default about;
