import { useState, useEffect } from "react";
import { getContactDates } from "../services/firestore_db/products_db";

export const useGetContactDates = () => {
  const [contactDate, setcontactDate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getContactDates()
      .then((contactDate) => {
        setcontactDate(contactDate);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    contactDate,
    isLoading,
  };
};
