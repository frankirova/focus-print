import { FooterIconsGroup } from "./FooterIconsGroup";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./__footer.css";

export const Footer = () => {
  return (
    <Flex
      justify="space-around"
      align="center"
      direction={["column", "column", "row", "row"]}
      minH="10vh"
      as="footer"
      className="footer"
      bg="black"
    >
      <Box w="288px" />
      <FooterIconsGroup />
      <Flex
        alignItems="center"
        justify="center"
        gap={2}
        as="a"
        href="https://github.com/frankirova"
      >
        <Text fontSize="md" fontWeight="600" color="gray">
          Desarrollado por
        </Text>
        <Image borderRadius="full" w="3rem" src="assets/logo fr2.png" />
      </Flex>
    </Flex>
  );
};
