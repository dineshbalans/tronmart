import React, { useState } from "react";
import checkOut from "../assets/svg/checkOut.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import CheckOutForm from "../components/CheckOutForm";
import { motion } from "framer-motion";

const CheckOutPage = () => {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <section className="p-4 lgl:p-10 bg-white text-gray-500">
      <div className="2xl:container mx-auto">
        <h1 className="text-4xl font-semibold text-ternary my-8 lgl:my-0">
          Checkout
        </h1>
        {/*   ORDER SUMMARY */}
        {cart.length > 0 && (
          <div className="bg-[#F7FBFC] lg:hidden p-2 sml:p-4">
            <div className="flex justify-between border-y py-5 items-baseline">
              <button
                className="flex items-center gap-2"
                onClick={() => setShowOrderSummary((prevState) => !prevState)}
              >
                <span className="text-sm sml:text-base">
                  {`${showOrderSummary ? "Hide" : "Show"}  Order Summary`}
                </span>
                {showOrderSummary ? (
                  <FaChevronUp className="text-primary font-bold" />
                ) : (
                  <FaChevronDown className="text-primary font-bold" />
                )}
              </button>
              <h4 className="text-xs sml:text-base">{`₹${totalPrice}.00`}</h4>
            </div>
            {showOrderSummary && (
              <motion.div>
                {cart.map(({ id, title, price, image, productQuantity }) => (
                  <div
                    className="flex border-b items-center justify-between p-2 gap-1"
                    key={id}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-1/5 sml:w-1/12 object-cover"
                    />
                    <h1 className="w-1/2 text-xs sml:text-sm  text-primary">
                      {title}
                    </h1>
                    <h2 className="text-xs sml:text-base">
                      x {productQuantity}
                    </h2>
                    <h3 className="text-xs sml:text-base">{`₹${
                      productQuantity * price
                    }`}</h3>
                  </div>
                ))}
                <div>
                  <div className="flex justify-between border-b p-3 ">
                    <h5 className="w-1/2 text-ternary font-semibold text-sm sml:text-base">
                      Total Items:
                    </h5>
                    <h6 className="text-sm sml:text-base">{`${cart.length} item(s)`}</h6>
                  </div>
                  <div className="flex justify-between border-b p-3 ">
                    <h5 className="w-1/2 text-ternary font-semibold text-sm sml:text-base">
                      Subtotal:
                    </h5>
                    <h6 className="text-sm sml:text-base">{`₹${totalPrice}.00`}</h6>
                  </div>
                  <div className="flex justify-between border-b p-3 ">
                    <h5 className="w-1/2 text-ternary font-semibold text-sm sml:text-base">
                      Total:
                    </h5>
                    <h6 className="text-sm sml:text-base">{`₹${totalPrice}.00`}</h6>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
        {/* CHECK OUT */}
        {cart.length === 0 ? (
          <div className="w-full sml:w-1/2 mx-auto text-center mb-10">
            <img src={checkOut} alt="" className="w-[60%] mx-auto" />
            <h3 className="pb-10">
              Oops! It seems your cart is empty. Before you proceed with
              checkout, why not explore our fantastic selection of products and
              add some items to your cart? We've got something for everyone, so
              find what you love and complete your order with ease
            </h3>
            <Link to="/">
              <button
                className="bg-primary p-2 w-full sml:w-1/3 text-white hover:w-full
                hover:bg-ternary transition-all ease-linear text-lg border
                mx-auto"
              >
                Explore
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-12">
            <CheckOutForm totalPrice={totalPrice} />
            <div className="w-[40%] sticky top-0 h-fit py-5 hidden lg:block">
              <h3 className="inputTitle">Your order</h3>
              <div className="border rounded-md">
                <div className="p-4 flex justify-between border-b">
                  <h3>Product</h3>
                  <h3>Subtotal</h3>
                </div>
                {cart.map(({ id, title, price, image, productQuantity }) => (
                  <div
                  key ={id}
                    className="flex justify-between p-4 items-center border-b"
                  >
                    <img src={image} alt="" className="w-1/6" />
                    <h3 className="text-xs w-1/2">{title}</h3>
                    <h3 className="text-sm">{`x ${productQuantity}`}</h3>
                    <h2 className="text-sm">{`₹${
                      productQuantity * price
                    }.00`}</h2>
                  </div>
                ))}
                <div className="p-4 flex justify-between border-b">
                  <h4>Subtotal</h4>
                  <h4>{`₹${totalPrice}.00`}</h4>
                </div>
                <div className="p-4 flex justify-between text-ternary font-semibold text-lg">
                  <h4>Total</h4>
                  <h4>{`₹${totalPrice}.00`}</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckOutPage;
