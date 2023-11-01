import React from "react";

const Pagination = ({
  totalpages,
  currentPageNumber,
  setCurrentPageNumber,
  itemsPerpage,
}) => {
  const pages = [];
  for (let index = 1; index <= totalpages; index++) {
    pages.push(index);
  }
  return (
    <div className="flex justify-center items-center gap-3 scale-[0.6] sml:scale-[0.7] md:scale-[0.8] mdl:scale-[0.9] lgl:scale-100">
      <button
        className={
          currentPageNumber === 1 ? "paginateBtnDisabled" : "paginateBtn"
        }
        disabled={currentPageNumber === 1}
        onClick={() => setCurrentPageNumber(currentPageNumber - 1)}
      >
        Previous
      </button>
      {pages.map((page, index) => (
        <button
          className={
            currentPageNumber === page
              ? "paginateBtn bg-primary text-white"
              : "paginateBtn"
          }
          key={index}
          onClick={() => setCurrentPageNumber(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={
          currentPageNumber === pages.length
            ? "paginateBtnDisabled"
            : "paginateBtn"
        }
        disabled={currentPageNumber === pages.length}
        onClick={() => setCurrentPageNumber(currentPageNumber + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
