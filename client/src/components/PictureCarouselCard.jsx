import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarouselCard = (props) => {
  return (
    <>
      <div className="relative h-96 md:h-80">
        <div className="w-full h-full">
          <img src={props.image} alt="" className="w-full h-full rounded-lg object-cover object-center"/>
        </div>
        <div
          className="w-full h-full absolute inset-0 rounded-lg"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
          }}
        ></div>
        <div className="w-full absolute flex flex-col items-start gap-1 bottom-10 left-4  text-white">
            <h4 className="text-xl">{props.title}</h4>
            <h6 className="text-lg flex items-center gap-2 justify-center hover:gap-4 transition-all duration-500 ease-in-out">{props.places} <IoMdArrowDropright/></h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarouselCard;
