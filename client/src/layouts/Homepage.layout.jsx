import React from "react";

const HomePageLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <h1>HomeLayout</h1>
        <Component {...props}/>
      </>
    );
  };

export default HomePageLayout;
