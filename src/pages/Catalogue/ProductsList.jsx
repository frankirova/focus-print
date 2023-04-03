import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { CardProducts } from "../Catalogue";

export const ProductsList = ({ products }) => {
  return (
    <Center as="section">
      <SimpleGrid columns={[1, 1, 2, 3]}>
        {products.map((product) => (
          <Box as="article" key={product.id}>
            <CardProducts
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              stock={product.stock}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};
