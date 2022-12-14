import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {
  return (
    <>
      <div className="w-full flex flex-col rounded-lg border border-gray-300 hover:shadow-xl transition duration-500 hover:scale-105">
        <div className="w-full h-3/5 sm:h-1/2">
          <img
            src={props.image}
            alt=""
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="w-full flex gap-4 mt-3 items-center min-h-fit px-3">
          <img
            src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
            alt=""
            className="w-5 object-cover"
          />
          <ReactStars
            count={5}
            size={20}
            isHalf={true}
            emptyIcon={<BsStar />}
            halfIcon={<BsStarHalf />}
            fullIcon={<BsStarFill />}
            activeColor="#ffd700"
            edit={false}
            value={3}
          />
        </div>
        <div className="w-full my-5 px-3">
          <h2 className="text-start font-semibold ">Burn the weight Balance</h2>
          <p className="font-light text-start truncate overflow-hidden w-full">
            This is the description of the produt. Take this Nutriproduct and
            Shape your weight
          </p>
        </div>
        <hr />
        <div className="flex justify-start items-center w-full my-2 mb-2 gap-2 px-3">
          <s className="font-light">₹ 600</s>
          <span className="font-bold">₹ 320</span>
        </div>
        <p className="text-start px-3 mb-3">Monthly pack - 30 capsules</p>
      </div>
    </>
  );
};

export default NutritionCard;
