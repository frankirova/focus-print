import { useState } from "react";

export const usePaginationAll = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const arr = products.slice(currentPage, currentPage + 6);

  const nextPage = () => {
    if (products.length > currentPage + 6) setCurrentPage(currentPage + 6);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 6);
  };
  return {
    arr,
    currentPage,
    prevPage,
    nextPage,
  };
};


