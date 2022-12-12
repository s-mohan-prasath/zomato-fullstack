import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";


const Navbar = () => {
  const [isOpenDrop, setIsOpenDrop] = useState(true);

  const user = {
    fullName: "Mohan Prasath S",
  };

  const DropSign = () => {
    return (
      <>
        <div className="flex flex-col absolute top-20 right-5 z-20 justify-center items-center gap-3 border border-gray-500 p-2 rounded-md shadow-lg">
          <button className="text-gray-500 hover:text-gray-900  text-lg border-none outline-none">
            Login
          </button>
          <button className="text-gray-500 hover:text-gray-900 text-lg border-none outline-none align-middle">
            Sign Up
          </button>
        </div>
      </>
    );
  };
  const DropSignOut = () => {
    return (
      <>
        <div className="flex flex-col absolute top-20 right-5 z-20 justify-center items-center gap-3 border border-gray-500 p-2 rounded-md shadow-lg">
          <button className="text-gray-500 hover:text-gray-900 text-lg border-none outline-none align-middle">
            Sign Out
          </button>
        </div>
      </>
    );
  };

  const Navsm = () => {
  

    return (
      <>
        <div className="w-full h-20 flex justify-center items-center border-b-2 border-gray-300">
          <nav className="w-full flex justify-between items-center px-4">
            <div className="w-28">
              <img
                className="w-full h-full"
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt=""
              />
            </div>
            <div className="flex gap-5 items-center">
              <div>
                <button className="text-white bg-red-600 hover:bg-red-500 text-base rounded-full p-2">
                  Use App
                </button>
              </div>
              <div
                className="w-10 h-10 flex justify-center items-center z-20 relative"
                onClick={()=>(setIsOpenDrop(!isOpenDrop))}
              >
                <div
                  className={`w-8 h-8 relative text-red-600
                 hover:bg-red-500 hover:text-white text-sm flex justify-center
                  items-center border-2 border-gray-300 rounded-full ${
                    user?.fullName ? "hidden" : "block"
                  }`}
                >
                  <FaUserAlt />
                </div>
                <div
                  className={`w-full h-full border-2 border-gray-300 rounded-full ${
                    user?.fullName ? "block" : "hidden"
                  }`}
                >
                  <img
                    src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"
                    alt="profile"
                    className="rounded-full"
                  />
                </div>
              </div>
              {isOpenDrop && user?.fullName && <DropSignOut />}
              {isOpenDrop && !user?.fullName && <DropSign />}
            </div>
          </nav>
        </div>
      </>
    );
  };
  const Navmd = () => {
    return (
      <>
        <div className="w-full h-20 flex justify-center items-center ">
          <nav className="w-full h-12 max-w-5xl mx-auto flex justify-around items-center relative">
            <div className="w-20">
              <img
                className="w-full h-full"
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt=""
              />
            </div>
            <div className="w-full md:max-w-xl lg:max-w-3xl h-full border-gray-500 flex justify-center items-center gap-3 px-3 rounded-lg" style={{ boxShadow:"0 0 30px rgba(0,0,0,0.2)"}}>
              <div className="flex justify-center items-center gap-3">
                <div className="text-red-600 text-base flex justify-center items-center">
                  <HiLocationMarker />
                </div>
                <div>
                  <input
                    className="w-full inline-block text-lg text-gray-700 border-none outline-none "
                    type="text"
                    name=""
                    id=""
                    placeholder="Delhi NCR"
                  />
                </div>
                <div className="text-gray-700 text-base flex justify-center items-center">
                  <IoMdArrowDropdown />
                </div>
              </div>
              <div className="w-full flex justify-center items-center gap-2 border-l-2 border-gray-300 px-2 ">
                <div className="text-gray-700 text-base flex justify-center items-center">
                  <RiSearch2Line />
                </div>
                <div className="w-full">
                  <input
                    className="w-full inline-block text-lg text-gray-700 border-none outline-none "
                    type="text"
                    name=""
                    id=""
                    placeholder="Search for restaurant, cuisine or a dish"
                  />
                </div>
              </div>
            </div>
            <div
              className={`flex justify-center items-center gap-3 ${
                user?.fullName? "hidden":"block"
              }`}
            >
              <button className="text-gray-400 hover:text-gray-900  text-lg border-none outline-none">
                Login
              </button>
              <button className="text-gray-400 hover:text-gray-900 text-lg border-none outline-none align-middle">
                Sign Up
              </button>
            </div>
            <div className="w-12 h-12"
            onClick={()=>(setIsOpenDrop(!isOpenDrop))}
            >
              <div
                className={`w-full h-full border-2 border-gray-300 rounded-full ${
                  user?.fullName ? "block" : "hidden"
                }`}
              >
                <img
                  src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"
                  alt="profile"
                  className="rounded-full"
                />
              </div>
            </div>
            {isOpenDrop && user?.fullName && <DropSignOut />}
          </nav>
        </div>
      </>
    );
  };



  return (
    <>
      <div className="block md:hidden">
        <Navsm />
      </div>
      <div className="hidden md:block">
        <Navmd />
      </div>
    </>
  );
};

export default Navbar;
