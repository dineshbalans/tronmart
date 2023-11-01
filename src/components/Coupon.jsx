import React, { useState } from "react";

const Coupon = () => {
  const [applyCoupon, setApplyCoupon] = useState(false);
  return (
    <>
      {!applyCoupon ? (
        <h2
          className="cursor-pointer hover:text-black transition-all ease-linear "
          onClick={() => setApplyCoupon(true)}
        >
          Have a coupon?
        </h2>
      ) : (
        <div className="flex gap-2">
          <input
            type="text"
            className="border outline-none p-3 w-[70%]"
            placeholder="Coupon Code"
          />
          <button
            className="bg-ternary text-white w-[30%] font-semibold 
               hover:bg-primary transition-all ease-linear "
          >
            Apply
          </button>
        </div>
      )}
    </>
  );
};

export default Coupon;
