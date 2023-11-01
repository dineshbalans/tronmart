import React from "react";
import { TbShoppingCartHeart } from "react-icons/tb";
import { Link } from "react-router-dom";
import { StarRating } from "./Rating";
import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductList = ({
  cardSize,
  category,
  itemId,
  itemTitle,
  itemImage,
  isSale,
  actualPrice,
  discountPrice,
  discountPercentage,
}) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    const price = discountPrice.replace(/,/g, "").slice(1);
    const cartData = {
      id: itemId,
      title: itemTitle,
      image: itemImage,
      price,
      productQuantity: 1,
    };
    dispatch(cartActions.addProduct(cartData));
  };
  return (
    <div
      className={
        cardSize === "THREE"
          ? "w-full sml:w-1/2 mdl:w-1/3 px-2 py-4"
          : "w-full sml:w-1/2 mdl:w-1/3 lg:w-1/4 px-2 py-4"
      }
    >
      <div
        style={{ backgroundImage: `url(${itemImage})` }}
        className="p-4 bg-no-repeat bg-contain bg-center object-contain -z-50 h-60 sml:h-72"
      >
        <div className="flex">
          {isSale && (
            <div className=" bg-white shadow-md px-3 rounded-full flex items-center">
              Sale!
            </div>
          )}
          <button
            className="bg-white shadow-md p-2 rounded-full ml-auto"
            onClick={addToCartHandler}
          >
            <TbShoppingCartHeart />
          </button>
        </div>
      </div>
      {/* <img src={itemImage} alt="" className=" border" /> */}
      <div className="py-5 pl-3 sml:pl-6 text-gray-900 font-semibold space-y-2 z-50">
        <Link to={`/products/${category}/${itemId}`}>
          {itemTitle?.length > 55 ? `${itemTitle.slice(0, 55)}...` : itemTitle}
        </Link>
        <h5 className="space-x-3">
          <span>{discountPrice}</span>
          <span className="text-gray-400 line-through">{actualPrice}</span>
        </h5>
        <h6 className="text-primary">{discountPercentage}</h6>
        <StarRating />
      </div>
    </div>
  );
};

export default ProductList;
