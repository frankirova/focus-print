import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext, CartContext } from "../../context";

import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  Image,
  ButtonGroup,
  Button,
  Text,
  Tag,
  HStack,
} from "@chakra-ui/react";
import { toast, Toaster } from "react-hot-toast";

export const CardProducts = ({ id, image, price, title, stock }) => {
  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(authContext);

  const quantity = 1;

  const addTo = (quantity) => {
    if (stock !== 0) {
      addToCart({ id, image, price, title, quantity });
    } else {
      toast.error("Error, agregaste un producto sin Stock al CARRITO!");
    }
  };

  return (
    <>
      <Card m={4} maxW="sm" variant="filled">
        <CardBody alignItems="center">
          <Stack>
            <Image src={image} alt={title} borderRadius="lg" m="0" />
          </Stack>
          <Stack mt="6" spacing="3">
            <Heading size="lg" fontFamily="big_noodle" fontWeight="500">
              {title}
            </Heading>
            <Text>Stock:{stock}</Text>
            <HStack>
              <Text color="primary" fontSize="3xl">
                ${price}
              </Text>
              {stock === 0 && (
                <Tag bg="#FFCEC2" color="red" size="lg">
                  Sin Stock
                </Tag>
              )}
            </HStack>
          </Stack>
        </CardBody>
        <Divider color="gray.400" my={1} />
        <CardFooter>
          {isLoggedIn ? (
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                bg="primary"
                color="white"
                fontSize={["sm", "sm", "lg", "lg"]}
                fontWeight="500"
                onClick={() => addTo(quantity)}
                _hover={{ color: "primary", bg: "secondary" }}
              >
                Agregar al carrito
              </Button>
              <Button
                as={Link}
                to={`/Catalogo/prod/${id}`}
                fontSize={["sm", "sm", "lg", "lg"]}
                fontWeight="500"
              >
                Ver mas
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                bg="primary"
                color="white"
                fontSize={["sm", "sm", "lg", "lg"]}
                fontWeight="500"
                as={Link}
                to="/login"
                _hover={{ color: "primary", bg: "secondary" }}
              >
                Agregar al carrito
              </Button>
              <Button
                as={Link}
                to="/login"
                fontSize={["sm", "sm", "lg", "lg"]}
                fontWeight="500"
                variant="ghost"
                bg="secondary"
              >
                Ver mas
              </Button>
            </ButtonGroup>
          )}
        </CardFooter>
      </Card>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
