import React from "react";
import {
  Flex,
  Heading,
  ScaleFade,
  SlideFade,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useRouteVisited } from "../hooks/useRouteVisited";
import Form from "../component/Form/Form";
import { BsFillTelephoneForwardFill, BsFillEnvelopeFill } from "react-icons/bs";
import Meta from "../component/Meta/Meta";

const contact = () => {
  useRouteVisited("/contact");

  return (
    <Flex align="center" h="85vh" direction="column" w="full">
      <Meta title={"Jules Le Morvan | Contact"} />
      <ScaleFade
        initialScale={0.9}
        in
        transition={{ enter: { duration: 0.7, delay: 0.5 } }}
      >
        <Heading
          my="20px"
          fontFamily="Roboto"
          fontWeight="300"
          letterSpacing="3px"
          pb="30px"
        >
          Me Contacter ?
        </Heading>
      </ScaleFade>

      <ScaleFade
        initialScale={0.9}
        in
        transition={{ enter: { duration: 0.7, delay: 1 } }}
      >
        <Stack direction="row" spacing={9}>
          <Button
            alignItems="center"
            colorScheme="#FEE8D3"
            color="#345995"
            border="1px solid #345995"
            _hover={{ transform: "scale(1.1)" }}
            transition="ease 0.5"
            leftIcon={<BsFillTelephoneForwardFill />}
            onClick={() => navigator.clipboard.writeText("07 83 12 18 55")}
          >
            07 83 12 18 55
          </Button>
          <Button
            alignItems="center"
            colorScheme="transparent"
            color="#345995"
            border="1px solid #345995"
            _hover={{ transform: "scale(1.1)" }}
            transition="ease 0.5"
            leftIcon={<BsFillEnvelopeFill />}
            onClick={() =>
              navigator.clipboard.writeText("jules.lemorvan01@gmail.com")
            }
          >
            jules.lemorvan01@gmail.com
          </Button>
        </Stack>
      </ScaleFade>

      <Stack
        w="full"
        mt="30px"
        spacing={8}
        direction={{ base: "column", sm: "column", md: "row" }}
        align="center"
        justify="center"
      >
        <Flex
          w={{ sm: "100%", md: "50%" }}
          justifyContent="center"
          align="enter"
          h="full"
        >
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 "
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=14+rue+pasteur+lyon+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </Flex>

        <Flex w="50%" justifyContent="center" align="enter" direction="column">
          <SlideFade
            in
            transition={{ enter: { duration: 1, delay: 0.7 } }}
            offsetY="20px"
          >
            <Flex
              textAlign="center"
              mb="20px"
              fontWeight="700"
              letterSpacing="1px"
            >
              Pour toutes demandes, envoyer un message ! Je vous répondrai au
              plus vite ! ☻
            </Flex>
            <Flex justifyContent="center" align="center" w="100%">
              <Form />
            </Flex>
          </SlideFade>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default contact;
