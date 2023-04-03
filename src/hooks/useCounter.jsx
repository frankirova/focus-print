import { useContext, useState } from "react";
import { ProductContext } from "../context/prodContext";
export const useCounter = (stock) => {
  const { products } = useContext(ProductContext);
  const [counter, setCounter] = useState(1);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(1);
  };

  return { counter, increment, decrement, reset };
};
