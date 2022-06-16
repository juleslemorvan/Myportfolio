import { Flex, Heading, SlideFade, Fade, Box, Stack } from "@chakra-ui/react";
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
    <Flex flex="1" align="center" justify="center" direction="column">
      <Meta title={"Jules Le Morvan | Accueil"} />

      <Fading
        animated={!isVisited}
        component={
          <Fade in transition={{ enter: { duration: 1, delay: 0.5 } }} />
        }
      >
        <Heading
          fontSize={{ base: "20px", lg: "25px", xl: "30px" }}
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
        <Heading
          fontSize={{ base: "35px", md: "45px", lg: "60px" }}
          fontFamily="Roboto"
          letterSpacing="3px"
          textAlign="center"
        >
          Front-end Developer
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
        <Flex alignItems="center">
          <ButtonGroup variant="outline" spacing={6} mt={6}>
            <Button
              colorScheme="white"
              variant="outline"
              transition="0.3s ease"
              letterSpacing="3px"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Link href="/ProfilPic.jpg" download>
                Resume
              </Link>
            </Button>
            <Button
              colorScheme="white"
              variant="outline"
              transition="0.3s ease"
              letterSpacing="3px"
              _hover={{ transform: "scale(1.1)" }}
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </ButtonGroup>
        </Flex>
      </Fading>

      <Box
        position="absolute"
        top={{ base: "unset", md: "50%" }}
        right={{ base: "unset", md: "0px", xl: "20px" }}
        transform={{ base: "translateX(-50%)", md: "translateY(-50%)" }}
        bottom={{ base: "100px", md: "unset" }}
        left={{ base: "50%", md: "unset" }}
      >
        <Stack spacing={7} direction={{ base: "row", md: "column" }}>
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
        </Stack>
      </Box>
    </Flex>
  );
}
