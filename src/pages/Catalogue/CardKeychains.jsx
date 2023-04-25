import {
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const CardKeychains = ({ products, text, textButton }) => {
  return (
    <Flex bg="secondary">
      <Image src="//placehold.it/250x350" />
      <Container maxW="sm" display="flex">
        <Flex direction="column" justify="space-evenly">
          <UnorderedList p={4}>
            <ListItem>Hola</ListItem>
            <ListItem>Chau</ListItem>
            <ListItem>Sete</ListItem>
          </UnorderedList>
          <Text>{text}</Text>
          <Button bg="primary" my={2} color="secondary" fontWeight="400">
            {textButton}
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};
