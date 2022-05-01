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
  imageUrl,
  link,
  linkGithub,
  technologies,
}) => {
  const myRef = useRef();
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);

  console.log({ title, inViewport, enterCount, leaveCount });

  return (
    <Flex
      direction={{ xl: "row", lg: "column" }}
      w="100%"
      ref={myRef}
      justify={{ lg: "center" }}
      align={{ lg: "center" }}
    >
      <Box w={{ xl: "40%", lg: "60%" }} mr={{ xl: "30px", lg: "Opx" }}>
        <SlideFade
          in={inViewport || enterCount > 0}
          transition={{ enter: { duration: 0.5, delay: 0.7 } }}
          offsetX="-60px"
        >
          <Box
            w="100%"
            h="350px"
            bg="#1A202C"
            boxShadow="dark-lg"
            rounded="md"
            cursor="pointer"
            _hover={{ border: "solid 1px white" }}
            transition=" 0.1s ease"
          >
            <Image src={imageUrl} />
          </Box>
        </SlideFade>
      </Box>
      <Box w={{ xl: "60%", lg: "100%" }}>
        <SlideFade
          in={inViewport || enterCount > 0}
          transition={{ enter: { duration: 0.5, delay: 0.7 } }}
          offsetX="60px"
        >
          <Box bg="#1A202C" w="100%" h="350px" boxShadow="dark-lg" rounded="md">
            <Flex direction="column" justify="center" align="center" py={3}>
              <Heading
                as="h2"
                fontSize="25px"
                pt="10px"
                color="whiteAlpha.800"
                fontFamily="Roboto"
                fontWeight="100"
              >
                {title}
              </Heading>
              <Text p={9} lineHeight="35px" color="white" textAlign="center">
                {description}
              </Text>
              <Stack direction="row" spacing={4}>
                {technologies.map(({ name, color }) => (
                  <Badge
                    key={name}
                    variant="outline"
                    colorScheme={color}
                    fontSize="17px"
                  >
                    {name}
                  </Badge>
                ))}
              </Stack>
              <ButtonGroup variant="outline" spacing="6" pt="30px">
                <Button colorScheme="blue" onClick={() => window.open(link)}>
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
    </Flex>
  );
};
