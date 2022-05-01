import { Flex, Text, Fade } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Fade in transition={{ enter: { duration: 1, delay: 1.5 } }}>
      <Flex
        h="100px"
        justify="center"
        align="center"
        textAlign="center"
        letterSpacing="3px"
      >
        <Text>Designed by @JulesLeMorvan with NextJS and Chakra-UI</Text>
      </Flex>
    </Fade>
  );
};
