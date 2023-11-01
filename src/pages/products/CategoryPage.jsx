import React, { useEffect, useState } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import Products from "../../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productSlice";

let allProductsFlag = true;
const CategoryPage = () => {
  const { category } = useParams();
  const data = useRouteLoaderData("products");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const info = products?.filter((item) =>
    item.category === category ? item : null
  );

  const allProductItems = [];
  if (category === "all-products") {
    products.forEach((product) => allProductItems.push(...product.items));

    const allProductObjCopy = { ...info[0] };
    allProductObjCopy.items = allProductItems;
    info[0] = allProductObjCopy;
  }

  useEffect(() => {
    data && dispatch(productActions.addProducts(data));
  }, []);

  return <Products productInfo={info[0]} category={category} />;
};

export default CategoryPage;
