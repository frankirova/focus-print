import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ProductsList } from "../pages/Catalogue";
import { useNavigate, useParams } from "react-router-dom";
import { color } from "framer-motion";

export const FilterBy = ({ products }) => {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "green.50", "blue.50", "gray.50"],
    ["red.900", "teal.900", "green.800", "blue.900", "gray.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const [filter, setFilter] = useState("");

  const bg = colors[tabIndex];

  const productsFilterByCategory = products
    .filter((prod) => prod.category == filter)
    .map((prod) => prod);

  const handleChangeCategory = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <Tabs
      colorScheme="primary"
      onChange={(index) => setTabIndex(index)}
      bg={bg}
    >
      <TabList>
        <Tab>Todos</Tab>
        <Tab value="parafernalia" onClick={handleChangeCategory}>
          Parafernalia
        </Tab>
        <Tab value="arte&deco" onClick={handleChangeCategory}>
          Arte & Deco
        </Tab>
        <Tab value="llaveros" onClick={handleChangeCategory}>
          Llaveros
        </Tab>
        <Tab value="repuestos" onClick={handleChangeCategory}>
          Repuestos
        </Tab>
        <Tab value="accesibilidad" onClick={handleChangeCategory}>
          Accesibilidad
        </Tab>
      </TabList>
      <TabPanels p="2rem">
        <TabPanel>
          <ProductsList products={products} />
        </TabPanel>
        <TabPanel>
          <ProductsList products={productsFilterByCategory} />
        </TabPanel>
        <TabPanel>
          <ProductsList products={productsFilterByCategory} />
        </TabPanel>
        <TabPanel>
          <ProductsList products={productsFilterByCategory} />
        </TabPanel>
        <TabPanel>
          <ProductsList products={productsFilterByCategory} />
        </TabPanel>
        <TabPanel>
          <ProductsList products={productsFilterByCategory} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
