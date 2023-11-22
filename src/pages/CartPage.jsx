import React, { useState } from "react";
import emptyCart from "../assets/svg/emptyCart.svg";
import { cartActions } from "../store/cartSlice";
import { ImCancelCircle } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Coupon from "../components/Coupon";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const noOfProducts = useSelector((state) => state.cart.noOfProducts);
  return (
    <section className="p-4 lgl:p-10 text-gray-500 space-y-10 2xl:container
      mx-auto mb-10 min-h-fit">
      <h1 className="font-semibold text-3xl text-ternary">Cart</h1>

      {cart.length === 0 ? (
        <div className="w-full sml:w-1/2 mx-auto text-center space-y-3 pb-10 min-h-[80vh] flex flex-col justify-center">
          <img src={emptyCart} alt="" className="w-1/2 mx-auto" />
          <h1 className="text-3xl lg:text-4xl font-bold">Your Cart is Empty</h1>
          <h3 className="text-lg lg:text-xl font-medium">
            Looks like your cart is feeling a bit lonely! Browse our fantastic
            selection of products and start adding items to bring it to life
          </h3>
          <div>
            <Link to="/">
              <button
                className="bg-primary p-2 w-full sml:w-1/3 text-white
           hover:bg-ternary transition-all ease-linear text-lg"
              >
                Explore
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-between gap-10 xl:gap-0">
          {/* Cart */}
          <div className="w-full xl:w-[70%] text-ternary">
            <div className="border hidden mdl:flex text-center p-4 capitalize font-semibold">
              <h1 className="w-[50%] ">product</h1>
              <h1 className="w-[20%]">Price</h1>
              <h1 className="w-[20%]">Quantity </h1>
              <h1 className="w-[20%]">Subtotal</h1>
            </div>
            {cart.map(({ id, title, image, price, productQuantity }) => (
              <div
                className="flex flex-wrap mdl:flex-nowrap border-x border-b p-4 
              justify-between items-center bg-white gap-8 divide-y mdl:divide-y-0"
                key={id}
              >
                {/* PRODUCT IMAGE */}
                <img src={image} alt="" className="w-1/2 sml:w-1/6 mx-auto" />

                {/* PRODUCT */}
                <div
                  className="flex mdl:flex-none w-full mdl:w-1/5 lg:w-1/4
                  items-center justify-between pt-4 mdl:pt-0"
                >
                  <h1
                    className="mdl:hidden w-1/2 justify-between 
                  text-ternary font-semibold"
                  >
                    Product:
                  </h1>
                  <h2 className="w-1/2 mdl:w-full text-primary text-xs">
                    {title}
                  </h2>
                </div>

                {/* PRICE */}
                <div
                  className="flex mdl:flex-none w-full mdl:w-fit 
                  items-center justify-between pt-4 mdl:pt-0"
                >
                  <h1
                    className="mdl:hidden w-1/2 justify-between 
                  text-ternary font-semibold"
                  >
                    Price:
                  </h1>
                  <h3 className="w-1/2 mdl:w-fit mx-auto text-right">{`₹${price}.00`}</h3>
                </div>

                {/* QUANTITY */}
                <div className="flex w-full mdl:w-fit pt-4 mdl:pt-0">
                  <h1
                    className="mdl:hidden w-1/2 justify-between 
                  text-ternary font-semibold"
                  >
                    Quantity:
                  </h1>
                  <div className="border flex h-[90%] ml-auto">
                    <button
                      className="px-2 lg:px-4 py-1 disabled:cursor-not-allowed bg-[#F7FBFC]"
                      disabled={productQuantity < 1}
                      onClick={() =>
                        dispatch(cartActions.decreaseProductQuantity(id))
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="flex w-12  outline-none pl-5 border-x"
                      value={productQuantity}
                      maxLength={2}
                      onChange={(event) =>
                        dispatch(
                          cartActions.addProductByQuantity({
                            id,
                            quantity: +event.target.value,
                          })
                        )
                      }
                    />
                    <button
                      className="px-2 lg:px-4 py-1 bg-[#F7FBFC]"
                      onClick={() =>
                        dispatch(cartActions.increaseProductQuantity(id))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* SUB-TOTOAL */}
                <div
                  className="flex mdl:flex-none w-full mdl:w-fit
                  items-center justify-between pt-4 mdl:pt-0"
                >
                  <h1
                    className="mdl:hidden w-1/2 justify-between 
                  text-ternary font-semibold"
                  >
                    Sub Total:
                  </h1>
                  <h3 className="w-1/2 mdl:w-fit mx-auto text-right">{`₹${
                    price * productQuantity
                  }.00`}</h3>
                </div>

                {/* CANCEL */}
                <div
                  className="w-full mdl:w-fit sml:-translate-x-3
                  flex justify-end center pt-4 mdl:pt-0"
                >
                  <button
                    onClick={() => dispatch(cartActions.removeProduct(id))}
                    className=""
                  >
                    <ImCancelCircle className="text-xl sml:text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Cart Total */}
          <div className="border w-full xl:w-[28%] bg-white">
            <h2
              className="border-b p-3 text-2xl font-semibold
           text-ternary bg-[#F7FBFC]"
            >
              Cart totals
            </h2>
            <div className="p-5 space-y-8">
              <div>
                <div className="flex justify-between border-b p-3 ">
                  <h5 className="w-1/2">Total Items</h5>
                  <h6>{`${noOfProducts} item(s)`}</h6>
                </div>
                <div className="flex justify-between border-b p-3 ">
                  <h5 className="w-1/2">Subtotal</h5>
                  <h6>{`₹${totalPrice}.00`}</h6>
                </div>
                <div className="flex justify-between border-b p-3 ">
                  <h5 className="w-1/2">Total</h5>
                  <h6>{`₹${totalPrice}.00`}</h6>
                </div>
              </div>

              <div className="space-y-3">
                <Coupon />
                <div>
                  <Link to="/check-out">
                    <button
                      className="bg-ternary text-white w-full font-semibold py-5
               hover:bg-primary transition-all ease-linear"
                    >
                      Proceed to checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
