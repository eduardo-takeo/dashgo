import { Button, Flex, Stack } from "@chakra-ui/react";
import Input from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        bg="gray.800"
        flexDir="column"
        width="100%"
        maxWidth={360}
        p="8"
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Senha" />
          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
