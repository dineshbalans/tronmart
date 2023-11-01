import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";

const NewsLetter = () => {
  return (
    <div className="bg-white">
      <div className="2xl:container 2xl:mx-auto p-3 sml:p-8 flex flex-wrap justify-between">
        <div className="w-full lgl:w-1/2 flex flex-wrap justify-between mdl:divide-x-2 mb-6 lgl:mb-0">
          <div className="flex flex-wrap mdl:flex-nowrap w-full mdl:w-1/2 pb-3 mdl:pb-0 
          items-center justify-center space-y-2 mdl:space-y-0">
            <div className="w-full h-12 mdl:h-auto mdl:w-16 xl:w-20">
              <HiOutlineMailOpen className="text-ternary w-full h-full" />
            </div>
            <h1
              className="text-xl font-medium xl:text-2xl xl:font-semibold  text-ternary text-center
              w-[70%] lgl:w-full"
            >
              Subscribe to our newsletter
            </h1>
          </div>
          <div className="w-full mdl:w-1/2 px-5 sml:px-12 flex justify-center items-center">
            <h3 className="text-gray-600  text-center mdl:text-left h-fit">
              Sign up for all the latest news and special offers
            </h3>
          </div>
        </div>
        <div className="w-full lgl:w-[45%] flex flex-wrap p-2 gap-3">
          <input
            type="text"
            className="border outline-none p-3 w-full md:w-[70%]"
            placeholder="Your email"
          />
          <button
            className="bg-ternary hover:bg-primary transition-all ease-linear
          text-white px-6 py-2 md:py-0 w-full md:w-[25%]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
