import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import classnames from "classnames";

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
      <div className="w-full md:hidden fixed bottom-0 flex bg-white z-50">
        {allTypes.map((item) => (
          <Link to={`/${item.id}`} key={item.id} className="w-1/4 border-t-2">
            <div
              className={`flex flex-col justify-center items-center p-3 ${
                type === item.id
                  ? "border-t-4 border-zomato-400 text-zomato-400"
                  : "border-none"
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
const LargeTab = () => {
  const [allTypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "Delivery",
      activeColor: "yellow",
    },
    {
      id: "dining",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      activeColor: "blue",
      name: "Dining Out",
    },
    {
      id: `night`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      activeColor: "purple",
      name: "Night life",
    },
    {
      id: `nutri`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      activeColor: "yellow",
      name: "Nutrition",
    },
  ]);

  const { type } = useParams();
  return (
    <>
      <div className="hidden md:block">
        <div className="flex items-center justify-start gap-5 max-w-5xl mx-auto">
          {allTypes.map((item) => (
            <Link to={`/${item.id}`} key={item.id} className="w-1/4">
              <div
                className={`flex justify-center items-center p-5 ${
                  type === item.id
                    ? "border-b-4 border-zomato-400 text-zomato-400"
                    : "border-none"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-2 flex justify-center items-center">
                  <img
                    src={
                      type === item.id ? item.imageActive : item.imageDefault
                    }
                    alt={item.name}
                    className='w-1/2 h-1/2  object-cover'
                  />
                </div>
                <div className="">
                  <h2 className="text-center text-lg">{item.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <MobileTab />
      <LargeTab />
    </>
  );
};

export default FoodTab;
