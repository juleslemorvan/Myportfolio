import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

import {
  Stack,
  FormLabel,
  Input,
  FormControl,
  Textarea,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
  const form = useRef();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_gu7q00x",
        "template_p9e7v0a",
        form.current,
        "uyN-j51Y0y3kG-rvA"
      )
      .then(
        (result) => {
          toast({
            title: "message envoyé avec succès",
            status: "success",
            duration: 3000,
            isClosable: false,
            position: "top",
          });
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Stack spacing={5} w="100%">
        <Flex direction="row">
          <FormControl isRequired mr="20px">
            <FormLabel htmlFor="first-name">Prénom</FormLabel>
            <Input
              type="name"
              id="first-name"
              placeholder="First name"
              aria-label="First Name"
              name="name"
              style={{ borderColor: "#355995" }}
              autoComplete="off"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="first-name">Nom</FormLabel>
            <Input
              type="lastName"
              id="Last-name"
              placeholder="Last name"
              aria-label="Last Name"
              name="lastName"
              style={{ borderColor: "#355995" }}
              autoComplete="off"
            />
          </FormControl>
        </Flex>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            aria-label="email"
            name="email"
            style={{ borderColor: "#355995" }}
            autoComplete="off"
          />
        </FormControl>
        <FormControl>
          <Text mb="8px">Votre message: </Text>
          <Textarea
            placeholder="Votre message ..."
            size="sm"
            name="message"
            style={{ borderColor: "#355995" }}
            autoComplete="off"
            minHeight="125px"
          />
        </FormControl>
        <Button
          isLoading={isLoading}
          type="submit"
          variant="outline"
          borderColor="#355995"
        >
          Envoyer
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
