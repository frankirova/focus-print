import { FooterIconsGroup } from "./FooterIconsGroup";

import { Flex } from "@chakra-ui/react";
import "./__footer.css";

export const Footer = () => {
  return (
    <Flex
      justify="center"
      align="center"
      minH="10vh"
      as="footer"
      className="footer"
      bg="black"
    >
      <FooterIconsGroup />
    </Flex>
  );
};
