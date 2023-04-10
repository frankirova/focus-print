import { useState } from "react";

export const useFilterByCategory = ({ products }) => {
  const [filter, setFilter] = useState("");

  const productsFilterByCategory = products
    .filter((prod) => prod.category == filter)
    .map((prod) => prod);

  const handleChangeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return {
    productsFilterByCategory,
    handleChangeFilter,
  };
};

export const useFilterById = ({ products, prodId }) => {
  const productsFilterById = products
    .filter((prod) => prod.id == prodId)
    .map((prod) => prod);

  return { productsFilterById };
};
