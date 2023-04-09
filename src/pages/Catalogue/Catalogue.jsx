import { useContext } from "react";
import { authContext, ProductContext } from "../../context";
import { MyTabs } from "../Catalogue";
import { H2, DrawerCart } from "../../components";

import { Container, Flex, Spinner } from "@chakra-ui/react";

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
      <MyTabs products={products} />
      {isLoggedIn && <DrawerCart />}
    </Container>
  );
};
