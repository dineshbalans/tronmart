import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import { productActions } from "../../store/productSlice";
import { cartActions } from "../../store/cartSlice";
import { ProductRating } from "../../components/Rating";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  // {
  //   itemId,
  //   itemTitle,
  //   itemImage,
  //   isSale,
  //   actualPrice,
  //   discountPrice,
  //   discountPercentage,
  // },
  const [productQuantity, setProductQuantity] = useState(1);
  const [productCategory, setProductCategory] = useState("");
  const dispatch = useDispatch();
  const data = useRouteLoaderData("products");
  const { productId, category } = useParams();
  const products = useSelector((state) => state.product.products);
  const allProducts = useSelector((state) => state.product.allProducts);

  useEffect(() => {
    data && dispatch(productActions.addProducts(data));

    if (category === "all-products") {
      (data || products).forEach((product) =>
        product.items.forEach((item) => {
          if (item.itemId === productId) {
            setProduct(item);
            setProductCategory(product.title);
          }
        })
      );
      return;
    }
    const categoryProduct = (data || products)?.filter((product) =>
      product.category === category ? product : null
    );
    setProductCategory(categoryProduct[0].title);

    const filteredProduct = categoryProduct[0]?.items.filter((item) =>
      item.itemId === productId ? item : null
    );
    setProduct(filteredProduct[0]);
  }, []);

  const addToCartHandler = () => {
    const price = product?.discountPrice.replace(/,/g, "").slice(1);
    const cartData = {
      id: product?.itemId,
      title: product?.itemTitle,
      image: product?.itemImage,
      price,
      productQuantity,
    };
    dispatch(cartActions.addProduct(cartData));
  };

  return (
    <section className="p-5 md:p-10 2xl:container mx-auto space-y-10 min-h-[80vh] ">
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-5">
        <div className="sml:hidden pt-6 pb-3">
          <span className="text-gray-500 text-sm">
            <Link to="/">Home</Link> / <Link to="..">{productCategory}</Link> /{" "}
            {product?.itemTitle}
          </span>
        </div>
        <img
          src={product?.itemImage}
          alt=""
          className="w-full lg:w-1/2 object-cover"
        />
        <div className="w-full lg:w-[47%] space-y-5 text-ternary">
          <div className="hidden sml:block">
            <span className="text-gray-500 text-sm">
              <Link to="/">Home</Link> / <Link to="..">{productCategory}</Link>{" "}
              / {product?.itemTitle}
            </span>
          </div>
          <h1 className="text-gray-800 text-xl sml:text-2xl lg:text-3xl font-semibold text-justify sml:text-left">
            {product?.itemTitle}
          </h1>
          <div className="flex space-x-3 text-2xl">
            <span>{product?.discountPrice}</span>
            <span className="line-through text-gray-400">
              {product?.actualPrice}
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-base md:text-lg font-medium"> Key features</h2>
            <div className="text-sm md:text-base px-5">
              <li>Newest technology</li>
              <li>Best in class components</li>
              <li>Dimensions -69.5 x 75.0 x 169.0</li>
              <li>Maintenance free</li>
              <li> 12 years warranty</li>
            </div>
          </div>

          <div className="flex flex-wrap sml:flex-nowrap border-b pb-4 gap-5 justify-center sml:justify-start">
            <div className="border flex">
              <button
                className="px-4 disabled:cursor-not-allowed"
                disabled={productQuantity < 2}
                onClick={() =>
                  setProductQuantity((prevState) => (prevState -= 1))
                }
              >
                -
              </button>
              <input
                type="number"
                className="flex w-12 h-full outline-none pl-5 border-x"
                value={productQuantity}
                onChange={(event) => {
                  if (+event.target.value < 1) {
                    return;
                  }
                  setProductQuantity(+event.target.value);
                }}
              />
              <button
                className="px-4"
                onClick={() =>
                  setProductQuantity((prevState) => (prevState += 1))
                }
              >
                +
              </button>
            </div>
            <button
              className="text-white bg-ternary font-semibold px-5 py-[6px] hover:bg-primary transition-all ease-linear"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
          <h4 className="text-center sml:text-left">
            Category:{" "}
            <span className="capitalize text-primary">{productCategory}</span>
          </h4>
        </div>
      </div>
      <ProductRating
        category={productCategory}
        price={product?.discountPrice}
      />
    </section>
  );
};

export default ProductDetailsPage;
