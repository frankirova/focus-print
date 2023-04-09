import { Container, Flex, Heading, Text } from "@chakra-ui/react";

export const ContainerData = ({ title, text }) => {
  return (
    <div>
      <Flex direction="row">
        <Container maxWidth="500px" my={6}>
          <Heading size="xl" color="primary" fontFamily="big_noodle">
            {title}
          </Heading>
          <Text my={3} fontSize="lg" fontWeight="500">
            {text}
          </Text>
        </Container>
      </Flex>
    </div>
  );
};
