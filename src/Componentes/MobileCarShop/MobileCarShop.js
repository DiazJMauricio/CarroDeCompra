import React from "react";

const MobileCarShop = props => {
  return (
    <div className="MobileCarShopContainer mobile">
      <div className="MobileCarShop">{props.children}</div>
    </div>
  );
};

export default MobileCarShop;
