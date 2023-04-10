import { usePagination, useFilterByCategory } from "../../hooks";
import { ProductsList } from "../Catalogue";

import {
  Button,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export const MyTabs = ({ products }) => {
  const categories = [
    "Todos",
    "Parafernalia",
    "Arte & Deco",
    "Llaveros",
    "Repuestos",
    "Accesibilidad",
  ];
  const { nextPage, prevPage, arr } = usePagination({ products });
  const { productsFilterByCategory, handleChangeFilter } = useFilterByCategory({
    products,
  });

  return (
    <Tabs colorScheme="primary">
      <TabList>
        {categories.map((category) => (
          <Tab
            key={category}
            value={category.toLowerCase()}
            onClick={handleChangeFilter}
          >
            {category}
          </Tab>
        ))}
      </TabList>
      <TabPanels p="2rem">
        <TabPanel>
          <ProductsList products={arr} />
          <Flex justify="space-evenly">
            <Button
              bg="primary"
              color="white"
              fontWeight="200"
              size="md"
              mt="1rem"
              _hover={{ color: "primary", bg: "secondary" }}
              onClick={prevPage}
            >
              Anterior
            </Button>
            <Button
              bg="primary"
              color="white"
              fontWeight="200"
              size="md"
              mt="1rem"
              _hover={{ color: "primary", bg: "secondary" }}
              onClick={nextPage}
            >
              Siguiente
            </Button>
          </Flex>
        </TabPanel>
        {categories.slice(1, 4).map((category) => (
          <TabPanel key={category}>
            <ProductsList products={productsFilterByCategory}></ProductsList>
          </TabPanel>
        ))}
        <TabPanel>
          <Heading fontFamily="big_noodle">Repuestos</Heading>
          <ProductsList products={productsFilterByCategory} />
        </TabPanel>
        <TabPanel>
          <Heading fontFamily="big_noodle">Accesibilidad</Heading>
          <ProductsList products={productsFilterByCategory} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
