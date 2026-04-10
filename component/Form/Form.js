import React, { useState } from "react";
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
    <form onSubmit={sendEmail}>
      <Stack spacing={5} w="100%">
        <Flex direction="row">
          <FormControl isRequired mr="20px">
            <FormLabel htmlFor="name">FirstName</FormLabel>
            <Input
              type="text"
              id="name"
              placeholder="First name"
              aria-label="First Name"
              name="name"
              value={fields.name}
              onChange={handleChange}
              style={{ borderColor: "#355995" }}
              autoComplete="off"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="lastName">LastName</FormLabel>
            <Input
              type="text"
              id="lastName"
              placeholder="Last name"
              aria-label="Last Name"
              name="lastName"
              value={fields.lastName}
              onChange={handleChange}
              style={{ borderColor: "#355995" }}
              autoComplete="off"
            />
          </FormControl>
        </Flex>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Mail</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            aria-label="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            style={{ borderColor: "#355995" }}
            autoComplete="off"
          />
        </FormControl>
        <FormControl isRequired>
          <Text mb="8px">Message</Text>
          <Textarea
            placeholder="Your message..."
            size="sm"
            name="message"
            value={fields.message}
            onChange={handleChange}
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
          Send
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
