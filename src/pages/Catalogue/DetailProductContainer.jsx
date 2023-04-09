import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context";
import { DetailProduct } from "../Catalogue";
import { H2, DrawerCart } from "../../components";

import { Box, Container, Spinner } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

export const DetailProductContainer = () => {
  const { prodId } = useParams();
  const { products, isLoading } = useContext(ProductContext);

  const productsFilterById = products
    .filter((prod) => prod.id === prodId)
    .map((prod) => prod);

  if (isLoading) return <Spinner />;

  return (
    <Container maxW="1200px">
      <H2>Detalle</H2>
      <Box as="section">
        <DetailProduct prodFilterById={productsFilterById[0]} />
        <DrawerCart />
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
};
