import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";

const MobileTab = () => {
  const { type } = useParams();

  const [allTypes] = useState([
    {
      id: "delivery",
      name: "Delivery",
      icon: <RiShoppingBag3Line />,
    },
    {
      id: "dining",
      name: "Dining",
      icon: <IoFastFoodOutline />,
    },
    {
      id: "night",
      name: "Night Life",
      icon: <BiDrink />,
    },
    {
      id: "nutri",
      name: "Nutrition",
      icon: <IoNutritionOutline />,
    },
  ]);

  return (
    <>
      <div className="w-full md:hidden fixed bottom-0 flex ">
        {allTypes.map((item) => (
          <Link to={`/${item.id}`} key={item.id} className="w-1/4 border-t-2">
            <div
              className={`flex flex-col justify-center items-center p-3 ${
                type === item.id ? "border-t-4 border-zomato-400 text-zomato-400" : "border-none"
              }`}
            >
              {item.icon}
              <h2 className="text-center">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const FoodTab = () => {
  return <MobileTab />;
};

export default FoodTab;
