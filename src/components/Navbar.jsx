import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <>
      <Flex as="nav" p="10px" alignItems={"center"} gap="10px">
        <Heading as="h5" size="md" textTransform={"uppercase"}>
          Example
        </Heading>
        <Spacer />
        <Box bg="gray.100" p="5px 10px">
          M
        </Box>
        <Text>someone@example.com</Text>
        <Button ml="30px" colorScheme={"orange"}>
          Logout
        </Button>
      </Flex>
    </>
  );
}
