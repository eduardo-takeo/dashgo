import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
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
          <FormControl>
            <FormLabel for="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              bgColor="gray.900"
              focusBorderColor="pink.500"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel for="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              bgColor="gray.900"
              focusBorderColor="pink.500"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="lg"
            />
          </FormControl>
          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
