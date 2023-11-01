import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { Adtile1, Adtiles } from "../components/AdTile";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../store/productSlice";
import Pagination from "../components/Pagination";

const NewArrivalPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const data = useRouteLoaderData("products");
  const [newArrProducts, setNewArrProducts] = useState([]);

  const productLength = newArrProducts?.length;
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
        product.items
          .slice(0, 3)
          .forEach((item) =>
            setNewArrProducts((prevState) => [
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
            New Arrivals
          </h1>
          <h5 className="w-full mdl:w-1/2  p-5 mdl:px-10 lgl:px-20 text-ternary leading-7">
            Stay in the know with our new arrivals. Explore the latest in tech,
            gadgets, and home appliances for an upgraded life.
          </h5>
        </div>
      </div>
      <div className="px-4 mdl:px-10 2xl:container 2xl:mx-auto">
        <Adtiles />
        <div className="bg-white border border-gray-300 mb-5 p-5 flex flex-wrap justify-center">
          {newArrProducts
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
                  cardSize="FOUR"
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
        <Adtile1 />
      </div>
    </section>
  );
};

export default NewArrivalPage;
