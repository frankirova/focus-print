import { FooterIconsGroup } from "./FooterIconsGroup";

import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import "../../styles/__footer.css";

export const Footer = () => {
  return (
    <Box bg="black">
      <Container maxWidth="1200px">
        <Flex
          justify="space-between"
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
            my={[2, 2, 0, 0]}
            href="https://github.com/frankirova"
          >
            <Text fontSize="md" fontWeight="600" color="gray">
              Desarrollado por
            </Text>
            <Image borderRadius="full" w="3rem" src="assets/logo fr2.png" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
