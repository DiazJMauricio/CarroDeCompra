import React from "react";
import "./NavBar.css";

const NavBar = props => {
  let className = props.ShopCarVisible ? "on" : "";
  return (
    <div className="NavBar">
      <p>Tienda Virtual</p>
      <div className="mobile">
        <div className="NavMenu">
          <p>Total: $ {props.total}</p>
          <button className="btnNavBarComprar">Comprar</button>
          <button onClick={props.showCar} className="MobileCarShopBtn">
            <div className={"showCarbtnAnim " + className}>
              <i className="fas fa-shopping-cart" />
              <i class="fas fa-times" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
