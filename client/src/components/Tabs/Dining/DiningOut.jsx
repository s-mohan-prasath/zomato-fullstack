import React from "react";
import DiningCarousel from "./DiningCarousel";

const DiningOut = () => {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto mb-20 px-10 sm:px-5 lg:px-0">
      <h2 className='text-3xl ml-5 lg:ml-0 mt-5'>Collections</h2>
        <DiningCarousel />
      </div>
    </>
  );
};

export default DiningOut;
