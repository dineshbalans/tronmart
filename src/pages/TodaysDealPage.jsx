import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { Adtile2 } from "../components/AdTile";
import SpecialDeal from "../components/SpecialDeal";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/productSlice";
import Pagination from "../components/Pagination";

const TodaysDeal = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const data = useRouteLoaderData("products");
  const [dealProducts, setDealProducts] = useState([]);

  const productLength = dealProducts.length;
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPageNumber - 1) * itemsPerPage;
  const endIndex = currentPageNumber * itemsPerPage;
  const totalpages = Math.ceil(productLength / itemsPerPage);

  useEffect(() => {
    products.length === 0 && data && dispatch(productActions.addProducts(data));
    (data || products)
      .filter((product) => !(product.category === "all-products") && product)
      .forEach((product) =>
        product.items.forEach(
          (item) =>
            item.isSale &&
            setDealProducts((prevState) => [
              ...prevState,
              { ...item, category: product.category },
            ])
        )
      );
  }, []);

  return (
    <section>
      <div className="bg-white mb-16">
        <div className="flex flex-wrap justify-between items-center 2xl:container 2xl:mx-auto mdl:divide-x-2 p-2 mdl:p-10">
          <h1 className="w-full mdl:w-1/2 text-5xl xl:text-6xl font-semibold md:text-ternary p-5 text-primary pt-16 sml:pt-0">
            Today's Deal
          </h1>
          <h5 className="w-full mdl:w-1/2  p-5 mdl:px-10 lgl:px-20 text-ternary leading-7">
            Discover today's unbeatable deals. Limited-time offers on
            electronics, gadgets, and more. Don't miss out on huge savings -
            shop now!
          </h5>
        </div>
      </div>
      <div className="px-4 mdl:px-10 2xl:container 2xl:mx-auto">
        <Adtile2 />
        <div className="bg-white border border-gray-300 mb-16 p-5 flex flex-wrap justify-center">
          {dealProducts
            .slice(startIndex, endIndex)
            .map(
              ({
                category,
                itemId,
                itemTitle,
                itemImage,
                isSale,
                actualPrice,
                discountPrice,
                discountPercentage,
              }) => (
                <ProductList
                  cardWidth="w-1/4"
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
        <div className="p-4 mb-10">
          {productLength > 7 && (
            <Pagination
              totalpages={totalpages}
              itemsPerpage={itemsPerPage}
              currentPageNumber={currentPageNumber}
              setCurrentPageNumber={setCurrentPageNumber}
            />
          )}
        </div>
        <SpecialDeal />
      </div>
    </section>
  );
};

export default TodaysDeal;
