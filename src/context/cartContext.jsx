import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prodToAdd) => {
    if (!isInCart(prodToAdd.id)) {
      setCart([...cart, prodToAdd]);
      notifyAddedToCart();
    }
  };

  const notifyAddedToCart = () => {
    toast.success("Agregado al carrito!");
  };
  const notifyClearCart = () => {
    toast.success("Carrito vacio!");
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const getQuantity = () => {
    let acc = 0;

    cart.forEach((prod) => {
      acc += prod.quantity;
    });

    return acc;
  };

  const getTotal = () => {
    let acc = 0;
    cart.forEach((prod) => {
      acc += prod.quantity * prod.price;
    });
    return acc;
  };

  const removeItem = (id) => {
    const updateCart = cart.filter((prod) => prod.id !== id);
    setCart(updateCart);
  };

  const clearCart = () => {
    setCart([]);
    notifyClearCart();
  };

  const [checkout, setCheckout] = useState({
    email: "",
    direction: "",
    formaDePago: "",
  });

  const updateCheckout = (formState) => {
    setCheckout(formState);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        checkout,
        updateCheckout,
        addToCart,
        isInCart,
        getQuantity,
        getTotal,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
