import { useState } from "react";
import { ProductsList } from "../Catalogue";

import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export const MyTabs = ({ products }) => {
  const [filter, setFilter] = useState("");

  const productsFilterByCategory = products
    .filter((prod) => prod.category == filter)
    .map((prod) => prod);

  const handleChangeCategory = ({ target: { value } }) => {
    setFilter(value);
  };
  const categories = [
    "Todos",
    "Parafernalia",
    "Arte & Deco",
    "Llaveros",
    "Repuestos",
    "Accesibilidad",
  ];

  return (
    <Tabs colorScheme="primary">
      <TabList>
        {categories.map((category) => (
          <Tab
            key={category}
            value={category.toLowerCase()}
            onClick={handleChangeCategory}
          >
            {category}
          </Tab>
        ))}
      </TabList>
      <TabPanels p="2rem">
        <TabPanel>
          <ProductsList products={products} />
        </TabPanel>
        {categories.slice(1, 4).map((category) => (
          <TabPanel key={category}>
            <ProductsList products={productsFilterByCategory}></ProductsList>
          </TabPanel>
        ))}
        <TabPanel>
          <Heading>Repuestos</Heading>
          <ProductsList products={productsFilterByCategory} />
        </TabPanel>
        <TabPanel>
          <Heading>Accesibilidad</Heading>
          <ProductsList products={productsFilterByCategory} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
