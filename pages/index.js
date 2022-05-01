import { Flex, Heading, SlideFade, Fade, VStack, Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { cloneElement } from "react";
import { useRouteVisited } from "../hooks/useRouteVisited";

const Fading = ({ children, animated, component }) => {
  if (animated) {
    return cloneElement(component, { children });
  }

  return children;
};

const NetworkButton = ({ delay, icon, animated }) => {
  return (
    <Fading
      animated={animated}
      component={
        <SlideFade
          offsetX="20px"
          offsetY="0px"
          in
          transition={{ enter: { duration: 1, delay } }}
        />
      }
    >
      <Button variant="ghost">{icon}</Button>
    </Fading>
  );
};

export default function Home() {
  const isVisited = useRouteVisited("/");

  return (
    <Flex
      flex="1"
      align="flex-start"
      justify="center"
      direction="column"
      position="relative"
    >
      <Head>
        <title>Jules Le Morvan - HOME</title>
      </Head>
      <Fading
        animated={!isVisited}
        component={
          <Fade in transition={{ enter: { duration: 1, delay: 0.5 } }} />
        }
      >
        <Heading
          size="lg"
          fontFamily="Roboto"
          fontWeight="100"
          letterSpacing="3px"
        >
          Jules Le Morvan
        </Heading>
      </Fading>

      <Fading
        animated={!isVisited}
        component={
          <SlideFade
            offsetY="10px"
            in
            transition={{ enter: { duration: 1, delay: 1 } }}
          />
        }
      >
        <Heading size={"4xl"} fontFamily="Roboto" letterSpacing="3px">
          Developer Front-End
        </Heading>
      </Fading>

      <Fading
        animated={!isVisited}
        component={
          <SlideFade
            offsetY="10px"
            in
            transition={{ enter: { duration: 1, delay: 1.5 } }}
          />
        }
      >
        <Flex position="relative">
          <ButtonGroup variant="outline" spacing={6} mt={6}>
            <Button
              colorScheme="white"
              variant="outline"
              transition="0.5s ease"
              letterSpacing="3px"
              _hover={{ transform: "scale(1.1)", border: "solid 3px white" }}
              position="absolute"
            >
              <Link href="/projects">CV</Link>
            </Button>
            <Button
              colorScheme="white"
              variant="outline"
              transition="0.5s ease"
              letterSpacing="3px"
              _hover={{ transform: "scale(1.1)", border: "solid 3px white" }}
              position="absolute"
              left="60px"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </ButtonGroup>
        </Flex>
      </Fading>

      <Box
        position="absolute"
        right="-60px"
        top="50%"
        transform="translateY(-50%)"
      >
        <VStack spacing={7}>
          <NetworkButton
            animated={!isVisited}
            delay={1.6}
            icon={<FaGithub size="25px" />}
          />
          <NetworkButton
            animated={!isVisited}
            delay={1.9}
            icon={<FaLinkedin size="25px" />}
          />
          <NetworkButton
            animated={!isVisited}
            delay={2.2}
            icon={<FaTwitterSquare size="25px" />}
          />
        </VStack>
      </Box>
    </Flex>
  );
}
