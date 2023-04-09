import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase-config";

export const getProductsAddedToCart = (idProdAddedToCart) => {
  const prodRef = query(
    collection(db, "products"),
    where(documentId(), "in", idProdAddedToCart)
  );
  const prodAddedToCartFromFirestore = getDocs(prodRef);
  return prodAddedToCartFromFirestore;
};

export const addOrder = (order) => {
  const orderRef = collection(db, "orders");
  const orderAdded = addDoc(orderRef, order);
};

export const CreateOrder = async (
  cart,
  checkout,
  total,
  setCurrentStep,
  setIsLoading
) => {
  setIsLoading(true);
  try {
    const order = {
      buyer: {
        ...checkout,
      },
      items: cart,
      total: total,
    };
    const batch = writeBatch(db);
    const prodOfStock = [];

    const idProdAddedToCart = cart.map((prod) => prod.id);

    const prodAddedToCartFromFirestore = await getProductsAddedToCart(
      idProdAddedToCart
    );
    const { docs } = prodAddedToCartFromFirestore;

    docs.forEach((doc) => {
      const docData = doc.data();
      const stockDb = docData.stock;

      const productAddedToCart = cart.find((prod) => prod.id === doc.id);
      const prodQuantity = productAddedToCart.quantity;

      if (stockDb >= prodQuantity) {
        batch.update(doc.ref, { stock: stockDb - prodQuantity });
      } else {
        prodOfStock.push({ id: doc.id, ...docData });
      }
    });

    if (prodOfStock.length === 0 ) {
      await batch.commit();
      addOrder(order);
      setCurrentStep("finish");
      // notifyCreateOrderSuccess();
    }
  } catch (error) {
    console.error(error);
    // notifyErrorCreateOrder();
  } finally {
    setIsLoading(false);
  }
};
