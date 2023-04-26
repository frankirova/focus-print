import {
  useFilterByCategory,
  usePaginationAll,
  usePaginationWhitCategory,
} from "../../hooks";
import { ProductsList } from "../Catalogue";

import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { CardKeychains } from "./CardKeychains";
import { Pagination } from "../../components/Pagination";

export default function MyTabs({ products }) {
  const categories = [
    "Todos",
    "Llaveros",
    "Parafernalia",
    "Tecnologia",
    "Salud",
  ];
  const { productsFilterByCategory, handleChangeFilter } = useFilterByCategory({
    products,
  });
  const { nextPage, prevPage, arr } = usePaginationAll({
    products,
  });
  const { next, back, arrFilteredByCategory } = usePaginationWhitCategory({
    productsFilterByCategory,
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
          <Pagination next={nextPage} back={prevPage} />
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
            {productsFilterByCategory.length >= 6 ? (
              <>
                <ProductsList products={arrFilteredByCategory} />
                <Pagination back={back} next={next} />
              </>
            ) : (
              <ProductsList products={productsFilterByCategory} />
            )}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
