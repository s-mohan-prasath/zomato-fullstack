import React from "react";
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";


const HomePageLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar/>
        <FoodTab/>
        <Component {...props}/>
      </>
    );
  };

export default HomePageLayout;
