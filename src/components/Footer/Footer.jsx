import { FooterIconsGroup } from "./FooterIconsGroup";

import { Flex, FormHelperText, Image, Text } from "@chakra-ui/react";
import "./__footer.css";

export const Footer = () => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        minH="10vh"
        as="footer"
        className="footer"
        bg="black"
      >
        <FooterIconsGroup />
        <Flex
          pos="absolute"
          right="30px"
          alignItems="center"
          justify="center"
          gap={2}
          as="a"
          href="https://github.com/frankirova"
        >
          <Text fontSize="sm" fontFamily="sans-serif" color="white">
            Powered by
          </Text>
          <Image borderRadius="xl" w="3rem" src="assets/logo fr.png" />
        </Flex>
      </Flex>
    </>
  );
};
