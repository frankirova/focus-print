import { useContext } from "react";
import { authContext, ProductContext } from "../../context";
import { ProductsList } from "../Catalogue";
import { H2, CartWidget } from "../../components";
import { Container, Flex, Spinner } from "@chakra-ui/react";
import { FilterBy } from "../../components/FilterBy";
import { useParams } from "react-router-dom";
export const Catalogue = () => {
  const { isLoggedIn } = useContext(authContext);
  const { products, isLoading } = useContext(ProductContext);
  // const { categoryId } = useParams();
  const categoryId = 'Parafernalia'
  // const productsFilterByCategory = products
  //   .filter((prod) => prod.category == categoryId)
  //   .map((prod) => prod);
  if (isLoading)
    return (
      <Flex justify="center" align="center" minHeight="85vh">
        <Spinner color="primary" size="xl" />
      </Flex>
    );

  return (
    <Container maxWidth="1200px" minHeight="85vh">
      <H2>TIENDA FOCUS</H2>
      <FilterBy products={products} />
      {isLoggedIn && <CartWidget />}
    </Container>
  );
};
