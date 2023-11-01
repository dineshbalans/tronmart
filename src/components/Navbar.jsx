import React, { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { TbHomeHeart } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../store/userSlice";
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [allProductIsVisible, setAllProductIsVisible] = useState(false);

  const dispatch = useDispatch();
  const userIsLogin = useSelector((state) => state.user.isLogin);

  const allProductHoverHandler = () => {
    setAllProductIsVisible((prevState) => !prevState);
  };

  const logOutHandler = async () => {
    try {
      await signOut(auth);
      dispatch(userActions.logOutUser());
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <nav className="text-white cursor-pointer">
      <div
        className="bg-primary px-8 py-3 
      lg:text-xs lgl:text-sm xl:text-base xxl:text-xl lg:font-semibold lgl:font-medium"
      >
        <ul
          className="2xl:container mx-auto flex items-center justify-between 
        "
        >
          <Link to="/">
            <TbHomeHeart className="scale-150"/>
          </Link>
          <li
            className="flex items-center gap-1"
            onMouseEnter={allProductHoverHandler}
            onMouseLeave={allProductHoverHandler}
          >
            <Link to="products/all-products" onClick={allProductHoverHandler}>
              All Products
            </Link>
            <BiCaretDown />
          </li>
          <Link to="products/home-appliances">Home Appliances</Link>
          <Link to="products/audio-video">Audio & video</Link>
          <Link to="products/refrigerator">Refrigerator</Link>
          <Link to="new-arrival">New Arrivals</Link>
          <Link to="todays-deal">Today's deal</Link>
          <Link to="gift-card">Gift cards</Link>
          <Link to="cart">
            <TiShoppingCart className="scale-150" />
          </Link>
          {/* {userIsLogin && ( */}
          <button className="border-l pl-5 font-medium" onClick={logOutHandler}>
            Logout
          </button>
          {/* )} */}
        </ul>
        {allProductIsVisible && (
          <ul
            className="p-2 bg-primary  w-1/5 absolute h-52 z-50 
            flex flex-col justify-evenly px-5 "
            onMouseOver={allProductHoverHandler}
            onMouseOut={allProductHoverHandler}
          >
            <Link
              to="products/air-conditioner"
              onClick={allProductHoverHandler}
            >
              Air conditioner
            </Link>
            <Link to="products/gadgets" onClick={allProductHoverHandler}>
              Gadgets
            </Link>
            <Link to="products/pc-laptop" onClick={allProductHoverHandler}>
              PCs & laptop
            </Link>
            <Link
              to="products/kitchen-appliances"
              onClick={allProductHoverHandler}
            >
              Kitchen appliances
            </Link>
            <Link to="products/smart-home" onClick={allProductHoverHandler}>
              Smart home
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
