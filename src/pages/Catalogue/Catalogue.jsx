import { useContext } from "react";
import { authContext, ProductContext } from "../../context";
import { ProductsList } from "../Catalogue";
import { H2, CartWidget } from "../../components";
import { Container, Flex, Spinner, Text } from "@chakra-ui/react";

export const Catalogue = () => {
  const { isLoggedIn } = useContext(authContext);
  const { products, isLoading } = useContext(ProductContext);

  if (isLoading)
    return (
      <Flex justify="center" align="center" minHeight="85vh">
        <Spinner color="primary" size="xl" />
      </Flex>
    );

  return (
    <Container maxWidth="1200px" minHeight="85vh">
      <H2>TIENDA FOCUS</H2>
      <ProductsList products={products} />
      {isLoggedIn && <CartWidget />}
    </Container>
  );
};
