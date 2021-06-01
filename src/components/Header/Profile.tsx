import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Eduardo Takeo</Text>
        <Text color="gray.300" fontSize="small">
          eduardo.higashi.dev@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Eduardo Takeo"
        src="https://github.com/eduardo-takeo.png"
      />
    </Flex>
  );
}
