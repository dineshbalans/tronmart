import React from "react";
import logo from "../assets/svg/logo.svg";
import { IoIosSearch } from "react-icons/io";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="text-white hidden lg:block">
      <section className="bg-secondary p-2  font-montserrat">
        <div className="2xl:container mx-auto flex justify-between items-center px-5
        lg:text-sm lgl:text-base ">
          <h1>
            24/7 Customer service{" "}
            <span className="font-semibold">1-800-234-5678</span>
          </h1>
          <div className="flex gap-8">
            <button>Shipping & return</button>
            <button>Track order</button>
          </div>
        </div>
      </section>
      <section className="bg-primary p-3 border border-secondary">
        <div className="2xl:container 2xl:mx-auto flex justify-between items-center px-5">
          <div className="w-1/2">
            <img
              src={logo}
              alt="tronmart_logo"
              className="scale-110 cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex items-stretch gap-4 justify-end w-1/2 
          lg:scale-[0.7] lg:translate-x-[65px] lgl:scale-[0.8] lgl:translate-x-12 xl:scale-100 xl:translate-x-0">
            <input
              type="text"
              className="text-black outline-none py-2 px-3 w-64"
              placeholder="Search products..."
            />
            <button className="px-5 flex items-center bg-[#27323F] hover:bg-transparent">
              <IoIosSearch className="scale-125" />
            </button>
          </div>
        </div>
      </section>
      <Navbar />
    </header>
  );
};

export default Header;
