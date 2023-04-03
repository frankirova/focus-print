import { createContext } from "react";
import { useParams } from "react-router-dom";
import { useGetProducts } from "../hooks";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const { categoryId } = useParams();
  const { products, isLoading } = useGetProducts(categoryId);
  
  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
