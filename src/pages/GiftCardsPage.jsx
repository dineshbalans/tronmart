import React from "react";
import giftCardImg from "../assets/giftCards/giftCardImg.svg";
import logo from "../assets/svg/logo_black.svg";
import { giftCardData } from "../data/GiftData";
import { LiaGiftsSolid } from "react-icons/lia";
import { TfiGift } from "react-icons/tfi";

const GiftCardsPage = () => {
  return (
    <section>
      <div className="2xl:container 2xl:mx-auto px-4 lg:px-10">
        <div className="flex flex-wrap-reverse lgl:flex-nowrap gap-10 text-ternary my-8">
          <div className="w-full lgl:w-1/2  flex flex-col justify-center gap-7 p-4 md:p-7 lg:p-10">
            <div className="space-y-5">
              <h2 className="text-5xl sml:text-7xl font-extralight">
                Open loop
              </h2>
              <h2 className="text-3xl sml:text-6xl lg:text-[68px] font-bold tracking-[0.5rem] flex items-center gap-3">
                <span>Gift Cards</span>
                <TfiGift className="text-8xl md:text-6xl  lg:text-5xl" />
              </h2>
            </div>
            <p className="text-lg text-justify sml:text-left">
              Celebrate the joy of giving with our Gift Card Section. Whether
              it's a birthday, anniversary, or just a special occasion, our gift
              cards are the perfect way to share the love. Choose from a variety
              of denominations and let your loved ones pick their ideal gift
              from our extensive collection. It's the gift of endless
              possibilities, wrapped in convenience. Surprise someone today with
              the gift of choice!
            </p>
            <button
              className=" sml:w-1/2 p-3 bg-gradient-to-r from-ternary
            to-primary text-white font-semibold text-xl ease-linear
            hover:from-primary hover:to-ternary transition-all flex
            items-center justify-center gap-2"
              onClick={() =>
                alert(
                  "New and improved Gift Cards – Stay tuned for gifting greatness!"
                )
              }
            >
              <span>Gift Now</span>
              <LiaGiftsSolid className="scale-125" />
            </button>
          </div>
          <div className="w-full lgl:w-1/2 flex justify-center items-center">
            <img src={giftCardImg} alt="" className="w-[85%]" />
          </div>
        </div>
        <h1 className="title text-4xl sml:text-5xl p-8 flex flex-wrap-reverse items-center md:items-baseline justify-center gap-5">
          <span className="w-full text-center">Gift Cards</span>
          <TfiGift className="text-8xl md:text-5xl" />
        </h1>
        <div className="flex flex-wrap mb-16 items-center justify-center">
          {giftCardData.map(({ id, cardImg }) => (
            <div
              className="w-full sml:w-1/2 mdl:w-1/3 lg:w-1/4 p-3 hover:scale-110 transition-all
              ease-linear  space-y-5"
              key={id}
            >
              <div className="border rounded-t-lg bg-white">
                <img src={cardImg} alt="" className="rounded-t" />
                <div className="flex flex-wrap px-3 py-5 justify-center lgl:justify-between">
                  <div className="w-full lgl:w-1/2 space-y-2">
                    <img src={logo} alt="" className="w-full" />
                    <h2 className="font-medium text-sm text-center">
                      Gift Card
                    </h2>
                  </div>
                  <div className="w-full lgl:w-1/2 text-center space-y-1">
                    <h1 className=" font-medium">₹ 1000.00</h1>
                    <button
                      className="border p-1 border-primary text-primary
                    hover:bg-primary hover:text-white transition-all ease-linear
                    text-xs"
                      onClick={() =>
                        window.alert(
                          "Revamped Gift Card Section – More options, more joy, coming soon!"
                        )
                      }
                    >
                      Coming Soon...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftCardsPage;
