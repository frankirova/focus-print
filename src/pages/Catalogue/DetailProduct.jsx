import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context";
import { CounterQuantity } from "../../components";

import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Flex,
  Box,
  Center,
  Button,
  Container,
} from "@chakra-ui/react";

export const DetailProduct = ({ prodFilterById }) => {
  const { id, price, title, image, stock } = prodFilterById;

  const { isInCart, addToCart } = useContext(CartContext);

  const addTo = (quantity) => {
    addToCart({ id, image, price, title, stock, quantity });
  };

  return (
    <Container as="article" align="center" justify="center" minH="85vh">
      <Card size="lg" justifyContent="center">
        <CardBody>
          <Heading textAlign="center" my="1rem" size="md">
            {title}
          </Heading>
          <Flex
            direction="row"
            gap="3rem"
            minW="400px"
            align="center"
            justify="center"
          >
            <Stack>
              <Image
                boxSize="240px"
                src={image}
                alt={title}
                objectFit="cover"
                borderRadius="lg"
              />
            </Stack>
            <Stack mt="6" spacing="6" justifyContent="center">
              <Text></Text>
              <Text color="primary" fontSize="2xl" fontWeight="bold">
                ${price}
              </Text>
            </Stack>
          </Flex>
        </CardBody>
        <Divider />
        <Center>
          <ButtonGroup spacing="2">
            <Box>
              {isInCart(id) ? (
                <Button m={2} as={NavLink}>
                  Confirm Order
                </Button>
              ) : stock > 0 ? (
                <CounterQuantity prod={prodFilterById} addTo={addTo} />
              ) : (
                <h1>Sin Stock</h1>
              )}
            </Box>
          </ButtonGroup>
        </Center>
      </Card>
    </Container>
  );
};
