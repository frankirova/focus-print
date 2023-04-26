import { Pagination } from "../../components/Pagination";
import { usePaginationWhitCategory } from "../../hooks";

export const TabPanelList = (categories, productsFilterByCategory) => {
  const { nextPage, prevPage, arr } = usePaginationWhitCategory({ productsFilterByCategory });

  return (
    <>
      {categories.slice(2, 5).map((category) => (
        <TabPanel key={category}>
          {productsFilterByCategory.length >= 6 ? (
            <>
              <ProductsList products={productsFilterByCategory} />
              <Pagination next={nextPage} back={prevPage} />
            </>
          ) : (
            <ProductsList products={productsFilterByCategory} />
          )}
        </TabPanel>
      ))}
    </>
  );
};
