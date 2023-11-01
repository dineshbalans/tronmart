import React from "react";
import Header from "../components/Header";

const ErrorPage = () => {
  return (
    <section>
      <Header />
      <div className="bg-white w-[95%] mx-auto mt-20 flex flex-col items-center p-20 gap-10">
        <h1 className="text-primary text-7xl text-center font-semibold">
          This page doesn't seem to exist.
        </h1>
        <h3 className="text-ternary text-2xl font-medium">
          It looks like the link pointing here was faulty. Maybe try searching?
        </h3>
      </div>
    </section>
  );
};

export default ErrorPage;
