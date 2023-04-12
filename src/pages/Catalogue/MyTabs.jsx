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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
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
          <Flex justify="space-around">
            <Button
              display="flex"
              gap={2}
              bg="primary"
              color="white"
              fontWeight="200"
              size="lg"
              mt="1rem"
              _hover={{ color: "primary", bg: "secondary" }}
              onClick={prevPage}
            >
              <FontAwesomeIcon icon={faCircleArrowLeft} />
              Anterior
            </Button>

            <Button
              display="flex"
              gap={2}
              bg="primary"
              color="white"
              fontWeight="200"
              size="lg"
              mt="1rem"
              _hover={{ color: "primary", bg: "secondary" }}
              onClick={nextPage}
            >
              Siguiente
              <FontAwesomeIcon icon={faCircleArrowRight} />
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
