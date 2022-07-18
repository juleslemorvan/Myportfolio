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
      <Meta title={"Jules Le Morvan | Présentation"} />
      <AnimationPages>
        <Flex justify="center" pt={{base: "0px", md:"40px"}}>
            <Heading as='h1' letterSpacing="4px"
          fontFamily="Roboto"
          fontWeight="100"
          textAlign="center" fontSize={{ base: "40px", sm: "40px", md: "40px" }}>
                {`About Me`}
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
              alt="image-profil"
              src={julesPic}
              quality={100}
              width="350px"
              height="350px"
              style={{ borderRadius: "6px" }}
              objectFit="cover"
              
            />
          </Flex>
          <Box flex={6} textAlign={{ base: "center", xl: "start" }}>
            <Flex mb="20px" justify="center" align="center">
              
            </Flex>
            <Box px={{ base: "0px", md: "20px" }}>
              {`After studying Marketing and Business Development, I
              decided to convert to web development.`}
              <br />
              <br />
              {`In 2020 I decided to start learning code by
              performing a bootcamp, Le Wagon.`}
              <br />
              {`During these 2 intensive months I was able to design a Web application
              from the bottom to the top and acquire a global vision of its architecture.`}
              <br />
              {`Faced with this first experience where I mainly used
              the language "Ruby" with its framework "Rails", I was able
              see my attraction to the front with the Javascript language.`}
              <br />
              <br />
              {`On the strength of this observation, I then embarked on a
              Front-end React course with the OpenclassRoom organization that I
              should be completed in the next few weeks.`}
              <br />
              <br />
              {"At the end of these different projects and in view of these multiple technologies used, I decided to specialize in front-end development, React specialty"}
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
          Technologies I work with
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
