import React from "react";
import footerImg1 from "../assets/img/footer-img1.svg";
import footerImg2 from "../assets/img/footer-img2.png";

const Footer = () => {
  return (
    <footer className="text-primary w-full bg-white border-t">
      <section
        className="flex flex-wrap sml:justify-between 
      px-10 py-12 2xl:container mx-auto"
      >
        <div className=" w-full md:w-1/4 flex sml:flex-none pb-5 md:pb-0">
          <img
            src={footerImg1}
            alt=""
            className="h-[60%] lg:h-1/2 w-[70%] lg:w-1/2 transform md:-translate-y-10 lg:-translate-y-8 mx-auto md:mx-0"
          />
        </div>
        <div
          className="flex flex-col gap-5 w-full md:w-1/4 pb-8 md:pb-0
          items-center md:items-start text-center md:text-left"
        >
          <h4 className="text-ternary text-xl font-semibold">Shop</h4>
          <ul className="space-y-1">
            <li>Hot deals</li>
            <li>Categories</li>
            <li>Brands</li>
            <li>Rebates</li>
            <li>Weekly deals</li>
          </ul>
        </div>
        <div
          className="flex flex-col gap-5 w-full md:w-1/4 pb-8 md:pb-0
          items-center md:items-start text-center md:text-left"
        >
          <h4 className="text-ternary text-xl font-semibold">Need help?</h4>
          <ul className="space-y-1">
            <li>Contact</li>
            <li>Order tracking</li>
            <li>FAQs</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div
          className="flex flex-col gap-5 w-1/2 mx-auto md:w-1/4
          items-center md:items-start text-center md:text-left pb-8 md:pb-0"
        >
          <h4 className="text-ternary text-xl font-semibold">Contact</h4>
          <h5>
            {" "}
            123 Fifth Avenue, New York, NY 10160 contact@info.com 929-242-6868
          </h5>
        </div>
      </section>
      <section className="bg-ternary px-10 py-5 text-[#9CA7AA] text-sm ">
        <div className="2xl:container mx-auto flex flex-wrap md:flex-nowrap
        justify-center md:justify-between gap-5">
          <h6 className="w-full md:1/2 text-center md:text-left">
            © 2023 Electronic Store. Powered by Electronic Store
          </h6>
          <img src={footerImg2} alt="" className="" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
