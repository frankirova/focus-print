import { getProducts } from "../services/firestore_db/products_db";
import { useState, useEffect } from "react";

export const useGetProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts(categoryId)
      .then((prod) => {
        setProducts(prod);
      })
      .catch((error) => {
        <p>{error}</p>;
      })
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  return { products, isLoading };
};
