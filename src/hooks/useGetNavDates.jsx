import { useState, useEffect } from "react";
// import { getNavDates } from "../services/firestore_db/products_db";
export const useGetNavDates = () => {
  const [navDate, setNavDate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNavDates()
      .then((navDate) => {
        setNavDate(navDate);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    navDate,
    isLoading,
  };
};
