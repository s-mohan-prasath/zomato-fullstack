import React from "react";

const CheckoutLayout =
  (Component) =>
  ({ ...props }) => {
    return <>
      <Component {...props}/>
    </>;
  };

export default CheckoutLayout;
