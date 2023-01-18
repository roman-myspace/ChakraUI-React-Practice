import {
  Button,
  Card,
  CardBody,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";

export default function Create() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Container>
      <Card m={5}>
        <CardBody>
          <Form>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                type={"text"}
                name="fullname"
                value={""}
                bg="gray.100"
                borderWidth={2}
              />
              <FormHelperText color="red.400" fontSize={"sm"}>
                * Full Name is Required.
              </FormHelperText>
            </FormControl>
            <FormControl mt="4" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                name="email"
                value={""}
                bg="gray.100"
                borderWidth={2}
              />
              <FormHelperText display={"none"} color="red.400" fontSize={"sm"}>
                * Email is Required.
              </FormHelperText>
            </FormControl>
            <FormControl as="fieldset" mt="4">
              <FormLabel as="legend">Favorite Naruto Character</FormLabel>
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="24px">
                  <Radio value="Sasuke">Sasuke</Radio>
                  <Radio value="Nagato">Nagato</Radio>
                  <Radio value="Itachi">Itachi</Radio>
                </HStack>
              </RadioGroup>
              <FormHelperText>Select only if you're a fan.</FormHelperText>
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Country</FormLabel>
              <Select placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
            <Button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              isLoading={loading}
              mt="4"
              colorScheme={"orange"}
              width="100%"
            >
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}
