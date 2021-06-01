import { Flex } from "@chakra-ui/react";
import React from "react";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
