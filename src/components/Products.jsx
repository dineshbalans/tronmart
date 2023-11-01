import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const Products = ({ productInfo, category }) => {
  // const {  title, description, quantity, items } = productInfo;
  // console.log(productInfo);
  // console.log(allProductItems);
  const productLength = productInfo?.items?.length;
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const itemsPerpage = 6;
  const startIndex = (currentPageNumber - 1) * itemsPerpage;
  const endIndex = currentPageNumber * itemsPerpage;
  const totalpages = Math.ceil(productLength / itemsPerpage);
  return (
    <section>
      <h1 className="text-4xl sml:text-6xl text-primary font-semibold pb-10">
        {productInfo?.title}
      </h1>
      <p className="leading-7 text-justify sml:text-left">
        {productInfo?.description}
      </p>
      <div>
        <div className="flex justify-between py-6 text-gray-800">
          <h4>
            {productLength > 7
              ? `Showing ${
                  startIndex + 1
                }–${endIndex} of ${productLength} results`
              : `Showing all ${productLength} results`}
          </h4>
          <h4 className="hidden sml:flex items-center gap-2">
            <span>Default Sorting</span>
            <BsChevronDown className="" />
          </h4>
        </div>
        <div className="flex flex-wrap ">
          {productInfo?.items
            ?.slice(startIndex, endIndex)
            ?.map(
              ({
                itemId,
                itemTitle,
                itemImage,
                isSale,
                actualPrice,
                discountPrice,
                discountPercentage,
              }) => (
                <ProductList
                  cardSize="THREE"
                  category={category}
                  key={itemId}
                  itemId={itemId}
                  itemTitle={itemTitle}
                  itemImage={itemImage}
                  isSale={isSale}
                  actualPrice={actualPrice}
                  discountPrice={discountPrice}
                  discountPercentage={discountPercentage}
                />
              )
            )}
        </div>
      </div>
      {productLength > 7 && (
        <Pagination
          totalpages={totalpages}
          itemsPerpage={itemsPerpage}
          currentPageNumber={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
        />
      )}
    </section>
  );
};

export default Products;
