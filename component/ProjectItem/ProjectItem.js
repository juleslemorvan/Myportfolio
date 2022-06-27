import {
  Flex,
  Box,
  SlideFade,
  Heading,
  Text,
  Badge,
  Button,
  ButtonGroup,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const ProjectItem = ({
  title,
  description,
  image,
  linkGithub,
  linkSite,
  technologies,
}) => {
  const myRef = useRef();
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);

  return (
    <Stack
      direction={{
        base: "column",
        xl: "row",
      }}
      ref={myRef}
      alignItems="stretch"
      justify="stretch"
    >
      <Box flex={4} height="100%" rounded="xl">
        <SlideFade
          in={inViewport || enterCount > 0}
          transition={{ enter: { duration: 0.5, delay: 0.3 } }}
          offsetX="-60px"
          style={{ height: "100%" }}
        >
          <Image
            src={image}
            maxH={{ base: "300px", xl: "unset" }}
            h="100%"
            w="100%"
            objectFit="cover"
            rounded="xl"
            alt="project image"
          />
        </SlideFade>
      </Box>
      <Box flex={6} rounded="full" height="100%">
        <SlideFade
          in={inViewport || enterCount > 0}
          transition={{ enter: { duration: 0.5, delay: 0.3 } }}
          offsetX="60px"
          style={{ height: "100%" }}
        >
          <Box bg="#1A202C" w="100%" h="100%" boxShadow="dark-lg" rounded="xl">
            <Flex direction="column" justify="center" align="center" py={3}>
              <Heading
                as="h2"
                fontSize={{ base: "30px", md: "25px", lg: "40px" }}
                pt="10px"
                color="whiteAlpha.800"
                fontFamily="Roboto"
                fontWeight="300"
              >
                {title}
              </Heading>
              <Text
                p={{ sm: "4", md: "5" }}
                lineHeight="35px"
                color="white"
                textAlign="center"
                fontSize={{ lg: "20px" }}
              >
                {description}
              </Text>
              <Stack
                direction="row"
                spacing={4}
                py={{ base: "20px", md: "0px", lg: "0px" }}
                alignItems="center"
                flexWrap="wrap"
                justifyContent="center"
              >
                {technologies.map(({ name, color }) => (
                  <Badge
                    key={name}
                    variant="outline"
                    colorScheme={color}
                    fontSize={{ lg: "17px" }}
                    marginBottom={{ base: "6px", md: "0px" }}
                  >
                    {name}
                  </Badge>
                ))}
              </Stack>
              <ButtonGroup
                variant="outline"
                spacing="6"
                pt={{ sm: "10px", md: "30px" }}
                mb={{ base: "20px" }}
                size="md"
              >
                <Button
                  colorScheme="blue"
                  onClick={() => window.open(linkSite)}
                >
                  Site
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={() => window.open(linkGithub)}
                >
                  Code Github
                </Button>
              </ButtonGroup>
            </Flex>
          </Box>
        </SlideFade>
      </Box>
    </Stack>
  );
};
