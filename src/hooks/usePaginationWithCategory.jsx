import { useState } from "react";

export const usePaginationWhitCategory = ({ productsFilterByCategory }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const arrFilteredByCategory = productsFilterByCategory.slice(
    currentPage,
    currentPage + 6
  );

  const next = () => {
    if (productsFilterByCategory.length > currentPage + 6)
      setCurrentPage(currentPage + 6);
  };
  const back = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 6);
  };
  return {
    arrFilteredByCategory,
    currentPage,
    back,
    next,
  };
};
