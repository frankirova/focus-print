import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context";
import { useFilterById } from "../../hooks";
import { DetailProduct } from "../Catalogue";
import { H2, DrawerCart } from "../../components";

import { Box, Container, Spinner } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

export const DetailProductContainer = () => {
  const { prodId } = useParams();
  const { products, isLoading } = useContext(ProductContext);

  const { productsFilterById } = useFilterById({
    products,
    prodId,
  });

  return (
    <Container maxW="1200px">
      {isLoading && <Spinner />}
      <H2>Detalle</H2>
      <Box as="section">
        <DetailProduct prodFilterById={productsFilterById[0]} />
        <DrawerCart />
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
};
