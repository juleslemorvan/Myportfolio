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

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gu7q00x",
        "template_p9e7v0a",
        form.current,
        "uyN-j51Y0y3kG-rvA"
      )
      .then(
        (result) => {
          console.log(result.text);
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
          />
        </FormControl>
        <FormControl>
          <Text mb="8px">Votre message: </Text>
          <Textarea size="sm" name="message" />
        </FormControl>
        <Button type="submit" variant="outline" borderColor="white">
          Envoyer
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
