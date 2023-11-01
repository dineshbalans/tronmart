import React from "react";
import { Link } from "react-router-dom";
import wmDealImg from "../assets/heroPage/wmDealImg.jpg";

const SpecialDeal = () => {
  return (
    <div className="mb-16 bg-white flex flex-wrap">
      <div className="w-full mdl:w-1/2 p-5 mdl:p-10 space-y-6">
        <h4 className="text-gray-400/95 font-semibold tracking-widest ">
          BRAND’S DEAL
        </h4>
        <h2 className="font-semibold text-xl lgl:text-3xl text-ternary leading-tight">
          Save up to ₹9999 on every Samsung washing machine
        </h2>
        <h3 className="text-gray-600">
          Huge discounts on top-brand washing machines today!
        </h3>
        <h6>
          <Link
            to="/products/home-appliances"
            className="text-primary font-semibold"
          >
            Shop now
          </Link>
        </h6>
      </div>
      <div className="w-full mdl:w-1/2 ">
        <img src={wmDealImg} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default SpecialDeal;
