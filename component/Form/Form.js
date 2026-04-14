import React, { useState } from "react";
import {
  Stack,
  FormLabel,
  Input,
  FormControl,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const Form = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) throw new Error("Erreur serveur");

      toast({
        title: "Message envoyé avec succès",
        status: "success",
        duration: 3000,
        isClosable: false,
        position: "top",
      });
      setFields({ name: "", lastName: "", email: "", message: "" });
    } catch {
      toast({
        title: "Erreur lors de l'envoi, réessayez plus tard",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={sendEmail} style={{ width: "100%" }}>
      <Stack spacing={5}>
        <Flex gap={4}>
          <FormControl isRequired>
            <FormLabel fontSize="13px" letterSpacing="0.5px" color="gray.500">Prénom</FormLabel>
            <Input
              type="text"
              id="name"
              placeholder="Votre prénom"
              name="name"
              value={fields.name}
              onChange={handleChange}
              focusBorderColor="teal.400"
              autoComplete="off"
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="13px" letterSpacing="0.5px" color="gray.500">Nom</FormLabel>
            <Input
              type="text"
              id="lastName"
              placeholder="Votre nom"
              name="lastName"
              value={fields.lastName}
              onChange={handleChange}
              focusBorderColor="teal.400"
              autoComplete="off"
            />
          </FormControl>
        </Flex>
        <FormControl isRequired>
          <FormLabel fontSize="13px" letterSpacing="0.5px" color="gray.500">Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="votre@email.com"
            name="email"
            value={fields.email}
            onChange={handleChange}
            focusBorderColor="teal.400"
            autoComplete="off"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize="13px" letterSpacing="0.5px" color="gray.500">Message</FormLabel>
          <Textarea
            placeholder="Décrivez votre projet, votre activité..."
            name="message"
            value={fields.message}
            onChange={handleChange}
            focusBorderColor="teal.400"
            autoComplete="off"
            minHeight="140px"
            resize="vertical"
          />
        </FormControl>
        <Button
          isLoading={isLoading}
          type="submit"
          colorScheme="teal"
          size="md"
          letterSpacing="1px"
          _hover={{ transform: "scale(1.02)" }}
          transition="0.2s ease"
        >
          Envoyer
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
