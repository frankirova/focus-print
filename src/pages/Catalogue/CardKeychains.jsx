import {
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

export const CardKeychains = ({ products }) => {
  return (
    <Flex bg="secondary">
      <Image src="//placehold.it/400x400" />
      <Container maxW="md" display="flex">
        <Flex direction="column" justify="space-evenly">
          <Text p={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, temporibus dignissimos enim itaque pariatur praesentium
            eum recusandae aliquam iure incidunt tenetur et minima? Totam ea
            autem dolorum, ab quis impedit.
          </Text>
          <ButtonGroup p={4}>
            <Button bg="primary" color="secondary" fontWeight='400'>
              Personalizado
            </Button>
            <Button bg="primary" color="secondary" fontWeight='400'>
              Empresas
            </Button>
          </ButtonGroup>
        </Flex>
      </Container>
    </Flex>
  );
};
