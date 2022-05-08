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
  linkGithub,
  technologies,
}) => {
  const myRef = useRef();
  const { inViewport, enterCount, leaveCount } = useInViewport(myRef);

  console.log({ title, inViewport, enterCount, leaveCount });

  return (
    <Stack
      direction={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
      }}
      w="100%"
      ref={myRef}
      justify={{ lg: "center" }}
      align={{ lg: "center" }}
      spacing={6}
    >
      <Box
        w={{ md: "40%", md: "40%", lg: "40%", xl: "40%" }}
        mr={{ lg: "Opx", xl: "30px" }}
        rounded="3xl"
        boxShadow="dark-lg"
      >
        <SlideFade
          in={inViewport || enterCount > 0}
          transition={{ enter: { duration: 0.5, delay: 0.7 } }}
          offsetX="-60px"
        >
          <Box w="100%" h="350px" bg="#1A202C">
            <Image src={imageUrl} h="100%" w="100%" rounded />
          </Box>
        </SlideFade>
      </Box>
      <Box w={{ md: "60%", lg: "60%", xl: "60%" }}>
        <SlideFade
          in={inViewport || enterCount > 0}
          transition={{ enter: { duration: 0.5, delay: 0.7 } }}
          offsetX="60px"
        >
          <Box
            bg="#1A202C"
            w="100%"
            h={{
              sm: "350px",
              md: "350px",
              lg: "350px",
              xl: "350px",
            }}
            boxShadow="dark-lg"
            rounded="md"
          >
            <Flex direction="column" justify="center" align="center" py={3}>
              <Heading
                as="h2"
                fontSize={{ sm: "30px", md: "25px", lg: "40px" }}
                pt="10px"
                color="whiteAlpha.800"
                fontFamily="Roboto"
                fontWeight="100"
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
              >
                {technologies.map(({ name, color }) => (
                  <Badge
                    key={name}
                    variant="outline"
                    colorScheme={color}
                    fontSize={{ lg: "23px" }}
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
                size="lg"
              >
                <Button
                  colorScheme="blue"
                  onClick={() =>
                    window.open("https://www.producthunt.com/posts/svg-doodles")
                  }
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
