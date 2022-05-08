import { Flex, Heading, SlideFade, Fade, VStack, Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
import { cloneElement } from "react";
import { useRouteVisited } from "../hooks/useRouteVisited";
import Meta from "../component/Meta/Meta";

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
          offsetX="90px"
          offsetY="0px"
          in
          transition={{ enter: { duration: 1, delay } }}
        />
      }
    >
      <Button _hover={{ transform: "scale(1.3)" }} variant="ghost">
        {icon}
      </Button>
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
      <Meta title={"Jules Le Morvan | Accueil"} />
      <Fading
        animated={!isVisited}
        component={
          <Fade in transition={{ enter: { duration: 1, delay: 0.5 } }} />
        }
      >
        <Heading
          fontSize={{ base: "30px", lg: "30px", xl: "40px" }}
          fontFamily="Roboto"
          fontWeight="100"
          letterSpacing="3px"
          pl={{ base: "10px" }}
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
        <Heading
          fontSize={{ base: "45px", lg: "50px", xl: "90px" }}
          fontFamily="Roboto"
          letterSpacing="3px"
          pl={{ base: "10px" }}
        >
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
              transition="0.3s ease"
              letterSpacing="3px"
              _hover={{ transform: "scale(1.1)" }}
              position="absolute"
            >
              <Link href="/projects">CV</Link>
            </Button>
            <Button
              colorScheme="white"
              variant="outline"
              transition="0.3s ease"
              letterSpacing="3px"
              _hover={{ transform: "scale(1.1)" }}
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
            icon={
              <FaGithub
                size="25px"
                onClick={() => window.open("https://github.com/juleslemorvan")}
              />
            }
          />
          <NetworkButton
            animated={!isVisited}
            delay={1.9}
            icon={
              <FaLinkedin
                size="25px"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jules-le-morvan-126b8b177/"
                  )
                }
              />
            }
          />
          <NetworkButton
            animated={!isVisited}
            delay={2.2}
            icon={
              <FaTwitterSquare
                size="25px"
                onClick={() => window.open("https://twitter.com/juleslemorvan")}
              />
            }
          />
        </VStack>
      </Box>
    </Flex>
  );
}
