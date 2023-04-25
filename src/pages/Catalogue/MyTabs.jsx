import { usePagination, useFilterByCategory } from "../../hooks";
import { ProductsList } from "../Catalogue";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
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
import { CardKeychains } from "./CardKeychains";

export default function MyTabs({ products }) {
  const categories = [
    "Todos",
    "Llaveros",
    "Parafernalia",
    "Tecnologia",
    "Salud",
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
        <TabPanel>
          <Flex direction="row" gap={2} justify="space-between">
            <CardKeychains
              products={productsFilterByCategory}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              textButton="Empresas"
            />
            <CardKeychains
              products={productsFilterByCategory}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              textButton="Personalizado"
            />
          </Flex>
        </TabPanel>
        {categories.slice(2, 5).map((category) => (
          <TabPanel key={category}>
            <ProductsList products={productsFilterByCategory}></ProductsList>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
